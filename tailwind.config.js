module.exports = {
	mode: 'jit',
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
    extend: {
      colors: {
        'template-purple':'#5267DF',
        'template-red':'#FA5959',
        'template-blue':'#242A45',
        'template-grey':'#9194A2',
        'template-white':'#f7f7f7',
      }
    },
		fontFamily: {
			Poppins: ['Poppins, sans-serif'],
		},
		container: {
			center: true,
			padding: '1rem',
			screens: {
				lg: '1124px',
				xl: '1124px',
				'2xl': '1124px',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
