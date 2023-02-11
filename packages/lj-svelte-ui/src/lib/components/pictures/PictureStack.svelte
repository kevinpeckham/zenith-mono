<!--
  @component
  * Creates a stack of images in the picture tag
  * Supports breakpoints & different image formats
-->
<script lang="ts">
	// this component creates a stack of images in the picture tag
	// it supports breakpoints & different image formats
	// here is what an example stack might look like in html:
	/*
  <picture>
    <source type="image/avif" srcset="[url]" media="only screen and (max-width:419.99px">
    <source type="image/webp" srcset="[url]" media="only screen and (max-width:419.99px)">
    <source type="image/avif" srcset="[url]" media="only screen and (min-width:420px">
    <source type="image/webp" srcset="[url]" media="only screen and (min-width:420px">
    <img alt="PDF Thumbnail" class="w-full h-auto select-none " draggable="false" height="388" loading="lazy" width="300" src="[url]" title="Problem: Emissions">
    </picture>
  */

	// components
	import PictureStackFallback from "./PictureStackFallback.svelte";
	import PictureStackSource from "./PictureStackSource.svelte";

	// import types
	import type { ImageSet } from "../../types/imageTypes.js";

	// import functions
	import {
		selectImageByType,
		getImageWidth,
		getImageSetSizes,
		getFallBackImageSize,
		getImageSetBySize,
		getFallbackSet,
	} from "../../utils/imageUtils.js";

	// props
	export let alt: string = "";
	export let classes: string = "";
	export let draggable: boolean = false;
	export let fallback: number = 1200;
	export let imageSets: ImageSet[] = [];
	export let loading = "lazy";
	export let pictureClasses: string | null = null;
	export let style: string | null = null;
	export let title: string | null = null;

	$: fallbackSet = getFallbackSet(imageSets, fallback);
</script>

<template lang="pug">
	picture(class!="{ pictureClasses }")
		+if('imageSets')
			//- sources
			+each('imageSets as imageSet')
				+if('!fallbackSet || fallbackSet && imageSet.images.length > 1')
					+const('media = imageSet.media')
					+const('avif = selectImageByType(imageSet.images, "avif")')
					+const('webp = selectImageByType(imageSet.images, "webp")')
					+const('svg= selectImageByType(imageSet.images, "svg+xml")')
					+if('svg')
						+const('type = "image/svg+xml"')
						+const('srcset = svg.url')
						PictureStackSource(
							{media},
							{srcset},
							{type})
					+if('avif')
						+const('type = "image/avif"')
						+const('srcset = avif.url')
						+const('href = avif.url')
						PictureStackSource(
							{media},
							{srcset},
							{type})
					+if('webp')
						+const('type = "image/webp"')
						+const('srcset = webp.url')
						PictureStackSource(
							{media},
							{srcset},
							{type})
			//- fallback
			+const('fallbackStack = fallbackSet.images')
			+const('jpeg = selectImageByType(fallbackStack, "jpeg")')
			+const('png = selectImageByType(fallbackStack, "png")')
			+const('first = fallbackStack[0]')
			+const('fallback = (jpeg) ? jpeg : (png) ? png : first')
			+const('{ fileName, height, mimeType, url, width } = fallback')
			+const('src = url')
			PictureStackFallback(
				loading!="{ loading }",
				{alt},
				{classes},
				{draggable},
				{height},
				{mimeType},
				{src},
				{title},
				{width},
				{style})
</template>
