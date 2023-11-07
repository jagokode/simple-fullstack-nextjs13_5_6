/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				nav: '#17111f',
				page: '#1a2331',
				card: '#36455a',
				footer: '#2d3d57',
				'card-hover': '#3f4e63',
				'default-text': '#f1f2f4',
				'blue-accent': '#0073d3',
				'blue-accent-hover': '#008fff',
			},
		},
	},
	plugins: [],
};
