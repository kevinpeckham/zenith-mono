<!--
@component
This component uses container queries to change the image size based on the container size.
* uses tailwindcss container queries plug-in
* https://github.com/tailwindlabs/tailwindcss-container-queries#readme
-->

<script lang="ts">
	// cSpell:disable
	// source & copyright
	export let library: string = "Rawpixel"; // e.g. stock library name "Rawpixel"
	export let libraryId: string = ""; // e.g. id to identify item in library "123456"
	export let licenseDate: string = ""; // e.g. "2021-01-01"
	export let licensePurchasedBy: string = "LJ";
	export let licensePuchasedFor: string = "SecureLogix Corp.";
	export let licenseTerms: string =
		"Royalty-free commercial use license. Unlimited use. Worldwide. No expiration date.";
	export let license: string =
		"https://www.rawpixel.com/services/licenses"; // e.g. https://www.istockphoto.com/legal/license-agreement
	export let credit: string = ""; // e.g. photographer or artist name

	// props
	export let alt: "";
	export let aspectRatio: string = "1:1";
	export let containerClasses: string = "";
	export let crop: string = "fill";
	export let domain = "https://res.cloudinary.com";
	export let gravity: string = "auto";
	export let basePath = "dn0pqjjbq/";
	export let fallbackType: string = "jpg";
	export let filename = "";
	// export let id = "";
	export let imageClasses: string = "";
	export let imageTypes: string[] = ["avif", "webp"];
	export let loading: string = "lazy";
	export let pictureClasses: string = "";
	export let resolutions: number[] = [1, 2];
	export let sizes: string[] = ["400", "500", "600", "700"];
	export let sourceUrl: string =
		"https://res.cloudinary.com/dn0pqjjbq/image/upload/ar_4:3,c_fill,w_800/v1675083817/young-contact-center-employee-with-his-arms-crossed_pdkwvh.jpg";
	export let quality: string | number = "32";
	//export let version = "v1675036798";

	// constants

	$: types = imageTypes;
	$: folderAndFileName = getFolderAndFileName(sourceUrl);

	// types
	interface SizeLookup {
		[key: string]: number;
	}

	const sizeLookup: SizeLookup = {
		"xs": 320,
		"sm": 384,
		"md": 448,
		"lg": 512,
		"xl": 576,
		"2xl": 672,
		"3xl": 768,
		"4xl": 896,
		"5xl": 1024,
		"6xl": 1152,
		"7xl": 1280,
		"100": 100,
		"200": 200,
		"300": 300,
		"400": 400,
		"500": 500,
		"600": 600,
		"700": 700,
		"800": 800,
		"900": 900,
		"1000": 1800,
		"1100": 1100,
		"1200": 1200,
		"1300": 1300,
		"1400": 1400,
		"1500": 1500,
		"1600": 1600,
		"1700": 1700,
		"1800": 1800,
	};

	// shorthand
	$: ar = aspectRatio;
	$: bp = basePath;
	$: cr = crop;
	$: dm = domain;
	$: fn = filename;
	$: q = quality;
	$: g = gravity ? `g_${gravity},` : "";

	// functions
	// return and image slug (path -- - no extension)
	// e.g. https://res.cloudinary.com/...v1675036798/hand-holding-iphone-with-call-branding-magenta_cveyea
	function slug(size: string | string, res: number | string) {
		const w = width(size);
		const result = `${dm}/${bp}ar_${ar},c_${cr},${g}q_${q},w_${w},dpr_${res}.0${folderAndFileName}`;
		return result;
	}

	function width(size: string) {
		return sizeLookup[size];
	}

	function height(size: string, ar: string) {
		const w = parseInt(ar.split(":")[0]);
		const h = parseInt(ar.split(":")[1]);
		return (h / w) * width(size);
	}

	// return part of a srcset e.g. "/image.jpg 1x"
	function src(size: string, res: number | string, type: string) {
		const result = `${slug(size, res)}.${type} ${res}x`;
		return result;
	}
	// return a srcset e.g. "/image.jpg 1x, /image.jpg 2x, /image.jpg 3x"
	function srcset(size: string, resolutions: number[], type: string) {
		let string = "";
		resolutions.forEach((res, index) => {
			const resString = res.toString();
			string += `${src(size, resString, type)}${
				index == resolutions.length - 1 ? "" : ","
			} `;
		});

		return string;
	}
	// classes that show and hide the image based on the container size
	function ccClasses(size: string, index: number) {
		const array: string[] = [...sizes];
		const isLast: boolean = array[array.length - 1] == size;
		const next = array[index + 1];
		const prev = array[index - 1];
		const isFirst = array[0] == size;

		// rule part 1: no initial hide of image if it's the first in the array
		const part1 = isFirst ? "block" : "hidden";

		// rule part 2: show image at the current size
		const part2 = `@${size}/picture:block`;

		// rule part 3: keep showing image if it's the last in the array
		const part3 = isLast ? "block" : "@" + next + "/picture:hidden";

		return `${part1} ${part2} ${part3}`;
	}

	// types
	function mimeType(type: string) {
		const jpgFixed = type == "jpg" ? "jpeg" : type;
		const svgFixed = jpgFixed == "svg" ? "svg+xml" : type;
		return `image/${svgFixed}`;
	}

	// regex to extract version + fullFileName (including ID ) from sourceUrl
	// e.g. /v1675083817/young-contact-center-employee-with-his-arms-crossed_pdkwvh
	function getFolderAndFileName(sourceUrl: string) {
		const regex = /\/v\d+\/(.*)\./;
		const resultArray = sourceUrl.match(regex)
			? sourceUrl.match(regex)
			: "";
		const result = resultArray ? resultArray[0] : "";

		// if the last character in result is ".", remove it
		const dotRemoved =
			result[result.length - 1] == "." ? result.slice(0, -1) : result;
		return dotRemoved;
	}
</script>

<template lang="pug">
	.relative.w-full(class!="@container/picture {containerClasses}")
		+each('sizes as size, index')
			picture.w-full(class!="{ccClasses(size, index)} {pictureClasses}")
				//- stack
				+each('types as type')
					source(
						srcset!="{ srcset(size, resolutions, type) }",
						type!="{ mimeType(type) }")
				//- fallback
				//-data-license-date!="{ licenseDate }",
				img.h-auto.w-full(
					alt!="{ alt }",
					class!="{ imageClasses }",
					data-credit!="{ credit }",
					data-id!="{ libraryId }",
					data-library!="{ library }",
					data-license!="{ license }",
					data-license-date!="{ licenseDate }",
					data-license-holder!="{ licensePuchasedFor }",
					draggable="false",
					height!="{ height(size, ar) }",
					loading!="{ loading }",
					src!="{slug(size, 2)}.{fallbackType}",
					width!="{ width(size) ? width(size) : undefined }")
</template>
