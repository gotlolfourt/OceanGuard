<div align="center">

<!-- HERO SECTION -->
<h1>OceanGuard</h1>
<p><strong>AI-Assisted Marine Debris Detection & Environmental Monitoring Platform</strong></p>

<p>
  <a href="#architecture">Architecture</a> •
  <a href="#api-surface">API</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#tech-stack">Stack</a>
</p>

<!-- BADGES -->
<p>
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React 19">
  <img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Three.js-0.185-black?logo=three.js&logoColor=white" alt="Three.js">
  <img src="https://img.shields.io/badge/Leaflet-1.9-199900?logo=leaflet&logoColor=white" alt="Leaflet">
  <img src="https://img.shields.io/badge/Express-4.21-404040?logo=express&logoColor=white" alt="Express">
  <img src="https://img.shields.io/badge/Gemini_API-Ready-4285F4?logo=google&logoColor=white" alt="Gemini API">
</p>

<p><em>Real-time ocean surface surveillance • Automated debris classification • 3D spatial analytics</em></p>

</div>

---

## Overview

OceanGuard is a full-stack prototype for marine environmental monitoring. It combines a React 19 frontend with an Express.js backend to simulate an operational debris detection and response platform. The system is designed around a role-based command structure (Central Command, Field Operators, Environmental Officers, and Cleanup Teams) with real-time telemetry, AI-assisted detection stubs, and GIS visualization capabilities.

**Current Status:** Functional prototype with mock data pipelines and stubbed AI inference endpoints. Frontend source files (`src/`) are referenced by the build system but are not present in this repository snapshot.

---

## Problem

Marine plastic pollution and abandoned fishing gear threaten ocean ecosystems, yet coastal monitoring operations often lack:
- Unified dashboards linking detection, classification, and response
- Real-time telemetry streams for distributed camera networks
- Role-based coordination between command centers and field crews
- Integrated 3D spatial context for debris localization

## Solution

OceanGuard provides a single-pane operations platform that simulates the full data chain from sensor input to response dispatch:


flowchart LR
    A["Marine Camera Feed"] --> B["Express API"]
    B --> C["AI Inference Stub"]
    C --> D["Classification & Tracking"]
    D --> E["Dashboard & GIS"]
    E --> F["Response Dispatch"]

    Architecture
The repository implements a full-stack Vite + Express architecture with in-memory data stores and Server-Sent Events (SSE) for live telemetry.

<img width="1438" height="428" alt="image" src="https://github.com/user-attachments/assets/9b17fb4e-fd66-41bb-b0f2-6aeed16ea05a" />


System Data Flow

<img width="1438" height="52" alt="image" src="https://github.com/user-attachments/assets/e7292766-e615-452a-ad86-d584ca4cbe83" />


Live Monitoring

The platform exposes an SSE endpoint (/api/events) that maintains persistent connections for real-time telemetry. The backend broadcasts structured events with timestamps to all connected clients.
<img width="1438" height="454" alt="image" src="https://github.com/user-attachments/assets/d64514c9-96e6-4510-ad2b-ef661ac16f94" />


Implemented monitoring capabilities:

Camera online/offline tracking (14/15 simulated)
System health polling (AI status, GPS, internet, FPS)
Active alert counters (high-risk incidents, hotspots)
7-day debris trend history by material type

AI Pipeline
The backend exposes a stubbed inference endpoint that simulates model output for frontend integration. The package includes @google/genai for future Gemini API integration.
<img width="1438" height="44" alt="image" src="https://github.com/user-attachments/assets/c0c4d58c-1f54-46d9-85ca-cec7643f791e" />

Stubbed output schema:
className: e.g., "Plastic Bottle", "Fishing Net", "Plastic Bag"
parentCategory: Material group (Plastic, Fishing Gear)
confidence: 0–100 score
boundingBox: Normalized {x, y, width, height}
estimatedSize: Surface area + mass estimate
estimatedDistance: Meters from sensor
suggestedTrackId: Persistent tracking identifier
Interactive 3D GIS
The frontend dependency stack includes Leaflet 1.9.4 for 2D marine radar/satellite maps and Three.js 0.185 for 3D visualization. The index.html preloads Leaflet CSS for map rendering.

