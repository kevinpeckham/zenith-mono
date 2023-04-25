<script lang="ts">
	// components
	import ArticleHeading from "$atoms/ArticleHeading.svelte";
	import ArticleSubheading from "$atoms/ArticleSubheading.svelte";
	import ChapterHeading from "$atoms/ChapterHeading.svelte";
	import ContentPageFooter from "$molecules/ContentPageFooter.svelte";
	import Header from "$molecules/Header.svelte";
	import Main from "$atoms/Main.svelte";
	import { PageLayout } from "lj-svelte-ui";
	import { PictureCloudinary } from "lj-svelte-ui";
	// import SimpleInfographic from "$atoms/SimpleInfographic.svelte";
	// import SidebarCallout from "$atoms/SidebarCallout.svelte";
	import HighlightWidget from "$atoms/HighlightWidget.svelte";

	// props
	export let doc: Document;
	export let edition = "";
	export let page = 0;

	// set page context
	import { setContext } from "svelte";
	setContext("page", page);

	// stats
	interface Stat {
		stat?: string;
		label: string;
		heading?: string;
		number?: string;
	}

	// const stats: Stat[] = [
	// 	{
	// 		heading: "Renewable Fuels",
	// 		number: "17%",
	// 		label:
	// 			"17% of storage capacity used for renewable fuel storage in 2021 with a contracted capacity of 29% in 2022",
	// 	},
	// 	{
	// 		heading: "Portland, OR",
	// 		label:
	// 			"Replacing 100% of crude oil storage at the Portland, Oregon terminal with renewable fuels in five years",
	// 	},
	// 	{
	// 		heading: "Emissions Intensity",
	// 		label:
	// 			"50% reduction in Scope 1 and 2 Emissions Intensity per BOE throughput",
	// 	},
	// 	{
	// 		heading: "Carbon Neutrality",
	// 		label:
	// 			"Achieved Carbon Neutrality for Zenith Energy U.S. Terminals in 2021",
	// 	},
	// 	{
	// 		heading: "Energy Intensity",
	// 		label:
	// 			"64% reduction in energy intensity at Portland terminal in 2 yrs. + received Energy Star Challenge award",
	// 	},
	// 	{
	// 		heading: "Energy Consumption",
	// 		label:
	// 			"8% Reduction in energy consumption in one year (2021) vs. goal of 10% within 3 years from 2020 baseline",
	// 	},
	// 	{
	// 		heading: "SASB Framework",
	// 		label: "Adopted SASB Framework for reporting",
	// 	},
	// 	{
	// 		heading: "GHG Emissions",
	// 		label: "Third-party review and verification of GHG emissions",
	// 	},
	// 	{
	// 		heading: "TCFD Assessment",
	// 		label:
	// 			"Conducted 3rd-party risk assessment in alignment with the Task Force on Climate-Related Financial Disclosures",
	// 	},
	// 	{
	// 		heading: "Energy Management",
	// 		label:
	// 			"Adopted organizational Energy Management Policy and GHG Data Quality Management Plan",
	// 	},
	// 	{
	// 		heading: "EH&S Training",
	// 		label:
	// 			"300% increase in Environmental, Health, & Safety (EH&S) workforce training hrs. in 2021 vs. prior year",
	// 	},
	// 	{
	// 		heading: "Safety",
	// 		label: "Achieved 89.9 Incident Composite Rate versus annual goal of 90",
	// 	},
	// 	{
	// 		heading: "Leadership",
	// 		label: "42% of Executive Leadership team is comprised of women",
	// 	},
	// 	{
	// 		heading: "Charitable Giving",
	// 		label: "$14,000+ donated to local communities in which we operate",
	// 	},
	// 	{
	// 		heading: "Employment",
	// 		label:
	// 			"77% of new hires in 2021 were local to the communities we operate within",
	// 	},
	// 	{
	// 		stat: "",
	// 		heading: "Veriforce",
	// 		label:
	// 			"Launched Veriforce software for contractor safety management, operator qualifications & compliance",
	// 	},
	// 	{
	// 		stat: "",
	// 		heading: "SmartPlan",
	// 		label:
	// 			"Adopted SmartPlan software for maintaining regulatory & response plans + long-term compliance",
	// 	},
	// 	{
	// 		stat: "",
	// 		heading: "Fire Contingency",
	// 		label: "Established an advanced fire contingency framework",
	// 	},
	// ];
	const topics = [
		{
			heading: "Clean Energy Capacity",
			stats: [
				{
					heading: "17%",
					text: "of storage capacity used for renewable fuel storage in 2021",
				},
				{
					heading: "29%",
					text: "contracted renewable fuel storage capacity in 2022",
				},
				{
					heading: "100%",
					colspan: 2,
					text: "replacement of crude oil storage with renewable fuels at the Portland Terminal in 5 years",
				},
			],
		},
		{
			heading: "Action on Climate",
			stats: [
				{
					heading: "50%",
					text: "reduction in Scope 1 and 2 Emissions Intensity per BOE throughput",
				},
				{
					heading: "Net Zero",
					text: "carbon neutrality achieved for Zenith Energy U.S. Terminals in 2021",
				},
				{
					heading: "Verification",
					text: "third-party verification of GHG emissions",
				},
				{
					heading: "TCFD",
					text: "physical risk assessment",
				},
			],
		},
		{
			heading: "People and Community",
			stats: [
				{
					heading: "42%",
					text: "of executive leadership team is comprised of women",
				},
				{
					heading: "$14,000 +",
					text: "donated to local communities in which we operate",
				},
				{
					heading: "77%",
					colspan: 2,
					text: "of new hires in 2021 were local to the communities we operate within",
				},
			],
		},
		{
			heading: "Energy Management",
			stats: [
				{
					heading: "64%",
					text: "reduction in Energy Intensity at the Portland Terminal in 2 years",
				},
				{
					heading: "Energy Star",
					text: "earned EPA Energy Star award for Portland Terminal",
				},
				{
					heading: "8%",
					colspan: 2,
					text: "reduction in Energy Consumption in one year (2021) vs. goal of 10% within three years (from the baseline year of 2020)",
				},

				{
					heading: "Adopted",
					text: "",
					colspan: 2,
					bullets: [
						"Energy Management Policy",
						"GHG Data Quality Management Plan",
						"SASB Framework",
					],
				},
			],
		},
		{
			heading: "Workforce Health & Safety",
			stats: [
				{
					heading: "300%",
					text: "increase in EH&S workforce training hours in 2021 since the prior year",
				},
				{
					heading: "89.9%",
					text: "incident composite rate achieved versus annual goal of 90",
				},
				{
					heading: "Implemented",
					text: "",
					colspan: 2,
					bullets: [
						"Veriforce software for contractor safety management and operator qualifications",
						"Smart Plan software for regulatory and response plans and compliance",
						"Advanced fire contingency framework",
					],
				},
			],
		},
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
			ChapterHeading(
				chapterNumber!="{ 2 }",
				chapterTitle!="Report Highlights",
				page!="{ page }")

			.grid.grid-cols-2.gap-x-6
				//- left column
				.grid.grid-cols-1.gap-y-6.place-content-start.justify-content-start
					+each('topics as topic, index')
						+if('index == 0 | index == 1 || index == 2')
							HighlightWidget(stats!="{ topic.stats }")
								svelte:fragment {  topic.heading  }

				//-right-column
				.grid.grid-cols-1.gap-y-6.place-content-start.justify-content-start
					+each('topics as topic, index')
						+if('index == 3 | index == 4 || index == 5')
							HighlightWidget(stats!="{ topic.stats }")
								svelte:fragment {  topic.heading  }

		ContentPageFooter
</template>
