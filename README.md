<div align="center">


<br/>

<img src="https://readme-typing-svg.demolab.com/?font=JetBrains+Mono&size=21&pause=1000&color=B79CFF&center=true&vCenter=true&width=680&lines=Automatic+Slot+Detection+%26+Booking;Multi-Account+%7C+Multi-Provider+Automation;Telegram+%2B+WhatsApp+Instant+Alerts;Selfie+%26+Captcha+Bypass+Engine" alt="Typing SVG"/>

<br/><br/>

<img src="https://img.shields.io/badge/STATUS-ACTIVE-2ecc71?style=for-the-badge&labelColor=0B0E14"/>
<img src="https://img.shields.io/badge/AUTOMATION-ADVANCED-ff6b35?style=for-the-badge&labelColor=0B0E14"/>
<img src="https://img.shields.io/badge/PLATFORM-WINDOWS-0078D6?style=for-the-badge&logo=windows&logoColor=white&labelColor=0B0E14"/>
<img src="https://img.shields.io/badge/BUILT%20WITH-ELECTRON-9FEAF9?style=for-the-badge&logo=electron&logoColor=black&labelColor=0B0E14"/>

<br/>

<img src="https://img.shields.io/github/v/release/YOUR-USERNAME/booking-auto-bot?style=for-the-badge&label=LATEST%20RELEASE&color=7C5CFF&labelColor=0B0E14"/>
<img src="https://img.shields.io/github/downloads/YOUR-USERNAME/booking-auto-bot/total?style=for-the-badge&label=DOWNLOADS&color=2AABEE&labelColor=0B0E14"/>
<img src="https://img.shields.io/github/stars/YOUR-USERNAME/booking-auto-bot?style=for-the-badge&color=FFD166&labelColor=0B0E14"/>

</div>

<br/>

## 🧭 What is Booking Auto Bot?

**Booking Auto Bot** is a desktop automation engine that watches visa & appointment providers around the clock, detects available slots the moment they open, and books them automatically — across **multiple accounts, multiple providers, and multiple countries at the same time.**

The moment a slot is found or a booking is confirmed, you get notified **instantly on Telegram and WhatsApp** — no need to keep the app open and stare at the screen.

<br/>

## ⚡ Core Features

| | Feature | Description |
|---|---|---|
| 🟢 | **Automatic Booking Engine** | Continuously watches provider sites and books available slots the second they appear. |
| 👥 | **Multi-Account System** | Manage unlimited accounts with per-account credentials, region, category, and provider — import them in bulk via CSV. |
| 🌐 | **Multi-Provider Support** | Native support for **BLS Spain**, **TLS Contact**, and **VFS Global**, with more providers on the roadmap. |
| 🛰️ | **Proxy Rotation** | Route traffic per account through rotating proxies to stay resilient and avoid rate-limits. |
| 🤳 | **Selfie / Captcha Bypass** | Handles identity-verification and captcha checkpoints automatically during the booking flow. |
| 🔔 | **Real-Time Notifications** | Get pinged the instant a slot is found, a booking succeeds, or a captcha needs manual input — via Telegram and WhatsApp. |
| 📊 | **Live Dashboard** | See successful runs, errors, active runs, and total accounts at a glance. |
| 📜 | **Logs & Activity History** | Full run history for every account, so you always know what happened and when. |
| 🔐 | **License Activation** | Simple activation flow with subscription status built right into Settings. |

<br/>

## 🖥️ Tech Stack

<div align="center">

<img src="https://img.shields.io/badge/Electron-2B2E3A?style=for-the-badge&logo=electron&logoColor=9FEAF9"/>
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white"/>
<img src="https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white"/>
<img src="https://img.shields.io/badge/Telegram%20Bot%20API-2AABEE?style=for-the-badge&logo=telegram&logoColor=white"/>
<img src="https://img.shields.io/badge/electron--builder-47848F?style=for-the-badge&logo=electron&logoColor=white"/>

