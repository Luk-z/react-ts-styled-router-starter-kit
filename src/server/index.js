require("ignore-styles");

require("@babel/register")({
  ignore: [/(node_modules)/],
  presets: [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        //uses the new jsx transform that came with React 17
        runtime: "automatic",
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "transform-assets",
      {
        extensions: ["png", "svg"],
        name: "static/media/[name].[hash:8].[ext]",
      },
    ],
  ],
  extensions: [".svg", ".tsx", ".ts", ".es6", ".es", ".jsx", ".js", ".mjs"],
});

require("./server");