<img width="1438" height="214" alt="image" src="https://github.com/user-attachments/assets/83bd3abf-dd63-4076-a2de-6a5d2cebea4d" />


| Endpoint                       | Method | Description                          |
| ------------------------------ | ------ | ------------------------------------ |
| `/api/health`                  | `GET`  | Service status, version, timestamp   |
| `/api/events`                  | `GET`  | SSE stream for live telemetry        |
| `/api/auth/login`              | `POST` | Mock JWT authentication by email     |
| `/api/auth/logout`             | `POST` | Session termination                  |
| `/api/auth/me`                 | `GET`  | Current user profile                 |
| `/api/dashboard/summary`       | `GET`  | Debris counts, alerts, camera status |
| `/api/dashboard/trends`        | `GET`  | 7-day historical debris breakdown    |
| `/api/dashboard/system-health` | `GET`  | AI latency, FPS, subsystem states    |
| `/api/ai/infer`                | `POST` | Stubbed detection inference          |
| `/api/reports/generate`        | `POST` | PDF report metadata generation       |


Tech Stack

Frontend
| Technology         | Purpose                  |
| ------------------ | ------------------------ |
| React 19           | UI framework             |
| TypeScript 5.8     | Type safety              |
| Vite 6             | Build tool & dev server  |
| Tailwind CSS 4     | Utility-first styling    |
| React Router DOM 7 | Client-side routing      |
| Leaflet 1.9.4      | 2D GIS / marine maps     |
| Three.js 0.185     | 3D spatial visualization |
| Recharts 3.10      | Trend analytics charts   |
| Motion 12.23       | UI animations            |
| Lucide React       | Icon system              |

Backend

| Technology        | Purpose                              |
| ----------------- | ------------------------------------ |
| Express.js 4.21   | API server                           |
| SSE (EventSource) | Real-time telemetry push             |
| `@google/genai`   | Gemini API client (dependency ready) |



Project Structure

OceanGuard/
├── index.html              # SPA entry point (Leaflet CSS, fonts)
├── server.ts               # Express backend + API routes + SSE
├── package.json            # Dependencies & scripts
├── vite.config.ts          # Vite + Tailwind + path aliases
├── tsconfig.json           # TypeScript configuration
├── metadata.json           # AI Studio applet metadata
├── .env.example            # Required environment variables
├── bun.lock                # Bun lockfile
├── .gitignore
└── README.md

Installation

# Clone the repository
git clone https://github.com/gotlolfourt/OceanGuard.git
cd OceanGuard

# Install dependencies
npm install
# or
bun install

Environment Variables
Copy .env.example to .env.local and configure:
cp .env.example .env.local


## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`


License
This project is provided as-is for educational and hackathon demonstration purposes.

---

## `docs/images/README.md`

Create this directory structure so future screenshots can be organized cleanly:

```markdown
# OceanGuard Visual Assets

This directory contains product screenshots and architecture diagrams for the README.

## Naming Convention

- `hero.png` — Main dashboard hero image (1280×720 minimum)
- `dashboard.png` — Overview statistics panel
- `live-monitoring.png` — SSE telemetry / real-time view
- `ai-detection.png` — Detection overlay with bounding boxes
- `gis-map.png` — Leaflet marine map view
- `3d-view.png` — Three.js spatial visualization
- `architecture.png` — Exported architecture diagram

## Notes

- Do not commit mock/fake screenshots.
- Crop browser chrome before adding.
- Optimize PNGs with `oxipng` or similar before committing.

How to Add These Files to the Repository

# 1. Create the docs directory
mkdir -p docs/images

# 2. Save the README above as README.md in the project root
# 3. Save the docs/images/README.md above

# 4. Commit
git add README.md docs/
git commit -m "docs: add production-quality README with architecture diagrams"
git push origin main
