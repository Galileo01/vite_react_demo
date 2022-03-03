import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginImp from "vite-plugin-imp";

const { resolve } = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // 按需 引入 antd
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name) => `antd/lib/${name}/style/index.less`,
        },
      ],
    }),
  ],
  resolve: {
    // 配置路径 别名
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "src"),
      },
    ],
  },
  css: {
    modules: {
      // 类名 前缀
      generateScopedName: "vite_demo__[folder]__[local]___[hash:base64:5]",
    },
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript ，不开启 antd 的按需引入 会报错
        javascriptEnabled: true,
      },
    },
  },
});
