/**
 * Political dashboard data (from Political Data sheet).
 * Source: AI Dashboard Data.xlsx — run scripts/extract-excel.cjs to re-extract.
 */

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

export const POLITICAL_STANCE_PIE = [
  { name: 'Favor gov\'t regulating AI', value: 79 },
  { name: 'Other / Undecided', value: 21 },
];

export const POLITICAL_CITATIONS = {
  lobbying: "Lobbying data: OpenSecrets (OpenSecrets.org). Frontier labs from 2023; AI-related lobbying proxy for Big Tech.",
  lobbyingUrl: "https://www.opensecrets.org/news/2024/06/lobbying-on-ai-reaches-new-heights-in-2024/",
  regulationPoll: "Majorities of Republicans and Democrats Overwhelmingly Favor the Government Regulating Artificial Intelligence | Center for International and Security Studies at Maryland (CISSM)",
  regulationPollUrl: "https://cissm.umd.edu/news/majorities-republicans-and-democrats-overwhelmingly-favor-government-regulating-artificial",
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
