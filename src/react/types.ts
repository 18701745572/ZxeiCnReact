import * as React from 'react';

export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: string | number;
  color?: string;
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}

export type IconComponent = React.FC<IconProps>; 