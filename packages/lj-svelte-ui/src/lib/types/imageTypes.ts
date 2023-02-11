export type Breakpoint = [Image[], number | null, number | null];

// function to generate a hash of image url
// used to determine if an image has changed
// and needs to be reloaded
export const hash = (str: string): number => {
	let hash = 0;
	if (str.length == 0) return hash;
	for (let i = 0; i < str.length; i++) {
		const char = str.charCodeAt(i);
		hash = (hash << 5) - hash + char;
		hash = hash & hash; // Convert to 32bit integer
	}
	return hash;
};

// Image : type for individual image asset
export class Image {
	// eslint-disable-next-line
	[key: string]: string | undefined;
	alt?: string;
	extension?: string;
	filename?: string;
	folder?: string;
	height?: string;
	id?: string;
	mimeType?: string;
	path?: string;
	url?: string;
	width?: string;

	// constructor
	constructor(obj: {
		alt?: string;
		extension?: string;
		filename?: string;
		folder?: string;
		height?: string | number;
		id?: string;
		mimeType?: string;
		path?: string;
		url?: string;
		width?: string | number;
	}) {
		// provided values
		let alt: string = obj.alt ? obj.alt : "";
		let extension = obj.extension ? obj.extension : "";
		let filename: string = obj.filename ? obj.filename : "";
		let folder: string = obj.folder ? obj.folder : "";
		const height: string | number = obj.height ? obj.height : "";
		const heightString =
			typeof height === "number" ? height.toString() : height;
		let id: string = obj.id ? obj.id : "";
		let mimeType: string = obj.mimeType ? obj.mimeType : "";
		let path: string = obj.path ? obj.path : "";
		let url: string = obj.url ? obj.url : "";
		const width: string | number = obj.width ? obj.width : "";
		const widthString =
			typeof width === "number" ? width.toString() : width;

		// ** define url **
		// if url is not provided
		// use the path and filename (and extension) to create the url
		if (!url && filename && path) {
			if (extension) url = `${path}/${filename}.${extension}`;
			else url = `${path}/${filename}`;
		}

		// ** define filename **
		// try to derive a filename from the url if a filename is not provided:
		// if filename is not defined
		// and url is defined
		// and url includes a '/'
		// and url includes a '.'
		if (!filename && url && url.includes("/")) {
			const substrings: string[] = url.split("/");
			const last = substrings.pop();

			// now get the first portion
			if (last && last.includes(".")) {
				const substrings: string[] = last.split(".");
				filename = substrings[0] ? substrings[0] : "";
			} else if (last) {
				filename = last;
			} else {
				filename = "";
			}
		} else if (!filename && url && url.includes(".")) {
			const substrings: string[] = url.split(".");
			filename = substrings[0] ? substrings[0] : "";
		}

		//     if (!filename && url && url.includes("/") && url.includes(".")) {
		//       const directories = url.split("/");
		//       const directory = directories.pop(); // last directory

		//       // if directory is defined
		//       // split directory by '.'
		//       // and get the value before the last '.'
		//       if (directory && directory.includes(".")) {
		//         const parts = directory.split(".");
		//         const beginning = parts[parts.length - 2]; // before the last '.'
		//         if (beginning) filename = beginning;
		//       }
		//     }

		// ** define alt **
		if (!alt && filename) {
			// *** convert filename to title
			const spacified = filename.replace(/-/g, " "); // replace hyphens
			const cased = spacified.replace(
				/\w\S*/g,
				(txt) =>
					txt.charAt(0).toUpperCase() +
					txt.substring(1).toLowerCase(),
			);
			if (cased) alt = cased;
		}

		// ** define path **
		if (!path && url && filename) {
			const parts = url.split(filename);
			const first = parts[0] ? parts[0] : "";
			const derived = first ? first : "";
			path = derived;
		}

		// ** define folder **
		if (!folder && path) {
			// get last character
			const lastCharacter = path.slice(-1);

			// remove the last character if it is a '/'
			const reduced = lastCharacter == "/" ? path.slice(0, -1) : path;

			// create an array of parts separated by "/"
			const parts = reduced.split("/");

			// the end of the array is the folder
			const last = [...parts].pop();

			folder = last ? last : "";
		}

		// ** define extension
		//- if extension has not been provided
		//- and url has value
		//- and value includes a '.'
		//- derive extension from url
		if (!extension && url && filename) {
			// get part of url that comes after the file name
			const array = url.split(filename); // before and after filename
			const after = array[1];
			const extensions = after ? after : ""; // could be more than one e.g. ".min.jpg"

			// get the substring that after the last "." -- e.g. "com"
			const parts = [...extensions.split(".")];
			const result = [...parts].pop();
			extension = result ? result : "";
		}

		// ** define mimeType
		//- if mimeType is not provided
		//- and we do have a value for extension
		//- use the extension to determine the mimeType
		if (!mimeType && extension) {
			// convert extension to lowercase
			const ext = extension.toLowerCase();

			// test for specific values
			const isJpeg = ext == "jpeg" || ext == "jpg";
			const isSvg = ext == "svg";

			// define mimeType
			if (isJpeg) mimeType = "image/jpeg";
			else if (isSvg) mimeType = "image/svg+xml";
			else mimeType = `image/${ext}`;
		}

		// define id
		if (!id && url) {
			// id = hash of url
			const idNumber = hash(url);
			id = `image-${idNumber.toString()}`;
		}

		// declaration
		this.alt = alt;
		this.extension = extension;
		this.height = heightString;
		this.filename = filename;
		this.folder = folder;
		this.id = id;
		this.width = widthString;
		this.mimeType = mimeType;
		this.path = path;
		this.url = url;
	}
}

