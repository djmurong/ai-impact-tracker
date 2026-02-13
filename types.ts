
import React from 'react';

export type Category = 'Economic' | 'Social' | 'Political' | 'Capability' | 'Overview';

export interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number;
  unit?: string;
  description: string;
  cite?: string;
  citeUrl?: string;
  icon: React.ReactNode;
  category: Category;
}

export interface ChartData {
  label: string;
  value: number;
  secondary?: number;
}