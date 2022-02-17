module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	theme: {
		extend: {
			colors: {
				primary: '#5222d0',
				secondary: '#ec615b',
			},
			gridAutoColumns: {
				270: '270px',
				220: '220px',
			},
			backgroundImage: {
				'dashboard': "url('/src/assets/dashboard-illustration.svg')"
			}
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
