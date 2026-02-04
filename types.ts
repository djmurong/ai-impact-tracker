
import React from 'react';

export type Category = 'Economic' | 'Social' | 'Political' | 'Overview';

export interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number;
  unit?: string;
  description: string;
  icon: React.ReactNode;
  category: Category;
}

export interface ChartData {
  label: string;
  value: number;
  secondary?: number;
}