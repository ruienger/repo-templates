import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: {
    file: "index.cjs",
    format: "commonjs",
  },
  plugins: [typescript()],
};
