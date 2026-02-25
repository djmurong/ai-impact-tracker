import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { MetricCard } from '@/components/MetricCard';
import { Icons, COLORS } from '@/config/constants';
import { SOURCE_LINK_CLASS } from '@/config/styles';
import { useTheme } from '@/contexts/ThemeContext';
import { getChartTheme } from '@/config/theme';
import { CAPABILITY_DOMAIN_SCORES, CAPABILITY_CITATION } from '@/data';

export const CapabilityView: React.FC = () => {
  const { theme } = useTheme();
  const chart = getChartTheme(theme);
  return (
  <div className="space-y-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      <MetricCard
        title="Average Capability Score"
        value={(
          CAPABILITY_DOMAIN_SCORES.reduce((sum, x) => sum + x.score, 0) /
          CAPABILITY_DOMAIN_SCORES.length
        ).toFixed(2)}
        description="Mean score across OECD capability domains (1 to 5 scale)."
        cite={CAPABILITY_CITATION.cite}
        citeUrl={CAPABILITY_CITATION.citeUrl}
        category="Capability"
        icon={<Icons.Capability />}
      />
      <MetricCard
        title="Highest Domain Score"
        value="3"
        description="Language, creativity, knowledge/memory, and vision domains are at level 3."
        cite={CAPABILITY_CITATION.cite}
        citeUrl={CAPABILITY_CITATION.citeUrl}
        category="Capability"
        icon={<Icons.Capability />}
      />
      <MetricCard
        title="Baseline Robotic Score"
        value="2"
        description="Robotic intelligence is listed at level 2 in the spreadsheet's OECD block."
        cite={CAPABILITY_CITATION.cite}
        citeUrl={CAPABILITY_CITATION.citeUrl}
        category="Capability"
        icon={<Icons.Capability />}
      />
      <MetricCard
        title="Domains Covered"
        value={CAPABILITY_DOMAIN_SCORES.length}
        description="Number of capability domains represented in the spreadsheet."
        cite={CAPABILITY_CITATION.cite}
        citeUrl={CAPABILITY_CITATION.citeUrl}
        category="Capability"
        icon={<Icons.Capability />}
      />
    </div>

    <div className="bg-white dark:bg-slate-900/40 p-5 rounded-xl border border-slate-200 dark:border-slate-800 h-[420px] shadow-sm dark:shadow-none">
      <h3 className="text-slate-900 dark:text-white text-sm font-semibold mb-1">OECD Capability Domains (1-5 scale)</h3>
      <p className="text-slate-500 text-[10px] mb-2">
        Source:{' '}
        <a
          href={CAPABILITY_CITATION.citeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={SOURCE_LINK_CLASS}
        >
          {CAPABILITY_CITATION.cite}
        </a>
      </p>
      <ResponsiveContainer width="100%" height="88%">
        <BarChart data={CAPABILITY_DOMAIN_SCORES} layout="vertical" margin={{ left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={chart.gridStroke} horizontal={false} />
          <XAxis type="number" domain={[0, 5]} stroke={chart.axisStroke} fontSize={10} axisLine={false} tickLine={false} />
          <YAxis
            type="category"
            dataKey="domain"
            stroke={chart.axisStroke}
            fontSize={10}
            axisLine={false}
            tickLine={false}
            width={120}
          />
          <Tooltip cursor={false} contentStyle={{ backgroundColor: chart.tooltipBg, border: 'none', borderRadius: '8px' }} />
          <Bar dataKey="score" fill={COLORS.chart[4]} radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
  );
};
