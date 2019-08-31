export default {
  input: 'src/index.js',
  output: [
    {
      format: 'umd',
      name: 'geometry3',
      file: 'build/geometry3.js',
    },
    {
      format: 'esm',
      file: 'build/geometry3.module.js',
    },
  ],
};
