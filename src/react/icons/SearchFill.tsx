import React from 'react';
import { IconProps } from '../types';
import { DEFAULT_ICON_COLOR, DEFAULT_ICON_SIZE } from '../../common/constants';

const SearchFill: React.FC<IconProps> = ({ 
  size = DEFAULT_ICON_SIZE, 
  color = DEFAULT_ICON_COLOR,
  title,
  ...rest
}) => {
  return (
    <svg  width={size} height={size}><g fill="none"><path d="M0 0h24v24H0z"/><path fill={color} d="M10.5 2a8.5 8.5 0 0 1 6.676 13.762l3.652 3.652a1 1 0 0 1-1.414 1.414l-3.652-3.652A8.5 8.5 0 1 1 10.5 2m0 2a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13m0 1a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11"/></g></svg>
  );
};

export default SearchFill;
