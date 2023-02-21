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
	import SimpleInfographic from "$atoms/SimpleInfographic.svelte";

	// props
	export let doc: Document;
	export let edition = "";
	export let page = 0;

	// stats
	interface Stat {
		stat?: string;
		label: string;
		heading?: string;
	}

	const stats: Stat[] = [
		{
			heading: "Renewable Fuels",
			label:
				"17% of storage capacity used for renewable fuel storage in 2021 with a contracted capacity of 29% in 2022",
		},
		{
			heading: "Portland, OR",
			label:
				"Replacing 100% of crude oil storage at the Portland, Oregon terminal with renewable fuels in five years",
		},
		{
			heading: "Emissions Intensity",
			label:
				"50% reduction in Scope 1 and 2 Emissions Intensity per BOE throughput",
		},
		{
			heading: "Carbon Neutrality",
			label:
				"Achieved Carbon Neutrality for Zenith Energy U.S. Terminals in 2021",
		},
		{
			heading: "Energy Intensity",
			label:
				"64% reduction in energy intensity at Portland terminal in 2 yrs. + received Energy Star Challenge award",
		},
		{
			heading: "Energy Consumption",
			label:
				"Reduction in energy consumption in one year (2021) vs. goal of 10% within 3 years from 2020 baseline",
		},
		{
			heading: "SASB Framework",
			label: "Adopted SASB Framework for reporting",
		},
		{
			heading: "GHG Emissions",
			label: "Third-party review and verification of GHG emissions",
		},
		{
			heading: "TCFD Assessment",
			label:
				"Conducted 3rd-party risk assessment in alignment with the Task Force on Climate-Related Financial Disclosures",
		},
		{
			heading: "Energy Management",
			label:
				"Adopted organizational Energy Management Policy and GHG Data Quality Management Plan",
		},
		{
			heading: "EH&S Training",
			label:
				"300% increase in Environmental, Health, & Safety (EH&S) workforce training hrs. in 2021 vs. prior year",
		},
		{
			heading: "Safety",
			label:
				"Achieved 89.9 Incident Composite Rate versus annual goal of 90",
		},
		{
			heading: "Leadership",
			label: "42% of Executive Leadership team is comprised of women",
		},
		{
			heading: "Charitable Giving",
			label:
				"$14,000+ donated to local communities in which we operate",
		},
		{
			heading: "Employment",
			label:
				"77% of new hires in 2021 were local to the communities we operate within",
		},
		{
			stat: "",
			heading: "Veriforce",
			label:
				"Launched Veriforce software for contractor safety management, operator qualifications & compliance",
		},
		{
			stat: "",
			heading: "SmartPlan",
			label:
				"Adopted SmartPlan software for maintaining regulatory & response plans + long-term compliance",
		},
		{
			stat: "",
			heading: "Fire Contingency",
			label: "Established an advanced fire contingency framework",
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
			//-ArticleHeading(
				articleNumber!="{ 1 }",
				articleTitle!="Report Highlights",
				chapterNumber!="{ 2 }")

			//- text columns
			.relative.grid.grid-cols-3.gap-6.pt-0.leading-normal
				+each('stats as stat')
					SimpleInfographic(
						heading!="{ stat.heading }",
						label!="{ stat.label }",
						stat!="{ stat.stat }")

		ContentPageFooter
</template>
