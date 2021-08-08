import { resolve } from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import WindiCSS from 'vite-plugin-windicss'
import windiConfig from './windi.config'

const port = parseInt(process.env.PORT || '') || 3303
const r = (...args: string[]) => resolve(__dirname, ...args)

export default defineConfig(({ command }) => {
  return {
    publicDir: r('public'),
    root: r('views'),
    base: command === 'serve' ? `http://localhost:${port}/` : undefined,
    resolve: {
      alias: {
        '~/': `${r('src')}/`,
        '~~/': `${r('views')}/`,
      },
    },
    server: {
      port,
      hmr: {
        host: 'localhost',
      },
    },
    build: {
      outDir: r('extension'),
      emptyOutDir: false,
      rollupOptions: {
        input: {
          popup: r('views/popup/index.html'),
          // options: r('views/options/index.html'),
        },
        output: {
          entryFileNames: 'assets/[name].js',
          chunkFileNames: 'assets/[name].js',
          assetFileNames: 'assets/[name].[ext]',
        },
      },
    },
    plugins: [
      reactRefresh(),
      WindiCSS({
        config: windiConfig,
      }),
      {
        name: 'assets-rewrite',
        enforce: 'post',
        apply: 'build',
        transformIndexHtml(html) {
          return html.replace(/"\/assets\//g, '"../assets/')
        },
      },
    ],
  }
})
