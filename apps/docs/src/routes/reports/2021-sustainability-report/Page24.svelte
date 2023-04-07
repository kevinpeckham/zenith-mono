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
	import SidebarCallout from "$atoms/SidebarCallout.svelte";
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

	interface Initiative {
		icon: string;
		heading: string;
		text: string;
		bullets?: string[];
	}

	const goals = [
		"Increase the proportion of female employees to align with the industry average",
		"Partner with different organizations to bring more females in as operators",
		"Create Employee Resource Groups (ERGs) for minorities and underrepresented workers",
		"Continue to ensure equal compensation for men and women in each employee category",
		"Work to disclose the percent of spending on minority and women owned businesses",
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
							articleNumber!="{ 2 }",
							chapterNumber!="{ 6 }",
							page!="{ page }",
							topicNumber!="{ 2 }",
							topicTitle!="Diversity, Equity, &amp; Inclusion")
						//- content
					.mb-0
						p.mt-0.mb-3 Zenith Energy is committed to supporting workplace diversity and inclusion by committing to equal employment opportunities. To promote a wide array of diversity amongst our employees and to support all religious preferences, we have zero tolerance for any form of discrimination and provide flexible leave.
						p.mt-0.mb-3 Creating a gender-inclusive world is important to us and essential to advancing progress and opportunities, particularly within the energy sector. We have made it our priority to achieve greater gender balance throughout our company and this starts at the top of our organization.
						p.mt-0.mb-3 To achieve our diversity goals, we also focus on increasing the diversity of our suppliers and examine the gender pay equity ratio annually across Zenith Energy, which is shared with our Board of Directors. Each year our compensation committee and board of directors conduct a review of the gender pay equity ratio at Zenith Energy to ensure women and men are compensated equally.
						p.mt-0.mb-3 Currently at Zenith Energy, 42 percent of the leadership team is comprised of women and there is a multi-generational workforce. Age, gender, and other indicators of diversity are tracked internally as a Human Resources practice. Zenith Energy set a goal for 2021 to increase the proportion of female employees to at least meet industry averages.

				section
					//- image
					.text-15.mt-10.leading-none.mb-4.font-medium Zenith Energy's DEI Journey
					.mt-2
						SidebarCallout
							.text-14.italic As we look forward in our DEI journey, we aim to achieve the following:
							ul.pl-2
								+each('goals as goal')
									li.text-14.text-white.pl-4.mb-5.leading-tight.text-14(
										class="marker:text-maize") {  goal  }

		//-.absolute.w-full.bottom-0(class="h-[340px]")
			img(
				alt="Diversity, Equity, &amp; Inclusion",
				src="/images/dei.webp")
		.text-white
			ContentPageFooter
</template>

<style>
	::marker {
		/* color: white; */
		/* content: ":"; */
		font-size: 20px;
	}

	ul {
		/* list-style-type: "\2714"; */
		list-style-type: "\2610";
	}
</style>
