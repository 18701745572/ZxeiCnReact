import React from 'react';
import { IconProps } from '../types';
import { DEFAULT_ICON_COLOR, DEFAULT_ICON_SIZE } from '../../common/constants';

const TextLine: React.FC<IconProps> = ({ 
  size = DEFAULT_ICON_SIZE, 
  color = DEFAULT_ICON_COLOR,
  title,
  ...rest
}) => {
  return (
    <svg  width={size} height={size}><g fill="none"><path d="M0 0h24v24H0z"/><path fill={color} d="M5 4a1 1 0 0 0 0 2h6v14a1 1 0 1 0 2 0V6h6a1 1 0 1 0 0-2z"/></g></svg>
  );
};

export default TextLine;
