/** @type {import('tailwindcss').Config} */
import starlightPlugin from '@astrojs/starlight-tailwind';
import colors from 'tailwindcss/colors';

const variants = ["primary", "secondary", "danger", "purple", "blue"]

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			padding: {
				DEFAULT: '2%',
				md: '10%',
				//   xl: 'auto',

			},

		},
		screens: {
			'xs': '320px', // => @media (min-width: 640px) { ... }
			'sm': '575px', // => @media (min-width: 640px) { ... }
			'md': '768px', // => @media (min-width: 768px) { ... }
			'lg': '1024px', // => @media (min-width: 1024px) { ... }
			'xl': '1280px', // => @media (min-width: 1280px) { ... }
			'2xl': '1536px', // => @media (min-width: 1536px) { ... }
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			//black
			'black': '#191919',
			'black-dark': '#060709',
			'black-light': '#242728',
			//gray
			'gray': '#919190',
			'gray-dark': '#89827A',

			//white
			'white': '#CBCBCB',
			'white-light': '#D3D3D3',

			//primary
			'primary': '#464AA9',
			'primary-light': '#4A6CE2',
			'primary-dark': '#2E328E',

			//secondary
			'secondary': '#005C94',
			'secondary-dark': '#E44F26',

			//danger
			'danger': '#B7455A',
			'danger-light': 'danger-800',
			//pink
			'purple': '#A259FF',
			'purple-light': '#6E36E5',

			//blue
			'blue': '#0090F9',
			'blue-dark': '#1572B6',

		},
		extend: {
			colors: {
				accent: colors.indigo,
				// Tu escala de grises preferida. Zinc es el más cercano a los valores predeterminados de Starlight.
				gray: colors.sky,
			},
		}
	},
	plugins: [
		starlightPlugin(),
	],
	safelist: [
		// "bg-primary",
		{ pattern: /bg-(primary|secondary|danger|purple|blue)/,variants: ['hover'],},
		{ pattern: /shadow-(primary|secondary|danger|purple|blue)/,variants: ['hover'],},
		{ pattern: /border-(primary|secondary|danger|purple|blue)/,variants: ['hover'],},
	]

	
}
