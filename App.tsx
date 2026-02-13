
import React, { useMemo, useState } from 'react';
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
import { Icons, COLORS } from './constants';
import { MetricCard } from './components/MetricCard';
import { Category } from './types';
import {
  ECONOMIC_METRICS,
  ECONOMIC_CHART_DATA,
  ECONOMIC_GDP_DATA,
  SOCIAL_PIE_DATA,
  SOCIAL_POLL_BARS,
  LOBBYING_TREND,
  POLITICAL_STANCE_PIE,
  POLITICAL_CITATIONS,
  POLITICAL_TOP_FIRM_2025,
  CHATGPT_WAU_DATA,
  CHATGPT_WAU_CITATION,
  PUBLIC_POLLS_CITATION,
  ECONOMIC_HR_ADOPTION_DATA,
  ECONOMIC_TALENT_POOL_DATA,
  ECONOMIC_DATACENTER_DEMAND_DATA,
  ECONOMIC_INVESTMENT_BREAKDOWN_DATA,
  ECONOMIC_INFRA_METRICS,
  ECONOMIC_ADDITIONAL_CITATIONS,
  SOCIAL_METRICS,
  SOCIAL_ADOPTION_BREAKDOWN_DATA,
  SOCIAL_COMPANIONSHIP_DATA,
  SOCIAL_STUDENT_USAGE_DATA,
  SOCIAL_ADDITIONAL_CITATIONS,
  POLITICAL_POLL_DATA,
  CAPABILITY_DOMAIN_SCORES,
  CAPABILITY_CITATION,
} from './data/dashboardData';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Overview');
  const socialPollBarsWithSource = useMemo(() => {
    return SOCIAL_POLL_BARS.map((item) => {
      if (item.q.includes('Teens')) {
        return { ...item, sourceUrl: PUBLIC_POLLS_CITATION.teensUrl };
      }
      if (item.q.includes('daily life')) {
        return { ...item, sourceUrl: PUBLIC_POLLS_CITATION.pewUrl };
      }
      return { ...item, sourceUrl: PUBLIC_POLLS_CITATION.cissmUrl };
    });
  }, []);

  const sourceClass = 'text-blue-400 hover:text-blue-300 underline cursor-pointer';

  const renderEconomic = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <MetricCard title="AI GDP Contribution" value={ECONOMIC_METRICS.gdpContribution.value} description={ECONOMIC_METRICS.gdpContribution.description} cite={ECONOMIC_METRICS.gdpContribution.cite} citeUrl={ECONOMIC_METRICS.gdpContribution.citeUrl} category="Economic" icon={<Icons.Economy />} />
        <MetricCard title="Unemployment Rate (US, Dec 2025)" value={ECONOMIC_METRICS.unemploymentRate.value} description={ECONOMIC_METRICS.unemploymentRate.description} cite={ECONOMIC_METRICS.unemploymentRate.cite} citeUrl={ECONOMIC_METRICS.unemploymentRate.citeUrl} category="Economic" icon={<Icons.Economy />} />
        <MetricCard title="Productivity (AI-exposed industries)" value={ECONOMIC_METRICS.productivityGrowth.value} change={ECONOMIC_METRICS.productivityGrowth.change} description={ECONOMIC_METRICS.productivityGrowth.description} cite={ECONOMIC_METRICS.productivityGrowth.cite} citeUrl={ECONOMIC_METRICS.productivityGrowth.citeUrl} category="Economic" icon={<Icons.Economy />} />
        <MetricCard title="Companies using AI in HR" value={ECONOMIC_METRICS.companiesAiHr.value} description={ECONOMIC_METRICS.companiesAiHr.description} cite={ECONOMIC_METRICS.companiesAiHr.cite} citeUrl={ECONOMIC_METRICS.companiesAiHr.citeUrl} category="Economic" icon={<Icons.Economy />} />
        <MetricCard title="AI Resume Review Adoption" value={ECONOMIC_METRICS.aiResumeReview.value} description={ECONOMIC_METRICS.aiResumeReview.description} cite={ECONOMIC_METRICS.aiResumeReview.cite} citeUrl={ECONOMIC_METRICS.aiResumeReview.citeUrl} category="Economic" icon={<Icons.Economy />} />
        <MetricCard title="AI-led Interview Adoption" value={ECONOMIC_METRICS.aiInterviewProcess.value} description={ECONOMIC_METRICS.aiInterviewProcess.description} cite={ECONOMIC_METRICS.aiInterviewProcess.cite} citeUrl={ECONOMIC_METRICS.aiInterviewProcess.citeUrl} category="Economic" icon={<Icons.Economy />} />
        <MetricCard title="Open AI Positions (Global)" value={ECONOMIC_METRICS.openAiPositionsGlobal.value} description={ECONOMIC_METRICS.openAiPositionsGlobal.description} cite={ECONOMIC_METRICS.openAiPositionsGlobal.cite} citeUrl={ECONOMIC_METRICS.openAiPositionsGlobal.citeUrl} category="Economic" icon={<Icons.Economy />} />
        <MetricCard title="Median Weekly Earnings (Q2 2025)" value={ECONOMIC_METRICS.medianSalary2025.value} description={ECONOMIC_METRICS.medianSalary2025.description} cite={ECONOMIC_METRICS.medianSalary2025.cite} citeUrl={ECONOMIC_METRICS.medianSalary2025.citeUrl} category="Economic" icon={<Icons.Economy />} />
        <MetricCard title="Datacenters (Global)" value={ECONOMIC_INFRA_METRICS.globalDatacenters.value} description={ECONOMIC_INFRA_METRICS.globalDatacenters.description} cite={ECONOMIC_INFRA_METRICS.globalDatacenters.cite} citeUrl={ECONOMIC_INFRA_METRICS.globalDatacenters.citeUrl} category="Economic" icon={<Icons.Economy />} />
        <MetricCard title="Datacenters (US)" value={ECONOMIC_INFRA_METRICS.usDatacenters.value} description={ECONOMIC_INFRA_METRICS.usDatacenters.description} cite={ECONOMIC_INFRA_METRICS.usDatacenters.cite} citeUrl={ECONOMIC_INFRA_METRICS.usDatacenters.citeUrl} category="Economic" icon={<Icons.Economy />} />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 h-80">
          <h3 className="text-white text-sm font-semibold mb-1 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span> AI Growth & Productivity
          </h3>
          <p className="text-slate-500 text-[10px] mb-2">Source: <a href="https://www.pwc.com/gx/en/issues/artificial-intelligence/ai-jobs-barometer.html" target="_blank" rel="noopener noreferrer" className={sourceClass}>PwC 2025 Global AI Jobs Barometer</a></p>
          <ResponsiveContainer width="100%" height="88%">
            <AreaChart data={ECONOMIC_CHART_DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis dataKey="month" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
              <YAxis stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
              <Tooltip cursor={false} contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px', fontSize: '10px' }} />
              <Area type="monotone" dataKey="aiGrowth" stroke="#3b82f6" fill="#3b82f633" name="AI growth (%)" />
              <Area type="monotone" dataKey="productivity" stroke="#10b981" fill="#10b98133" name="Productivity (%)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 h-80">
          <h3 className="text-white text-sm font-semibold mb-1">GDP Breakdown (conceptual)</h3>
          <p className="text-slate-500 text-[10px] mb-2">Source: <a href="https://www.stlouisfed.org/on-the-economy/2026/jan/tracking-ai-contribution-gdp-growth" target="_blank" rel="noopener noreferrer" className={sourceClass}>St. Louis Fed - Tracking AI&apos;s Contribution to GDP Growth</a></p>
          <ResponsiveContainer width="100%" height="88%">
            <BarChart data={ECONOMIC_GDP_DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis dataKey="month" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
              <Tooltip cursor={false} contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px' }} />
              <Bar dataKey="aiGdp" fill="#3b82f6" radius={[4, 4, 0, 0]} name="AI GDP" />
              <Bar dataKey="baseGdp" fill="#10b981" radius={[4, 4, 0, 0]} name="Base GDP" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 h-80">
          <h3 className="text-white text-sm font-semibold mb-1">Open AI Positions vs Talent Pool</h3>
          <p className="text-slate-500 text-[10px] mb-2">Source: <a href={ECONOMIC_ADDITIONAL_CITATIONS.jobs.citeUrl} target="_blank" rel="noopener noreferrer" className={sourceClass}>{ECONOMIC_ADDITIONAL_CITATIONS.jobs.cite}</a></p>
          <ResponsiveContainer width="100%" height="88%">
            <BarChart data={ECONOMIC_TALENT_POOL_DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis dataKey="region" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
              <YAxis stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
              <Tooltip cursor={false} contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px' }} />
              <Legend wrapperStyle={{ fontSize: '10px' }} />
              <Bar dataKey="openPositions" fill="#3b82f6" name="Open positions" radius={[4, 4, 0, 0]} />
              <Bar dataKey="availableTalent" fill="#10b981" name="Available talent" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 h-80">
          <h3 className="text-white text-sm font-semibold mb-1">AI Recruitment Automation (% of companies)</h3>
          <p className="text-slate-500 text-[10px] mb-2">Source: <a href="https://www.pwc.com/gx/en/issues/artificial-intelligence/ai-jobs-barometer.html" target="_blank" rel="noopener noreferrer" className={sourceClass}>PwC 2025 Global AI Jobs Barometer</a></p>
          <ResponsiveContainer width="100%" height="88%">
            <BarChart data={ECONOMIC_HR_ADOPTION_DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis dataKey="label" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
              <YAxis stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
              <Tooltip cursor={false} formatter={(v: number) => [`${v}%`, 'Share']} contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px' }} />
              <Bar dataKey="value" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 h-80">
          <h3 className="text-white text-sm font-semibold mb-1">Datacenter Demand Forecast (GW)</h3>
          <p className="text-slate-500 text-[10px] mb-2">Source: <a href={ECONOMIC_ADDITIONAL_CITATIONS.datacenterDemand.citeUrl} target="_blank" rel="noopener noreferrer" className={sourceClass}>{ECONOMIC_ADDITIONAL_CITATIONS.datacenterDemand.cite}</a></p>
          <ResponsiveContainer width="100%" height="88%">
            <LineChart data={ECONOMIC_DATACENTER_DEMAND_DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis dataKey="year" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
              <YAxis stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
              <Tooltip cursor={false} contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px' }} />
              <Legend wrapperStyle={{ fontSize: '10px' }} />
              <Line type="monotone" dataKey="total" stroke="#3b82f6" name="Total GW" strokeWidth={2} />
              <Line type="monotone" dataKey="ai" stroke="#10b981" name="AI GW" strokeWidth={2} />
              <Line type="monotone" dataKey="nonAi" stroke="#f59e0b" name="Non-AI GW" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 h-80">
          <h3 className="text-white text-sm font-semibold mb-1">Compute Investment Split by Industry</h3>
          <p className="text-slate-500 text-[10px] mb-2">Source: <a href={ECONOMIC_ADDITIONAL_CITATIONS.datacenterDemand.citeUrl} target="_blank" rel="noopener noreferrer" className={sourceClass}>{ECONOMIC_ADDITIONAL_CITATIONS.datacenterDemand.cite}</a></p>
          <ResponsiveContainer width="100%" height="88%">
            <PieChart>
              <Pie data={ECONOMIC_INVESTMENT_BREAKDOWN_DATA} dataKey="pct" nameKey="sector" innerRadius={60} outerRadius={85} paddingAngle={4}>
                {ECONOMIC_INVESTMENT_BREAKDOWN_DATA.map((_, i) => <Cell key={i} fill={COLORS.chart[i % COLORS.chart.length]} />)}
              </Pie>
              <Tooltip cursor={false} formatter={(v: number, _name, props) => [`${v}% (${props.payload.amount})`, 'Allocation']} />
              <Legend wrapperStyle={{ fontSize: '10px' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  const renderSocial = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <MetricCard title="People Using AI Globally" value={SOCIAL_METRICS.globalAiUsers.value} description={SOCIAL_METRICS.globalAiUsers.description} cite={SOCIAL_METRICS.globalAiUsers.cite} citeUrl={SOCIAL_METRICS.globalAiUsers.citeUrl} category="Social" icon={<Icons.Social />} />
        <MetricCard title="US Adults Who Have Used AI" value={SOCIAL_METRICS.usAdultsUsedAi.value} description={SOCIAL_METRICS.usAdultsUsedAi.description} cite={SOCIAL_METRICS.usAdultsUsedAi.cite} citeUrl={SOCIAL_METRICS.usAdultsUsedAi.citeUrl} category="Social" icon={<Icons.Social />} />
        <MetricCard title="US Teens Using AI Daily" value={SOCIAL_METRICS.usTeensDailyAi.value} description={SOCIAL_METRICS.usTeensDailyAi.description} cite={SOCIAL_METRICS.usTeensDailyAi.cite} citeUrl={SOCIAL_METRICS.usTeensDailyAi.citeUrl} category="Social" icon={<Icons.Social />} />
        <MetricCard title="US Adults in AI Relationship" value={SOCIAL_METRICS.aiRomanticRelationship.value} description={SOCIAL_METRICS.aiRomanticRelationship.description} cite={SOCIAL_METRICS.aiRomanticRelationship.cite} citeUrl={SOCIAL_METRICS.aiRomanticRelationship.citeUrl} category="Social" icon={<Icons.Social />} />
        <MetricCard title="Gen Z Considering AI Marriage" value={SOCIAL_METRICS.genZMarryAi.value} description={SOCIAL_METRICS.genZMarryAi.description} cite={SOCIAL_METRICS.genZMarryAi.cite} citeUrl={SOCIAL_METRICS.genZMarryAi.citeUrl} category="Social" icon={<Icons.Social />} />
        <MetricCard title="Students Use AI for Mental Health" value={SOCIAL_METRICS.studentsMentalHealthAi.value} description={SOCIAL_METRICS.studentsMentalHealthAi.description} cite={SOCIAL_METRICS.studentsMentalHealthAi.cite} citeUrl={SOCIAL_METRICS.studentsMentalHealthAi.citeUrl} category="Social" icon={<Icons.Social />} />
        <MetricCard title="Students Use AI as Companion" value={SOCIAL_METRICS.studentsCompanionAi.value} description={SOCIAL_METRICS.studentsCompanionAi.description} cite={SOCIAL_METRICS.studentsCompanionAi.cite} citeUrl={SOCIAL_METRICS.studentsCompanionAi.citeUrl} category="Social" icon={<Icons.Social />} />
        <MetricCard title="Little/No AI Control (US adults)" value={SOCIAL_METRICS.littleNoControl.value} description={SOCIAL_METRICS.littleNoControl.description} cite={SOCIAL_METRICS.littleNoControl.cite} citeUrl={SOCIAL_METRICS.littleNoControl.citeUrl} category="Social" icon={<Icons.Social />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-800 lg:col-span-2 h-80">
          <h3 className="text-white text-sm font-semibold mb-1">Control over AI use (US adults)</h3>
          <p className="text-slate-500 text-[10px] mb-2">Source: <a href="https://www.pewresearch.org/internet/2025/04/03/artificial-intelligence-in-daily-life-views-and-experiences/" target="_blank" rel="noopener noreferrer" className={sourceClass}>AI in daily life: Views and experiences | Pew Research Center</a></p>
          <ResponsiveContainer width="100%" height="88%">
            <PieChart>
              <Pie data={SOCIAL_PIE_DATA} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                {SOCIAL_PIE_DATA.map((_, i) => <Cell key={i} fill={COLORS.chart[i % COLORS.chart.length]} />)}
              </Pie>
              <Tooltip cursor={false} formatter={(v: number) => `${v}%`} />
              <Legend wrapperStyle={{ fontSize: '10px' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-800 space-y-4">
          <h3 className="text-white text-sm font-semibold mb-1">Public Polls (% agree or use)</h3>
          <p className="text-slate-500 text-[10px] mb-3">
            Sources: <a href={PUBLIC_POLLS_CITATION.pewUrl} target="_blank" rel="noopener noreferrer" className={sourceClass}>Pew Research (AI in daily life)</a>, <a href={PUBLIC_POLLS_CITATION.teensUrl} target="_blank" rel="noopener noreferrer" className={sourceClass}>Pew (teens & AI)</a>, <a href={PUBLIC_POLLS_CITATION.cissmUrl} target="_blank" rel="noopener noreferrer" className={sourceClass}>CISSM Maryland (regulation)</a>.
          </p>
          {socialPollBarsWithSource.map((p, i) => (
            <div key={i} className="space-y-1">
              <div className="flex justify-between text-[10px] text-slate-400 uppercase font-bold">
                <span>{p.q}</span>
                <span>{p.v}%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div style={{ width: `${p.v}%` }} className="bg-blue-500 h-full"></div>
              </div>
              <a href={p.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-500 hover:text-slate-300 underline">source</a>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 h-80">
          <h3 className="text-white text-sm font-semibold mb-1">AI Adoption by Region (% of population)</h3>
          <p className="text-slate-500 text-[10px] mb-2">Source: <a href={SOCIAL_METRICS.globalAiUsers.citeUrl} target="_blank" rel="noopener noreferrer" className={sourceClass}>{SOCIAL_METRICS.globalAiUsers.cite}</a></p>
          <ResponsiveContainer width="100%" height="88%">
            <BarChart data={SOCIAL_ADOPTION_BREAKDOWN_DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis dataKey="group" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
              <YAxis stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
              <Tooltip cursor={false} formatter={(v: number) => [`${v}%`, 'Adoption']} contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px' }} />
              <Bar dataKey="pct" fill="#06b6d4" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 h-80">
          <h3 className="text-white text-sm font-semibold mb-1">AI Companionship & Dating Signals</h3>
          <p className="text-slate-500 text-[10px] mb-2">Sources: <a href={SOCIAL_METRICS.aiRomanticRelationship.citeUrl} target="_blank" rel="noopener noreferrer" className={sourceClass}>Vantage Point Dallas Counseling</a>, <a href={SOCIAL_METRICS.genZMarryAi.citeUrl} target="_blank" rel="noopener noreferrer" className={sourceClass}>Mashable</a>, <a href={SOCIAL_ADDITIONAL_CITATIONS.singlesDating.citeUrl} target="_blank" rel="noopener noreferrer" className={sourceClass}>Match + Kinsey</a></p>
          <ResponsiveContainer width="100%" height="88%">
            <BarChart data={SOCIAL_COMPANIONSHIP_DATA} layout="vertical" margin={{ left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
              <XAxis type="number" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
              <YAxis type="category" dataKey="group" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} width={165} />
              <Tooltip cursor={false} formatter={(v: number) => [`${v}%`, 'Share']} contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px' }} />
              <Bar dataKey="pct" fill="#ec4899" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 h-80">
        <h3 className="text-white text-sm font-semibold mb-1">How US students use AI companions</h3>
        <p className="text-slate-500 text-[10px] mb-2">Source: <a href={SOCIAL_METRICS.studentsMentalHealthAi.citeUrl} target="_blank" rel="noopener noreferrer" className={sourceClass}>CDT 2025 Hand-in-Hand Polling</a></p>
        <ResponsiveContainer width="100%" height="88%">
          <BarChart data={SOCIAL_STUDENT_USAGE_DATA}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
            <XAxis dataKey="use" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
            <YAxis stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
            <Tooltip cursor={false} formatter={(v: number) => [`${v}%`, 'Students']} contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px' }} />
            <Bar dataKey="pct" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const renderPolitical = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <MetricCard title="Total AI/Tech Lobbying (2025)" value="$93.6" unit="M" description="Combined lobbying spend (Meta, Amazon, Alphabet, Microsoft, Oracle, Nvidia, OpenAI, Anthropic, Cohere)." cite={POLITICAL_CITATIONS.lobbying} citeUrl={POLITICAL_CITATIONS.lobbyingUrl} category="Political" icon={<Icons.Political />} />
        <MetricCard title="Frontier AI Labs Lobbying (2025)" value="$4.54" unit="M" description="OpenAI, Anthropic, Cohere. Data from 2023." cite="OpenSecrets (OpenSecrets.org)" citeUrl="https://www.opensecrets.org/" category="Political" icon={<Icons.Political />} />
        <MetricCard title="Support gov't test before AI use" value="79%" description="Americans who support requiring AI programs to pass a government test." cite={POLITICAL_CITATIONS.regulationPoll} citeUrl={POLITICAL_CITATIONS.regulationPollUrl} category="Political" icon={<Icons.Political />} />
        <MetricCard title="Prohibit deepfakes in campaigns" value="80%" description="Americans who support prohibiting deepfakes in political ads." cite={POLITICAL_CITATIONS.regulationPoll} citeUrl={POLITICAL_CITATIONS.regulationPollUrl} category="Political" icon={<Icons.Political />} />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 h-80">
          <h3 className="text-white text-sm font-semibold mb-1">Lobbying Expenditure Trend ($M, selected firms)</h3>
          <p className="text-slate-500 text-[10px] mb-2">Source: <a href={POLITICAL_CITATIONS.lobbyingUrl} target="_blank" rel="noopener noreferrer" className={sourceClass}>OpenSecrets - Lobbying on AI reaches new heights</a>. Includes Frontier Labs (from 2023) + Meta, Amazon, Alphabet, Microsoft, Oracle, Nvidia.</p>
          <ResponsiveContainer width="100%" height="85%">
            <BarChart data={LOBBYING_TREND}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis dataKey="year" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
              <Tooltip cursor={false} contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px' }} formatter={(v: number) => [`$${v}M`, 'Total']} />
              <Bar dataKey="amount" fill="#8b5cf6" radius={[4, 4, 0, 0]} name="Total ($M)" />
              <Bar dataKey="frontierLabs" fill="#22d3ee" radius={[4, 4, 0, 0]} name="Frontier labs ($M)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 h-80">
          <h3 className="text-white text-sm font-semibold mb-1">Favor government regulating AI</h3>
          <p className="text-slate-500 text-[10px] mb-2">Source: <a href={POLITICAL_CITATIONS.regulationPollUrl} target="_blank" rel="noopener noreferrer" className={sourceClass}>CISSM Maryland - Majorities favor government regulating AI</a></p>
          <ResponsiveContainer width="100%" height="88%">
            <PieChart>
              <Pie data={POLITICAL_STANCE_PIE} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                {POLITICAL_STANCE_PIE.map((_, i) => <Cell key={i} fill={COLORS.chart[(i + 2) % COLORS.chart.length]} />)}
              </Pie>
              <Tooltip cursor={false} formatter={(v: number) => `${v}%`} />
              <Legend wrapperStyle={{ fontSize: '10px' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 h-80">
          <h3 className="text-white text-sm font-semibold mb-1">Top Firm Lobbying Spend (2025, $M)</h3>
          <p className="text-slate-500 text-[10px] mb-2">Source: <a href={POLITICAL_CITATIONS.lobbyingUrl} target="_blank" rel="noopener noreferrer" className={sourceClass}>OpenSecrets company profiles</a></p>
          <ResponsiveContainer width="100%" height="88%">
            <BarChart data={POLITICAL_TOP_FIRM_2025}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis dataKey="firm" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
              <YAxis stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
              <Tooltip cursor={false} formatter={(v: number) => [`$${v}M`, 'Spend']} contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px' }} />
              <Bar dataKey="amount" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 h-80">
          <h3 className="text-white text-sm font-semibold mb-1">Policy Support Breakdown</h3>
          <p className="text-slate-500 text-[10px] mb-2">Source: <a href={POLITICAL_CITATIONS.regulationPollUrl} target="_blank" rel="noopener noreferrer" className={sourceClass}>CISSM Maryland</a></p>
          <ResponsiveContainer width="100%" height="88%">
            <BarChart data={POLITICAL_POLL_DATA} layout="vertical" margin={{ left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
              <XAxis type="number" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
              <YAxis type="category" dataKey="name" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} width={180} />
              <Tooltip cursor={false} formatter={(v: number) => [`${v}%`, 'Support']} contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px' }} />
              <Bar dataKey="value" fill="#10b981" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  const renderCapability = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <MetricCard
          title="Average Capability Score"
          value={(CAPABILITY_DOMAIN_SCORES.reduce((sum, x) => sum + x.score, 0) / CAPABILITY_DOMAIN_SCORES.length).toFixed(2)}
          description="Mean score across OECD capability domains (1 to 5 scale)."
          cite={CAPABILITY_CITATION.cite}
          citeUrl={CAPABILITY_CITATION.citeUrl}
          category="Capability"
          icon={<Icons.Dashboard />}
        />
        <MetricCard
          title="Highest Domain Score"
          value="3"
          description="Language, creativity, knowledge/memory, and vision domains are at level 3."
          cite={CAPABILITY_CITATION.cite}
          citeUrl={CAPABILITY_CITATION.citeUrl}
          category="Capability"
          icon={<Icons.Dashboard />}
        />
        <MetricCard
          title="Baseline Robotic Score"
          value="2"
          description="Robotic intelligence is listed at level 2 in the spreadsheet's OECD block."
          cite={CAPABILITY_CITATION.cite}
          citeUrl={CAPABILITY_CITATION.citeUrl}
          category="Capability"
          icon={<Icons.Dashboard />}
        />
        <MetricCard
          title="Domains Covered"
          value={CAPABILITY_DOMAIN_SCORES.length}
          description="Number of capability domains represented in the spreadsheet."
          cite={CAPABILITY_CITATION.cite}
          citeUrl={CAPABILITY_CITATION.citeUrl}
          category="Capability"
          icon={<Icons.Dashboard />}
        />
      </div>

      <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 h-[420px]">
        <h3 className="text-white text-sm font-semibold mb-1">OECD Capability Domains (1-5 scale)</h3>
        <p className="text-slate-500 text-[10px] mb-2">Source: <a href={CAPABILITY_CITATION.citeUrl} target="_blank" rel="noopener noreferrer" className={sourceClass}>{CAPABILITY_CITATION.cite}</a></p>
        <ResponsiveContainer width="100%" height="88%">
          <BarChart data={CAPABILITY_DOMAIN_SCORES} layout="vertical" margin={{ left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
            <XAxis type="number" domain={[0, 5]} stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
            <YAxis type="category" dataKey="domain" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} width={140} />
            <Tooltip cursor={false} contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px' }} />
            <Bar dataKey="score" fill="#06b6d4" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );

  const navItemClass = (cat: Category) => `
    flex items-center justify-center gap-2.5 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap
    ${activeCategory === cat 
      ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20' 
      : 'text-slate-500 hover:text-slate-300 hover:bg-slate-900/50 border border-transparent'}
  `;

  return (
    <div className="h-screen w-full bg-slate-950 flex flex-col font-sans overflow-hidden">
      {/* Top Navigation */}
      <nav className="w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40 px-5 py-3 lg:px-8 flex items-center justify-between shrink-0">
        <button 
          onClick={() => setActiveCategory('Overview')} 
          className={navItemClass('Overview')}
        >
          <span className="flex items-center justify-center w-5 h-5 opacity-80"><Icons.Dashboard /></span>
          <span className="pt-0.5">Overview</span>
        </button>

        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
          {(['Economic', 'Social', 'Political', 'Capability'] as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={navItemClass(cat)}
            >
              <span className="flex items-center justify-center w-5 h-5 opacity-80">
                {cat === 'Economic' && <Icons.Economy />}
                {cat === 'Social' && <Icons.Social />}
                {cat === 'Political' && <Icons.Political />}
                {cat === 'Capability' && <Icons.Dashboard />}
              </span>
              <span className="pt-0.5">{cat}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Content Area */}
      <main className="flex-1 overflow-y-auto p-5 lg:p-8 space-y-6 scroll-smooth custom-scroll">
        <header>
          <h1 className="text-xl lg:text-2xl font-bold text-white tracking-tight">{activeCategory} Metrics</h1>
        </header>

        <div className="animate-in fade-in slide-in-from-bottom-2 duration-700">
          {activeCategory === 'Overview' && (
            <div className="space-y-12">
              <section className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 lg:p-8 max-w-5xl space-y-4">
                <div className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-400">
                  Free AI Transparency Dashboard
                </div>
                <h2 className="text-2xl lg:text-4xl font-bold text-white tracking-tight leading-tight max-w-4xl">
                  Evaluate AI&apos;s social, political, and economic impact with open metrics.
                </h2>
                <p className="text-slate-300 text-sm lg:text-base leading-relaxed max-w-3xl">
                  Track capability progress and real-world outcomes in one place, completely free, so everyone can better understand AI consequences, good or bad.
                </p>
              </section>
              <section className="p-4 bg-slate-900/40 border border-slate-800 rounded-xl max-w-5xl">
                <div className="flex items-center gap-2 mb-2 text-blue-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-[10px] uppercase font-black tracking-widest">Synthesis</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  AI adoption is scaling faster than institutions are adapting: ChatGPT weekly users rose from 100M to 700M (2023-2025) while productivity in AI-exposed sectors reached 27% and AI-linked GDP contribution keeps rising, yet labor markets still show a talent bottleneck (1.63M open global AI roles vs 518K available talent). At the same time, social and political signals show a legitimacy gap, with 59% of adults reporting little or no control over AI, even as strong majorities support safeguards (79% for pre-deployment testing, 80% for deepfake limits), while capability scores cluster at level 2-3, suggesting broad deployment pressure before higher-order reliability is fully mature.
                </p>
              </section>
              <section>
                <label className="text-slate-500 text-[9px] uppercase font-black tracking-widest mb-4 block">ChatGPT Adoption</label>
                <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 h-[360px] mb-6">
                  <h3 className="text-white text-sm font-semibold mb-1">Weekly Active Users (WAU) — millions</h3>
                  <p className="text-slate-500 text-[10px] mb-2">Source: <a href={CHATGPT_WAU_CITATION.citeUrl} target="_blank" rel="noopener noreferrer" className={sourceClass}>{CHATGPT_WAU_CITATION.cite}</a></p>
                  <ResponsiveContainer width="100%" height="84%">
                    <AreaChart data={CHATGPT_WAU_DATA}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                      <XAxis dataKey="year" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                      <YAxis stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                      <Tooltip cursor={false} contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px', fontSize: '10px' }} formatter={(v: number, _k, p) => [p?.dataKey === 'wau' ? `${v}M` : `${v}%`, p?.dataKey === 'wau' ? 'WAU' : 'Adult population share']} />
                      <Legend wrapperStyle={{ fontSize: '10px' }} />
                      <Area type="monotone" dataKey="wau" stroke="#06b6d4" fill="#06b6d433" name="WAU (millions)" />
                      <Area type="monotone" dataKey="pctAdults" stroke="#3b82f6" fill="#3b82f622" name="% of world's adult population" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </section>
              <section>
                <label className="text-slate-500 text-[9px] uppercase font-black tracking-widest mb-4 block">Key Economic Indicators</label>
                {renderEconomic()}
              </section>
              <section>
                <label className="text-slate-500 text-[9px] uppercase font-black tracking-widest mb-4 block">Social Adoption & Perception</label>
                {renderSocial()}
              </section>
              <section>
                <label className="text-slate-500 text-[9px] uppercase font-black tracking-widest mb-4 block">Political Influence & Governance</label>
                {renderPolitical()}
              </section>
              <section>
                <label className="text-slate-500 text-[9px] uppercase font-black tracking-widest mb-4 block">Capability Tracking</label>
                {renderCapability()}
              </section>
            </div>
          )}
          {activeCategory === 'Economic' && renderEconomic()}
          {activeCategory === 'Social' && renderSocial()}
          {activeCategory === 'Political' && renderPolitical()}
          {activeCategory === 'Capability' && renderCapability()}
        </div>

        <footer className="pt-10 border-t border-slate-900/50">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-[11px] text-slate-500">
            <span>&copy; {new Date().getFullYear()} AI Impact Monitor. All rights reserved.</span>
            <span className="text-slate-400">Free, citation-backed tracking of AI economic, social, political, and capability outcomes.</span>
            <div className="flex items-center gap-4">
              <span>Methodology: Public-source aggregation</span>
              <span>Coverage: Global and U.S. indicators</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
