/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: ["class", "[data-theme=dark]"],
	theme: {
		extend: {
			boxShadow: {
				'customNeon': '-2px -2px 60px rgb(6 182 212 / .15), 2px 2px 60px rgb(6 182 212 / .15)',
			  },

			animation: {
			'CustomBubble': 'CustomBubble 4s linear infinite',
			},

			keyframes: {
				CustomBubble: {
					'0%': {height: "40px", width: "40px", boxShadow: "2px 2px 60px rgb(6 182 212 / .5)", background:"rgb(6 182 212 / 0.06)", borderRadius: "50%" },
					'10%': {opacity: .27},


					'33.33%': { transform: "translateX(-20px)" },
					'66.66%': { transform: "translateX(+40px)", transform: 'rotate(300deg)' },

					'100%': { bottom: '100%', transform: "translateX(-20px)", height: "80px", width: "90px", boxShadow: "2px 2px 40px rgb(6 182 212 / .25)", background:"rgb(6 182 212 / 0.12)", borderRadius: "50%" },
				},
			  }
		},
	},
	plugins: [],
}
