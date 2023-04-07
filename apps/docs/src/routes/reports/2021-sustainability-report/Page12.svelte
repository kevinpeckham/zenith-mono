<script lang="ts">
	// components
	import ContentPageFooter from "$molecules/ContentPageFooter.svelte";
	import Header from "$molecules/Header.svelte";
	import Main from "$atoms/Main.svelte";
	import TopicHeading from "$atoms/TopicHeading.svelte";
	import { midnight, PageLayout } from "lj-svelte-ui";
	//-import { BubbleGraphic } from "lj-svelte-ui";
	import { PieChart } from "lj-svelte-ui";

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
				.z-20.w-full.h-full.px-16.pt-12
					.font-normal.italic.leading-normal.text-white
						.mb-10.font-medium(class="text-[34px] leading-[1.375]") “Because renewable diesel works with the transportation industry's existing distribution infrastructure and engines, Oregon's network of pipelines, storage tanks, and fueling sites can be repurposed to rapidly scale its availability. This is a major advantage that will enable renewable diesel to replace fossil fuels faster and more affordably."
						.text-18.font-normal - Jeff Armstrong, CEO

		//- ContentPageFooter
</template>
