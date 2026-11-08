import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { publicOrigin, routeMetadata } from './src/data/metadata'
import { injectMetadata } from './src/data/renderMetadata'
import { projects } from './src/data/site'

export default defineConfig({
  base: new URL(publicOrigin).pathname + '/',
  build: { outDir: 'dist/pages' },
  plugins: [react(), tailwindcss(), {
    name: 'portfolio-static-pages',
    enforce: 'post',
    generateBundle(_, bundle) {
      const index = bundle['index.html']
      if (index?.type !== 'asset' || typeof index.source !== 'string') {
        this.error('Missing portfolio HTML template')
      }
      const template = index.source
      index.source = injectMetadata(template, routeMetadata('/'))
      for (const path of ['about', ...projects.map(project => 'work/' + project.slug), '404']) {
        this.emitFile({
          type: 'asset',
          fileName: path === '404' ? '404.html' : path + '/index.html',
          source: injectMetadata(template, routeMetadata('/' + path)),
        })
      }
    },
  }],
})
