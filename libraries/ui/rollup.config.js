import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import url from "@rollup/plugin-url";
import svgr from "@svgr/rollup";
// import babel from "@rollup/plugin-babel";

const packageJson = require("./package.json");

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  // external: ["react", "@mui/material/utils"],
  plugins: [
    peerDepsExternal(),
    resolve({
      // modulesOnly: true,
    }),
    commonjs({
      // include: [/node_modules/],
      // defaultIsModuleExports: true,
      // esmExternals: true,
      // requireReturnsDefault: true,
    }),
    // babel({
    //   // exclude: "node_modules/**",
    //   presets: ["@babel/preset-react"],
    //   babelHelpers: "bundled",
    // }),
    url(),
    svgr(),
    typescript({ useTsconfigDeclarationDir: true, check: false }),
  ],
};
