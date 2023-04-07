<script lang="ts">
	// components
	import ArticleHeading from "$atoms/ArticleHeading.svelte";
	import ChapterHeading from "$atoms/ChapterHeading.svelte";
	import ContentPageFooter from "$molecules/ContentPageFooter.svelte";
	import Header from "$molecules/Header.svelte";
	import IconAndText from "$atoms/IconAndText.svelte";
	import Main from "$atoms/Main.svelte";
	import TopicHeading from "$atoms/TopicHeading.svelte";
	import TopicSubheading from "$atoms/TopicSubheading.svelte";
	import { midnight, PageLayout } from "lj-svelte-ui";
	//-import { BubbleGraphic } from "lj-svelte-ui";
	import { PieChart } from "lj-svelte-ui";

	// store
	import { colors } from "lj-svelte-ui";
	import { init } from "svelte/internal";
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
		//- Header
		Header(
			{doc},
			{page})

		//- Main
		Main(classes="h-[890px]")
			.relative.mb-6.max-w-none.grid.grid-cols-2.gap-8.leading-normal(
				class="border-richBlack/40")
				// section
				section
					.mb-2
						ArticleHeading(
							articleNumber!="{ 2 }",
							articleTitle!="Customers",
							chapterNumber!="{ 7 }",
							page!="{ page }")
						//- content
					.mb-8.prose.prose-sm.prose-slate
						p.mt-0 At Zenith Energy, we put a premium on the needs of our customers to ensure that our services align with their goals. We support a diverse and sustainable customer base by providing reliable service and timely communications to support our customer goals. In 2021, we made progress towards the major infrastructure changes to our Portland Terminal to respond to the growing demand from refiners and the Portland community transition to renewable fuel.

		section.absolute.bottom-0.w-full
			//- image
			picture.flex.justify-center.items-center
				img.w-full.h-auto.rounded-sm(
					height="200",
					src="/images/joliet.webp",
					width="300")

		.text-white
			ContentPageFooter(svgFillClass="fill-transparent")
</template>

<style>
	::marker {
		color: #7cc022;
	}
</style>
