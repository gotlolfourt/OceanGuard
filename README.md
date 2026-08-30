<div align="center">

  <h1>🌊 OceanGuard</h1>
  <h3>AI-Powered Maritime Debris Detection & 3D GIS Environmental Intelligence Platform</h3>

  <p align="center">
    <b>Real-time ocean surface surveillance • Automated marine plastic classification • 3D Spatial Analytics</b>
  </p>

  <p align="center">
    <a href="#-demo"><strong>Live Demo</strong></a> •
    <a href="#-key-features"><strong>Key Features</strong></a> •
    <a href="#-system-architecture"><strong>Architecture</strong></a> •
    <a href="#-ai-detection-pipeline"><strong>AI Pipeline</strong></a> •
    <a href="#-quick-start"><strong>Quick Start</strong></a>
  </p>

  <!-- Technology Badges -->
  <p align="center">
    <img src="https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Three.js-3D_GIS-000000?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/PyTorch-AI_Vision-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white" alt="PyTorch" />
    <img src="https://img.shields.io/badge/FastAPI-Backend-009688?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI" />
    <img src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" alt="License" />
  </p>

</div>

---

## 📸 Product Preview

<div align="center">
+-----------------------------------------------------------------------------------+
|  OCEANGUARD MARITIME COMMAND CENTER                                               |
|  [3D GIS Globe / Regional Grid]             [Real-time Alert Stream]             |
|  +---------------------------------------+  +-----------------------------------+ |
|  |   ● (Lat: 24.85, Lon: -70.32)         |  | ⚠️ High Density Plastic Debris    | |
|  |     Plastic Cluster Detected (94.2%)  |  |    Location: Sector B-12         | |
|  |                                       |  |    Bounding Box: [x1, y1, x2, y2] | |
|  |   ● (Lat: 24.81, Lon: -70.29)         |  |    Confidence: 0.942              | |
|  |     Ghost Net Risk Zone               |  +-----------------------------------+ |
|  +---------------------------------------+  [Debris Classification Analytics]   |
|  [Layers: Optical | Synthetic Aperture | Thermal] [Distribution Chart: Plastics/Nets] |
+-----------------------------------------------------------------------------------+
</div>

> **Note:** Screenshots are housed in `docs/images/`. Place your actual application screenshots into `docs/images/` to render them in full resolution on GitHub.

<div align="center">

| 3D GIS Surveillance Map | AI Object Detection View |
| :---: | :---: |
| <img src="docs/images/3d-gis-map.png" width="450" alt="3D GIS Map Interface" onerror="this.src='https://via.placeholder.com/600x350/0f172a/38bdf8?text=3D+GIS+Surveillance+Map';"> | <img src="docs/images/ai-detection.png" width="450" alt="AI Detection View" onerror="this.src='https://via.placeholder.com/600x350/0f172a/38bdf8?text=AI+Object+Detection';"> |
| *Interactive 3D spatial globe with geospatial risk overlay.* | *Computer vision bounding box detection & confidence scoring.* |

| Real-time Alerting Dashboard | Environmental Analytics |
| :---: | :---: |
| <img src="docs/images/live-monitoring.png" width="450" alt="Live Monitoring Dashboard" onerror="this.src='https://via.placeholder.com/600x350/0f172a/38bdf8?text=Live+Monitoring+Dashboard';"> | <img src="docs/images/analytics.png" width="450" alt="Analytics View" onerror="this.src='https://via.placeholder.com/600x350/0f172a/38bdf8?text=Environmental+Analytics';"> |
| *Live telemetry feed, incident logs, and notification dispatch.* | *Composition breakdowns, trend tracking, and impact forecasting.* |

</div>

---

## 🎯 Problem vs. Solution

```mermaid
flowchart LR
    subgraph Problem [" The Challenge "]
        direction TB
        P1["8M+ Tons Plastic / Year"] --> P2["Unmonitored Ocean Gyres"]
        P2 --> P3["Slow Manual Surveying"]
        P3 --> P4["Delayed Environmental Action"]
    end

    subgraph Solution [" OceanGuard Solution "]
        direction TB
        S1["Multi-Source Satellite / Drone Input"] --> S2["Automated AI Vision Detection"]
        S2 --> S3["3D GIS Spatial Indexing"]
        S3 --> S4["Real-time Target Alerting & Response"]
    end

    Problem ==>|Transforms into| Solution

    style Problem fill:#1e1e2e,stroke:#f38ba8,color:#cdd6f4
    style Solution fill:#1e1e2e,stroke:#a6e3a1,color:#cdd6f4
🚀 Key Features
🛰️ Automated AI Detection: Computer vision pipeline trained on high-resolution imagery to detect micro-plastics, floating macro-debris, and ghost fishing nets with high confidence scoring.

🌐 Interactive 3D GIS Engine: Spatial visualization using 3D globe coordinates, allowing telemetry inspection, layer toggling (Optical, SAR, Sea Surface Temperature), and spatial bounding.

📡 Live Maritime Surveillance: Continuous ingestion stream monitoring environmental target zones and triggering instant geographic risk alerts.

📊 Predictive Environmental Analytics: In-depth metrics on debris accumulation rates, target classification breakdowns, and vector trajectory forecasting.

⚡ High-Performance Architecture: Modular React/TypeScript frontend backed by lightweight API endpoints for low-latency telemetry transmission.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
