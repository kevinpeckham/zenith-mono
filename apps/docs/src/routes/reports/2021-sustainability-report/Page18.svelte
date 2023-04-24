<script lang="ts">
	// components
	import ArticleHeading from "$atoms/ArticleHeading.svelte";
	import ChapterHeading from "$atoms/ChapterHeading.svelte";
	import ContentPageFooter from "$molecules/ContentPageFooter.svelte";
	import Header from "$molecules/Header.svelte";
	import Main from "$atoms/Main.svelte";
	import TopicHeading from "$atoms/TopicHeading.svelte";
	import { midnight, PageLayout } from "lj-svelte-ui";
	import SidebarCallout from "$atoms/SidebarCallout.svelte";
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
				classes="mb-4",
				articleNumber!="{ 1 }",
				articleTitle!="Workforce Health & Safety",
				chapterNumber!="{ 5 }",
				page!="{ page }")

			.relative.mb-6.grid.max-w-none.grid-cols-2.gap-8.pb-4.leading-normal(
				class="border-richBlack/40")
				.prose.prose-sm.prose-slate
					p.mt-0 Zenith Energy recognizes the importance of Health, Safety, Environment and Quality and the impact that it has on our business, employees, and surrounding environments in which we operate. Our culture of Health & Safety places employees at the core of day-to-day operations and the center of our vision for the future. We are committed to high standards for Health, Safety, and Environmental practices. Our Vision is to have zero recordable injuries, zero regulatory citations, zero product quality incidents, and zero reportable spills. We work every day to make this goal a reality, achieve full compliance with regulatory and corporate standards, and seek continuous improvement.
					p To fulfill our commitments, we have implemented specific programs designed to prevent and mitigate safety incidents. Since beginning operations in 2017, Zenith Energy has established a team of experts to address topics ranging from environmental management to site assessments and emergency response.
					p To monitor our progress, we have tracked metrics such as the number of first aid cases per year, medical treatment cases, total recordable incident rate (TRIR), and restricted work and lost time cases every year since 2019.

				div
					.mb-6
						SidebarCallout
							svelte:fragment(slot="number") 300
							svelte:fragment(slot="symbolAfter") %
							span increase in training hours year over year
					.mb-7
						SidebarCallout
							svelte:fragment(slot="number") 3,842
							//- svelte:fragment(slot="symbolAfter") %
							span EH&amp;S training hours in 2021

					.w-full.rounded-md.px-6.py-6(class="bg-neutral-100 text-richBlack/80")
						//- bubble graphic
						.grid.grid-cols-1.place-content-center.place-items-center.mb-4
							img.px-12(
								height="312",
								src="/images/award-medallion.webp",
								width="312")
						.text-13.order-0.font-medium We have won numerous awards for our strict standards for the safe handling and shipment of products such as the Safe Handling Award from CN Railroad for the past three years (2019-2021)

		ContentPageFooter
</template>
