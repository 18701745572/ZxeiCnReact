# ZxeiCnReact 图标库组件开发指南

本文档介绍如何开发和构建 ZxeiCnReact 图标库的 React 和 Vue 组件版本。

## 项目结构

```
├── dist/                 # 构建输出目录
├── examples/             # 示例代码
│   ├── react/            # React 示例
│   └── vue/              # Vue 示例
├── scripts/              # 构建脚本
│   └── generate-icons.js # 图标生成脚本
├── src/                  # 源代码
│   ├── common/           # 通用代码
│   ├── react/            # React 组件
│   │   ├── icons/        # React 图标组件
│   │   └── types.ts      # React 类型定义
│   └── vue/              # Vue 组件
│       ├── icons/        # Vue 图标组件
│       └── types.ts      # Vue 类型定义
├── svg/                  # 原始 SVG 图标（按类别组织）
├── LICENSE               # 许可证文件
├── README.md             # 项目说明
└── package.json          # 项目配置
```

## 开发环境设置

1. 克隆项目:

```bash
git clone <repository-url>
cd ZxeiCnReact
```

2. 安装依赖:

```bash
npm install
```

## 生成图标组件

原始 SVG 图标存储在 `svg/` 目录中。使用提供的脚本将这些 SVG 文件转换为 React 和 Vue 组件:

```bash
npm run generate-icons
```

此脚本将:
- 读取所有 SVG 文件
- 格式化文件名为组件名称 (例如: `add_circle_fill.svg` → `AddCircleFill`)
- 生成 React 组件 (.tsx) 和 Vue 组件 (.vue)
- 创建索引文件以导出所有组件

## 构建库

生成图标组件后，构建库以生成可分发的包:

```bash
npm run build
```

这将创建以下输出:
- CommonJS 格式 (用于 Node.js)
- ES 模块格式 (用于现代打包工具)
- TypeScript 类型定义

构建输出将位于 `dist/` 目录中。

## 自定义图标

要添加新图标或修改现有图标:

1. 将新的 SVG 文件添加到 `svg/` 目录中的相应类别
2. 重新运行图标生成脚本:

```bash
npm run generate-icons
```

3. 重新构建库:

```bash
npm run build
```

## 组件属性

### React 组件属性

React 图标组件接受以下属性:

| 属性      | 类型              | 默认值    | 描述           |
|-----------|-------------------|-----------|---------------|
| size      | number \| string  | 24        | 图标尺寸       |
| color     | string            | '#09244B' | 图标颜色       |
| className | string            | -         | 自定义 CSS 类名 |
| style     | CSSProperties     | -         | 内联样式对象    |

### Vue 组件属性

Vue 图标组件接受以下属性:

| 属性      | 类型              | 默认值    | 描述           |
|-----------|-------------------|-----------|---------------|
| size      | number \| string  | 24        | 图标尺寸       |
| color     | string            | '#09244B' | 图标颜色       |
| class     | string            | -         | 自定义 CSS 类名 |
| style     | object            | -         | 内联样式对象    |

## 发布新版本

1. 更新 `package.json` 中的版本号
2. 构建库:

```bash
npm run build
```

3. 发布到 npm:

```bash
npm publish
```

## 测试

要测试组件:

1. 查看 `examples/` 目录中的示例
2. 运行开发服务器:

```bash
npm run dev
```

3. 在浏览器中打开 `http://localhost:3000` 查看示例

## 贡献

欢迎贡献! 请提交 pull request 或创建 issue 来报告问题或建议。 