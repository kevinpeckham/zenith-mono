// import types
import type { Image, ImageSet } from "./../types/imageTypes.js";

export function selectImageByType(array: Image[], type: string) {
	return array.filter(
		(image) => image.mimeType == `image/${type}`,
	)[0];
}

export function getImageWidth(imageSet: ImageSet) {
	// will return an image width
	const images = imageSet.images;
	const image = images.length > 0 ? images[0] : null;
	const width = image && image.width ? image.width : 0;
	const widthNum =
		typeof width === "string" ? parseInt(width) : width;
	return widthNum ? widthNum : 0;
}

export function getImageSetSizes(imageSets: ImageSet[]) {
	// this will return an array of image width values 1 from each set
	const imageSizes: number[] = imageSets.map((imageSet) =>
		getImageWidth(imageSet),
	);
	return imageSizes;
}

export function getFallBackImageSize(
	imageSizes: number[],
	fallback: number,
) {
	// this will find the closest value to fallback * 2
	const target = fallback * 2;
	const closest = imageSizes.reduce(function (prev, curr) {
		return Math.abs(curr - target) < Math.abs(prev - target)
			? curr
			: prev;
	});
	return closest;
}

export function getImageSetBySize(
	imageWidth: number,
	imageSets: ImageSet[],
) {
	// returns imageSet that contains an image with the given imageWidth
	const matches = imageSets.filter(
		(imageSet) => getImageWidth(imageSet) == imageWidth,
	);
	return matches[0];
}

export function getFallbackSet(
	imageSets: ImageSet[],
	fallback: number,
) {
	// parses image sets to find best fallback
	// best == width is closet to fallback prop value * 2
	const imageSizes: number[] = getImageSetSizes(imageSets);
	const fallBackImageSize: number = getFallBackImageSize(
		imageSizes,
		fallback,
	);
	const fallbackSet = getImageSetBySize(fallBackImageSize, imageSets);
	return fallbackSet;
}
