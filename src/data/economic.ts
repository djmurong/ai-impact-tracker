/**
 * Economic dashboard data (from Economic Data sheet).
 * Source: AI Dashboard Data.xlsx — run scripts/extract-excel.cjs to re-extract.
 */

export const ECONOMIC_METRICS = {
  gdpContribution: {
    value: '3.2%',
    description: "Real GDP growth: Information Processing Equipment, Software, R&D, Data Centers.",
    cite: 'Hannah Rubinton and Bontu Ankit Patro, "Tracking AI\'s Contribution to GDP Growth," St. Louis Fed On the Economy, Jan. 12, 2026.',
    citeUrl: "https://www.stlouisfed.org/on-the-economy/2026/jan/tracking-ai-contribution-gdp-growth",
  },
  unemploymentRate: {
    value: '4.5%',
    description: "US unemployment, Dec 2025.",
    cite: "BLS Employment Situation: Civilian unemployment rate",
    citeUrl: "https://www.bls.gov/charts/employment-situation/civilian-unemployment-rate.htm",
  },
  productivityGrowth: {
    value: '27%',
    description: "Productivity growth 2018–2024 in AI-exposed industries (finance, software) vs 7% 2018–2022.",
    change: 15,
    cite: "PwC 2025 Global AI Jobs Barometer | PwC",
    citeUrl: "https://www.pwc.com/gx/en/issues/artificial-intelligence/ai-jobs-barometer.html",
  },
  companiesAiHr: {
    value: '40%',
    description: "CEOs reporting firm uses AI agents in HR.",
    cite: "AI agent survey: PwC",
    citeUrl: "https://www.pwc.com/gx/en/issues/artificial-intelligence/ai-jobs-barometer.html",
  },
  aiResumeReview: {
    value: '83%',
    description: "% of companies using AI to review resumes.",
    cite: "PwC 2025 AI adoption in hiring workflows (sheet-level source is PwC AI Jobs Barometer).",
    citeUrl: "https://www.pwc.com/gx/en/issues/artificial-intelligence/ai-jobs-barometer.html",
  },
  aiInterviewProcess: {
    value: '29%',
    description: "% of companies using AI for the entire interview process.",
    cite: "PwC 2025 AI adoption in hiring workflows (sheet-level source is PwC AI Jobs Barometer).",
    citeUrl: "https://www.pwc.com/gx/en/issues/artificial-intelligence/ai-jobs-barometer.html",
  },
  openAiPositionsNorthAmerica: {
    value: '487K',
    description: "Open AI positions, North America. Available talent pool: 156K; 4.8 months to fill.",
    cite: "WEF Future of Jobs Report 2025",
    citeUrl: "https://www.weforum.org/publications/the-future-of-jobs-report-2025/",
  },
  openAiPositionsGlobal: {
    value: '1.63M',
    description: "Open AI positions globally. Available talent pool: 518K; 4.7 months to fill.",
    cite: "WEF Future of Jobs Report 2025",
    citeUrl: "https://www.weforum.org/publications/the-future-of-jobs-report-2025/",
  },
  medianSalary2025: {
    value: '63,180',
    description: "Median usual weekly nominal earnings (wage and salary workers).",
    cite: "Employed full time: Median usual weekly nominal earnings (second quartile): Wage and salary workers: 16 years and over (LES1252881500Q) | FRED | St. Louis Fed",
    citeUrl: "https://fred.stlouisfed.org/series/LES1252881500Q",
  },
};

export const ECONOMIC_CHART_DATA = [
  { month: '2023', aiGrowth: 15, productivity: 7 },
  { month: '2024', aiGrowth: 22, productivity: 18 },
  { month: '2025', aiGrowth: 31, productivity: 27 },
];

export const ECONOMIC_GDP_DATA = [
  { month: '2023', aiGdp: 1.2, baseGdp: 2.1 },
  { month: '2024', aiGdp: 1.5, baseGdp: 2.0 },
  { month: '2025', aiGdp: 1.9, baseGdp: 1.8 },
  { month: '2026', aiGdp: 2.4, baseGdp: 1.7 },
];

export const ECONOMIC_HR_ADOPTION_DATA = [
  { label: 'AI in HR', value: 40 },
  { label: 'AI resume review', value: 83 },
  { label: 'AI interview process', value: 29 },
];

export const ECONOMIC_TALENT_POOL_DATA = [
  { region: 'North America', openPositions: 487000, availableTalent: 156000, monthsToFill: 4.8 },
  { region: 'Global', openPositions: 1633000, availableTalent: 518000, monthsToFill: 4.7 },
];

export const ECONOMIC_DATACENTER_DEMAND_DATA = [
  { year: '2025', total: 82, ai: 44, nonAi: 38 },
  { year: '2026', total: 102, ai: 62, nonAi: 40 },
  { year: '2027', total: 128, ai: 83, nonAi: 45 },
  { year: '2028', total: 152, ai: 102, nonAi: 50 },
  { year: '2029', total: 180, ai: 124, nonAi: 56 },
  { year: '2030', total: 220, ai: 156, nonAi: 64 },
];

export const ECONOMIC_INVESTMENT_BREAKDOWN_DATA = [
  { sector: 'Builders', pct: 15, amount: '$0.8T' },
  { sector: 'Energy providers', pct: 25, amount: '$1.3T' },
  { sector: 'Tech providers', pct: 60, amount: '$3.1T' },
];

export const ECONOMIC_INFRA_METRICS = {
  globalDatacenters: {
    value: '10,000+',
    description: 'Estimated number of datacenters globally.',
    cite: 'Data Center Map - Colocation, Cloud and Connectivity',
    citeUrl: 'https://www.datacentermap.com/',
  },
  usDatacenters: {
    value: '3,800',
    description: 'Estimated number of datacenters in the United States.',
    cite: 'Data Center Map - Colocation, Cloud and Connectivity',
    citeUrl: 'https://www.datacentermap.com/',
  },
};

export const ECONOMIC_ADDITIONAL_CITATIONS = {
  datacenterDemand: {
    cite: 'The cost of compute power: A $7 trillion race | McKinsey',
    citeUrl: 'https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/the-cost-of-compute-power-a-7-trillion-race',
  },
  jobs: {
    cite: 'WEF Future of Jobs Report 2025',
    citeUrl: 'https://www.weforum.org/publications/the-future-of-jobs-report-2025/',
  },
};
