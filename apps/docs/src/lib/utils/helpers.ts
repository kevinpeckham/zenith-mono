export function capitalize(text: string) {
	return text[0].toUpperCase() + text.slice(1);
}

export function getMonthNameFromDate(date: Date): string {
	const month = date.getMonth();
	const monthNames = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	const monthName = monthNames[month];
	return monthName;
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

export function getDaysUntilToday(currentVersionDate: Date) {
	const today = new Date();
	const date = currentVersionDate;
	const timeDiff = Math.abs(today.getTime() - date.getTime());
	const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
	return diffDays;
}

export function getTwoDigitYear(date: Date) {
	return date.getFullYear().toString().slice(-2);
}

// function to turn an integer into an array of sequential integers
export function integerToArray(start: number, end: number) {
	return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}
