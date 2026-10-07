import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        embreagem: resolve(__dirname, 'servicos/embreagem.html'),
        freios: resolve(__dirname, 'servicos/freios.html'),
        injecaoEletronica: resolve(__dirname, 'servicos/injecao-eletronica.html'),
        trocaDeOleo: resolve(__dirname, 'servicos/troca-de-oleo.html'),
        descarbonizacaoTsi: resolve(__dirname, 'servicos/descarbonizacao-tsi.html'),
        arCondicionado: resolve(__dirname, 'servicos/ar-condicionado.html')
      }
    }
  }
});
