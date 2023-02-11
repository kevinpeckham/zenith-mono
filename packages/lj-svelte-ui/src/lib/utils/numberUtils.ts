export function countDecimals(value: number) {
	if (Math.floor(value) === value) return 0;
	return value.toString().split(".")[1].length || 0;
}
export function integerToArray(start: number, end: number) {
	return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}
export function isInteger(value: number) {
	return Math.floor(value) === value;
}
