# 🔥 Trending AI Coding Tools — 2026 Edition

> A curated roundup of the most exciting AI coding assistants, agents, and developer tools that have gained significant traction in 2025–2026.  
> Researched and compiled for contribution to [awesome-ai-coding-tools](https://github.com/ai-for-developers/awesome-ai-coding-tools).

---

## 🆕 New & Trending Open-Source Coding Agents

### [Qwen Code](https://github.com/QwenLM/qwen-code) ⭐ 27.8K
**Alibaba's open-source terminal AI coding agent** — a Claude Code-compatible agent that supports OpenAI, Anthropic, Gemini, and Qwen APIs plus any local model (Ollama/vLLM). Ships with Auto-Memory, Auto-Skills, SubAgents, Agent Teams, MCP, IDE plugins (VS Code/JetBrains/Zed), Desktop app, Web UI, and chat integrations (Telegram/DingTalk/WeChat/Feishu). Achieves **77.8% on SWE-bench Verified**. Apache-2.0.

### [Kilo Code](https://github.com/Kilo-Org/kilocode) ⭐ 27.3K
**All-in-one agentic engineering platform** — works across VS Code, JetBrains, and CLI. Supports 500+ models with zero API markup, mid-task model switching, specialized agents (Code/Plan/Ask/Debug/Review), inline autocomplete, MCP marketplace, autonomous CI/CD mode, and cloud agent. Fork of OpenCode, enhanced with a full platform. MIT.

### [Pi](https://github.com/badlogic/pi-mono) ⭐ 103K
**Minimal, adaptable terminal coding harness** — a lightweight agent framework with unified LLM API, TUI, skills, and MCP support. Supports 20+ providers (Anthropic, OpenAI, Google, Mistral, OpenRouter, Groq, Ollama, etc.). Designed to be extended and customized rather than being a monolithic tool. MIT.

### [Open SWE](https://github.com/langchain-ai/open-swe) ⭐ 10.7K
**LangChain's open-source software factory** — built on Deep Agents + LangGraph. Turns issues from GitHub, Slack, or Linear into autonomous implementation runs in isolated sandboxes. Features PR review agents that learn repository style, CI monitoring, scheduling, and a web dashboard. MIT.

### [Crush](https://github.com/charmbracelet/crush) ⭐ 27.9K
**Charmbracelet's agentic coding TUI** — a beautiful, terminal-native coding agent in Go with multi-provider support, LSP integration, and the signature Charmbracelet aesthetic. MIT.

### [Grok Build](https://github.com/xai-org/grok-build) ⭐ 26.5K
**xAI's official coding agent harness and TUI** — fullscreen, mouse-interactive terminal agent powered by Grok models. Apache-2.0.

### [MiMo Code](https://github.com/XiaomiMiMo/MiMo-Code) ⭐ 13K
**Xiaomi's official terminal coding agent** — TUI + non-interactive modes with MCP, skills, hooks, git worktrees, and resumable sessions. Supports MiMo-V2.5-Pro or any mainstream provider. MIT.

### [Trae Agent](https://github.com/bytedance/trae-agent) ⭐ 12.1K
**ByteDance's research-friendly CLI agent** — modular architecture with multi-LLM support for software engineering tasks. MIT.

### [Kimi CLI](https://github.com/MoonshotAI/kimi-cli) ⭐ 11.3K
**Moonshot AI's CLI coding agent** — skills, MCP support, and ACP IDE integration. Apache-2.0.

### [Mistral Vibe](https://github.com/mistralai/mistral-vibe) ⭐ 4.9K
**Mistral's CLI coding assistant** — conversational repo interaction and edits. Apache-2.0.

### [Tau](https://github.com/huggingface/tau) ⭐ 2.6K
**Hugging Face's small, readable Python coding agent** — CLI and Textual TUI over a provider-neutral core. Doubles as a teaching codebase for how agent harnesses are built. MIT.

---

## 🖥️ Multi-Agent Orchestration & Desktop Workspaces

### [AionUi](https://github.com/iOfficeAI/AionUi) ⭐ 32.8K
**Free, open-source Cowork desktop app for 20+ AI agents** — auto-detects Claude Code, Codex, Qwen Code, Gemini CLI, Goose, OpenClaw, Hermes, and more. Features built-in agent engine with zero configuration, Team Mode for coordinated multi-agent collaboration, scheduled tasks (cron), WebUI remote access, Telegram/DingTalk/WeChat/Feishu integration, and 21 built-in professional assistants. Apache-2.0.

### [Emdash](https://github.com/generalaction/emdash) ⭐ 5.7K
**YC W26 — Open-Source Agentic Development Environment** — a desktop app for running multiple AI coding agents in parallel. Each task runs in its own Git worktree. Supports Claude Code, Codex, OpenCode, Amp, Devin, Qwen Code, Droid, Cursor, and GitHub Copilot. Connect to remote machines over SSH. Local-first with SQLite. Apache-2.0.

### [Orca (Stably)](https://github.com/stablyai/orca) ⭐ 63.3K
**Agentic development environment for parallel agent fleets** — runs Codex, Claude Code, OpenCode, and Pi side by side in Ghostty-class terminal splits with scrollback. Git worktree isolation, remote sessions, and a click-to-prompt Chromium inspector. MIT.

### [Multica](https://github.com/multica-ai/multica) ⭐ 49.1K
**Self-hostable workspace for assigning issues to AI agents like teammates** — drives 20 agent CLIs with progress reporting, blocker raising, and review handback. Go.

### [herdr](https://github.com/herdrdev/herdr) ⭐ 36K
**Agent multiplexer for your terminal** — run and coordinate multiple coding-agent sessions side by side. Rust, Apache-2.0.

---

## 🔧 Agent Configuration & Infrastructure

### [Gentle-AI](https://github.com/Gentleman-Programming/gentle-ai) ⭐ 6.7K
**Ecosystem configurator for AI coding agents** — equips Claude Code, Cursor, OpenCode, Codex, Pi, and 15+ others with persistent memory (Engram), Spec-Driven Development workflow, curated skills, MCP servers, model routing, and an optional evidence-based review step (Receipt-Driven Development). Written in Go. MIT.

### [opensrc](https://github.com/vercel-labs/opensrc) ⭐ 3K
**Fetch source code for npm/PyPI/crates.io packages** — gives AI coding agents deeper context by providing access to any package's source code. Built by Vercel Labs in Rust. Apache-2.0.

### [Headroom](https://github.com/headroomlabs-ai/headroom) ⭐ 69.3K
**Context-compression layer for coding agents** — transparently shrinks tool output, logs, files, and RAG chunks before they reach the model (15–20% fewer tokens for coding agents, 60–95% for JSON). Wraps Claude Code, Codex, Cursor, Aider, and more. Apache-2.0.

---

## 🌐 Agent Infrastructure & Tooling

### [agent-browser](https://github.com/vercel-labs/agent-browser) ⭐ 42.1K
**Headless browser automation CLI for AI agents** — built by Vercel Labs as a tool plugin for coding agents. MIT.

### [OpenCodeReview](https://github.com/alibaba/open-code-review) ⭐ 22K
**Alibaba's AI code review CLI** — reviews working-tree, branch, or commit diffs with a tool-using agent. Can delegate to Claude Code, Codex, Cursor, or OpenCode. Go, Apache-2.0.

### [DeerFlow](https://github.com/bytedance/deer-flow) ⭐ 81.7K
**ByteDance's long-horizon super-agent harness** — orchestrates sub-agents, skills, memory, and sandboxes. Ships a Textual TUI plus headless mode. MIT.

### [Symphony](https://github.com/openai/symphony) ⭐ 27.1K
**OpenAI's issue-to-implementation automation** — polls Linear, GitHub Issues, Jira, Asana, or GitLab, creates isolated workspaces, and launches Codex agents that work until the task lands. Apache-2.0.

### [numbat](https://github.com/perplexityai/numbat) ⭐ 999
**Perplexity's endpoint visibility into AI coding agent activity** — local hooks, CEL rule engine, on-device detection, and forensic reconstruction. Covers Claude Code, Codex, Gemini CLI, Cursor, Copilot CLI, and 15+ more. Apache-2.0.

---

## 📊 Quick Comparison: Top Open-Source CLI Coding Agents

| Tool | Stars | Language | License | Key Differentiator |
|------|-------|----------|---------|-------------------|
| [Pi](https://github.com/badlogic/pi-mono) | 103K | TypeScript/Rust | MIT | Minimal harness, max extensibility |
| [OpenCode](https://github.com/anomalyco/opencode) | 206K | TypeScript | MIT | 75+ providers, LSP integration |
| [Claw Code](https://github.com/ultraworkers/claw-code) | 195K | Python/Rust | MIT | Clean-room Claude Code rewrite |
| [Codex CLI](https://github.com/openai/codex) | 122K | TypeScript | Apache-2.0 | OpenAI's official local agent |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | 107K | TypeScript | Apache-2.0 | Google's official, 1M context |
| [Cline CLI](https://github.com/cline/cline) | 67.6K | TypeScript | Apache-2.0 | Model-agnostic autonomous agent |
| [Aider](https://github.com/Aider-AI/aider) | 48.8K | Python | Apache-2.0 | Best git integration, diff-based |
| [Qwen Code](https://github.com/QwenLM/qwen-code) | 27.8K | TypeScript | Apache-2.0 | 77.8% SWE-bench, multi-platform |
| [Crush](https://github.com/charmbracelet/crush) | 27.9K | Go | MIT | Beautiful TUI, LSP-aware |
| [Kilo Code](https://github.com/Kilo-Org/kilocode) | 27.3K | TypeScript | MIT | 500+ models, multi-IDE platform |
| [Grok Build](https://github.com/xai-org/grok-build) | 26.5K | TypeScript | Apache-2.0 | xAI official, mouse-interactive TUI |

---

## 🏢 Notable Proprietary/Closed-Source Entries

| Tool | Maker | Key Feature |
|------|-------|-------------|
| [Claude Code](https://github.com/anthropics/claude-code) ⭐ 144K | Anthropic | #1 in LogRocket power rankings |
| [Warp](https://github.com/warpdotdev/Warp) ⭐ 64.9K | Warp | Modern terminal with built-in AI agent |
| [Droid](https://github.com/Factory-AI/factory) | Factory | #1 on Terminal-Bench |
| [Amp](https://sourcegraph.com/amp) | Sourcegraph | Deep codebase graph, unconstrained tokens |
| [Junie CLI](https://junie.jetbrains.com) | JetBrains | LLM-agnostic, plan mode, CI/CD |
| [Devin](https://devin.ai) | Cognition | Autonomous AI software engineer |
| [Cursor CLI](https://cursor.com/cli) | Cursor | Shell mode, headless/CI, parallel agents |

---

> **Last updated:** September 2026  
> **Author:** Research compiled from GitHub trending, Hacker News, developer communities, and direct repository analysis.  
> **License:** CC0 — feel free to use, modify, and redistribute.