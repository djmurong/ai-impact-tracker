
import React from 'react';
import { MetricCardProps } from '../types';
import { Icons } from '../constants';

export const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  change, 
  unit, 
  description, 
  cite,
  citeUrl,
  icon 
}) => {
  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 sm:p-6 hover:border-blue-500/50 transition-all duration-300 group">
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
        <h3 className="text-slate-400 text-xs sm:text-sm font-medium leading-snug">{title}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{value}</span>
          {unit && <span className="text-slate-500 text-xs sm:text-sm">{unit}</span>}
        </div>
        <p className="text-slate-500 text-[11px] sm:text-xs mt-2 leading-relaxed">
          {description}
        </p>
        {(cite || citeUrl) && (
          <p className="text-slate-600 text-[10px] mt-2 leading-snug border-t border-slate-800/80 pt-2">
            <span className="text-slate-500 uppercase tracking-wider font-semibold">Source: </span>
            {citeUrl ? (
              <a href={citeUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline cursor-pointer">
                {cite || citeUrl}
              </a>
            ) : (
              <span>{cite}</span>
            )}
          </p>
        )}
      </div>
    </div>
  );
};
