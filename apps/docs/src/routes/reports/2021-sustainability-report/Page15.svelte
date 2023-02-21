<script lang="ts">
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
</script>

<template lang="pug">
	PageLayout(classes!="font-sans !p-0 text-richBlack text-15 ")
		//- Header
		Header(
			{doc},
			{page})

		//- Main
		Main
			ArticleHeading(
				articleNumber!="{ 3 }",
				articleTitle!="Energy Management",
				chapterNumber!="{ 4 }",
				page!="{ page }")

			.prose.prose-sm.prose-slate.relative.grid.max-w-none.grid-cols-2.gap-8.leading-normal
				//- left column
				div
					p.mt-0 We know one of the most impactful ways to reduce our overall GHG emissions is by expanding energy efficiency across our business. As such, one of our sustainability initiatives was establishing an organizational energy management and conservation plan with the goal of reducing organizational power consumption by 10-percent within 3 years from the baseline year of 2020. In support of the organizational energy management plan, we have instituted an Energy Management Policy that provides the foundation for setting performance goals and integrating energy management throughout our business.

					p We are an active participant of the EPA’s Energy Star Program. After just one year of implementing these changes, we’ve almost achieved our goal of reducing our organization power consumption by a minimum of 10-percent within 3 years of our 2020 baseline.

					p Since we set this goal in 2020, we have already reduced our total energy consumed by 8-percent year-over-year. Part of this effort was an electrical system upgrade at the Portland Terminal, which contributed to a 64-percent reduction in energy intensity at the Portland, Oregon terminal in 2 years. We will continue to identify opportunities for energy efficiency and hopefully reach our goal early, if not continue to raise the bar.
					p The ESG Content Index included in this report details our organization’s total energy consumption, which we are using to track performance and monitor our energy consumption.

					aside.grid.grid-cols-1.place-content-start.place-items-start.gap-4.bg-white
						.prose.prose-sm
							//- quote
							.bg-antiFlash.order-1.rounded-md.px-4.py-4.font-normal.italic.leading-normal
								.text-13.mb-2.font-medium Progress against goal: 8% reduction in one year (2021) since 2020 baseline

				//- right
				div
					TopicHeading(
						articleNumber!="{ 3 }",
						chapterNumber!="{ 4 }",
						page!="{ page }",
						topicNumber!="{ 1 }",
						topicTitle!="Managing Energy Consumption through Renewable Power Solutions ")

					p We are investigating alternative power generation solutions for the Dominguez Hills, California terminal to become more cost effective, sustainable, and self-sufficient. We have engaged Norwest Engineering and WSP USA to perform an engineering feasibility study and identify all permits and utility requirements needed for the project. This project will potentially reduce our impact on the environment as well as protect the terminal against brown outs, common in the LA basin. It should also insulate us from rising energy costs. We are looking at a wide range of possible onsite power generation methods including solar photovoltaic array, natural gas generators and battery storage. We are also considering offsite wind or solar power generation due to restricted space at the terminal. Should this be successful at Dominguez Hills, we hope to expand it to our other California terminals and eventually across the United States.
					p Zenith Energy’s commitment to sustainability extends beyond the solutions we can provide to our customers through examining our own carbon footprint and working to identify where we can make feasible reductions in our GHG emissions.

		ContentPageFooter
</template>
