<script lang="ts">
	// components
	import ArticleHeading from "$atoms/ArticleHeading.svelte";
	import ChapterHeading from "$atoms/ChapterHeading.svelte";
	import ContentPageFooter from "$molecules/ContentPageFooter.svelte";
	import Header from "$molecules/Header.svelte";
	import Main from "$atoms/Main.svelte";
	import { PageLayout } from "lj-svelte-ui";
	import TerminalsMap from "$atoms/TerminalsMap.svelte";
	import TerminalsOverview from "$atoms/TerminalsOverview.svelte";

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
		Main
			ChapterHeading(
				chapterNumber!="{ 3 }",
				chapterTitle!="About Zenith Energy & This Report",
				page!="{ page }")

			ArticleHeading(
				articleNumber!="{ 1 }",
				articleTitle!="About Us",
				chapterNumber!="{ 3 }",
				page!="{ page }")

			//- text columns
			.prose.prose-sm.prose-slate.relative.max-w-none.columns-2.gap-8.leading-normal.mt-0
				p Zenith Energy is a world-class midstream company that owns and operates over 32 million barrels of renewable fuels, crude oil, petroleum products, chemicals and vegetable oil storage across North America, Europe, and Latin America through its subsidiaries Zenith International and Zenith U.S. The Company's focus is on building a sustainable, independent liquid storage terminals business that provides safe and reliable solutions for its customers in the years to come. The entities share a common management team and headquarters in Houston, as well as core values, including Safety First and Environmental Protection.

			.pt-8
				TerminalsOverview(
					liquids!="{ ['Bio Diesel', 'Ethanol', 'Renewable Diesel', 'Traditional Fuel', 'Vegetable Oils'] }",
					stats!="{ [[22, 'terminals in North America'], [17, 'million barrels of storage capacity']] }")
			.relative
				//-TerminalsMap
				.mt-8(class="bg-[#E3EDD7]")
					img.pb-16(src="/images/map.webp")
				.absolute.bottom-0.left-0.text-white.w-full
					svg.w-full.h-auto(
						role="img",
						viewBox="0 0 768 80",
						xmlns="http://www.w3.org/2000/svg")
						polygon.fill-current(points="0,80 768,80 768,0")
		ContentPageFooter
</template>
