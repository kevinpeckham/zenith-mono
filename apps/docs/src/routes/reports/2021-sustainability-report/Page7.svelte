<script lang="ts">
	// components
	import ArticleHeading from "$atoms/ArticleHeading.svelte";
	import ChapterHeading from "$atoms/ChapterHeading.svelte";
	import ContentPageFooter from "$molecules/ContentPageFooter.svelte";
	import Header from "$molecules/Header.svelte";
	import Main from "$atoms/Main.svelte";
	import { PageLayout, PieChart, colors } from "lj-svelte-ui";
	import TerminalsMap from "$atoms/TerminalsMap.svelte";
	import TerminalsOverview from "$atoms/TerminalsOverview.svelte";
	import TopicHeading from "$atoms/TopicHeading.svelte";

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
			.columns-2.gap-8
				//- left column 1
				div
					//- section
					section.mb-6
						ArticleHeading(
							classes="mb-6",
							articleNumber!="{ 2 }",
							articleTitle!="Awards & Recognition",
							chapterNumber!="{ 3 }",
							page!="{ page }")

						TopicHeading(
							articleNumber!="{ 2 }",
							chapterNumber!="{ 3 }",
							page!="{ page }",
							topicNumber!="{ 1 }",
							topicTitle!="Energy Star Award")

						//- text
						.prose.prose-sm.prose-slate.relative.max-w-none.leading-normal
							p We are pleased that our ESG efforts are being recognized. Our Portland Terminal achieved the U.S. Environmental Protection Agency (EPA) ENERGY STAR Challenge for Industry. This challenge recognizes that we achieved at least a 10-percent reduction in energy intensity within 5 years. Zenith Energy achieved a 64-percent reduction in energy intensity in two years. We are incredibly proud of all of our teams that worked together to make this significant reduction and achievement.
					//- section 2
					section
						//- text columns
						.relative.max-w-none.leading-snug
							ArticleHeading(
								articleNumber!="{ 3 }",
								articleTitle!="Mission, Vision, & Values",
								chapterNumber!="{ 3 }",
								page!="{ page }")
							//- topic 1
							.leading-normal.prose.prose-sm.prose-slate
								TopicHeading(
									articleNumber!="{ 3 }",
									chapterNumber!="{ 3 }",
									page!="{ page }",
									topicNumber!="{ 1 }",
									topicTitle!="Safety First")
								p Our ability to create jobs for hardworking men and women is why we all come to work every day, and we are committed to keeping the environment, our neighbors, and our teams safe across our operations. We continue to invest in infrastructure modernization to ensure our terminals are equipped with best-in-class safety equipment and conduct regular trainings that protect our employees, contractors, and the communities where we operate. Zenith Energy is recognized within the industry as a model for safe operations.
								p Zenith Energy is an active member of the International Liquid Terminals Association (ILTA) and we have won numerous awards for our strict standards for the safe handling and shipment of products. Our goal is zero incidents, period.

					section.mt-6
						//- graph
						.w-full.mb-6.break-after-column
							.grid.pr-6.py-6.rounded-sm.bg-slate-100.grid-cols-2.gap-8.text-white(
								class="h-auto")
								.order-0.relative.grid.grid-cols-1.place-content-center.place-items-end
									.text-richBlack
										PieChart(
											primaryColor!="{ $colors.yellowGreen }",
											secondaryColor!="#F1F5F9",
											value!="{ 64 }",
											width!="{ 120 }")
								.text-13.text-richBlack.order-1.flex.items-center.font-medium(
									class="text-[12px] leading-[1.35]")
									div Reduced energy intensity at the Portland site by 64% in 2 years
						.mb-4.leading-normal.prose.prose-sm.prose-slate
							TopicHeading(
								articleNumber!="{ 3 }",
								chapterNumber!="{ 3 }",
								page!="{ page }",
								topicNumber!="{ 2 }",
								topicTitle!="Environmental Stewardship")
							p Zenith Energy works every day to responsibly operate our terminals to protect the environment and the products we handle and store. We understand the growing role of alternative energy sources in our society, and we see ourselves as a partner for customers in this transition. For example, we are overhauling our Portland terminal by converting approximately 500,000 barrels of storage capacity for renewable fuels, developing a safe, economic rail solution for renewable fuels and constructing a new offloading station to deliver renewable diesel across the Pacific Northwest.

						//- topic 3
						.mb-4.leading-normal.prose.prose-sm.prose-slate
							TopicHeading(
								articleNumber!="{ 3 }",
								chapterNumber!="{ 3 }",
								page!="{ page }",
								topicNumber!="{ 3 }",
								topicTitle!="Customer Driven")
							p We are committed to providing high quality service for our customers. If we give you our word, we promise to keep it. We share a collective goal of protecting our environment and optimizing safety as well as striving to operate at the highest standard possible to continue to be the partner of choice for our customers. Unlike other operators, Zenith Energy Terminals is a third-party terminal company that does not market, store, or own petroleum product. Because of this, we do not compete with our customers and are able to put their storage needs first.

						//- topic 4
						.mb-4.leading-snug.prose.prose-sm.prose-slate
							TopicHeading(
								articleNumber!="{ 3 }",
								chapterNumber!="{ 3 }",
								page!="{ page }",
								topicNumber!="{ 4 }",
								topicTitle!="Operational Excellence")
							p We are committed to providing high quality service for our customers. If we give you our word, we promise to keep it. We share a collective goal of protecting our environment and optimizing safety as well as striving to operate at the highest standard possible to continue to be the partner of choice for our customers. Unlike other operators, Zenith Energy Terminals is a third-party terminal company that does not market, store, or own petroleum product. Because of this, we do not compete with our customers and are able to put their storage needs first.
							div(class="h-[140px]")

		ContentPageFooter
</template>
