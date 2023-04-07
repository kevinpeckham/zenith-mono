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

	const policies = [
		"Workplace Safety and Health Policy",
		"Drug Testing/Substance Abuse Policy",
		"Driving Safety Policy",
		"Anti-Harassment & Non-Discriminatory Policy",
		"Harassment Free Workplace",
		"Telecommuting Policy",
		"Energy Management Policy",
		"Code of Business Conduct and Ethics",
		"Insider Trading Policy",
		"Whistleblower Policy",
		"Anti-Corruption Policy",
		"Foreign Corrupt Practices Act Training",
		"Unconscious Bias Training",
		"Sexual Harassment Training",
	];
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
							articleNumber!="{ 4 }",
							articleTitle!="Policy Section",
							chapterNumber!="{ 8 }",
							page!="{ page }")
						//- content
					.mb-8.prose.prose-sm.prose-slate
						p.mt-0 Zenith Energy has the following policies and training programs, which guide our employees every day:
						ul.px-3
							+each('policies as policy')
								li {  policy  }

			section
				//- image
				//-.bg-slate-200.rounded-sm.text-xs.flex.justify-center.items-center(class="h-[400px]")
					.opacity-60.w-full.text-center.px-4 [ image: portland ]

		ContentPageFooter
</template>

<style>
	::marker {
		color: #7cc022;
	}
</style>
