# AI Impact Tracker

A comprehensive dashboard application that monitors and visualizes the multifaceted impact of artificial intelligence across **economics**, **society**, and **politics**. This platform provides real-time insights, metrics, and data visualizations to help understand how AI is shaping our world.

## Overview

The AI Impact Tracker is an interactive web application designed to aggregate and present critical data about AI's influence in three key domains:

- **Economic Impact**: Tracks GDP contributions, workforce metrics, productivity gains, and automation adoption rates
- **Social Impact**: Monitors public perception, AI companion usage, trust levels, and social integration patterns
- **Political Impact**: Analyzes lobbying expenditures, deepfake incidents, political influence, and legislative trust

## Features

### 📊 Interactive Dashboard

- **Category Navigation**: Seamlessly switch between Overview, Economic, Social, and Political views
- **Real-time Metrics**: Key performance indicators displayed in intuitive metric cards with trend indicators
- **Data Visualizations**:
  - Area charts for trend analysis
  - Bar charts for comparative data
  - Pie charts for distribution insights
  - Progress bars for poll data

### 🎨 Modern UI/UX

- Dark-themed interface optimized for data visualization
- Responsive design that works across desktop and mobile devices
- Smooth animations and transitions
- Intuitive navigation and information hierarchy

## Technology Stack

- **Frontend Framework**: React 18.3 with TypeScript
- **Build Tool**: Vite 6.2
- **Data Visualization**: Recharts 2.12
- **Styling**: Tailwind CSS (via inline classes)

## Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd ai-impact-tracker
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

4. **Open your browser**:

   Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Building for Production

```bash
npm run build
```

The production build is written to the `docs` directory.

### GitHub Pages Deployment

The production build is written to the `docs` directory. To deploy:

1. Run `npm run build` to create the production build.
2. Commit and push the `docs/` folder (or run `npm run deploy` to build, commit, and push in one step).
3. In your repository Settings → Pages, set **Source** to "Deploy from a branch" and select the `main` branch with the `/docs` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
ai-impact-tracker/
├── src/
│   ├── components/     # Reusable UI (MetricCard, AppHeader)
│   ├── config/         # Constants, styles
│   ├── data/           # Data by domain (economic, social, political, capability, overview)
│   ├── features/       # Feature views (Economic, Social, Political, Capability, Overview)
│   ├── pages/          # Route-level pages (AboutPage)
│   ├── types/          # Shared TypeScript models
│   ├── App.tsx         # Root app and routing
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── data/               # Source Excel + extracted JSON (run scripts/extract-excel.cjs)
├── scripts/            # Data extraction tooling
├── docs/               # Production build output (GitHub Pages)
├── vite.config.ts      # Vite configuration
└── package.json        # Dependencies and scripts
```

## Key Metrics Tracked

### Economic Metrics

- AI GDP Share (quarterly contribution)
- AI Workforce size
- Efficiency gains vs. historical averages
- Automation adoption rates

### Social Metrics

- AI companion adoption by use case
- Public polling on AI job threats
- Medical AI trust levels
- Regulation support metrics

### Political Metrics

- AI lobbying expenditures
- Deepfake incident tracking
- Politician AI equity holdings
- Legislative trust and competence polling

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is private and proprietary.

---
