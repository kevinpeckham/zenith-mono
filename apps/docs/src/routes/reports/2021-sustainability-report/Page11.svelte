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
	import QuotationMarkGraphic from "$atoms/QuotationMarkGraphic.svelte";

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
			//-ArticleHeading(
				articleNumber!="{ 2 }",
				articleTitle!="Case Study",
				chapterNumber!="{ 4 }")
			.columns-2
				TopicHeading(
					classes!="text-richBlack/90",
					articleNumber!="{ 1 }",
					chapterNumber!="{ 4 }",
					page!="{ page }",
					topicNumber!="{ 2 }",
					topicTitle!="Case Study: Renewable Diesel Handling and Storage at Portland Terminal")

			.prose.prose-sm.prose-slate.relative.grid.max-w-none.grid-cols-2.gap-8.leading-normal
				//- column 1
				div
					p In response to growing demand in the Pacific Northwest from refiners who are transitioning their operations to renewable diesel – which works in all climates and requires no engine modification – Zenith Energy is implementing major changes to its Portland Terminal.

					p In 2021, Zenith Energy announced a nearly three-fold increase in the amount of low-carbon, renewable diesel to be handled and stored at the Portland, Oregon, facility. This increase is the result of new, long-term commitments with customers who are committed to a low-carbon economy and providing renewable fuels to the greater Portland area. This commitment further supports Zenith's vision of the Portland Terminal as a premier logistical asset in the handling of renewable fuels, which will assist the City of Portland in reaching its Climate Emergency Workplan goals and the 2035 Comprehensive Plan, as well as supporting the Oregon Clean Fuels Program.

					//- p From Zenith Energy CEO Jeff Armstrong:

					//- p.italic "We acquired the Portland Terminal to capitalize on the growing demand for renewable fuels in Oregon and throughout the western United States. The terminal can play a significant role in helping Oregon meet its carbon reduction goals by making clean, renewable fuels readily available for public and private sector fleet owners."

					p Renewable diesel has been shown to result in an up to 80 percent reduction in greenhouse gas emissions as compared to petroleum diesel
						span: sup.text-10.inline-block(class="ml-[1px]") 1
						span .&nbsp;
						span Over the past decade, California's use of renewable diesel has prevented more than 30 million tons of CO2 from entering the atmosphere. Renewable diesel also significantly reduces other pollution, including fine particles, nitrogen oxides, hydrocarbons, and carbon monoxide.

				//-column 2
				aside.grid.grid-cols-1.place-content-start.place-items-start.gap-4.mt-2
					//- one
					.mt-0.mb-0.w-full.border-0.px-4.pt-2
						.text-richBlack.relative.grid.grid-cols-2.gap-8(class="h-[132px]")
							//- chart
							.relative.order-1.flex.justify-start
								.absolute(class="-translate-x-[20px]")
									PieChart(
										classes,
										primaryColor!="{ $colors.yellowGreen }",
										secondaryColor!="{ $colors.antiFlash }",
										value!="{ 17 }",
										width!="{ 145 }")
							//- text
							.order-0.flex.h-full.items-center.text-right.font-medium(
								class="text-[12px] leading-[1.35]")
								div At the end of 2021, 17% of the fuels stored at the Portland Terminal were renewable.

					//-two
					.mb-0.w-full.border-0.px-4.pb-2
						//- bubble graphic
						.grid.grid-cols-2.gap-8.text-white(class="h-[120px]")
							.order-0.relative.grid.grid-cols-1.place-content-center.place-items-end
								div
									PieChart(
										primaryColor!="{ $colors.yellowGreen }",
										secondaryColor!="{ $colors.yellowGreen }",
										value!="{ 100 }",
										width!="{ 120 }")
							.text-13.text-richBlack.order-1.flex.items-center.font-medium(
								class="text-[12px] leading-[1.35]")
								div Zenith Energy anticipates replacing 100% of its crude oil storage in Portland w/ renewable fuels in the next 5 years.

					//- three
					.mb-2.w-full.border-0.px-4.pt-0.pb-1
						//- bubble graphic
						.text-richBlack.grid.grid-cols-2.gap-8(class="h-[132px]")
							.relative.order-1
								.absolute(class="-translate-x-[20px]")
									PieChart(
										primaryColor!="{ $colors.yellowGreen }",
										secondaryColor!="{ $colors.antiFlash }",
										value!="{ 33 }",
										width!="{ 145 }")
							.text-13.order-0.flex.items-center.text-right.font-medium(
								class="text-[12px] leading-[1.35]")
								div Zenith Energy’s Portland Terminal has reduced its Scope 1 &amp; 2 greenhouse gas emissions by over 33% in just two years, from 2019 to 2021.

					//- four
					.mb-0.w-full.border-0.px-4.pb-2
						//- bubble graphic
						.grid.grid-cols-2.gap-8.text-white(class="h-[120px]")
							.order-0.relative.grid.grid-cols-1.place-content-center.place-items-end
								.relative.flex
									PieChart(
										primaryColor!="{ $colors.yellowGreen }",
										secondaryColor!="{ $colors.yellowGreen }",
										value!="{ 100 }",
										width!="{ 120 }")
									.absolute.rounded-full.bg-yellowGreen.w-full.h-full.z-10.flex.justify-center.items-center.flex
										.uppercase.text-16.leading-snug
											div Carbon
											div Offsets
							.text-13.text-richBlack.order-1.flex.items-center.font-medium(
								class="text-[12px] leading-[1.35]")
								div The purchase of carbon offsets negates the remainder of the terminal’s emissions, allowing the terminal to be carbon neutral for scope 1, scope 2, and limited scrope 3 emissions starting in 2022.

			//- quote
			.relative.border-t.border-b.border-yellowGreen.mt-10.pt-4.pb-6.bg-transparent.order-1.px-4.font-normal.leading-normal
				.h-5.w-5.mb-2.text-yellowGreen
					QuotationMarkGraphic
				.text-14.mb-2.font-medium(class="text-richBlack/90") Because renewable diesel works with the transportation industry's existing distribution infrastructure and engines, Oregon's network of pipelines, storage tanks, and fueling sites can be repurposed to rapidly scale its availability. This is a major advantage that will enable renewable diesel to replace fossil fuels faster and more affordably.
				.h-5.w-5.mb-0.rotate-180.text-yellowGreen
					QuotationMarkGraphic
				.absolute.bottom-0.px-6.pb-4.text-12.w-full.text-right.font-normal.opacity-80 - Jeff Armstrong, CEO

			.max-w-sm.pt-4
				.text-10.italic.text-slate-600.opacity-60
					span 1.&nbsp;
					san California Energy Commission Clean Transportation Program, Final Project Report: Renewable Diesel Production, January 2022 (CEC-600-2022-034).

		ContentPageFooter
</template>