// just like an Image but with required alt, height , width & url
// also adds its own property: fallback
export class ImageFallback extends Image {
	// eslint-disable-next-line no-undef
	[key: string]: string | undefined;
	fallback: "true";
	constructor(obj: {
		alt: string;
		extension?: string;
		filename?: string;
		folder?: string;
		height: string | number;
		id?: string;
		mimeType?: string;
		path?: string;
		url: string;
		width: string | number;
	}) {
		super(obj);
		this.fallback = "true";
	}
}

// just like an Image; with a required breakpoint name & optional media query
// breakpoint name can be any string, but is usually a tailwind breakpoint name e.g. "md"
export class ImageSource extends Image {
	// eslint-disable-next-line no-undef
	[key: string]: string | undefined;
	breakpoint: string;
	media?: string;
	constructor(obj: {
		alt?: string;
		extension?: string;
		filename?: string;
		folder?: string;
		height: string | number;
		id?: string;
		mimeType?: string;
		path?: string;
		url: string;
		width: string | number;
		breakpoint: string; // e.g. "md"
		media?: string; // e.g. "(min-width: 768px)"
	}) {
		super(obj);
		this.media = obj.media ? obj.media : "";
		this.breakpoint = obj.breakpoint;
		this.source = "true";
	}
}

// ImageSet : a stack of images with an option media query
// for use in a picture element
export interface ImageSet {
	[Key: string]: string | boolean | undefined | Image[];
	images: Image[];
	media?: string;
}

export class BreakpointImageSet {
	// eslint-disable-next-line no-undef
	[key: string]: string | Image[];
	breakpoint: string = "";
	images: Image[] = [];
	media: string = ""; // e.g. "(min-width: 768px)";

