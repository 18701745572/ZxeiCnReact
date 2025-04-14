import React from 'react';
import { IconProps } from '../types';
import { DEFAULT_ICON_COLOR, DEFAULT_ICON_SIZE } from '../../common/constants';

const TextFill: React.FC<IconProps> = ({ 
  size = DEFAULT_ICON_SIZE, 
  color = DEFAULT_ICON_COLOR,
  title,
  ...rest
}) => {
  return (
    <svg  width={size} height={size}><g fill="none"><path d="M0 0h24v24H0z"/><path fill={color} d="M5 3.5a1.5 1.5 0 1 0 0 3h5.5V20a1.5 1.5 0 0 0 3 0V6.5H19a1.5 1.5 0 0 0 0-3z"/></g></svg>
  );
};

export default TextFill;
