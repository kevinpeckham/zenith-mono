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
				chapterTitle!="About Zenith Energy & This Report")

			ArticleHeading(
				articleNumber!="{ 1 }",
				articleTitle!="About Us",
				chapterNumber!="{ 3 }")

			//- text columns
			.prose.prose-sm.prose-slate.relative.max-w-none.columns-2.gap-8.leading-normal
				p Zenith Energy is a world-class midstream company that owns and operates over 32 million barrels of renewable fuels, crude oil, petroleum products, chemicals and vegetable oil storage across North America, Europe, and Latin America through its subsidiaries Zenith International and Zenith U.S. The Company's focus is on building a sustainable, independent liquid storage terminals business that provides safe and reliable solutions for its customers in the years to come. The entities share a common management team and headquarters in Houston, as well as core values, including Safety First and Environmental Protection.

			div
				TerminalsMap
			div
				TerminalsOverview(
					liquids!="{ ['Bio Diesel', 'Ethanol', 'Renewable Diesel', 'Traditional Fuel', 'Vegetable Oils'] }",
					stats!="{ [[22, 'Terminals in North America'], [17, 'Million barrels of storage capacity']] }")

		ContentPageFooter
</template>
