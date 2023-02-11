export function hexToRgb(hex: string) {
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
		hex,
	);
	const r =
		result && parseInt(result[1]) ? parseInt(result[1], 16) : 0;
	const g =
		result && parseInt(result[2]) ? parseInt(result[2], 16) : 0;
	const b =
		result && parseInt(result[3]) ? parseInt(result[3], 16) : 0;
	return `rgb(${r}, ${g}, ${b})`;
}
export function rgbToNumbersArray(rgb: string) {
	const rgbArray = rgb
		.replace("rgb(", "")
		.replace(")", "")
		.split(",")
		.map((item) => parseInt(item));
	return rgbArray;
}
