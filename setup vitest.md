
npm i -D vitest jsdom @testing-library/jest-dom @testing-library/react

Crea un archivo de configuración para las pruebas en src/__tests__/setup.js:

import '@testing-library/jest-dom';

Actualiza vite.config.js para incluir la configuración de Vitest:

import { defineConfig } from "vitest/config";
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['src/__tests__/setup.js'],
        include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}']
    },
});


Añade el script de pruebas a package.json:

"scripts": {
    "test": "vitest"
}
