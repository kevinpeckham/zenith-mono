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
				articleNumber!="{ 2 }",
				articleTitle!="Climate Change",
				chapterNumber!="{ 4 }")

			.prose.prose-sm.prose-slate.relative.grid.max-w-none.grid-cols-2.gap-8.leading-normal
				div
					TopicHeading(
						articleNumber!="{ 2 }",
						chapterNumber!="{ 4 }",
						topicNumber!="{ 1 }",
						topicTitle!="Offsets and Carbon Neutral Operations")

					p Zenith Energy’s commitment to sustainability extends beyond the renewable solutions we can provide to our customers. We are investing in our own footprint to reduce our carbon impacts through infrastructure improvements to reduce our facility emissions, development of decarbonization strategies using a third-party consultant, and use of carbon offset credits.

					//- subtopic
					.font-medium.italic Zenith Energy U.S. Terminals Achieved Carbon Neutrality in 2021

					p The Zenith Energy U.S. Terminals have achieved carbon neutrality in 2021 for greenhouse gas (GHG) emissions by using emission reduction credits to offset all direct operational GHG emissions (Scope 1), all indirect GHG emissions from purchased electricity (Scope 2), and all company business travel and employee commuting (limited Scope 3). Zenith Energy U.S. Terminals acquired approximately 41 thousand unique carbon credits verified using the Verified Carbon Standard (VCS). Emissions were quantified in terms of metric tons of carbon dioxide equivalent (CO2e) in accordance with the WRI/WBCSD GHG Protocol and SASB Midstream Standard for the reporting of GHG emissions. Achieving carbon neutrality in 2021 is a significant milestone for Zenith Energy U.S. and further supports the goal of achieving a carbon neutral society. Since the founding of Zenith Energy U.S. in 2017, we have worked hard to fulfill our mission of creating a sustainable, independent liquid storage terminals business and we are entirely committed to environmental sustainability and are unaware of any other U.S. liquids storage terminals that has achieved carbon neutrality. We are proud to be the first major U.S. terminal company to achieve this milestone.

				aside.grid.grid-cols-1.place-content-start.place-items-start.gap-4.bg-white
					.prose.prose-sm
						//- quote
						.bg-antiFlash.order-1.rounded-md.px-4.py-4.font-normal.italic.leading-normal
							.text-13.mb-2.font-medium "At Zenith Energy, actions speak louder than words. Our team devised aggressive ESG goals & targets and made fantastic headway executing the plan. The organization is carbon neutral for 2021 operations, becoming the first terminal company to earn this achievement. The Portland Terminal increased its renewable fuels contracts to approximately 30-percent of the overall business with visibility of 40-percent by year end 2023. Our community outreach has ramped up with energetic participation from local teams. Zenith Energy will continue leading the terminal industry as world class operator prioritizing the environment, people, and the communities we operate in."
							.text-12.font-normal - Grady Reamer, VP of U.S. West Operations

		ContentPageFooter
</template>
