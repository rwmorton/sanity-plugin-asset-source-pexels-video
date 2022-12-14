import postcss from 'rollup-plugin-postcss'
import svgr from '@svgr/rollup'

export default {
  input: "lib/index.js",
  output: {
    file: "dist/bundle.js",
    format: "es",
    name: "sanity-plugin-asset-source-pexels-video",
    sourcemap: true,
  },
  external: ["react","react-dom"],
  plugins: [
    postcss({
      config: {
        path: "./postcss.config.js",
      },
      extensions: [".css"],
      minimize: true,
      inject: {
        insertAt: "top",
      },
    }),
    svgr()
  ]
  /*
  plugins: [
    nodeResolve({
      extensions: [".js"],
    }),
    postcss({
      extensions: [".css"],
    }),
    WindiCSS(),
    babel({
      presets: ["@babel/preset-react"],
    }),
    json(),
    commonjs(),
  ]*/
};
