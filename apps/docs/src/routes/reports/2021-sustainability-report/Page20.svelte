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

	interface Initiative {
		icon: string;
		heading: string;
		text: string;
		bullets?: string[];
	}

	const goals = [
		"Zero safety incidents",
		"Zero regulatory citations",
		"Zero product quality incidents",
		"Zero reportable spills",
		"Zero injuries",
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
			.prose.prose-sm.prose-slate.relative.mb-6.max-w-none.grid.grid-cols-2.gap-8.leading-normal.h-full(
				class="border-richBlack/40")
				// section
				section
					.mb-2
						TopicHeading(
							articleNumber!="{ 1 }",
							chapterNumber!="{ 5 }",
							page!="{ page }",
							topicNumber!="{ 9 }",
							topicTitle!="Release Prevention")
						//- content
					.mb-8
						p.mt-0 Given the nature of our business activities, the prevention of product releases is a top priority for us. Zenith Energy facilities have spill prevention systems to minimize leaks and spills and are constantly being upgraded to newer, more efficient technology. Modern infrastructure and efficient workflows, combined with preventive maintenance programs, serve to minimize the risk of spills at our terminals.
						p As we continue to acquire new operations, our team is investing heavily in these assets to implement enhanced methods of operating to bring all terminals in line with our rigorous release prevention and safety programs.
						p If product leaks nevertheless occur, we are prepared to stop the leak as quickly as possible and recover the product quickly and effectively. We continuously analyze and improve our programs based on real time analysis and trends. We do this through surveys of containment areas to identify opportunities to ensure volume capture and improve structural integrity. When possible, we create filtration facilities to prevent discharge of runoff water to rivers and streams. Additionally, we identify methods to protect stormwater vaults from turbidity and other pollutants.

					//- image
					.bg-slate-200.rounded-sm.text-xs.flex.justify-center.items-center(class="h-[260px]")
						.opacity-60 [ graphic ]
							ul
								+each('goals as goal')
									li {  goal  }
									// section
				section
					.mb-2
						TopicHeading(
							articleNumber!="{ 1 }",
							chapterNumber!="{ 5 }",
							page!="{ page }",
							topicNumber!="{ 10 }",
							topicTitle!="Infrastructure Modernization")

					p Zenith Energy continues to invest in infrastructure modernization to ensure their terminals are equipped with industry leading safety equipment as well as regularly conducting safety trainings, seeking to protect their employees, contractors, and the communities in which they operate.
					p Investments in infrastructure including spending over $1.5 million to upgrade truck racks and rebuild a dock at our Mobile, Alabama location to modernize and expand our throughput capabilities at that location.

					//- image
					//- .bg-slate-200.rounded-sm.text-xs.flex.justify-center.items-center.mb-4(
					//- 	class="h-[180px]")
					//- 	.opacity-60 [ images ]
					//- .bg-slate-200.rounded-sm.text-xs.flex.justify-center.items-center.mb-4(
					//- 	class="h-[180px]")
					//- 	.opacity-60 [ images ]

					//- .bg-slate-200.rounded-sm.text-xs.flex.justify-center.items-center(class="h-[180px]")
					//- 	.opacity-60 [ images ]

		ContentPageFooter
</template>

<style>
	::marker {
		color: #7cc022;
	}
</style>
