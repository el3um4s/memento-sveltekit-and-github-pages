/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'selector',
	theme: {
		extend: {
			fontFamily: {
				notoSans: ['Noto Sans', 'sans-serif'],
				notoSerif: ['Noto Serif', 'serif']
			}
		}
	},
	plugins: []
};