	constructor(obj: {
		alt?: string;
		breakpoint?: string;
		filename?: string;
		images?: Image[];
		imageTypes?: string[];
		media?: string;
		path?: string;
		height?: string | number;
		mediaMin?: string;
		mediaMax?: string;
		urls?: string[];
		width?: string | number;
	}) {
		// local variables from provided obj properties
		const alt: string | undefined = obj.alt ? obj.alt : undefined;
		const bp = obj.breakpoint ? obj.breakpoint : "";
		const filename = obj.filename ? obj.filename : "";
		const images = obj.images ? obj.images : [];
		const imageTypes = obj.imageTypes
			? obj.imageTypes
			: ["avif", "webp", "jpg"];
		let media = obj.media ? obj.media : "";
		const path = obj.path ? obj.path : "";
		const height = obj.height ? obj.height : "";
		const mediaMin = obj.mediaMin ? obj.mediaMin : "";
		const mediaMax = obj.mediaMax ? obj.mediaMax : "";
		const urls = obj.urls ? obj.urls : [];
		const width = obj.width ? obj.width : "";

		// ** define media
		if (media) {
			media = obj.media ? obj.media : "";
		} else if (mediaMin || mediaMax) {
			const min = mediaMin ? `(min-width:${mediaMin}px)` : "";
			const max = mediaMax ? `(max-width:${mediaMax}px)` : "";
			const and = min && max ? " and " : "";
			media = min + and + max;
		} else if (bp) {
			const n = " and ";
			const min = (value: number) => `(min-width:${value}px)`;
			const max = (value: number) => `(max-width:${value}px)`;
			media = bp === "xxs" ? max(419.99) : media;
			media = bp === "xs" ? min(420) + n + max(639.99) : media;
			media = bp == "sm" ? min(640) + n + max(767.99) : media;
			media = bp == "md" ? min(768) + n + max(1023.99) : media;
			media = bp == "lg" ? min(1024) + n + max(1279.99) : media;
			media = bp == "xl" ? min(1280) + n + max(1535.99) : media;
			media = bp == "2xl" ? min(1536) + n + max(1799.99) : media;
			media = bp == "3xl" ? min(1800) : media;
		} else {
			media = "";
		}

		// ** define images
		// if images are provided, use them
		if (images && images.length > 0) {
			// we're good
		} else if (urls && urls.length > 0) {
			// if no images are provided, create images from each url
			urls.forEach((url) => {
				const image = new Image({
					alt: alt ? alt : "",
					url: url,
					height: height ? height : "",
					width: width ? width : "",
				});
				// push image to images
				images.push(image);
			});
		} else if (imageTypes && path && filename) {
			// if no images are provided,
			// and no urls are provided,
			// but paths and imageTypes and filename are provided,
			// create images from each imageType
			imageTypes.forEach((imageType) => {
				const image = new Image({
					alt: alt ? alt : undefined,
					extension: imageType,
					filename: filename ? filename : "",
					path: path ? path : "",
					width: obj.width ? obj.width : "",
					height: obj.height ? obj.height : "",
				});
				images.push(image);
			});
		}

		// set properties
		if (bp) this.breakpoint = bp;
		if (media) this.media = media;
		if (images) this.images = images;
	}
}

//Picture;
//trying to simplify so this just takes an array of images
// and as little else as possible
export class Picture {
	// eslint-disable-next-line no-undef
	imageStack: ImageSet[] = [];
	imageFallback: ImageFallback = new ImageFallback({
		alt: "Smiling woman with headset in enterprise contact center",
		url: "https://ljcdn.nyc3.cdn.digitaloceanspaces.com/slx/images/overview-brochure-thumb-2021.jpg",
		width: 1260,
		height: 1600,
	});
	breakpoints?: string[] = [];
	imageTypes?: string[] = ["jpg"];

	// constructor
	constructor(obj: {
		alt: string;
		breakpoints?: string[];
		fallbackUrl: string;
		width?: number | string;
		height?: number | string;
		// filename?: string;
		imageTypes?: string[];
	}) {
		// local variables from provided obj properties
		const alt = obj.alt ? obj.alt : "";
		const breakpoints = obj.breakpoints ? obj.breakpoints : [];
		const fallbackUrl = obj.fallbackUrl ? obj.fallbackUrl : "";
		// const filename = obj.filename ? obj.filename : "";
		let imageFallback: ImageFallback | undefined = undefined;
		const imageTypes = obj.imageTypes
			? obj.imageTypes
			: this.imageTypes;
		const imageStack: BreakpointImageSet[] = [];
		const width = obj.width ? obj.width : "";
		const height = obj.height ? obj.height : "";

		// ** define fallback image **

		// define placeholder image for fallback
		const placeholderImage = new ImageFallback({
			alt: "Smiling woman with headset in enterprise contact center",
			url: "https://ljcdn.nyc3.cdn.digitaloceanspaces.com/slx/images/overview-brochure-thumb-2021.jpg",
			width: 1260,
			height: 1600,
		});

		// derive imageFallback from provided obj properties
		if (fallbackUrl) {
			imageFallback = new ImageFallback({
				alt: alt ? alt : "",
				url: fallbackUrl ? fallbackUrl : "",
				width: width ? width : "",
				height: height ? height : "",
			});
		} else {
			imageFallback = placeholderImage;
		}

		// extract some properties from imageFallback
		const path = imageFallback.path;
		const filename = imageFallback.filename;

		// ** define imageStack **
		// if breakpoints are provided, create imageStack
		if (breakpoints && breakpoints.length > 0) {
			// create imageStack
			breakpoints.forEach((bp) => {
				// create imageSet
				const imageSet = new BreakpointImageSet({
					alt: alt ? alt : "",
					breakpoint: bp,
					path: path ? path : "",
					filename: filename ? filename : "",
					imageTypes: imageTypes ? imageTypes : [],
					width: width ? width : "",
					height: height ? height : "",
				});
				// push imageSet to imageStack
				imageStack.push(imageSet);
			});
		}

		// define properties
		this.breakpoints = breakpoints ? breakpoints : this.breakpoints;
		this.imageStack = imageStack;
		this.imageTypes = imageTypes ? imageTypes : this.imageTypes;
		this.imageFallback = imageFallback;
	}
}

