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

	// set page context
	import { setContext } from "svelte";
	setContext("page", page);

	const tableData = [
		["", "Units", "2019", "2020", "2021"],
		[
			"Total gross Scope 1 GHG Emissions ",
			"CO2e (t)",
			"26,028",
			"33,123",
			"31,348",
		],
		[
			"Total gross Scope 2 GHG Emissions, location-based",
			"CO2e (t)",
			"6,720",
			"8,785",
			"8,984",
		],
		[
			"Total GHG Emissions (Scope 1 + Scope 2)",
			"CO2e (t)",
			"32,748",
			"41,908",
			"40,332",
		],
		[
			"GHG emission intensity, in metric tons (t) CO2-e per BOE throughput",
			"CO2e (t) /BOE",
			"0.0010",
			"0.0010",
			"0.0005",
		],
	];
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
				articleTitle!="Climate Change",
				chapterNumber!="{ 4 }")
			TopicHeading(
				articleNumber!="{ 2 }",
				chapterNumber!="{ 4 }",
				page!="{ page }",
				topicNumber!="{ 2 }",
				topicTitle!="Greenhouse Gas Emissions")

			section.prose.prose-sm.prose-slate.relative.mb-8.max-w-none.columns-2.gap-8.leading-normal.mt-4
				p Our current GHG emissions inventory was updated and verified by a third-party consultant using the methodologies outlined in the Greenhouse Gas Protocol: A Corporate Accounting and Reporting Standard developed by the World Resources Institute (WRI) and World Business Council for Sustainable Development (WBCSD). Our third-party consultant provided limited assurance of our 2019, 2020, and 2021 GHG emissions inventories allowing Zenith Energy U.S. terminals to establish 2019 as our baseline year for which current emissions can be compared for performance against our GHG targets.
				p The Scope 1 emissions reported include direct emissions from sources owned or controlled by Zenith Energy U.S. terminals. Examples of our Scope 1 emission sources by emission type include combustion of fuel by stationary sources and combustion of waste gas in emissions control equipment. Our Scope 2 emissions consist of indirect emissions from purchased electricity.
				p Our gross operational control Scope 1 and Scope 2 emissions and GHG emission intensity from our continuing operations are provided below and include the emissions from assets we operate. The emissions are provided in metric tons (t) of carbon dioxide equivalent (CO2e), except emission intensity, which is provided in metric tons CO2-e per Barrel of Oil (BOE) throughput.
				p The ESG Content Index in this report provides further details our organization’s total carbon footprint including methane emissions, which account for less than 1-percent of our Scope 1 and 2 emissions. The Index includes Scope 3 emissions, which were provided for Zenith Energy U.S. business travel and employee commuting activities. We are evaluating other Scope 3 categories for significance and relevant Scope 3 emissions categories will be included in future reporting.
				p In addition to Zenith Energy’s GHG emissions, we track environmental compliance and performance using a comprehensive set of EH&S management systems, databases, and software technologies. Additional metrics and data we track include environmental incidents and spills, incident investigations, and workforce health and safety metrics, which are included in the ESG Content Index.

			figure.mb-6.w-full.px-0
				.text-13.text-richBlack.order-1.flex.items-center.rounded-md.px-6.py-4.font-medium(
					class="bg-yellowGreen/10 border-richBlack  text-14 font-semibold")
					div GHG Emissions Intensity decreased by 50% in one year from 2020 to 2021
			figure.order-1.grid.w-full.w-full.grid-cols-1.place-content-start.place-items-start.gap-4.rounded-md.px-0.py-2.font-normal.leading-normal
				.text-13.mb-4.w-full
					table.border-richBlack.w-full.border-collapse.overflow-hidden.rounded-sm
						+each('tableData as row, rowIndex')
							tr
								+each('row as cell, cellIndex')
									+if('rowIndex == 0')
										//- header row
										td.bg-yellowGreen.text-14.border.px-2.font-medium.text-white(class="py-[6px]") {  cell  }
										+else
											td.bg-antiFlash.text-richBlack.border.px-2.py-2 {  cell  }

					ContentPageFooter
</template>
