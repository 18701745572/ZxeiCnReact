import React from 'react';
import { IconProps } from '../types';
import { DEFAULT_ICON_COLOR, DEFAULT_ICON_SIZE } from '../../common/constants';

const CodeFill: React.FC<IconProps> = ({ 
  size = DEFAULT_ICON_SIZE, 
  color = DEFAULT_ICON_COLOR,
  title,
  ...rest
}) => {
  return (
    <svg  width={size} height={size}><g fill="none"><path d="M0 0h24v24H0z"/><path fill={color} d="M14.62 2.662a1.5 1.5 0 0 1 1.04 1.85l-4.431 15.787a1.5 1.5 0 0 1-2.889-.81L12.771 3.7a1.5 1.5 0 0 1 1.85-1.039ZM7.56 6.697a1.5 1.5 0 0 1 0 2.12L4.38 12l3.182 3.182a1.5 1.5 0 1 1-2.122 2.121L1.197 13.06a1.5 1.5 0 0 1 0-2.12l4.242-4.243a1.5 1.5 0 0 1 2.122 0Zm8.88 2.12a1.5 1.5 0 1 1 2.12-2.12l4.243 4.242a1.5 1.5 0 0 1 0 2.121l-4.242 4.243a1.5 1.5 0 1 1-2.122-2.121L19.621 12z"/></g></svg>
  );
};

export default CodeFill;
