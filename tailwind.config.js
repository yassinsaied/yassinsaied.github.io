/** @type {import('tailwindcss').Config} */

export default {
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{js,jsx}'],
	theme: {
		extend: {
			colors: {
				primary: 'var(--color-primary)',
				secondary: 'var(--color-secondary)',
				accent: 'var(--color-accent)',
				background: 'var(--color-background)',
				text: 'var(--color-text)',
				success: 'var(--color-success)',
				warning: 'var(--color-warning)',
				error: 'var(--color-error)',
				info: 'var(--color-info)',
			},
		},
	},
	plugins: [],
};
