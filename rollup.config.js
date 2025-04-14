import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
// import vue from 'rollup-plugin-vue';
import pkg from './package.json';

export default [
  // React版本
  {
    input: 'src/react/index.ts',
    output: [
      {
        file: 'dist/react/index.js',
        format: 'cjs',
        sourcemap: true
      },
      {
        file: 'dist/react/index.esm.js',
        format: 'es',
        sourcemap: true
      }
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: 'dist/react',
        rootDir: 'src/react'
      }),
      terser()
    ],
    external: ['react']
  },
  // 通用入口
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true
      }
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: 'dist'
      }),
      terser()
    ]
  }
]; 