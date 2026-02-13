/**
 * Dashboard data derived from AI Dashboard Data.xlsx
 * Run: node scripts/extract-excel.cjs to re-extract from Excel.
 */

// —— Economic (from Economic Data sheet) ——
export const ECONOMIC_METRICS = {
  gdpContribution: {
    value: '3.2%',
    description: "Real GDP growth: Information Processing Equipment, Software, R&D, Data Centers.",
    cite: "Hannah Rubinton and Bontu Ankit Patro, “Tracking AI’s Contribution to GDP Growth,” St. Louis Fed On the Economy, Jan. 12, 2026.",
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

// Employment delta / GDP-style time series (derived from productivity & sector data; Excel has narrative, we keep a short trend)
export const ECONOMIC_CHART_DATA = [
  { month: '2023', aiGrowth: 15, productivity: 7 },
  { month: '2024', aiGrowth: 22, productivity: 18 },
  { month: '2025', aiGrowth: 31, productivity: 27 },
];

// GDP-style breakdown (conceptual from sheet: AI vs base)
export const ECONOMIC_GDP_DATA = [
  { month: '2023', aiGdp: 1.2, baseGdp: 2.1 },
  { month: '2024', aiGdp: 1.5, baseGdp: 2.0 },
  { month: '2025', aiGdp: 1.9, baseGdp: 1.8 },
  { month: '2026', aiGdp: 2.4, baseGdp: 1.7 },
];

// —— Social (from Social Data sheet) ——
export const SOCIAL_METRICS = {
  globalAiUsers: {
    value: '1.35B',
    description: "People who use AI globally. 16.3% globally; 14.1% Global South, 24.7% Global North.",
    cite: "Global AI Adoption in 2025 – AI Economy Institute | Microsoft",
    citeUrl: "https://www.microsoft.com/en-us/corporate-responsibility/topics/AI-Economy-Institute/reports/Global-AI-Adoption-2025",
  },
  usAdultsUsedAi: {
    value: '33%',
    description: "% of US adults who have used AI.",
    cite: "Artificial Intelligence in Daily Life: Views and Experiences | Pew Research Center",
    citeUrl: "https://www.pewresearch.org/internet/2025/04/03/artificial-intelligence-in-daily-life-views-and-experiences/",
  },
  usTeensDailyAi: {
    value: '28%',
    description: "US teens who say they use AI daily.",
    cite: "Teens, Social Media and AI Chatbots 2025 | Pew Research Center",
    citeUrl: "https://www.pewresearch.org/internet/2025/12/09/teens-social-media-and-ai-chatbots-2025/",
  },
  aiRomanticRelationship: {
    value: '75.2M',
    description: "US adults who claim at least one intimate or romantic relationship with an AI (28.16%).",
    cite: "Artificial Romance: A Study of AI and Human Relationships | Vantage Point Dallas Counseling",
    citeUrl: "https://vantagepointdallascounseling.com/research/artificial-romance-a-study-of-ai-and-human-relationships/",
  },
  genZMarryAi: {
    value: '~80%',
    description: "% of Gen Z who would consider marrying an AI partner.",
    cite: "Majority of Gen Z would marry an AI, survey says | Mashable",
    citeUrl: "https://mashable.com/article/gen-z-marry-aritificial-intelligence-joi-ai-survey",
  },
  studentsMentalHealthAi: {
    value: '42%',
    description: "US 9–12th grade students who use AI for mental health support.",
    cite: "CDT 2025 Hand-in-Hand Polling (accessible PDF)",
    citeUrl: "https://cdt.org/wp-content/uploads/2025/10/CDT-2025-Hand-in-Hand-Polling-111225-accessible.pdf",
  },
  studentsCompanionAi: {
    value: '42%',
    description: "US 9–12th grade students who use AI as friend/companion.",
    cite: "CDT 2025 Hand-in-Hand Polling | Center for Democracy & Technology",
    citeUrl: "https://cdt.org/wp-content/uploads/2025/10/CDT-2025-Hand-in-Hand-Polling-111225-accessible.pdf",
  },
  littleNoControl: {
    value: '59%',
    description: "US adults who think they have little to no control over AI use in their lives.",
    cite: "AI in daily life: Views and experiences of US public and AI experts | Pew Research Center",
    citeUrl: "https://www.pewresearch.org/internet/2025/04/03/artificial-intelligence-in-daily-life-views-and-experiences/",
  },
  aLotOfControl: {
    value: '27%',
    description: "US adults who think they have a lot of control.",
    cite: "AI in daily life: Views and experiences of US public and AI experts | Pew Research Center",
    citeUrl: "https://www.pewresearch.org/internet/2025/04/03/artificial-intelligence-in-daily-life-views-and-experiences/",
  },
  someControl: {
    value: '14%',
    description: "US adults who think they have some control.",
    cite: "AI in daily life: Views and experiences of US public and AI experts | Pew Research Center",
    citeUrl: "https://www.pewresearch.org/internet/2025/04/03/artificial-intelligence-in-daily-life-views-and-experiences/",
  },
};

// Companion / use context (pie): control over AI (matches “control” breakdown in sheet)
export const SOCIAL_PIE_DATA = [
  { name: 'Little/No control', value: 59 },
  { name: 'A lot of control', value: 27 },
  { name: 'Some control', value: 14 },
];

// Public polls (from Social + Political sheets)
export const SOCIAL_POLL_BARS = [
  { q: 'AI used in daily life (US adults)', v: 33 },
  { q: 'Teens use AI daily', v: 28 },
  { q: 'Support gov’t test before AI use', v: 79 },
  { q: 'Prohibit deepfakes in campaigns', v: 80 },
  { q: 'Treaty on lethal autonomous weapons', v: 74 },
];

/** Citation for the Public Polls section: first two from Pew, last three from CISSM Maryland. */
export const PUBLIC_POLLS_CITATION = {
  cite: "Adoption & daily use: Pew Research Center. Regulation questions (gov't test, deepfakes, treaty): CISSM Maryland.",
  pewUrl: "https://www.pewresearch.org/internet/2025/04/03/artificial-intelligence-in-daily-life-views-and-experiences/",
  teensUrl: "https://www.pewresearch.org/internet/2025/12/09/teens-social-media-and-ai-chatbots-2025/",
  cissmUrl: "https://cissm.umd.edu/news/majorities-republicans-and-democrats-overwhelmingly-favor-government-regulating-artificial",
};

// —— Political (from Political Data sheet) ——
export const POLITICAL_LOBBYING_BY_FIRM: { firm: string; year: number; amount: number }[] = [
  { firm: 'OpenAI', year: 2023, amount: 260 },
  { firm: 'OpenAI', year: 2024, amount: 1760 },
  { firm: 'OpenAI', year: 2025, amount: 2100 },
  { firm: 'Anthropic', year: 2023, amount: 280 },
  { firm: 'Anthropic', year: 2024, amount: 720 },
  { firm: 'Anthropic', year: 2025, amount: 2290 },
  { firm: 'Cohere', year: 2023, amount: 70 },
  { firm: 'Cohere', year: 2024, amount: 230 },
  { firm: 'Cohere', year: 2025, amount: 150 },
  { firm: 'Meta', year: 2023, amount: 19300 },
  { firm: 'Meta', year: 2024, amount: 24430 },
  { firm: 'Meta', year: 2025, amount: 26290 },
  { firm: 'Amazon', year: 2023, amount: 19990 },
  { firm: 'Amazon', year: 2024, amount: 19140 },
  { firm: 'Amazon', year: 2025, amount: 18865 },
  { firm: 'Alphabet', year: 2023, amount: 14450 },
  { firm: 'Alphabet', year: 2024, amount: 14860 },
  { firm: 'Alphabet', year: 2025, amount: 16540 },
  { firm: 'Microsoft', year: 2023, amount: 10544 },
  { firm: 'Microsoft', year: 2024, amount: 10354 },
  { firm: 'Microsoft', year: 2025, amount: 10105 },
  { firm: 'Oracle', year: 2023, amount: 13370 },
  { firm: 'Oracle', year: 2024, amount: 11860 },
  { firm: 'Oracle', year: 2025, amount: 11550 },
  { firm: 'Nvidia', year: 2023, amount: 510 },
  { firm: 'Nvidia', year: 2024, amount: 640 },
  { firm: 'Nvidia', year: 2025, amount: 4950 },
];

// Totals by year (thousands of dollars → millions for display)
export const LOBBYING_TREND = [
  { year: '2023', amount: 97.2, frontierLabs: 0.61 },
  { year: '2024', amount: 84.5, frontierLabs: 2.71 },
  { year: '2025', amount: 93.6, frontierLabs: 4.54 },
];

export const POLITICAL_POLL_DATA = [
  { name: 'Support gov\'t test before AI use', value: 79 },
  { name: 'Prohibit deepfakes in campaigns', value: 80 },
  { name: 'Treaty on lethal autonomous weapons', value: 74 },
];

// Stance-style pie (from CISSM Maryland: majorities favor regulation)
export const POLITICAL_STANCE_PIE = [
  { name: 'Favor gov\'t regulating AI', value: 79 },
  { name: 'Other / Undecided', value: 21 },
];

// Citations for political / lobbying
export const POLITICAL_CITATIONS = {
  lobbying: "Lobbying data: OpenSecrets (OpenSecrets.org). Frontier labs from 2023; AI-related lobbying proxy for Big Tech.",
  lobbyingUrl: "https://www.opensecrets.org/news/2024/06/lobbying-on-ai-reaches-new-heights-in-2024/",
  regulationPoll: "Majorities of Republicans and Democrats Overwhelmingly Favor the Government Regulating Artificial Intelligence | Center for International and Security Studies at Maryland (CISSM)",
  regulationPollUrl: "https://cissm.umd.edu/news/majorities-republicans-and-democrats-overwhelmingly-favor-government-regulating-artificial",
};

// —— ChatGPT WAU ——
export const CHATGPT_WAU_DATA = [
  { year: '2023', wau: 100, pctAdults: 1.6 },
  { year: '2024', wau: 350, pctAdults: 5.7 },
  { year: '2025', wau: 700, pctAdults: 11.3 },
];

export const CHATGPT_WAU_CITATION = {
  cite: "Figure 3, growth of weekly active users on consumer plans; ~10% of world's adult population by July 2025.",
  citeUrl: "https://techcrunch.com/2025/08/04/openai-says-chatgpt-is-on-track-to-reach-700m-weekly-active-users/",
};

// —— Additional spreadsheet blocks to visualize all available data ——
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

export const SOCIAL_ADOPTION_BREAKDOWN_DATA = [
  { group: 'Global users', pct: 16.3 },
  { group: 'Global South', pct: 14.1 },
  { group: 'Global North', pct: 24.7 },
];

export const SOCIAL_COMPANIONSHIP_DATA = [
  { group: 'Adults in AI romantic relationship', pct: 28.16 },
  { group: 'Gen Z would consider marrying AI', pct: 80 },
  { group: 'Singles using AI for dating', pct: 26 },
];

export const SOCIAL_STUDENT_USAGE_DATA = [
  { use: 'Mental health support', pct: 42 },
  { use: 'Friend/companion', pct: 42 },
  { use: 'Escape real life', pct: 42 },
  { use: 'Romantic relationship', pct: 19 },
];

export const SOCIAL_ADDITIONAL_CITATIONS = {
  singlesDating: {
    cite: 'Match and The Kinsey Institute, Singles in America Study (2025)',
    citeUrl: 'https://ir.mtch.com/news-releases/news-release-details/match-and-kinsey-institute-unveil-14th-annual-singles-america',
  },
};

export const POLITICAL_TOP_FIRM_2025 = [
  { firm: 'Meta', amount: 26.29 },
  { firm: 'Amazon', amount: 18.865 },
  { firm: 'Alphabet', amount: 16.54 },
  { firm: 'Oracle', amount: 11.55 },
  { firm: 'Microsoft', amount: 10.105 },
  { firm: 'Nvidia', amount: 4.95 },
  { firm: 'Anthropic', amount: 2.29 },
  { firm: 'OpenAI', amount: 2.1 },
  { firm: 'Cohere', amount: 0.15 },
];

export const CAPABILITY_DOMAIN_SCORES = [
  { domain: 'Language', score: 3 },
  { domain: 'Social interaction', score: 2 },
  { domain: 'Problem solving', score: 2 },
  { domain: 'Creativity', score: 3 },
  { domain: 'Metacognition', score: 2 },
  { domain: 'Knowledge/memory', score: 3 },
  { domain: 'Vision', score: 3 },
  { domain: 'Manipulation', score: 2 },
  { domain: 'Robotic intelligence', score: 2 },
];

export const CAPABILITY_CITATION = {
  cite: 'OECD AI Capability Indicators (level 1-5)',
  citeUrl: 'https://www.oecd.org/en/publications/introducing-the-oecd-ai-capability-indicators_be745f04-en/full-report/component-4.html#title-86d73ad29a',
};
