
import React from 'react';
import { MetricCardProps } from '../types';
import { Icons } from '../constants';

export const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  change, 
  unit, 
  description, 
  icon 
}) => {
  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        {change !== undefined && (
          <span className={`text-xs font-bold px-2 py-1 rounded-full ${
            change >= 0 ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'
          }`}>
            {change >= 0 ? '+' : ''}{change}%
          </span>
        )}
      </div>
      <div className="space-y-1">
        <h3 className="text-slate-400 text-sm font-medium">{title}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold text-white tracking-tight">{value}</span>
          {unit && <span className="text-slate-500 text-sm">{unit}</span>}
        </div>
        <p className="text-slate-500 text-xs mt-2 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
