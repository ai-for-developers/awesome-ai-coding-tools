#!/usr/bin/env node
/**
 * Submit every URL in this repo's sitemap.xml to IndexNow (Bing / Yandex).
 * Supports both <urlset> and <sitemapindex> (sub-sitemaps are fetched over HTTP).
 *
 * Key file must live at the host root:
 *   https://1261398983.github.io/5274d490c7073e9630ce4cc455bb9c41.txt
 */
import fs from 'node:fs';

const KEY = '5274d490c7073e9630ce4cc455bb9c41';
const HOST = '1261398983.github.io';
const SITEMAP = process.env.SITEMAP || 'sitemap.xml';

const xml = fs.readFileSync(SITEMAP, 'utf8');
let urls = [...xml.matchAll(/<loc>\s*(.*?)\s*<\/loc>/g)].map((m) => m[1].trim());

// sitemapindex: fetch each sub-sitemap
const subs = urls.filter((u) => u.endsWith('.xml'));
if (subs.length) {
  console.log(`sitemap index with ${subs.length} children`);
  const collected = new Set(urls.filter((u) => !u.endsWith('.xml')));
  for (const s of subs) {
    try {
      const res = await fetch(s, { headers: { 'user-agent': 'indexnow-collector' } });
      if (!res.ok) { console.log(`skip ${res.status} ${s}`); continue; }
      const child = await res.text();
      let added = 0;
      for (const m of child.matchAll(/<loc>\s*(.*?)\s*<\/loc>/g)) {
        const u = m[1].trim();
        if (!u.endsWith('.xml') && !collected.has(u)) { collected.add(u); added++; }
      }
      console.log(`+${added} ${s}`);
    } catch (e) {
      console.log(`err ${s} ${e.message}`);
    }
  }
  urls = [...collected];
} else {
  urls = urls.filter((u) => !u.endsWith('.xml'));
}

urls = [...new Set(urls)].filter((u) => u.startsWith(`https://${HOST}/`));
console.log(`urls: ${urls.length}`);
if (urls.length === 0) {
  console.log('nothing to submit');
  process.exit(0);
}

let ok = 0;
let bad = 0;
for (let i = 0; i < urls.length; i += 500) {
  const urlList = urls.slice(i, i + 500);
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'content-type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
  });
  const body = await res.text();
  console.log(`batch ${Math.floor(i / 500) + 1}: ${res.status} ${body.slice(0, 120)} (${urlList.length})`);
  if (res.status === 200 || res.status === 202) ok += urlList.length; else bad += urlList.length;
}
console.log(`RESULT ok=${ok} failed=${bad}`);
if (ok === 0) process.exit(1);
