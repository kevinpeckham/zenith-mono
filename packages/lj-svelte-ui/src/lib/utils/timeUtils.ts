export function formatClockTime(date: Date) {
	const hours = date.getHours();
	const adjustedHours = hours > 12 ? hours - 12 : hours;
	const adjustedHoursString: string = adjustedHours.toString();
	const minutes = date.getMinutes();
	const minutesString =
		(minutes < 10 ? "0" : "") + minutes.toString();
	const result = `${adjustedHoursString}:${minutesString}`;
	return result;
}
export function getCurrentTime() {
	const date = new Date();
	console.log("date", date);
	const hours = date.getHours();
	const adjustedHours = hours > 12 ? hours - 12 : hours;
	const adjustedHoursString: string = adjustedHours.toString();
	const minutes = date.getMinutes();
	const minutesString =
		(minutes < 10 ? "0" : "") + minutes.toString();
	const result = `${adjustedHoursString}:${minutesString}`;
	return result;
}
export function getCurrentTimeFormatted() {
	const date = new Date();
	const hours = date.getHours();
	const adjustedHours = hours > 12 ? hours - 12 : hours;
	const adjustedHoursString: string = adjustedHours.toString();
	const minutes = date.getMinutes();
	const minutesString =
		(minutes < 10 ? "0" : "") + minutes.toString();
	const result = `${adjustedHoursString}:${minutesString}`;
	return result;
}
export function getDaysUntilToday(currentVersionDate: Date) {
	const today = new Date();
	const date = currentVersionDate;
	const timeDiff = Math.abs(today.getTime() - date.getTime());
	const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
	return diffDays;
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
export function getTwoDigitYear(date: Date) {
	return date.getFullYear().toString().slice(-2);
}
