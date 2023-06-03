import * as path from 'path'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
    resolve: {
      alias: [{ find: '@components', replacement: path.resolve(__dirname, 'src/components') }],
    },
  }

  if (command !== 'serve') {
    config.base = '/pokemons/'
  }

  return config
})
