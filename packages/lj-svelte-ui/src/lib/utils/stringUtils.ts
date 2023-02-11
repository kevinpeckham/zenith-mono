export function capitalize(text: string) {
	return text[0].toUpperCase() + text.slice(1);
}
export function percentSymbol(text: string) {
	const template = `<span style="display:inline-block; margin-left:.075em; font-size:.9em; vertical-align:baseline;">%</span>`;
	return text.replace(/%|(::percent)/gi, template);
}
export function processText(text: string) {
	//const tmStyled = text.replace(/™/g, styleTrademark("™"));
	const tmStyled = styleTrademarks(text);
	const regStyled = styleRegMarks(tmStyled);
	const percentStyled = percentSymbol(regStyled);
	const thousandStyled = thousandSymbol(percentStyled);
	return thousandStyled;
}
export function slugify(text: string) {
	return text
		.toString()
		.toLowerCase()
		.replace(/\s+/g, "-") // Replace spaces with -
		.replace(/[^\w-]+/g, "") // Remove all non-word chars
		.replace(/--+/g, "-") // Replace multiple - with single -
		.replace(/^-+/, "") // Trim - from start of text
		.replace(/-+$/, ""); // Trim - from end of text
}
export function slugToTitle(text: string) {
	return (
		text
			.replace(/-/g, " ") // Replace hyphens with spaces
			// make first letter of each word uppercase
			.replace(
				/\w\S*/g,
				(txt) =>
					txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
			)
	);
}
export function styleRegMarks(text: string) {
	const template = `<span style="display:inline-block; margin-left:.1em; font-size:.8em; vertical-align:top;">&reg;</span>`;
	return text.replace(
		/®️|®|(&reg;)|(&#174;)|(&#x00AE;)|(::reg)/gi,
		template,
	);
}
export function styleTrademarks(text: string) {
	const template = `<span style="display:inline-block; margin-left:.1em; font-size:.8em; vertical-align:top;">&trade;</span>`;
	const tmStyled = text.replace(
		/™|(&trade;)|(&#8482;)|(&#x2122;)|(::tm)/gi,
		template,
	);
	return tmStyled;
}
export function thousandSymbol(text: string) {
	const template = `<span style="display:inline-block; margin-left:.1em; font-size:.95em; vertical-align:baseline;">K</span>`;
	return text.replace(/(\d+)k/gi, "$1" + template);
}









