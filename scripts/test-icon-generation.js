const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const mkdir = promisify(fs.mkdir);

// 测试文件路径
const SVG_FILE_PATH = path.join(__dirname, '../svg/system/add_circle_fill.svg');
const REACT_OUTPUT_DIR = path.join(__dirname, '../test/react');
const VUE_OUTPUT_DIR = path.join(__dirname, '../test/vue');

// 生成React组件
const generateReactComponent = async (svgContent, componentName) => {
  // 提取SVG内容，移除XML声明和不必要的属性
  const svgMatch = svgContent.match(/<svg[^>]*>(.*?)<\/svg>/s);
  if (!svgMatch) return null;
  
  let cleanedSvg = svgMatch[0]
    .replace(/<svg[^>]*>/, (match) => {
      return match
        .replace(/width="24"/, 'width={size}')
        .replace(/height="24"/, 'height={size}')
        .replace(/fill="none"/, 'fill="none"')
        .replace('xmlns="http://www.w3.org/2000/svg"', '');
    })
    .replace(/fill="#09244B"/g, 'fill={color}');

  const component = `import React from 'react';

const DEFAULT_SIZE = 24;
const DEFAULT_COLOR = '#09244B';

const ${componentName} = ({ 
  size = DEFAULT_SIZE, 
  color = DEFAULT_COLOR,
  ...rest
}) => {
  return (
    ${cleanedSvg}
  );
};

export default ${componentName};
`;

  return component;
};

// 生成Vue组件
const generateVueComponent = async (svgContent, componentName) => {
  // 提取SVG内容，移除XML声明和不必要的属性
  const svgMatch = svgContent.match(/<svg[^>]*>(.*?)<\/svg>/s);
  if (!svgMatch) return null;
  
  let cleanedSvg = svgMatch[0]
    .replace(/<svg[^>]*>/, (match) => {
      return match
        .replace(/width="24"/, ':width="computedSize"')
        .replace(/height="24"/, ':height="computedSize"')
        .replace(/fill="none"/, 'fill="none"')
        .replace('xmlns="http://www.w3.org/2000/svg"', '');
    })
    .replace(/fill="#09244B"/g, ':fill="computedColor"');

  const component = `<template>
  ${cleanedSvg}
</template>

<script>
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: '${componentName}',
  props: {
    size: {
      type: [Number, String],
      default: 24,
    },
    color: {
      type: String,
      default: '#09244B',
    },
  },
  setup(props) {
    const computedSize = computed(() => props.size);
    const computedColor = computed(() => props.color);

    return {
      computedSize,
      computedColor,
    };
  },
});
</script>
`;

  return component;
};

// 主函数
const main = async () => {
  try {
    // 确保输出目录存在
    await mkdir(REACT_OUTPUT_DIR, { recursive: true });
    await mkdir(VUE_OUTPUT_DIR, { recursive: true });

    // 读取SVG文件
    const svgContent = await readFile(SVG_FILE_PATH, 'utf8');
    
    // 文件名
    const fileName = path.basename(SVG_FILE_PATH);
    
    // 组件名称
    const componentName = 'AddCircleFill';
    
    // 生成React组件
    const reactComponent = await generateReactComponent(svgContent, componentName);
    if (reactComponent) {
      const outputPath = path.join(REACT_OUTPUT_DIR, `${componentName}.jsx`);
      await writeFile(outputPath, reactComponent, 'utf8');
      console.log(`已生成React组件: ${outputPath}`);
    }
    
    // 生成Vue组件
    const vueComponent = await generateVueComponent(svgContent, componentName);
    if (vueComponent) {
      const outputPath = path.join(VUE_OUTPUT_DIR, `${componentName}.vue`);
      await writeFile(outputPath, vueComponent, 'utf8');
      console.log(`已生成Vue组件: ${outputPath}`);
    }
    
  } catch (error) {
    console.error('生成测试组件时出错:', error);
  }
};

// 运行测试
main().then(() => {
  console.log('测试完成');
}); 