/**
 * Capability dashboard data (OECD AI Capability Indicators).
 * Source: AI Dashboard Data.xlsx — run scripts/extract-excel.cjs to re-extract.
 */

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