// a picture widget using container queries
export class PictureCLOSizes {
	"xs"?: number = 320;
	"sm"?: number = 384;
	"md"?: number = 448;
	"lg"?: number = 512;
	"xl"?: number = 576;
	"2xl"?: number = 672;
	"3xl"?: number = 768;
	"4xl"?: number = 896;
	"5xl"?: number = 1024;
	"6xl"?: number = 1152;
	"7xl"?: number = 1280;
}

export interface PictureSizes {
	[key: string]: { width: number; height: number };
}

// goes with component: PictureCloudinary
// export class PictureCLD {
// 	alt?: string = "";
// 	export let aspectRatio:
// 	fallbackType?: string = "jpg";
// 	filename?: string = "";
// 	imageClasses?: string = "";
// 	imageTypes?: string[] = ["avif", "webp", "jpg"];
// 	path?: string = "/images/";
// 	pictureClasses?: string = "";
// 	resolutions?: number[] = [1, 2, 3];
// 	sizes?: PictureSizes;
// 	constructor(obj: {
// 		alt?: string;
// 		fallbackType?: string;
// 		filename?: string;
// 		imageClasses?: string;
// 		imageTypes?: string[];
// 		path?: string;
// 		pictureClasses?: string;
// 		resolutions?: number[];
// 		sizes?: PictureSizes;
// 	}) {
// 		const alt = obj.alt ? obj.alt : "";
// 		const type = obj.fallbackType ? obj.fallbackType : "";
// 		const filename = obj.filename ? obj.filename : "";
// 		const imageClasses = obj.imageClasses ? obj.imageClasses : "";
// 		const imageTypes = obj.imageTypes ? obj.imageTypes : [];
// 		const path = obj.path ? obj.path : "";
// 		const pictureClasses = obj.pictureClasses
// 			? obj.pictureClasses
// 			: "";
// 		const resolutions = obj.resolutions ? obj.resolutions : [];
// 		const sizes = obj.sizes ? obj.sizes : {};

// 		// defined properties
// 		this.alt = alt ? alt : this.alt;
// 		this.fallbackType = type ? type : this.fallbackType;
// 		this.filename = filename ? filename : this.filename;
// 		this.imageClasses = imageClasses
// 			? imageClasses
// 			: this.imageClasses;
// 		this.imageTypes = imageTypes ? imageTypes : this.imageTypes;
// 		this.path = path ? path : this.path;
// 		this.pictureClasses = pictureClasses
// 			? pictureClasses
// 			: this.pictureClasses;
// 		this.resolutions = resolutions ? resolutions : this.resolutions;
// 		this.sizes = sizes ? sizes : this.sizes;
// 	}
// }

export interface PictureCLD {
	alt: string;
	aspectRatio?: string;
	filename: string;
	id: string;
	imageTypes?: string[];
	sourceUrl: string;
	quality?: string;
	resolutions?: number[];
	sizes?: string[];
	version: string;
}
