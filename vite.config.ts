import * as path from 'path'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(() => {
  const config = {
    plugins: [react()],
    base: '/pokemons',
    resolve: {
      alias: [{ find: '@components', replacement: path.resolve(__dirname, 'src/components') }],
    },
  }

  return config
})
