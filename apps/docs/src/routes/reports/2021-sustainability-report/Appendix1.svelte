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
			ChapterHeading(
				chapterNumber!="{ 9 }",
				chapterTitle!="Appendix",
				hideNumber!="{ true }",
				page!="{ page }")

			.relative.mb-2.grid.max-w-none.grid-cols-2.gap-8.pb-0.leading-normal(
				class="border-richBlack/40")
				//- left column
				div
					section.mt-0.pt-0
						ArticleHeading(
							classes="mb-0",
							articleNumber!="{ 1 }",
							articleTitle!="Use of SASB and GRI Standards ",
							chapterNumber!="A",
							page!="{ page }")

						//- text content
						.prose.prose-sm.prose-slate.mb-6.leading-normal
							div
								ul.mt-0.pl-3
									li.mb-2 This report was developed using the Sustainability Accounting Standards Board (SASB) October 2018 final standards, which are now part of the International Financial Reporting Standards (IFRS) Foundation, primarily including metrics from the SASB Oil & Gas – Midstream Standard (EM-MD, Version 2018-10) to inform Zenith Energy’s sustainability strategy.
									li.mb-2 We use the SASB framework and standards based on investor and shareholder feedback, and because SASB focuses on material disclosures of industry specific ESG topics that are likely to affect the financial condition or operating performance of companies within an industry.
									li.mb-2 Our Report also includes metrics from other SASB standards, including: SASB Oil & Gas – Exploration & Production Standard (EM-EP, Version 2018-10), SASB’s Chemical’s Standard (RT-CH, Version 2018-10), SASB’s E-Commerce Standard (CG-EC, Version 2018-10), and SASB’s Electrical & Electronic Equipment Standard (RT-EE, Version 2018-10) and is aligned with the Energy Infrastructure Council (EIC) and GPA Midstream Association (GPA) ESG Reporting Template for the midstream industry.

		ContentPageFooter
</template>

<style>
	::marker {
		color: #7cc022;
	}
</style>
