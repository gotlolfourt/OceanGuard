import express, { Request, Response } from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Memory Data Store for Backend APIs
let mockDb = {
  users: [
    { id: 'USR-01', name: 'Cmdr. Elena Vance', email: 'admin@oceanguard.ai', role: 'ADMIN', roleTitle: 'Chief Operations Administrator', organizationName: 'OceanGuard Central Command', status: 'ACTIVE' },
    { id: 'USR-02', name: 'Marcus Brody', email: 'operator@oceanguard.ai', role: 'FIELD_OPERATOR', roleTitle: 'Senior Marine Radar & Drone Pilot', organizationName: 'OceanGuard Coastal Watch', status: 'ACTIVE' },
    { id: 'USR-03', name: 'Dr. Asha Rao', email: 'officer@oceanguard.ai', role: 'ENVIRONMENTAL_OFFICER', roleTitle: 'Lead Oceanographer', organizationName: 'Coastal Environmental Unit', status: 'ACTIVE' },
    { id: 'USR-04', name: 'Captain Javier Silva', email: 'cleanup@oceanguard.ai', role: 'CLEANUP_TEAM', roleTitle: 'Coastal Team A Lead', organizationName: 'Rapid Marine Cleanup Fleet', status: 'ACTIVE' }
  ],
  detectionsCount: 1284,
  highRiskCount: 21,
  hotspotsCount: 18,
  activeAlertsCount: 7,
  onlineCameras: '14/15'
};

// SSE Clients List
const sseClients: Response[] = [];

// ==========================================
// API ROUTES
// ==========================================

// Health
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'ONLINE',
    version: '1.4.0',
    service: 'OceanGuard AI Backend',
    timestamp: new Date().toISOString()
  });
});

// SSE Events stream
app.get('/api/events', (req: Request, res: Response) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  sseClients.push(res);

  // Send initial ping
  res.write(`data: ${JSON.stringify({ type: 'CONNECTED', message: 'OceanGuard Telemetry Stream Active' })}\n\n`);

  req.on('close', () => {
    const index = sseClients.indexOf(res);
    if (index !== -1) sseClients.splice(index, 1);
  });
});

function broadcastEvent(type: string, payload: any) {
  const message = `data: ${JSON.stringify({ type, payload, timestamp: new Date().toISOString() })}\n\n`;
  sseClients.forEach((client) => client.write(message));
}

// AUTH
app.post('/api/auth/login', (req: Request, res: Response) => {
  const { email } = req.body;
  const user = mockDb.users.find((u) => u.email.toLowerCase() === (email || '').toLowerCase()) || mockDb.users[1];
  res.json({
    token: `jwt-token-${user.id}-${Date.now()}`,
    user
  });
});

app.post('/api/auth/logout', (req: Request, res: Response) => {
  res.json({ success: true, message: 'Logged out successfully' });
});

app.get('/api/auth/me', (req: Request, res: Response) => {
  res.json({ user: mockDb.users[1] });
});

// DASHBOARD
app.get('/api/dashboard/summary', (req: Request, res: Response) => {
  res.json({
    debrisDetected: mockDb.detectionsCount,
    highRiskIncidents: mockDb.highRiskCount,
    activeHotspots: mockDb.hotspotsCount,
    activeAlerts: mockDb.activeAlertsCount,
    cleanupMissions: 3,
    camerasOnline: mockDb.onlineCameras,
    systemStatus: 'ONLINE',
    aiStatus: 'RUNNING'
  });
});

app.get('/api/dashboard/trends', (req: Request, res: Response) => {
  res.json({
    history: [
      { date: 'Aug 24', plastic: 142, fishingGear: 48, metalGlass: 28, other: 14 },
      { date: 'Aug 25', plastic: 168, fishingGear: 52, metalGlass: 31, other: 19 },
      { date: 'Aug 26', plastic: 155, fishingGear: 60, metalGlass: 29, other: 16 },
      { date: 'Aug 27', plastic: 184, fishingGear: 74, metalGlass: 34, other: 22 },
      { date: 'Aug 28', plastic: 190, fishingGear: 82, metalGlass: 38, other: 25 },
      { date: 'Aug 29', plastic: 215, fishingGear: 94, metalGlass: 42, other: 28 },
      { date: 'Aug 30', plastic: 232, fishingGear: 104, metalGlass: 46, other: 30 }
    ]
  });
});

app.get('/api/dashboard/system-health', (req: Request, res: Response) => {
  res.json({
    system: 'ONLINE',
    camera: 'STREAMING',
    ai: 'RUNNING',
    gps: 'VALID',
    internet: 'ONLINE',
    activeCameras: 14,
    totalCameras: 15,
    aiLatencyMs: 14.2,
    fps: 29.8
  });
});

// AI INFERENCE STUB / MOCK
app.post('/api/ai/infer', (req: Request, res: Response) => {
  res.json({
    model: 'OceanGuard YOLOv8-Marine Ultra v1.4',
    latencyMs: 14.2,
    detections: [
      {
        className: 'Plastic Bottle',
        parentCategory: 'Plastic',
        confidence: 94,
        boundingBox: { x: 0.18, y: 0.38, width: 0.14, height: 0.16 },
        estimatedSize: '0.5 m² / 0.9 kg',
        estimatedDistance: '140m',
        suggestedTrackId: 'TRK-902'
      },
      {
        className: 'Fishing Net',
        parentCategory: 'Fishing Gear',
        confidence: 89,
        boundingBox: { x: 0.54, y: 0.44, width: 0.28, height: 0.24 },
        estimatedSize: '3.6 m² / 16.2 kg',
        estimatedDistance: '420m',
        suggestedTrackId: 'TRK-1042'
      },
      {
        className: 'Plastic Bag',
        parentCategory: 'Plastic',
        confidence: 91,
        boundingBox: { x: 0.32, y: 0.68, width: 0.18, height: 0.15 },
        estimatedSize: '0.9 m² / 0.6 kg',
        estimatedDistance: '190m',
        suggestedTrackId: 'TRK-988'
      }
    ]
  });
});

// REPORTS GENERATION
app.post('/api/reports/generate', (req: Request, res: Response) => {
  const { type = 'DAILY', zoneId = 'ALL' } = req.body;
  res.json({
    reportId: `RPT-${Date.now().toString().slice(-6)}`,
    generatedAt: new Date().toISOString(),
    type,
    zoneId,
    metrics: {
      totalDetectionsPeriod: 412,
      criticalIncidents: 6,
      clearedDebrisKg: 242,
      meanResponseTimeHours: 1.8,
      predominantClass: 'Plastic Polymer (64%)'
    },
    downloadUrl: `/api/reports/download/RPT-sample.pdf`
  });
});

// ==========================================
// VITE OR STATIC SERVING
// ==========================================
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[OceanGuard AI] Full-stack Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
