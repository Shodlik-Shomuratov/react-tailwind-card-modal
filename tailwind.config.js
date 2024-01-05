/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"card-background":
					'url("https://miro.medium.com/v2/resize:fit:1358/1*7VFewln8nrykeF7kQyXwLg.png")',
			},
		},
	},
	plugins: [],
};
