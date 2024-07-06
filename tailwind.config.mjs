/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react")

export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
	},
	darkMode: 'class',
	plugins: [
		nextui({
			prefix: "nextui",
			addCommonColors: false,
			layout: {},
			themes: {
				light: {
					colors: {
						background: "#B4BEFE",
						foreground: "#1E1E2E",
						jpurple: "#6e53e5",
						jsubtext: "#cdd6f4",
						sapphire: "#74c7ec",
						green: '#a6e3a1'
					}
				},
				dark: {
					colors: {
						background: "#1E1E2E",
						foreground: "#b8c0e0",
						banner: '#363A4F',
						jblue: "#4385f5",
						jpurple: "#6e53e5",
						jyellow: "#F9E2AF",
						text: '#cdd6f4'
					}
				}
			}
		})
	],
}
