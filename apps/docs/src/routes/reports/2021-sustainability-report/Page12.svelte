<script lang="ts">
	// components
	import ContentPageFooter from "$molecules/ContentPageFooter.svelte";
	import Header from "$molecules/Header.svelte";
	import Main from "$atoms/Main.svelte";
	import { midnight, PageLayout } from "lj-svelte-ui";
	import QuotationMarkGraphic from "$atoms/QuotationMarkGraphic.svelte";

	// store
	import { colors } from "lj-svelte-ui";
	// props
	export let doc: Document;
	export let edition = "";
	export let page = 0;

	// set page context
	import { setContext } from "svelte";
	setContext("page", page);
</script>

<template lang="pug">
	PageLayout(classes!="font-sans !p-0 text-richBlack text-15 ")
		//- Main
		Main
			.absolute.flex.inset-0
				//- background
				.absolute.inset-0.flex
					img.w-full.h-auto(
						height="1056",
						src="/images/portland-full-bleed.webp",
						width="816")
					.absolute.inset-0(
						class="bg-gradient-to-t from-richBlack/0 via-richBlack/20 to-richBlack/80")
				//- foreground
				.z-20.w-full.h-full.px-16.pt-12.text-white
					.div.w-8.h-8.mb-3
						QuotationMarkGraphic
					.font-normal.italic.leading-normal.text-white
						.mb-3.font-medium(class="text-[34px] leading-[1.375]") We acquired the Portland Terminal to capitalize on the growing demand for renewable fuels in Oregon and throughout the western US. The Portland Terminal can play a significant role in helping Oregon meet its carbon reduction goals by making clean, renewable fuels readily available for public and private sectors.

					.div.w-8.h-8.mb-10.rotate-180
						QuotationMarkGraphic
					.text-18.font-normal - Jeff Armstrong, CEO

		//- ContentPageFooter
</template>
