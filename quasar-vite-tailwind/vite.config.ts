import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import AutoImport from "unplugin-auto-import/vite";
import license from "rollup-plugin-license";
import { join } from "node:path";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        transformAssetUrls,
      },
    }),
    vueDevTools(),
    quasar({
      autoImportComponentCase: "combined",
      sassVariables: fileURLToPath(
        new URL("./src/quasar-variables.sass", import.meta.url)
      ),
    }),
    AutoImport({
      imports: ["vue", "pinia"],
      include: [
        /\.vue$/,
        /\.vue\?vue/, // .vue
      ],
    }),
    license({
      thirdParty: {
        output: {
          file: join("dist", "THIRD_PARTY.txt"),
          encoding: "utf-8", // Default is utf-8.
        },
      },
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
