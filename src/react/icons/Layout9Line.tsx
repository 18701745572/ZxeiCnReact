import React from 'react';
import { IconProps } from '../types';
import { DEFAULT_ICON_COLOR, DEFAULT_ICON_SIZE } from '../../common/constants';

const Layout9Line: React.FC<IconProps> = ({ 
  size = DEFAULT_ICON_SIZE, 
  color = DEFAULT_ICON_COLOR,
  title,
  ...rest
}) => {
  return (
    <svg  width={size} height={size}><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"/><path fill={color} d="M19 3a2 2 0 0 1 1.995 1.85L21 5v14a2 2 0 0 1-1.85 1.995L19 21H5a2 2 0 0 1-1.995-1.85L3 19V5a2 2 0 0 1 1.85-1.995L5 3zm0 2h-6v14h6zm-8 11H5v3h6zm0-6H5v4h6zm0-5H5v3h6z"/></g></svg>
  );
};

export default Layout9Line;
