// const config = require("tailwind-config/tailwind.config.js");
// const test = require("tailwind-config/tailwindBase.js");
// console.log(test);

module.exports = {
	content: [
		// app content
		"./src/**/*.{html,pug,js,svelte,ts}",
		// include packages if not transpiling
		"../../packages/slx-ui/src/**/*.{html,pug,js,svelte,ts}",
	],
	safelist: [
		"aspect-square",
		"order-0",
		"order-1",
		"order-2",
		"order-3",
		"order-4",
		"order-5",
		"order-6",
		"col-span-1",
		"col-span-2",
		"col-span-3",
		"text-6",
		"text-7",
		"text-8",
		"text-9",
		"text-10",
		"text-11",
		"text-12",
		"text-13",
		"text-14",
		"text-15",
		"text-16",
		"text-17",
		"text-18",
		"text-19",
		"text-20",
		"text-21",
		"text-22",
		"text-23",
		"text-24",
		"prose-p:text-14",
		"font-montserrat",
	],
	theme: {
		extend: {
			colors: {
				oxford: {
					DEFAULT: "hsla(218, 100%, 16%, 1.0)",
				},
				midnight: {
					DEFAULT: "hsla(210, 31%, 20%, 1.0)",
				},
				spanishRed: {
					DEFAULT: "hsla(349, 100%, 46%, 1.0)",
					600: "hsla(350, 100%, 40%, 1.0)",
					700: "hsla(350, 100%, 32%, 1.0)",
					800: "hsla(350, 100%, 24%, 1.0",
					900: "hsla(350, 100%, 32%, 1.0)",
					dark: "#D9002A",
				},
				darkOrchid: "#A036B4", // call branding -- pri + sec blend
				blueViolet: "#7D3EC9", // call branding -- secondary
				byzantine: "#BC16A5", // call branding -- mellower primary
				fashionFuchsia: "#ea009c", // call branding -- primary
				magenta: "#FF00FF",
				richBlack: "#081526", // securelogix.com -- dark
				russianViolet: "#1F0144", // call branding -- dark primary
				selectiveYellow: "#FFBB00",
				hestia: "#EA2700",
				steelPink: "#DD23C4", // call branding -- primary
			},
			fontFamily: {
				apple:
					"'system-ui', 'apple-system', 'sf-pro-text', 'helvetica nue', arial, sans-serif",
				narrow: ["Open Sans Condensed", "sans-serif"],
				webSans: [
					"apple-system",
					"BlinkMacSystemFont",
					"Segoe UI",
					"Roboto",
					"Oxygen-Sans",
					"Ubuntu",
					"Cantarell",
					"Helvetica Neue",
					"sans-serif",
				],
				montserrat: [
					"Montserrat",
					"ui-sans-serif",
					"system-ui",
					"-apple-system",
					"sans-serif",
				],
			},
			fontSize: {
				1: "1px",
				2: "2px",
				3: "3px",
				6: "6px",
				7: "7px",
				8: "8px",
				9: "9px",
				10: "10px",
				11: "11px",
				12: "12px",
				13: "13px",
				14: "14px",
				15: "15px",
				16: "16px",
				17: "17px",
				18: "18px",
				19: "19px",
				20: "20px",
				21: "21px",
				22: "22px",
				23: "23px",
				24: "24px",
				25: "25px",
				26: "26px",
				27: "27px",
				28: "28px",
				29: "29px",
				30: "30px",
				31: "31px",
				32: "32px",
				33: "33px",
				34: "34px",
				35: "35px",
				36: "36px",
				37: "37px",
				38: "38px",
				39: "39px",
				40: "40px",
			},
			screens: {
				xs: "420px",
			},
		},
	},
	plugins: [
		// require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
		// require("@tailwindcss/line-clamp"),
	],
};
