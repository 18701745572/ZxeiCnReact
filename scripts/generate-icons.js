const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const mkdir = promisify(fs.mkdir);
const readdir = promisify(fs.readdir);

const SVG_DIR = path.join(__dirname, '../svg');
const REACT_OUTPUT_DIR = path.join(__dirname, '../src/react/icons');
// 暂时保留Vue输出目录定义，但不使用
const VUE_OUTPUT_DIR = path.join(__dirname, '../src/vue/icons');
const INDEX_FILE_REACT = path.join(__dirname, '../src/react/index.ts');
const INDEX_FILE_VUE = path.join(__dirname, '../src/vue/index.ts');
const MAIN_INDEX_FILE = path.join(__dirname, '../src/index.ts');

// 组件名称格式转换: "add_circle_fill" -> "AddCircleFill"
const formatComponentName = (fileName) => {
  return fileName
    .replace(/\.svg$/, '')
    .split('_')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
};

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
import { IconProps } from '../types';
import { DEFAULT_ICON_COLOR, DEFAULT_ICON_SIZE } from '../../common/constants';

const ${componentName}: React.FC<IconProps> = ({ 
  size = DEFAULT_ICON_SIZE, 
  color = DEFAULT_ICON_COLOR,
  title,
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

// 主函数
const main = async () => {
  try {
    // 确保输出目录存在
    await mkdir(REACT_OUTPUT_DIR, { recursive: true });
    // 暂不创建Vue输出目录
    // await mkdir(VUE_OUTPUT_DIR, { recursive: true });

    // 读取所有图标分类目录
    const categories = await readdir(SVG_DIR);
    
    // 存储所有图标组件名称，用于生成索引文件
    const reactComponents = [];

    // 处理每个分类目录
    for (const category of categories) {
      if (category === '.DS_Store') continue;
      
      const categoryPath = path.join(SVG_DIR, category);
      
      // 检查是否是目录
      const stats = fs.statSync(categoryPath);
      if (!stats.isDirectory()) continue;
      
      // 读取该分类下的所有SVG文件
      const svgFiles = await readdir(categoryPath);
      
      for (const svgFile of svgFiles) {
        if (!svgFile.endsWith('.svg')) continue;
        
        const filePath = path.join(categoryPath, svgFile);
        const svgContent = await readFile(filePath, 'utf8');
        
        // 格式化组件名称
        const componentName = formatComponentName(svgFile);
        
        // 生成React组件
        const reactComponent = await generateReactComponent(svgContent, componentName);
        if (reactComponent) {
          const outputPath = path.join(REACT_OUTPUT_DIR, `${componentName}.tsx`);
          await writeFile(outputPath, reactComponent, 'utf8');
          reactComponents.push(componentName);
        }
        
        // 不再生成Vue组件
      }
    }
    
    // 生成React索引文件
    const reactIndexContent = reactComponents
      .sort()
      .map(name => `export { default as ${name} } from './icons/${name}';`)
      .join('\n') + '\n\nexport * from \'./types\';';
    
    await writeFile(INDEX_FILE_REACT, reactIndexContent, 'utf8');
    
    // 生成主索引文件
    const mainIndexContent = `export * from './react';
// 注释掉Vue导出，因为rollup配置中已经分离了React和Vue的构建
// export * from './vue';`;
    
    await writeFile(MAIN_INDEX_FILE, mainIndexContent, 'utf8');
    
    console.log(`成功生成 ${reactComponents.length} 个 React 图标组件`);
    
  } catch (error) {
    console.error('生成图标组件时出错:', error);
  }
};

main(); 