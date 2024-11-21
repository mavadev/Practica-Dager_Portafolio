/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		container: {
			center: true,
			padding: '15px',
			screens: {
				sm: '640px',
				md: '768px',
				lg: '960px',
				xl: '1200px',
			},
		},
		fontFamily: {
			primary: 'var(--font-patrickHand)',
			secondary: 'var(--font-bagelFatOne)',
		},
		extend: {
			colors: {
				black: '#141414',
				orange: '#FFA03B',
				gray: '#C8C8C8',
				white: '#FFF',
				purpure: '#B994FF',
				yellow: '#FFDB14',
				accent: {
					default: '#00ff99',
					hover: '#00e187',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
