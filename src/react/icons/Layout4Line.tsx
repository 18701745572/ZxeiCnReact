import React from 'react';
import { IconProps } from '../types';
import { DEFAULT_ICON_COLOR, DEFAULT_ICON_SIZE } from '../../common/constants';

const Layout4Line: React.FC<IconProps> = ({ 
  size = DEFAULT_ICON_SIZE, 
  color = DEFAULT_ICON_COLOR,
  title,
  ...rest
}) => {
  return (
    <svg  width={size} height={size}><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"/><path fill={color} d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 2h-9v14h9zM8 5H5v14h3zm8 10a1 1 0 0 1 .117 1.993L16 17h-3a1 1 0 0 1-.117-1.993L13 15zm0-4a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2zm0-4a1 1 0 0 1 .117 1.993L16 9h-3a1 1 0 0 1-.117-1.993L13 7z"/></g></svg>
  );
};

export default Layout4Line;
