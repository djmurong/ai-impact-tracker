import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { COLORS } from '@/config/constants';
import { SOURCE_LINK_CLASS } from '@/config/styles';
import { useTheme } from '@/contexts/ThemeContext';
import { getChartTheme } from '@/config/theme';
import { CHATGPT_WAU_DATA, CHATGPT_WAU_CITATION } from '@/data';
import { EconomicView } from '@/features/Economic/EconomicView';
import { SocialView } from '@/features/Social/SocialView';
import { PoliticalView } from '@/features/Political/PoliticalView';
import { CapabilityView } from '@/features/Capability/CapabilityView';

export const OverviewView: React.FC = () => {
  const { theme } = useTheme();
  const chart = getChartTheme(theme);
  return (
    <div className="space-y-12">
      <section className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-xl p-4 sm:p-6 lg:p-8 w-full space-y-4 shadow-sm dark:shadow-none">
        <div className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-500 dark:text-slate-400">
          Free AI Transparency Dashboard
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
          Evaluate AI&apos;s social, political, and economic impact with open metrics.
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-sm lg:text-base leading-relaxed">
          Track capability progress and real-world outcomes in one place, completely free, so everyone
          can better understand AI consequences, good or bad.
        </p>
      </section>

      <section className="p-4 sm:p-5 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-xl w-full shadow-sm dark:shadow-none">
        <div className="flex items-center gap-2 mb-2 text-blue-600 dark:text-blue-400">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[10px] uppercase font-black tracking-widest">Synthesis</span>
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
          AI adoption is scaling faster than institutions are adapting: ChatGPT weekly users rose from
          100M to 700M (2023-2025) while productivity in AI-exposed sectors reached 27% and AI-linked
          GDP contribution keeps rising, yet labor markets still show a talent bottleneck (1.63M open
          global AI roles vs 518K available talent). At the same time, social and political signals
          show a legitimacy gap, with 59% of adults reporting little or no control over AI, even as
          strong majorities support safeguards (79% for pre-deployment testing, 80% for deepfake
          limits), while capability scores cluster at level 2-3, suggesting broad deployment pressure
          before higher-order reliability is fully mature.
        </p>
      </section>

      <section>
        <label className="text-slate-600 dark:text-slate-500 text-[9px] uppercase font-black tracking-widest mb-4 block">
          ChatGPT Adoption
        </label>
        <div className="bg-white dark:bg-slate-900/40 p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 h-[22rem] sm:h-[360px] mb-6 shadow-sm dark:shadow-none">
          <h3 className="text-slate-900 dark:text-white text-sm font-semibold mb-1">Weekly Active Users (WAU) — millions</h3>
          <p className="text-slate-500 text-[10px] mb-2">
            Source:{' '}
            <a
              href={CHATGPT_WAU_CITATION.citeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={SOURCE_LINK_CLASS}
            >
              {CHATGPT_WAU_CITATION.cite}
            </a>
          </p>
          <ResponsiveContainer width="100%" height="84%">
            <AreaChart data={CHATGPT_WAU_DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke={chart.gridStroke} vertical={false} />
              <XAxis dataKey="year" stroke={chart.axisStroke} fontSize={10} axisLine={false} tickLine={false} />
              <YAxis stroke={chart.axisStroke} fontSize={10} axisLine={false} tickLine={false} />
              <Tooltip
                cursor={false}
                contentStyle={{ backgroundColor: chart.tooltipBg, border: 'none', borderRadius: '8px', fontSize: '10px' }}
                formatter={(v: number, _k: string, p: { dataKey?: string }) => [
                  p?.dataKey === 'wau' ? `${v}M` : `${v}%`,
                  p?.dataKey === 'wau' ? 'WAU' : 'Adult population share',
                ]}
              />
              <Legend wrapperStyle={{ fontSize: '10px' }} />
              <Area type="monotone" dataKey="wau" stroke={COLORS.chart[4]} fill={`${COLORS.chart[4]}33`} name="WAU (millions)" />
              <Area
                type="monotone"
                dataKey="pctAdults"
                stroke={COLORS.primary}
                fill={`${COLORS.primary}22`}
                name="% of world's adult population"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section>
        <label className="text-slate-600 dark:text-slate-500 text-[9px] uppercase font-black tracking-widest mb-4 block">
          Key Economic Indicators
        </label>
        <EconomicView />
      </section>

      <section>
        <label className="text-slate-600 dark:text-slate-500 text-[9px] uppercase font-black tracking-widest mb-4 block">
          Social Adoption & Perception
        </label>
        <SocialView />
      </section>

      <section>
        <label className="text-slate-600 dark:text-slate-500 text-[9px] uppercase font-black tracking-widest mb-4 block">
          Political Influence & Governance
        </label>
        <PoliticalView />
      </section>

      <section>
        <label className="text-slate-600 dark:text-slate-500 text-[9px] uppercase font-black tracking-widest mb-4 block">
          Capability Tracking
        </label>
        <CapabilityView />
      </section>
    </div>
  );
};