</div>

<br/>

## 🗺️ How It Works

```mermaid
flowchart LR
    A[Dashboard] --> B[Add / Import Accounts]
    B --> C{Choose Provider}
    C -->|BLS Spain| D[Provider Engine]
    C -->|TLS Contact| D
    C -->|VFS Global| D
    D --> E[Slot Watcher — runs per account]
    E -->|No slot yet| E
    E -->|Slot found| F[Selfie / Captcha Bypass]
    F --> G[Auto-Fill & Submit Booking]
    G --> H{Result}
    H -->|Success| I((✅ Booking Success))
    H -->|Error| J[Retry + Proxy Rotation]
    I --> K((📨 Telegram Alert))
    I --> L((📱 WhatsApp Alert))
```

```mermaid
stateDiagram-v2
    [*] --> Idle
    Idle --> Running: Run clicked
    Running --> SlotFound: appointment detected
    SlotFound --> CaptchaCheck: verification required
    CaptchaCheck --> Booking: solved automatically
    CaptchaCheck --> ManualNeeded: needs manual input
    Booking --> Success: confirmed
    Booking --> Error: rejected / timeout
    Error --> Running: auto-retry
    Success --> [*]
    ManualNeeded --> [*]
```

<br/>

## 📦 Download

<div align="center">

[![Download Latest Release](https://img.shields.io/badge/⬇%20DOWNLOAD%20LATEST%20BUILD-7C5CFF?style=for-the-badge&labelColor=0B0E14)]([https://github.com/YOUR-USERNAME/booking-auto-bot/releases/latest](https://onlineunknowns.github.io/AutoBooking/))
[![Download Latest Release](https://img.shields.io/badge/⬇%20DOWNLOAD%20LATEST%20BUILD-7C5CFF?style=for-the-badge&labelColor=0B0E14)]()

</div>

1. Go to the [**Releases**](https://onlineunknowns.github.io/AutoBooking/) page.
2. Download the latest `BookingAutoBot-win-x64.zip`.
3. Extract it anywhere and run `Booking Auto Bot.exe` — no installation required.

<br/>

## 🚀 Getting Started

```text
1. Launch the app.
2. Go to "Accounts" → Add Account (or Import CSV for bulk accounts).
3. Pick a Provider (BLS Spain / TLS Contact / VFS Global), a country, and a category.
4. Go to "Notifications" → paste your Telegram Bot Token + Chat ID → Save.
5. Hit "Run" on any account (or run several at once) and let the bot watch for you.
```

<details>
<summary><b>🔔 Setting up Telegram notifications</b></summary>
<br/>

1. Open Telegram and message **[@BotFather](https://t.me/BotFather)** → `/newbot` → copy the token it gives you.
2. Paste that token into **Notifications → Telegram Bot Token**.
3. Message your new bot once, then get your **Chat ID** (via [@userinfobot](https://t.me/userinfobot) or a group/channel ID).
4. Paste it into **Telegram Chat ID**, click **Send Test Alert** to confirm, then **Save**.

</details>

<br/>
</div>

<br/>

## ⚠️ Disclaimer

This tool automates interactions with third-party appointment/visa provider websites. You are responsible for using it in accordance with the target provider's terms of service and any applicable local regulations. The developer is not responsible for accounts suspended, appointments lost, or any consequence resulting from misuse.

<br/>

## 📬 Connect

<div align="center">

<a href="https://wa.me/201286669272"><img src="https://img.shields.io/badge/WHATSAPP-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"/></a>
<a href="https://t.me/IQROUTER"><img src="https://img.shields.io/badge/TELEGRAM-2AABEE?style=for-the-badge&logo=telegram&logoColor=white"/></a>

</div>

<br/>

<div align="center">
<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:7C5CFF,100:0B0E14&height=120&section=footer"/>
<sub>Made with ⚙️ automation, ☕ patience, and a lot of retries.</sub>
</div>
