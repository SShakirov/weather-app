import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import VueDevTools from 'vite-plugin-vue-devtools'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [vue(), VueDevTools()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    preview: {
      port: 8080,
    },
    server: {
      port: 8080,
      proxy: {
        '^/api': {
          target: 'https://api.weatherapi.com',
          changeOrigin: true,
          secure: false,
          rewrite: (path) => {
            const p = path.replace(/^\/api/, '') + '&key=' + env.VITE_API_TOKEN
            return p
          }
        }
      }
    }
  }
})
