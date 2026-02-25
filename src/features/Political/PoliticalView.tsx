import React from 'react';
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { MetricCard } from '@/components/MetricCard';
import { Icons, COLORS } from '@/config/constants';
import { SOURCE_LINK_CLASS } from '@/config/styles';
import { useTheme } from '@/contexts/ThemeContext';
import { getChartTheme } from '@/config/theme';
import {
  LOBBYING_TREND,
  POLITICAL_STANCE_PIE,
  POLITICAL_TOP_FIRM_2025,
  POLITICAL_POLL_DATA,
  POLITICAL_CITATIONS,
} from '@/data';

export const PoliticalView: React.FC = () => {
  const { theme } = useTheme();
  const chart = getChartTheme(theme);
  const tooltipContent = { backgroundColor: chart.tooltipBg, border: 'none' as const, borderRadius: '8px' };
  return (
  <div className="space-y-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      <MetricCard
        title="Total AI/Tech Lobbying (2025)"
        value="$93.6"
        unit="M"
        description="Combined lobbying spend (Meta, Amazon, Alphabet, Microsoft, Oracle, Nvidia, OpenAI, Anthropic, Cohere)."
        cite={POLITICAL_CITATIONS.lobbying}
        citeUrl={POLITICAL_CITATIONS.lobbyingUrl}
        category="Political"
        icon={<Icons.Political />}
      />
      <MetricCard
        title="Frontier AI Labs Lobbying (2025)"
        value="$4.54"
        unit="M"
        description="OpenAI, Anthropic, Cohere. Data from 2023."
        cite="OpenSecrets (OpenSecrets.org)"
        citeUrl="https://www.opensecrets.org/"
        category="Political"
        icon={<Icons.Political />}
      />
      <MetricCard
        title="Support gov't test before AI use"
        value="79%"
        description="Americans who support requiring AI programs to pass a government test."
        cite={POLITICAL_CITATIONS.regulationPoll}
        citeUrl={POLITICAL_CITATIONS.regulationPollUrl}
        category="Political"
        icon={<Icons.Political />}
      />
      <MetricCard
        title="Prohibit deepfakes in campaigns"
        value="80%"
        description="Americans who support prohibiting deepfakes in political ads."
        cite={POLITICAL_CITATIONS.regulationPoll}
        citeUrl={POLITICAL_CITATIONS.regulationPollUrl}
        category="Political"
        icon={<Icons.Political />}
      />
    </div>

    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      <div className="bg-white dark:bg-slate-900/40 p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 h-[22rem] sm:h-80 shadow-sm dark:shadow-none">
        <h3 className="text-slate-900 dark:text-white text-sm font-semibold mb-1">Lobbying Expenditure Trend ($M, selected firms)</h3>
        <p className="text-slate-500 text-[10px] mb-2">
          Source:{' '}
          <a
            href={POLITICAL_CITATIONS.lobbyingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={SOURCE_LINK_CLASS}
          >
            OpenSecrets - Lobbying on AI reaches new heights
          </a>
          . Includes Frontier Labs (from 2023) + Meta, Amazon, Alphabet, Microsoft, Oracle, Nvidia.
        </p>
        <ResponsiveContainer width="100%" height="85%">
          <BarChart data={LOBBYING_TREND}>
            <CartesianGrid strokeDasharray="3 3" stroke={chart.gridStroke} vertical={false} />
            <XAxis dataKey="year" stroke={chart.axisStroke} fontSize={10} axisLine={false} tickLine={false} />
            <Tooltip cursor={false} contentStyle={tooltipContent} formatter={(v: number) => [`$${v}M`, 'Total']} />
            <Bar dataKey="amount" fill={COLORS.chart[2]} radius={[4, 4, 0, 0]} name="Total ($M)" />
            <Bar dataKey="frontierLabs" fill={COLORS.chart[4]} radius={[4, 4, 0, 0]} name="Frontier labs ($M)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white dark:bg-slate-900/40 p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 h-[22rem] sm:h-80 shadow-sm dark:shadow-none">
        <h3 className="text-slate-900 dark:text-white text-sm font-semibold mb-1">Favor government regulating AI</h3>
        <p className="text-slate-500 text-[10px] mb-2">
          Source:{' '}
          <a
            href={POLITICAL_CITATIONS.regulationPollUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={SOURCE_LINK_CLASS}
          >
            CISSM Maryland - Majorities favor government regulating AI
          </a>
        </p>
        <ResponsiveContainer width="100%" height="88%">
          <PieChart>
            <Pie
              data={POLITICAL_STANCE_PIE}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {POLITICAL_STANCE_PIE.map((_, i) => (
                <Cell key={i} fill={COLORS.chart[(i + 2) % COLORS.chart.length]} />
              ))}
            </Pie>
            <Tooltip cursor={false} formatter={(v: number) => `${v}%`} />
            <Legend wrapperStyle={{ fontSize: '10px' }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>

    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      <div className="bg-white dark:bg-slate-900/40 p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 h-[22rem] sm:h-80 shadow-sm dark:shadow-none">
        <h3 className="text-slate-900 dark:text-white text-sm font-semibold mb-1">Top Firm Lobbying Spend (2025, $M)</h3>
        <p className="text-slate-500 text-[10px] mb-2">
          Source:{' '}
          <a
            href={POLITICAL_CITATIONS.lobbyingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={SOURCE_LINK_CLASS}
          >
            OpenSecrets company profiles
          </a>
        </p>
        <ResponsiveContainer width="100%" height="88%">
          <BarChart data={POLITICAL_TOP_FIRM_2025}>
            <CartesianGrid strokeDasharray="3 3" stroke={chart.gridStroke} vertical={false} />
            <XAxis dataKey="firm" stroke={chart.axisStroke} fontSize={10} axisLine={false} tickLine={false} />
            <YAxis stroke={chart.axisStroke} fontSize={10} axisLine={false} tickLine={false} />
            <Tooltip cursor={false} formatter={(v: number) => [`$${v}M`, 'Spend']} contentStyle={tooltipContent} />
            <Bar dataKey="amount" fill={COLORS.primary} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white dark:bg-slate-900/40 p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 h-[22rem] sm:h-80 shadow-sm dark:shadow-none">
        <h3 className="text-slate-900 dark:text-white text-sm font-semibold mb-1">Policy Support Breakdown</h3>
        <p className="text-slate-500 text-[10px] mb-2">
          Source:{' '}
          <a
            href={POLITICAL_CITATIONS.regulationPollUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={SOURCE_LINK_CLASS}
          >
            CISSM Maryland
          </a>
        </p>
        <ResponsiveContainer width="100%" height="88%">
          <BarChart data={POLITICAL_POLL_DATA} layout="vertical" margin={{ left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={chart.gridStroke} horizontal={false} />
            <XAxis type="number" stroke={chart.axisStroke} fontSize={10} axisLine={false} tickLine={false} />
            <YAxis
              type="category"
              dataKey="name"
              stroke={chart.axisStroke}
              fontSize={10}
              axisLine={false}
              tickLine={false}
              width={130}
            />
            <Tooltip cursor={false} formatter={(v: number) => [`${v}%`, 'Support']} contentStyle={tooltipContent} />
            <Bar dataKey="value" fill={COLORS.secondary} radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
  );
};
