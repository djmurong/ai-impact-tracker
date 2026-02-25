import React from 'react';
import type { MetricCardProps } from '@/types';
import { SOURCE_LINK_CLASS } from '@/config/styles';

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  unit,
  description,
  cite,
  citeUrl,
  icon,
}) => {
  return (
    <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-4 sm:p-6 hover:border-blue-400/50 dark:hover:border-blue-500/50 transition-all duration-300 group shadow-sm dark:shadow-none">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        {change !== undefined && (
          <span
            className={`text-xs font-bold px-2 py-1 rounded-full ${
              change >= 0
                ? 'bg-emerald-500/15 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400'
                : 'bg-red-500/15 text-red-600 dark:bg-red-500/10 dark:text-red-400'
            }`}
          >
            {change >= 0 ? '+' : ''}
            {change}%
          </span>
        )}
      </div>
      <div className="space-y-1">
        <h3 className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium leading-snug">{title}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">{value}</span>
          {unit && <span className="text-slate-500 text-xs sm:text-sm">{unit}</span>}
        </div>
        <p className="text-slate-500 text-[11px] sm:text-xs mt-2 leading-relaxed">{description}</p>
        {(cite || citeUrl) && (
          <p className="text-slate-500 dark:text-slate-600 text-[10px] mt-2 leading-snug border-t border-slate-200 dark:border-slate-800/80 pt-2">
            <span className="text-slate-500 uppercase tracking-wider font-semibold">Source: </span>
            {citeUrl ? (
              <a
                href={citeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={SOURCE_LINK_CLASS}
              >
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
