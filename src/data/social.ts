/**
 * Social dashboard data (from Social Data sheet).
 * Source: AI Dashboard Data.xlsx — run scripts/extract-excel.cjs to re-extract.
 */

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

export const SOCIAL_PIE_DATA = [
  { name: 'Little/No control', value: 59 },
  { name: 'A lot of control', value: 27 },
  { name: 'Some control', value: 14 },
];

export const SOCIAL_POLL_BARS = [
  { q: 'AI used in daily life (US adults)', v: 33 },
  { q: 'Teens use AI daily', v: 28 },
  { q: 'Support gov\'t test before AI use', v: 79 },
  { q: 'Prohibit deepfakes in campaigns', v: 80 },
  { q: 'Treaty on lethal autonomous weapons', v: 74 },
];

export const PUBLIC_POLLS_CITATION = {
  cite: "Adoption & daily use: Pew Research Center. Regulation questions (gov't test, deepfakes, treaty): CISSM Maryland.",
  pewUrl: "https://www.pewresearch.org/internet/2025/04/03/artificial-intelligence-in-daily-life-views-and-experiences/",
  teensUrl: "https://www.pewresearch.org/internet/2025/12/09/teens-social-media-and-ai-chatbots-2025/",
  cissmUrl: "https://cissm.umd.edu/news/majorities-republicans-and-democrats-overwhelmingly-favor-government-regulating-artificial",
};

export interface SocialPollBarWithSource {
  q: string;
  v: number;
  sourceUrl: string;
}

/** Maps poll questions to their source URLs. Exported for use in SocialView. */
export function getSocialPollBarsWithSource(): SocialPollBarWithSource[] {
  return SOCIAL_POLL_BARS.map((item) => {
    if (item.q.includes('Teens')) {
      return { ...item, sourceUrl: PUBLIC_POLLS_CITATION.teensUrl };
    }
    if (item.q.includes('daily life')) {
      return { ...item, sourceUrl: PUBLIC_POLLS_CITATION.pewUrl };
    }
    return { ...item, sourceUrl: PUBLIC_POLLS_CITATION.cissmUrl };
  });
}

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
