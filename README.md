# template-jslib-rollup
template-jslib-rollup

## Q&A
- Q1: 如何打包同时生成压缩和未压缩的代码？
~~~
output: [
  { file: "lib.js", format: "cjs" },
  { file: "lib.min.js", format: "cjs", plugins: [uglify() },
  { file: "lib.esm.js", format: "esm" },
]
~~~
- Q2: 如何打包不删除特定注释？


## reference
- [rollup awesome](https://github.com/rollup/awesome)
