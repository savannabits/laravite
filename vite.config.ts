import vue from '@vitejs/plugin-vue'
import path from "path";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import tailwindConfig from "./tailwind.config.ts";
export default ({ command }) => ({
    base: command === 'serve' ? '' : '/build/',
    publicDir: 'fake_dir_so_nothing_gets_copied',
    server: {
        origin: 'http://localhost:3000'
    },
    resolve: {
        alias: {
            '~': path.resolve('resources'),
            '@': path.resolve('resources/scripts'),
            '@tailwindConfig': path.resolve('tailwind.config')
        },
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    plugins: [vue()],
    build: {
        manifest: true,
        outDir: 'public/build',
        rollupOptions: {
            input: 'resources/scripts/main.ts',
        },
    },
    css: {
        postcss: {
            plugins: [
                tailwindcss(tailwindConfig),
                autoprefixer,
            ]
        },
    }
});
