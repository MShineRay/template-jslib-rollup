/**
 * @reference https://www.rollupjs.com/guide/introduction/
 */
import commonjs from '@rollup/plugin-commonjs'// 用来将 CommonJS 转换成 ES2015 模块的
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'// 告诉 Rollup 如何查找外部模块
import babel from '@rollup/plugin-babel'
import { uglify } from 'rollup-plugin-uglify'
import { name } from './package.json'
export default {
    input: 'src/index.js',
    output: [
        {
            file: `dist/${name}.amd.js`,
            format: 'amd', // 浏览器
            name
        },
        {
            file: `dist/${name}.cjs.js`,
            format: 'cjs', // compile to a CommonJS module ('cjs') node环境
            name
        },
        {
            file: `dist/${name}.esm.js`,
            format: 'esm', // 浏览器
            name
        },
        {
            file: `dist/${name}.iife.js`,
            format: 'iife', // 浏览器
            name
        },
        {
            file: `dist/${name}.umd.js`,
            format: 'umd', // UMD format requires a bundle name 浏览器和 Node.js
            name
        }
    ],
    plugins: [
        commonjs(),
        json(),
        resolve({
            // 将自定义选项传递给解析插件
            customResolveOptions: {
                moduleDirectory: 'node_modules'
            }
        }),
        babel({
            // 为避免编译三方脚本，通过设置exclude属性忽略node_modules目录。
            // babelHelpers:'bundled',
            exclude: ['node_modules/**', 'dist/**', 'test/**'], // 只编译我们的源代码
            include: ['src/**']
        }),
        // default
        // ["lodash"],
        // Set plugin options using an array of [pluginName, optionsObject].
        // ["lodash", { "id": "lodash-compat", "cwd": "some/path" }]
        // The options.id can be an array of ids.
        ['lodash', { id: ['async', 'lodash-bound'] }],

        uglify()
    ],
    // 指出应将哪些模块视为外部模块:
    // 你可以微调哪些导入是想要打包的，哪些是外部的引用（externals）。
    // 对于这个例子，我们认为 lodash 是外部的引用（externals），而不是 the-answer 。
    external: ['lodash'],
    watch: {
        // 限制文件监控至某些文件：
        include: 'src/**',
        // 防止文件被监控：
        exclude: 'node_modules/**'
    },
    // treeshake: true,
    presets: [['@babel/env', { targets: { node: 6 } }]]
}
