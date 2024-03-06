import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: ['..'],
		},
		proxy: {
			'/maps-api': {
				target: 'https://maps.googleapis.com',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/maps-api/, '')
			},
			'/maps-image': {
				target: 'https://lh3.googleusercontent.com',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/maps-image/, '')
			}
		}
	}
});
