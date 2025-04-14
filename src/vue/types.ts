import { DefineComponent } from 'vue';

export interface IconProps {
  size?: string | number;
  color?: string;
  title?: string;
  class?: string;
  style?: Record<string, string>;
}

export type IconComponent = DefineComponent<IconProps>; 