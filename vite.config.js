import { defineConfig } from 'vite';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        home: resolve(rootDir, 'index.html'),
        embreagem: resolve(rootDir, 'servicos/embreagem.html'),
        freios: resolve(rootDir, 'servicos/freios.html'),
        injecaoEletronica: resolve(rootDir, 'servicos/injecao-eletronica.html'),
        trocaDeOleo: resolve(rootDir, 'servicos/troca-de-oleo.html'),
        descarbonizacaoTsi: resolve(rootDir, 'servicos/descarbonizacao-tsi.html'),
        arCondicionado: resolve(rootDir, 'servicos/ar-condicionado.html')
      }
    }
  }
});
