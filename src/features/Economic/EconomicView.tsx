import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
  LineChart,
  Line,
} from 'recharts';
import { MetricCard } from '@/components/MetricCard';
import { Icons, COLORS } from '@/config/constants';
import { SOURCE_LINK_CLASS } from '@/config/styles';
import { useTheme } from '@/contexts/ThemeContext';
import { getChartTheme } from '@/config/theme';
import {
  ECONOMIC_METRICS,
  ECONOMIC_CHART_DATA,
  ECONOMIC_GDP_DATA,
  ECONOMIC_HR_ADOPTION_DATA,
  ECONOMIC_TALENT_POOL_DATA,
  ECONOMIC_DATACENTER_DEMAND_DATA,
  ECONOMIC_INVESTMENT_BREAKDOWN_DATA,
  ECONOMIC_INFRA_METRICS,
  ECONOMIC_ADDITIONAL_CITATIONS,
} from '@/data';

const tooltipStyle = (bg: string): React.CSSProperties => ({ backgroundColor: bg, border: 'none', borderRadius: '8px', fontSize: '10px' });

export const EconomicView: React.FC = () => {
  const { theme } = useTheme();
  const chart = getChartTheme(theme);
  const tooltipContent = tooltipStyle(chart.tooltipBg);
  return (
  <div className="space-y-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      <MetricCard
        title="AI GDP Contribution"
        value={ECONOMIC_METRICS.gdpContribution.value}
        description={ECONOMIC_METRICS.gdpContribution.description}
        cite={ECONOMIC_METRICS.gdpContribution.cite}
        citeUrl={ECONOMIC_METRICS.gdpContribution.citeUrl}
        category="Economic"
        icon={<Icons.Economy />}
      />
      <MetricCard
        title="Unemployment Rate (US, Dec 2025)"
        value={ECONOMIC_METRICS.unemploymentRate.value}
        description={ECONOMIC_METRICS.unemploymentRate.description}
        cite={ECONOMIC_METRICS.unemploymentRate.cite}
        citeUrl={ECONOMIC_METRICS.unemploymentRate.citeUrl}
        category="Economic"
        icon={<Icons.Economy />}
      />
      <MetricCard
        title="Productivity (AI-exposed industries)"
        value={ECONOMIC_METRICS.productivityGrowth.value}
        change={ECONOMIC_METRICS.productivityGrowth.change}
        description={ECONOMIC_METRICS.productivityGrowth.description}
        cite={ECONOMIC_METRICS.productivityGrowth.cite}
        citeUrl={ECONOMIC_METRICS.productivityGrowth.citeUrl}
        category="Economic"
        icon={<Icons.Economy />}
      />
      <MetricCard
        title="Companies using AI in HR"
        value={ECONOMIC_METRICS.companiesAiHr.value}
        description={ECONOMIC_METRICS.companiesAiHr.description}
        cite={ECONOMIC_METRICS.companiesAiHr.cite}
        citeUrl={ECONOMIC_METRICS.companiesAiHr.citeUrl}
        category="Economic"
        icon={<Icons.Economy />}
      />
      <MetricCard
        title="AI Resume Review Adoption"
        value={ECONOMIC_METRICS.aiResumeReview.value}
        description={ECONOMIC_METRICS.aiResumeReview.description}
        cite={ECONOMIC_METRICS.aiResumeReview.cite}
        citeUrl={ECONOMIC_METRICS.aiResumeReview.citeUrl}
        category="Economic"
        icon={<Icons.Economy />}
      />
      <MetricCard
        title="AI-led Interview Adoption"
        value={ECONOMIC_METRICS.aiInterviewProcess.value}
        description={ECONOMIC_METRICS.aiInterviewProcess.description}
        cite={ECONOMIC_METRICS.aiInterviewProcess.cite}
        citeUrl={ECONOMIC_METRICS.aiInterviewProcess.citeUrl}
        category="Economic"
        icon={<Icons.Economy />}
      />
      <MetricCard
        title="Open AI Positions (Global)"
        value={ECONOMIC_METRICS.openAiPositionsGlobal.value}
        description={ECONOMIC_METRICS.openAiPositionsGlobal.description}
        cite={ECONOMIC_METRICS.openAiPositionsGlobal.cite}
        citeUrl={ECONOMIC_METRICS.openAiPositionsGlobal.citeUrl}
        category="Economic"
        icon={<Icons.Economy />}
      />
      <MetricCard
        title="Median Weekly Earnings (Q2 2025)"
        value={ECONOMIC_METRICS.medianSalary2025.value}
        description={ECONOMIC_METRICS.medianSalary2025.description}
        cite={ECONOMIC_METRICS.medianSalary2025.cite}
        citeUrl={ECONOMIC_METRICS.medianSalary2025.citeUrl}
        category="Economic"
        icon={<Icons.Economy />}
      />
      <MetricCard
        title="Datacenters (Global)"
        value={ECONOMIC_INFRA_METRICS.globalDatacenters.value}
        description={ECONOMIC_INFRA_METRICS.globalDatacenters.description}
        cite={ECONOMIC_INFRA_METRICS.globalDatacenters.cite}
        citeUrl={ECONOMIC_INFRA_METRICS.globalDatacenters.citeUrl}
        category="Economic"
        icon={<Icons.Economy />}
      />
      <MetricCard
        title="Datacenters (US)"
        value={ECONOMIC_INFRA_METRICS.usDatacenters.value}
        description={ECONOMIC_INFRA_METRICS.usDatacenters.description}
        cite={ECONOMIC_INFRA_METRICS.usDatacenters.cite}
        citeUrl={ECONOMIC_INFRA_METRICS.usDatacenters.citeUrl}
        category="Economic"
        icon={<Icons.Economy />}
      />
    </div>

    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      <div className="bg-white dark:bg-slate-900/40 p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 h-[22rem] sm:h-80 shadow-sm dark:shadow-none">
        <h3 className="text-slate-900 dark:text-white text-sm font-semibold mb-1 flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span> AI Growth & Productivity
        </h3>
        <p className="text-slate-500 text-[10px] mb-2">
          Source:{' '}
          <a
            href="https://www.pwc.com/gx/en/issues/artificial-intelligence/ai-jobs-barometer.html"
            target="_blank"
            rel="noopener noreferrer"
            className={SOURCE_LINK_CLASS}
          >
            PwC 2025 Global AI Jobs Barometer
          </a>
        </p>
        <ResponsiveContainer width="100%" height="88%">
          <AreaChart data={ECONOMIC_CHART_DATA}>
            <CartesianGrid strokeDasharray="3 3" stroke={chart.gridStroke} vertical={false} />
            <XAxis dataKey="month" stroke={chart.axisStroke} fontSize={10} axisLine={false} tickLine={false} />
            <YAxis stroke={chart.axisStroke} fontSize={10} axisLine={false} tickLine={false} />
            <Tooltip cursor={false} contentStyle={tooltipContent} />
            <Area type="monotone" dataKey="aiGrowth" stroke={COLORS.primary} fill={`${COLORS.primary}33`} name="AI growth (%)" />
            <Area type="monotone" dataKey="productivity" stroke={COLORS.secondary} fill={`${COLORS.secondary}33`} name="Productivity (%)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white dark:bg-slate-900/40 p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 h-[22rem] sm:h-80 shadow-sm dark:shadow-none">
        <h3 className="text-slate-900 dark:text-white text-sm font-semibold mb-1">GDP Breakdown (conceptual)</h3>
        <p className="text-slate-500 text-[10px] mb-2">
          Source:{' '}
          <a
            href="https://www.stlouisfed.org/on-the-economy/2026/jan/tracking-ai-contribution-gdp-growth"
            target="_blank"
            rel="noopener noreferrer"
            className={SOURCE_LINK_CLASS}
          >
            St. Louis Fed - Tracking AI&apos;s Contribution to GDP Growth
          </a>
        </p>
        <ResponsiveContainer width="100%" height="88%">
          <BarChart data={ECONOMIC_GDP_DATA}>
            <CartesianGrid strokeDasharray="3 3" stroke={chart.gridStroke} vertical={false} />
            <XAxis dataKey="month" stroke={chart.axisStroke} fontSize={10} axisLine={false} tickLine={false} />
            <Tooltip cursor={false} contentStyle={tooltipContent} />
            <Bar dataKey="aiGdp" fill={COLORS.primary} radius={[4, 4, 0, 0]} name="AI GDP" />
            <Bar dataKey="baseGdp" fill={COLORS.secondary} radius={[4, 4, 0, 0]} name="Base GDP" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>

    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      <div className="bg-white dark:bg-slate-900/40 p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 h-[22rem] sm:h-80 shadow-sm dark:shadow-none">
        <h3 className="text-slate-900 dark:text-white text-sm font-semibold mb-1">Open AI Positions vs Talent Pool</h3>
        <p className="text-slate-500 text-[10px] mb-2">
          Source:{' '}
          <a
            href={ECONOMIC_ADDITIONAL_CITATIONS.jobs.citeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={SOURCE_LINK_CLASS}
          >
            {ECONOMIC_ADDITIONAL_CITATIONS.jobs.cite}
          </a>
        </p>
        <ResponsiveContainer width="100%" height="88%">
          <BarChart data={ECONOMIC_TALENT_POOL_DATA}>
            <CartesianGrid strokeDasharray="3 3" stroke={chart.gridStroke} vertical={false} />
            <XAxis dataKey="region" stroke={chart.axisStroke} fontSize={10} axisLine={false} tickLine={false} />
            <YAxis stroke={chart.axisStroke} fontSize={10} axisLine={false} tickLine={false} />
            <Tooltip cursor={false} contentStyle={tooltipContent} />
            <Legend wrapperStyle={{ fontSize: '10px' }} />
            <Bar dataKey="openPositions" fill={COLORS.primary} name="Open positions" radius={[4, 4, 0, 0]} />
            <Bar dataKey="availableTalent" fill={COLORS.secondary} name="Available talent" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white dark:bg-slate-900/40 p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 h-[22rem] sm:h-80 shadow-sm dark:shadow-none">
        <h3 className="text-slate-900 dark:text-white text-sm font-semibold mb-1">AI Recruitment Automation (% of companies)</h3>
        <p className="text-slate-500 text-[10px] mb-2">
          Source:{' '}
          <a
            href="https://www.pwc.com/gx/en/issues/artificial-intelligence/ai-jobs-barometer.html"
            target="_blank"
            rel="noopener noreferrer"
            className={SOURCE_LINK_CLASS}
          >
            PwC 2025 Global AI Jobs Barometer
          </a>
        </p>
        <ResponsiveContainer width="100%" height="88%">
          <BarChart data={ECONOMIC_HR_ADOPTION_DATA}>
            <CartesianGrid strokeDasharray="3 3" stroke={chart.gridStroke} vertical={false} />
            <XAxis dataKey="label" stroke={chart.axisStroke} fontSize={10} axisLine={false} tickLine={false} />
            <YAxis stroke={chart.axisStroke} fontSize={10} axisLine={false} tickLine={false} />
            <Tooltip cursor={false} formatter={(v: number) => [`${v}%`, 'Share']} contentStyle={tooltipContent} />
            <Bar dataKey="value" fill={COLORS.chart[2]} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>

    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      <div className="bg-white dark:bg-slate-900/40 p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 h-[22rem] sm:h-80 shadow-sm dark:shadow-none">
        <h3 className="text-slate-900 dark:text-white text-sm font-semibold mb-1">Datacenter Demand Forecast (GW)</h3>
        <p className="text-slate-500 text-[10px] mb-2">
          Source:{' '}
          <a
            href={ECONOMIC_ADDITIONAL_CITATIONS.datacenterDemand.citeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={SOURCE_LINK_CLASS}
          >
            {ECONOMIC_ADDITIONAL_CITATIONS.datacenterDemand.cite}
          </a>
        </p>
        <ResponsiveContainer width="100%" height="88%">
          <LineChart data={ECONOMIC_DATACENTER_DEMAND_DATA}>
            <CartesianGrid strokeDasharray="3 3" stroke={chart.gridStroke} vertical={false} />
            <XAxis dataKey="year" stroke={chart.axisStroke} fontSize={10} axisLine={false} tickLine={false} />
            <YAxis stroke={chart.axisStroke} fontSize={10} axisLine={false} tickLine={false} />
            <Tooltip cursor={false} contentStyle={tooltipContent} />
            <Legend wrapperStyle={{ fontSize: '10px' }} />
            <Line type="monotone" dataKey="total" stroke={COLORS.primary} name="Total GW" strokeWidth={2} />
            <Line type="monotone" dataKey="ai" stroke={COLORS.secondary} name="AI GW" strokeWidth={2} />
            <Line type="monotone" dataKey="nonAi" stroke={COLORS.warning} name="Non-AI GW" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white dark:bg-slate-900/40 p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 h-[22rem] sm:h-80 shadow-sm dark:shadow-none">
        <h3 className="text-slate-900 dark:text-white text-sm font-semibold mb-1">Compute Investment Split by Industry</h3>
        <p className="text-slate-500 text-[10px] mb-2">
          Source:{' '}
          <a
            href={ECONOMIC_ADDITIONAL_CITATIONS.datacenterDemand.citeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={SOURCE_LINK_CLASS}
          >
            {ECONOMIC_ADDITIONAL_CITATIONS.datacenterDemand.cite}
          </a>
        </p>
        <ResponsiveContainer width="100%" height="88%">
          <PieChart>
            <Pie
              data={ECONOMIC_INVESTMENT_BREAKDOWN_DATA}
              dataKey="pct"
              nameKey="sector"
              innerRadius={60}
              outerRadius={85}
              paddingAngle={4}
            >
              {ECONOMIC_INVESTMENT_BREAKDOWN_DATA.map((_, i) => (
                <Cell key={i} fill={COLORS.chart[i % COLORS.chart.length]} />
              ))}
            </Pie>
            <Tooltip
              cursor={false}
              formatter={(v: number, _name: string, props: { payload?: { amount?: string } }) => [
                `${v}% (${props.payload?.amount ?? ''})`,
                'Allocation',
              ]}
            />
            <Legend wrapperStyle={{ fontSize: '10px' }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
  );
};
