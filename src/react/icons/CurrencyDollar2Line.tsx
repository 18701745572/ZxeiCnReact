import React from 'react';
import { IconProps } from '../types';
import { DEFAULT_ICON_COLOR, DEFAULT_ICON_SIZE } from '../../common/constants';

const CurrencyDollar2Line: React.FC<IconProps> = ({ 
  size = DEFAULT_ICON_SIZE, 
  color = DEFAULT_ICON_COLOR,
  title,
  ...rest
}) => {
  return (
    <svg  width={size} height={size}><g fill="none"><path d="M0 0h24v24H0z"/><path fill={color} d="M13 4a1 1 0 1 0-2 0v1H9.5a4 4 0 1 0 0 8h5a2 2 0 1 1 0 4H7a1 1 0 1 0 0 2h4v1a1 1 0 1 0 2 0v-1h1.5a4 4 0 0 0 0-8h-5a2 2 0 1 1 0-4H17a1 1 0 1 0 0-2h-4z"/></g></svg>
  );
};

export default CurrencyDollar2Line;
