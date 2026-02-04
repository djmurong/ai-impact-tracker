
import React, { useState } from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  BarChart, Bar, PieChart, Pie, Cell, Legend
} from 'recharts';
import { Icons, COLORS } from './constants';
import { MetricCard } from './components/MetricCard';
import { Category } from './types';

// Baseline data mocks
const ECONOMIC_DATA = [
  { month: 'Q1', aiGdp: 1.2, baseGdp: 2.1, unemployment: 3.8, aiGrowth: 15 },
  { month: 'Q2', aiGdp: 1.5, baseGdp: 2.0, unemployment: 3.9, aiGrowth: 22 },
  { month: 'Q3', aiGdp: 1.9, baseGdp: 1.8, unemployment: 4.1, aiGrowth: 31 },
  { month: 'Q4', aiGdp: 2.4, baseGdp: 1.7, unemployment: 4.2, aiGrowth: 45 },
];

const SOCIAL_DATA = [
  { name: 'Support', value: 35 },
  { name: 'Work', value: 45 },
  { name: 'Learning', value: 15 },
  { name: 'Other', value: 5 },
];

const POLITICAL_POLL_DATA = [
  { name: 'Pro-Innovation', value: 42 },
  { name: 'Regulation-First', value: 38 },
  { name: 'Neutral/Undecided', value: 20 },
];

const LOBBYING_TREND = [
  { year: '2021', amount: 45 },
  { year: '2022', amount: 72 },
  { year: '2023', amount: 110 },
  { year: '2024', amount: 142 },
];

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Overview');

  const renderEconomic = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <MetricCard title="AI GDP Share" value="$2.4" unit="T" change={12} description="Quarterly contribution estimated by Fed benchmarks." category="Economic" icon={<Icons.Economy />} />
        <MetricCard title="AI Workforce" value="4.2M" change={8} description="Direct workforce in AI development sector." category="Economic" icon={<Icons.Economy />} />
        <MetricCard title="Efficiency Gains" value="3.1%" change={1} description="Productivity delta vs historical averages." category="Economic" icon={<Icons.Economy />} />
        <MetricCard title="Automation" value="68%" description="Companies using AI for core HR processes." category="Economic" icon={<Icons.Economy />} />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 h-80">
          <h3 className="text-white text-sm font-semibold mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span> Employment Delta
          </h3>
          <ResponsiveContainer width="100%" height="90%">
            <AreaChart data={ECONOMIC_DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis dataKey="month" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
              <YAxis stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px', fontSize: '10px' }} />
              <Area type="monotone" dataKey="aiGrowth" stroke="#3b82f6" fill="#3b82f633" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 h-80">
          <h3 className="text-white text-sm font-semibold mb-4">GDP Breakdown</h3>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={ECONOMIC_DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis dataKey="month" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
              <Tooltip cursor={{fill: '#1e293b'}} contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px' }} />
              <Bar dataKey="aiGdp" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="baseGdp" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  const renderSocial = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-800 lg:col-span-2 h-80">
          <h3 className="text-white text-sm font-semibold mb-4">Companion Adoption</h3>
          <ResponsiveContainer width="100%" height="90%">
            <PieChart>
              <Pie data={SOCIAL_DATA} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                {SOCIAL_DATA.map((_, i) => <Cell key={i} fill={COLORS.chart[i % COLORS.chart.length]} />)}
              </Pie>
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: '10px' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-800 space-y-4">
          <h3 className="text-white text-sm font-semibold">Public Polls</h3>
          {[{q: "AI Job Threat", v: 62}, {q: "Medical Trust", v: 45}, {q: "Regulation Needs", v: 88}].map((p, i) => (
            <div key={i} className="space-y-1">
              <div className="flex justify-between text-[10px] text-slate-400 uppercase font-bold">
                <span>{p.q}</span>
                <span>{p.v}% Agreed</span>
              </div>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div style={{ width: `${p.v}%` }} className="bg-blue-500 h-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPolitical = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <MetricCard title="AI Lobbying Spend" value="$142" unit="M" change={22} description="Annual lobbying expenditure by top 10 AI firms." category="Political" icon={<Icons.Political />} />
        <MetricCard title="Deepfake Incidents" value="4,820" change={150} description="Confirmed cases of AI-generated misinformation in elections." category="Political" icon={<Icons.Political />} />
        <MetricCard title="Politician AI Stakes" value="$860" unit="M" change={15} description="Total estimated value of AI firm equity held by legislators." category="Political" icon={<Icons.Political />} />
        <MetricCard title="Legislative Trust" value="42%" change={-5} description="Public polling on political competence regarding AI oversight." category="Political" icon={<Icons.Political />} />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 h-80">
          <h3 className="text-white text-sm font-semibold mb-4">Lobbying Expenditure Trend (Millions)</h3>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={LOBBYING_TREND}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis dataKey="year" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
              <Tooltip cursor={{fill: '#1e293b'}} contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px' }} />
              <Bar dataKey="amount" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 h-80">
          <h3 className="text-white text-sm font-semibold mb-4">Politician Stance Polling</h3>
          <ResponsiveContainer width="100%" height="90%">
            <PieChart>
              <Pie data={POLITICAL_POLL_DATA} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                {POLITICAL_POLL_DATA.map((_, i) => <Cell key={i} fill={COLORS.chart[(i + 2) % COLORS.chart.length]} />)}
              </Pie>
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: '10px' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
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
          {(['Economic', 'Social', 'Political'] as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={navItemClass(cat)}
            >
              <span className="flex items-center justify-center w-5 h-5 opacity-80">
                {cat === 'Economic' && <Icons.Economy />}
                {cat === 'Social' && <Icons.Social />}
                {cat === 'Political' && <Icons.Political />}
              </span>
              <span className="pt-0.5">{cat}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Content Area */}
      <main className="flex-1 overflow-y-auto p-5 lg:p-8 space-y-6 scroll-smooth custom-scroll">
        <header className="space-y-4">
          <h1 className="text-xl lg:text-2xl font-bold text-white tracking-tight">{activeCategory} Metrics</h1>
          
          <div className="p-4 bg-slate-900/40 border border-slate-800 rounded-xl max-w-4xl">
             <div className="flex items-center gap-2 mb-2 text-blue-400">
               <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
               <span className="text-[10px] uppercase font-black tracking-widest">Synthesis</span>
             </div>
             <p className="text-slate-400 text-sm leading-relaxed">
               Current aggregate trends indicate a sharp acceleration in the deployment of multimodal systems across key industrial sectors. 
               Economic markers suggest an evolving relationship between algorithmic efficiency and capital allocation, 
               while public discourse focuses increasingly on the equilibrium between rapid innovation and institutional oversight.
             </p>
          </div>
        </header>

        <div className="animate-in fade-in slide-in-from-bottom-2 duration-700">
          {activeCategory === 'Overview' && (
            <div className="space-y-12">
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
            </div>
          )}
          {activeCategory === 'Economic' && renderEconomic()}
          {activeCategory === 'Social' && renderSocial()}
          {activeCategory === 'Political' && renderPolitical()}
        </div>

        <footer className="pt-10 border-t border-slate-900/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-[9px] text-slate-600 uppercase tracking-widest font-bold">
          <span>&copy; 2024 AI Impact Monitor</span>
          <div className="flex gap-4">
            <span className="text-blue-500/50">System: Operational</span>
            <span>Grounding: Active</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
