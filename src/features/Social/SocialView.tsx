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
  SOCIAL_METRICS,
  SOCIAL_PIE_DATA,
  SOCIAL_ADOPTION_BREAKDOWN_DATA,
  SOCIAL_COMPANIONSHIP_DATA,
  SOCIAL_STUDENT_USAGE_DATA,
  SOCIAL_ADDITIONAL_CITATIONS,
  getSocialPollBarsWithSource,
  PUBLIC_POLLS_CITATION,
} from '@/data';

const tooltipContentStyle = (bg: string) => ({ backgroundColor: bg, border: 'none' as const, borderRadius: '8px' });

export const SocialView: React.FC = () => {
  const socialPollBarsWithSource = getSocialPollBarsWithSource();
  const { theme } = useTheme();
  const chart = getChartTheme(theme);
  const tooltipContent = tooltipContentStyle(chart.tooltipBg);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <MetricCard
          title="People Using AI Globally"
          value={SOCIAL_METRICS.globalAiUsers.value}
          description={SOCIAL_METRICS.globalAiUsers.description}
          cite={SOCIAL_METRICS.globalAiUsers.cite}
          citeUrl={SOCIAL_METRICS.globalAiUsers.citeUrl}
          category="Social"
          icon={<Icons.Social />}
        />
        <MetricCard
          title="US Adults Who Have Used AI"
          value={SOCIAL_METRICS.usAdultsUsedAi.value}
          description={SOCIAL_METRICS.usAdultsUsedAi.description}
          cite={SOCIAL_METRICS.usAdultsUsedAi.cite}
          citeUrl={SOCIAL_METRICS.usAdultsUsedAi.citeUrl}
          category="Social"
          icon={<Icons.Social />}
        />
        <MetricCard
          title="US Teens Using AI Daily"
          value={SOCIAL_METRICS.usTeensDailyAi.value}
          description={SOCIAL_METRICS.usTeensDailyAi.description}
          cite={SOCIAL_METRICS.usTeensDailyAi.cite}
          citeUrl={SOCIAL_METRICS.usTeensDailyAi.citeUrl}
          category="Social"
          icon={<Icons.Social />}
        />
        <MetricCard
          title="US Adults in AI Relationship"
          value={SOCIAL_METRICS.aiRomanticRelationship.value}
          description={SOCIAL_METRICS.aiRomanticRelationship.description}
          cite={SOCIAL_METRICS.aiRomanticRelationship.cite}
          citeUrl={SOCIAL_METRICS.aiRomanticRelationship.citeUrl}
          category="Social"
          icon={<Icons.Social />}
        />
        <MetricCard
          title="Gen Z Considering AI Marriage"
          value={SOCIAL_METRICS.genZMarryAi.value}
          description={SOCIAL_METRICS.genZMarryAi.description}
          cite={SOCIAL_METRICS.genZMarryAi.cite}
          citeUrl={SOCIAL_METRICS.genZMarryAi.citeUrl}
          category="Social"
          icon={<Icons.Social />}
        />
        <MetricCard
          title="Students Use AI for Mental Health"
          value={SOCIAL_METRICS.studentsMentalHealthAi.value}
          description={SOCIAL_METRICS.studentsMentalHealthAi.description}
          cite={SOCIAL_METRICS.studentsMentalHealthAi.cite}
          citeUrl={SOCIAL_METRICS.studentsMentalHealthAi.citeUrl}
          category="Social"
          icon={<Icons.Social />}
        />
        <MetricCard
          title="Students Use AI as Companion"
          value={SOCIAL_METRICS.studentsCompanionAi.value}
          description={SOCIAL_METRICS.studentsCompanionAi.description}
          cite={SOCIAL_METRICS.studentsCompanionAi.cite}
          citeUrl={SOCIAL_METRICS.studentsCompanionAi.citeUrl}
          category="Social"
          icon={<Icons.Social />}
        />
        <MetricCard
          title="Little/No AI Control (US adults)"
          value={SOCIAL_METRICS.littleNoControl.value}
          description={SOCIAL_METRICS.littleNoControl.description}
          cite={SOCIAL_METRICS.littleNoControl.cite}
          citeUrl={SOCIAL_METRICS.littleNoControl.citeUrl}
          category="Social"
          icon={<Icons.Social />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-900/40 p-4 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 lg:col-span-2 h-[22rem] sm:h-80 shadow-sm dark:shadow-none">
          <h3 className="text-slate-900 dark:text-white text-sm font-semibold mb-1">Control over AI use (US adults)</h3>
          <p className="text-slate-500 text-[10px] mb-2">
            Source:{' '}
            <a
              href="https://www.pewresearch.org/internet/2025/04/03/artificial-intelligence-in-daily-life-views-and-experiences/"
              target="_blank"
              rel="noopener noreferrer"
              className={SOURCE_LINK_CLASS}
            >
              AI in daily life: Views and experiences | Pew Research Center
            </a>
          </p>
          <ResponsiveContainer width="100%" height="88%">
            <PieChart>
              <Pie
                data={SOCIAL_PIE_DATA}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {SOCIAL_PIE_DATA.map((_, i) => (
                  <Cell key={i} fill={COLORS.chart[i % COLORS.chart.length]} />
                ))}
              </Pie>
              <Tooltip cursor={false} formatter={(v: number) => `${v}%`} />
              <Legend wrapperStyle={{ fontSize: '10px' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white dark:bg-slate-900/40 p-6 rounded-xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm dark:shadow-none">
          <h3 className="text-slate-900 dark:text-white text-sm font-semibold mb-1">Public Polls (% agree or use)</h3>
          <p className="text-slate-500 text-[10px] mb-3">
            Sources:{' '}
            <a href={PUBLIC_POLLS_CITATION.pewUrl} target="_blank" rel="noopener noreferrer" className={SOURCE_LINK_CLASS}>
              Pew Research (AI in daily life)
            </a>
            ,{' '}
            <a href={PUBLIC_POLLS_CITATION.teensUrl} target="_blank" rel="noopener noreferrer" className={SOURCE_LINK_CLASS}>
              Pew (teens & AI)
            </a>
            ,{' '}
            <a href={PUBLIC_POLLS_CITATION.cissmUrl} target="_blank" rel="noopener noreferrer" className={SOURCE_LINK_CLASS}>
              CISSM Maryland (regulation)
            </a>
            .
          </p>
          {socialPollBarsWithSource.map((p, i) => (
            <div key={i} className="space-y-1">
              <div className="flex justify-between text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold">
                <span>{p.q}</span>
                <span>{p.v}%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div style={{ width: `${p.v}%` }} className="bg-blue-500 h-full"></div>
              </div>
              <a
                href={p.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 underline"
              >
                source
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-900/40 p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 h-[22rem] sm:h-80 shadow-sm dark:shadow-none">
          <h3 className="text-slate-900 dark:text-white text-sm font-semibold mb-1">AI Adoption by Region (% of population)</h3>
          <p className="text-slate-500 text-[10px] mb-2">
            Source:{' '}
            <a
              href={SOCIAL_METRICS.globalAiUsers.citeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={SOURCE_LINK_CLASS}
            >
              {SOCIAL_METRICS.globalAiUsers.cite}
            </a>
          </p>
          <ResponsiveContainer width="100%" height="88%">
            <BarChart data={SOCIAL_ADOPTION_BREAKDOWN_DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke={chart.gridStroke} vertical={false} />
              <XAxis dataKey="group" stroke={chart.axisStroke} fontSize={10} axisLine={false} tickLine={false} />
              <YAxis stroke={chart.axisStroke} fontSize={10} axisLine={false} tickLine={false} />
              <Tooltip cursor={false} formatter={(v: number) => [`${v}%`, 'Adoption']} contentStyle={tooltipContent} />
              <Bar dataKey="pct" fill={COLORS.chart[4]} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white dark:bg-slate-900/40 p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 h-[22rem] sm:h-80 shadow-sm dark:shadow-none">
          <h3 className="text-slate-900 dark:text-white text-sm font-semibold mb-1">AI Companionship & Dating Signals</h3>
          <p className="text-slate-500 text-[10px] mb-2">
            Sources:{' '}
            <a
              href={SOCIAL_METRICS.aiRomanticRelationship.citeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={SOURCE_LINK_CLASS}
            >
              Vantage Point Dallas Counseling
            </a>
            ,{' '}
            <a
              href={SOCIAL_METRICS.genZMarryAi.citeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={SOURCE_LINK_CLASS}
            >
              Mashable
            </a>
            ,{' '}
            <a
              href={SOCIAL_ADDITIONAL_CITATIONS.singlesDating.citeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={SOURCE_LINK_CLASS}
            >
              Match + Kinsey
            </a>
          </p>
          <ResponsiveContainer width="100%" height="88%">
            <BarChart data={SOCIAL_COMPANIONSHIP_DATA} layout="vertical" margin={{ left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={chart.gridStroke} horizontal={false} />
              <XAxis type="number" stroke={chart.axisStroke} fontSize={10} axisLine={false} tickLine={false} />
              <YAxis
                type="category"
                dataKey="group"
                stroke={chart.axisStroke}
                fontSize={10}
                axisLine={false}
                tickLine={false}
                width={130}
              />
              <Tooltip cursor={false} formatter={(v: number) => [`${v}%`, 'Share']} contentStyle={tooltipContent} />
              <Bar dataKey="pct" fill={COLORS.chart[5]} radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900/40 p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 h-[22rem] sm:h-80 shadow-sm dark:shadow-none">
        <h3 className="text-slate-900 dark:text-white text-sm font-semibold mb-1">How US students use AI companions</h3>
        <p className="text-slate-500 text-[10px] mb-2">
          Source:{' '}
          <a
            href={SOCIAL_METRICS.studentsMentalHealthAi.citeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={SOURCE_LINK_CLASS}
          >
            CDT 2025 Hand-in-Hand Polling
          </a>
        </p>
        <ResponsiveContainer width="100%" height="88%">
          <BarChart data={SOCIAL_STUDENT_USAGE_DATA}>
            <CartesianGrid strokeDasharray="3 3" stroke={chart.gridStroke} vertical={false} />
            <XAxis dataKey="use" stroke={chart.axisStroke} fontSize={10} axisLine={false} tickLine={false} />
            <YAxis stroke={chart.axisStroke} fontSize={10} axisLine={false} tickLine={false} />
            <Tooltip cursor={false} formatter={(v: number) => [`${v}%`, 'Students']} contentStyle={tooltipContent} />
            <Bar dataKey="pct" fill={COLORS.chart[2]} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
