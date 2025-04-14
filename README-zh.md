# ZxeiCnReact 图标库 - React 组件

基于 [ZxeiCnReact](https://www.zxeicnreact.com/) 图标库开发的 React 组件库。

## 特性

- 支持 React 框架
- 包含 6000+ 精美图标
- 提供线条和填充两种风格
- 支持自定义颜色和大小
- 支持 TypeScript
- 支持 Tree-shaking，减小打包体积

## 安装

```bash
# 使用 npm
npm install zxeicn-react-icons

# 使用 yarn
yarn add zxeicn-react-icons

# 使用 pnpm
pnpm add zxeicn-react-icons
```

## 使用方法

### 基本用法

```jsx
import { AddCircleFill, AddCircleLine } from 'zxeicn-react-icons';

const App = () => {
  return (
    <div>
      <AddCircleFill />
      <AddCircleLine size={32} color="red" />
    </div>
  );
};
```

### 从子路径导入（推荐）

为了优化打包体积，推荐使用子路径导入：

```jsx
import { AddCircleFill } from 'zxeicn-react-icons/react';
```

### 动态导入

如果需要动态使用图标，可以这样导入：

```jsx
import React, { useState, useEffect } from 'react';
import * as Icons from 'zxeicn-react-icons/react';

const DynamicIcon = ({ name, ...props }) => {
  const IconComponent = Icons[name];
  return IconComponent ? <IconComponent {...props} /> : null;
};

const App = () => {
  return (
    <div>
      <DynamicIcon name="AddCircleFill" size={32} color="blue" />
      <DynamicIcon name="ArrowRightLine" size={24} color="green" />
    </div>
  );
};
```

### 在Next.js中使用

```jsx
import dynamic from 'next/dynamic';

// 动态导入图标组件以避免SSR问题
const AddCircleFill = dynamic(
  () => import('zxeicn-react-icons/react').then((mod) => mod.AddCircleFill),
  { ssr: false }
);

const MyPage = () => {
  return (
    <div>
      <AddCircleFill size={32} color="purple" />
    </div>
  );
};
```

### 配合CSS-in-JS库使用

```jsx
import styled from 'styled-components';
import { HeartFill } from 'zxeicn-react-icons/react';

// 创建自定义样式的图标
const StyledHeartIcon = styled(HeartFill)`
  color: red;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.2);
  }
`;

const App = () => {
  return (
    <div>
      <StyledHeartIcon size={32} />
    </div>
  );
};
```

## 可用属性

| 属性      | 类型              | 默认值    | 描述           |
|-----------|-------------------|-----------|---------------|
| size      | number \| string  | 24        | 图标尺寸       |
| color     | string            | '#09244B' | 图标颜色       |
| className | string            | -         | 自定义 CSS 类名 |
| style     | CSSProperties     | -         | 内联样式对象    |
| title     | string            | -         | SVG 标题（用于辅助功能）|
| ...rest   | -                 | -         | 传递给 SVG 元素的其他属性 |

## 浏览器支持

- Chrome
- Firefox
- Safari
- Edge
- Opera

## 贡献

欢迎提交 issue 和 pull request。

## 许可证

本项目采用 [Apache-2.0 许可证](./LICENSE)，与原始 ZxeiCnReact 图标库一致。 