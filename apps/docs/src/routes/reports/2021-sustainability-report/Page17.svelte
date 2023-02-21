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
			ChapterHeading(
				chapterNumber!="{ 5 }",
				chapterTitle!="Health, Safety, Environment & Quality",
				page!="{ page }")

			ArticleHeading(
				articleNumber!="{ 1 }",
				articleTitle!="Workforce Health & Safety",
				chapterNumber!="{ 5 }",
				page!="{ page }")

			.prose.prose-sm.prose-slate.relative.mb-6.grid.max-w-none.grid-cols-2.gap-8.pb-4.leading-normal(
				class="border-richBlack/40")
				div
					p.mt-0 Zenith Energy recognizes the importance of Health, Safety, Environment and Quality and the impact that it has on our business, employees, and surrounding environments in which we operate. Our culture of Health & Safety places employees at the core of day-to-day operations and the center of our vision for the future. We are committed to high standards for Health, Safety, and Environmental practices. Our Vision is to have zero recordable injuries, zero regulatory citations, zero product quality incidents, and zero reportable spills. We work every day to make this goal a reality, achieve full compliance with regulatory and corporate standards, and seek continuous improvement.
					p To fulfill our commitments, we have implemented specific programs designed to prevent and mitigate safety incidents. Since beginning operations in 2017, Zenith Energy has established a team of experts to address topics ranging from environmental management to site assessments and emergency response.
					p To monitor our progress, we have tracked metrics such as the number of first aid cases per year, medical treatment cases, total recordable incident rate (TRIR), and restricted work and lost time cases every year since 2019.

				aside.grid.grid-cols-1.place-content-start.place-items-start.gap-6
					.prose.prose-sm.w-full
						//- quote
						.bg-antiFlash.order-1.grid.grid-cols-2.place-content-center.place-items-center.gap-4.rounded-md.px-4.py-4.font-normal.leading-normal
							.mb-2
								.text-26.mb-1 300%
								.text-13.italic.leading-snug
									div increase in training
									div hours year over year
							.mb-2
								.text-26.mb-1 3,842
								.text-13.italic.leading-snug
									div EH&amp;S training
									div hours in 2021

					.bg-antiFlash.w-full.rounded-md.px-4.pt-4
						//- bubble graphic
						.text-richBlack.grid.grid-cols-1.gap-1
							.order-1
								//-PieChart(
									primaryColor!="{ $colors.yellowGreen }",
									secondaryColor!="rgba(255, 255, 255, 1)",
									value!="{ 29 }",
									width!="{ 145 }")
								.grid.grid-cols-1.place-content-center.place-items-center
									img.px-12(
										height="312",
										src="/images/award-medallion.webp",
										width="312")
							.text-13.order-0.font-medium We have won numerous awards for our strict standards for the safe handling and shipment of products such as the Safe Handling Award from CN Railroad for the past three years (2019-2021)

		ContentPageFooter
</template>
