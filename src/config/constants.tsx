import {
  DollarSign,
  Users,
  Landmark,
  LayoutDashboard,
  Brain,
  Info,
  ExternalLink,
} from 'lucide-react';

/** Lively but not harsh: rich saturation, moderate brightness */
export const COLORS = {
  primary: '#4a90d9',   // clear blue
  secondary: '#2eb87a', // clear emerald
  accent: '#8a7acc',    // clear violet
  danger: '#d96060',    // clear red
  warning: '#d4a020',   // warm gold
  dark: '#0f172a',
  chart: ['#4a90d9', '#2eb87a', '#8a7acc', '#d4a020', '#3db8b8', '#c97a9e'],
};

const iconProps = { size: 20 };
const iconPropsSmall = { size: 18 };
const iconPropsTiny = { size: 14 };

export const Icons = {
  Economy: () => <DollarSign {...iconProps} />,
  Social: () => <Users {...iconProps} />,
  Political: () => <Landmark {...iconProps} />,
  Dashboard: () => <LayoutDashboard {...iconProps} />,
  Capability: () => <Brain {...iconProps} />,
  About: () => <Info {...iconProps} />,
  Info: () => <Info {...iconPropsSmall} />,
  ExternalLink: () => <ExternalLink {...iconPropsTiny} />,
};
