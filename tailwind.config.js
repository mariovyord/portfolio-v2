const colors = require('tailwindcss/colors')

module.exports = {
	darkMode: 'class',
	content: [
		'./dist/**/*.{html,js}',
	],
	theme: {
		container: {
			center: true,
			padding: '1rem',
		},
		fontFamily: {
			'sans': ['Roboto', 'sans-serif']
		},
		extend: {
			colors: {
				'primary-dark': '#0a192f',
			}
		}
	},
	plugins: [],
}
