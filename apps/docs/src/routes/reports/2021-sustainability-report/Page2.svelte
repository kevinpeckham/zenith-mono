<!-- Example Svelte Page / Starter Web Page-->
<script lang="ts">
	// components
	import { PictureCloudinary } from "lj-svelte-ui";
	import { PageLayout } from "lj-svelte-ui";
	import ColumnsTwo from "$atoms/ColumnsTwo.svelte";
	import SectionHeading from "$atoms/SectionHeading.svelte";
	//-import CalloutBox from "$atoms/CalloutBox.svelte";

	// types
	import type { Document } from "lj-svelte-ui";

	// props

	export let doc: Document;

	export let edition = "";

	export let page = 0;

	export let pageCount = 0;

	// settings
	const headerHeight = 0;

	// calculated
	$: mainHeight = 1008 - headerHeight;
</script>

<template lang="pug">
	PageLayout(classes="font-montserrat !p-0")
		// gradient bar
		.w-full(
			class="from-byzantine bg-byzantine to-steelPink h-[14px] bg-gradient-to-r")

		// Header
		.px-12.pt-8
			.flex.items-center.justify-between.border-b.pb-4(
				class="border-byzantine/20")
				.text-steelPink.uppercase.leading-none.tracking-wider(
					class=" text-26 text-byzantine") Contents
				.italic.tracking-wider(class="text-byzantine/90") Global Insurance Company

	//- Body
		.px-6.pt-6


		//- Page Number
		//-.absolute.bottom-0.right-0.z-10.p-8.pr-12.text-white
			//-PageNumber(
				{pageCount},
				{page})
</template>
