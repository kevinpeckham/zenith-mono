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
	import { PieChart, PictureCloudinary } from "lj-svelte-ui";

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
		//- Header
		Header(
			{doc},
			{page})

		//- Main
		Main
			section.prose.prose-sm.prose-slate.relative.mb-4.grid.max-w-none.grid-cols-2.gap-8.leading-normal
				div
					TopicHeading(
						classes="",
						articleNumber!="{ 2 }",
						chapterNumber!="{ 4 }",
						page!="{ page }",
						topicNumber!="{ 3 }",
						topicTitle!="Emission Reduction Goals")

					p.mt-4 In 2021, we announced the following goals for our GHG gas emissions:

					ul.pl-3
						li(class="marker:text-yellowGreen") By 2035, reduce company-wide Scope 1 and 2 GHG emissions by 50-percent from a 2019 baseline
						li(class="marker:text-yellowGreen") By 2050, achieve company-wide net zero GHG emissions for Scope 1, 2, and 3 emissions

					p Furthermore, we have set specific goals for our Portland, Oregon terminal:

					ul.pl-3.decoration-color-red-500
						li(class="marker:text-yellowGreen") By 2025, reduce Scope 1 and 2 GHG emissions by 50-percent from a 2019 baseline

					p In the short-term, we are developing a decarbonization strategy to identify emission reduction pathways towards a goal of achieving a 50-percent reduction in Scope 1 and 2 GHG emissions by 2035. Pathways being explored include equipment replacement and upgrades to optimize the efficiency of resources and operations. Additionally, we are working to identify feasible sources of renewable energy, including potential installation of on-site solar.

				div
					TopicHeading(
						classes="",
						articleNumber!="{ 2 }",
						chapterNumber!="{ 4 }",
						page!="{ page }",
						topicNumber!="{ 4 }",
						topicTitle!="Climate Risk Management")

					p.mt-4 Zenith Energy has strong oversight of environmental issues, with the Vice President of Health, Safety, Environmental, and Regulatory (HSER) being a member of the Zenith Energy Executive Leadership team. Managing climate-related risks and opportunities and our carbon footprint is a focus for our entire organization, and we have integrated our approach to sustainability into our strategic planning, which includes evaluating how climate-related issues impact our business strategy and financial planning. This integration entails commencing a Task Force on Climate-Related Financial Disclosure (TCFD) scenario analysis regarding our exposure to climate-related transition and physical risks, which will be used in developing our strategic plan and will be detailed in our next Sustainability Report.

			.absolute.bottom-0.left-0.w-full.place-content-center.place-items-center.bg-slate-100.overflow-hidden
				//- img.w-full.h-auto(src="/images/guy-on-stairs.webp")
				img.w-full.h-auto(src="/images/solar-on-site.webp")

		.text-white
			//-ContentPageFooter(svgFillClass="!fill-transparent")
</template>
