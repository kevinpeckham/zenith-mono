const prettierPluginSvelte = require("prettier-plugin-svelte");
const prettierPluginPug = require("@prettier/plugin-pug");
const prettierPluginTailwindcss = require("prettier-plugin-tailwindcss");

// @ts-check
/// <reference types="./src/prettier" />
/// <reference types="@prettier/plugin-pug/src/prettier" />

/**
 * @type {import('prettier').Options}
 */
module.exports = {
	// prettier options
	plugins: [
		prettierPluginSvelte,
		prettierPluginPug,
		prettierPluginTailwindcss,
	],
	bracketSpacing: true,
	htmlWhitespaceSensitivity: "strict",
	useTabs: true,
	singleQuote: false,
	singleAttributePerLine: true,
	printWidth: 70,
	semi: true,
	tabWidth: 2,
	quoteProps: "consistent",
	arrowParens: "always",
	trailingComma: "all",
	pluginSearchDirs: false,

	// prettier pug plugin options
	// https://prettier.github.io/plugin-pug/guide/pug-specific-options.html
	// https://prettier.github.io/plugin-pug/guide/standard-prettier-overrides.html
	pugArrowParens: "always",
	pugClassLocation: "before-attributes",
	pugBracketSpacing: "true",
	pugBracketSameLine: "true",
	pugClassNotation: "before",
	pugExplicitDiv: false,
	pugTabWidth: 2,
	pugUseTabs: "true",
	pugSortAttributes: "asc",
	// pugSortAttributesBeginning: ["(class)"],
	pugSortAttributesEnd: ["(style)"],
	pugWrapAttributesPattern: "(style)",
	pugWrapAttributesThreshold: 1,
	pugFramework: "svelte",
	pugEmptyAttributes: "as-is",
	pugClassNotation: "as-is",
	pugSingleFileComponentIndentation: true,
	pugIdNotation: "as-is",

	// prettier svelte plugin options
	// https://github.com/sveltejs/prettier-plugin-svelte

	svelteSortOrder: "none",
	svelteStrictMode: true,
	svelteIndentScriptAndStyle: true,
	svelteAllowShorthand: true,
	svelteBracketNewLine: true,
};
