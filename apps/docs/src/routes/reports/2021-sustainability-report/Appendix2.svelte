<script lang="ts">
	import { integerToArray } from "lj-svelte-ui";
	// components
	import ArticleHeading from "$atoms/ArticleHeading.svelte";
	import ChapterHeading from "$atoms/ChapterHeading.svelte";
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

	const charities = [
		//Nature Conservancy, Ozanam Family Shelter, Easter Seals, Volunteer for America, PHFS Homeless Shelter, Easter Seals, Gulf Coast Food Bank and Toys for Tots.
		"Nature Conservancy",
		"Ozanam Family Shelter",
		"Easter Seals",
		"Volunteer for America",
		"PHFS Homeless Shelter",
		"Gulf Coast Food Bank",
		"Toys for Tots",
	];
</script>

<template lang="pug">
	PageLayout(classes!="font-sans !p-0 text-richBlack text-15 ")
		//- Header
		Header(
			{doc},
			{page})

		//- Main
		Main
			.text-36.text-yellowGreen.mb-6.font-medium.leading-tight Appendix
			.relative.mb-2.grid.max-w-none.grid-cols-2.gap-8.pb-0.leading-normal(
				class="border-richBlack/40")
				//- left column
				div
					section.mt-0.pt-0
						ArticleHeading(
							classes="mb-0",
							articleNumber!="{ 1 }",
							articleTitle!="ESG Content Index",
							chapterNumber!="A",
							page!="{ page }")
					//- text content
					.prose.prose-sm.prose-slate.mb-6.leading-normal
						div Begins on next page.

		ContentPageFooter
</template>

<style>
	::marker {
		color: #7cc022;
	}
</style>
