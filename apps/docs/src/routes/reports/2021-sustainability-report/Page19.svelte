<script lang="ts">
	// components
	import ArticleHeading from "$atoms/ArticleHeading.svelte";
	import ChapterHeading from "$atoms/ChapterHeading.svelte";
	import ContentPageFooter from "$molecules/ContentPageFooter.svelte";
	import Header from "$molecules/Header.svelte";
	import IconAndText from "$atoms/IconAndText.svelte";
	import IconFeather from "$atoms/IconFeather.svelte";
	import Main from "$atoms/Main.svelte";
	import TopicHeading from "$atoms/TopicHeading.svelte";
	import TopicSubheading from "$atoms/TopicSubheading.svelte";
	import { midnight, PageLayout } from "lj-svelte-ui";
	//-import { BubbleGraphic } from "lj-svelte-ui";
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
	const initiatives = [
		{
			icon: "thermometer",
			heading: "Industrial Hygiene Exposure Assessments",
			text: "Conducted Industrial Hygiene Exposure Assessments for noise and light at all U.S. terminals to understand exposure levels and confirmed that employees have access and are using correct PPE for the required job",
		},
		{
			icon: "database",
			heading: "SMARTPLAN™ HSER Plans Digital Repository",
			text: "Uploaded all regulatory and response plans into a digital platform to streamline and customize our regulatory plans and preparedness program",
		},
		{
			icon: "zap",
			heading: "Fire Contingency Planning",
			text: "",
			bullets: [
				"Completed Fire Department Capability Surveys for each location to catalogue capabilities of local fire response services and identify procedures that Zenith Energy must implement to fill gaps.",
				"Developed a fire prevention plan to define how terminals would prevent fires from occurring and what resources were needed to contain fires.",
				"Created Fire Tactics Pre-Plans on a tank-by-tank basis for proper offensive and defensive fire fighting tactics should a fire occur at our facilities.",
			],
		},
	];

	const transformations = [
		"Regulatory plans stored and managed in SmartPlan Software. This allows for streamlined plan maintenance, secure access to regulatory plans while offsite and stakeholder access to update our plans 24/7.",
		"HSER Policies and Procedures are managed within a SharePoint site repository allowing for quick access to all policies and procedures across the organization.",
		"For workforce safety and compliance management our team has digitized our entire program using SiteDocs Safety Management Software.  This allows for increased visibility of potential incidents and reporting, digital form completion, safety document management, worker certifications and training.",
		"Our incident management tool for all-hazards emergency response is Incident Action Plan (IAP) Software.  The tool employs integrated forms and processes for management of an incident throughout all stages of an event by facilitating the flow of information throughout the organization to manage major incidents comprehensively and efficiently.",
		"Veriforce Software is used for contractor safety management and operator qualifications. This supply chain risk and compliance management tool facilitates risk management, data collection, and verification of contractors including U.S. Department of Transportation (DOT) regulated activities.",
		"Our Lone Worker Program utilizes SafeSignal to monitor personnel while working alone after hours and enhance workforce safety.",
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
			.prose.prose-sm.prose-slate.relative.mb-6.grid.max-w-none.grid-cols-2.gap-8.pb-4.leading-normal(
				class="border-richBlack/40")
				//- left column
				div
					//- leading
					TopicHeading(
						classes="mb-4",
						articleNumber!="{ 1 }",
						chapterNumber!="{ 5 }",
						page!="{ page }",
						topicNumber!="{ 1 }",
						topicTitle!="Leading Initiatives")
					//- content
					div
						p.mt-0 Every year, Zenith Energy selects three initiatives to continue to propel our health and safety program to the forefront of the industry while not detracting the necessary attention from the day-to-day operations.

						.mb-4
							.uppercase.font-semibold.underline-offset-4.text-15(
								class="opacity-95 !text-ricBlack") 2021 HSE Initiatives

						//- Icon & Text
						+each('initiatives as initiative')
							+if('initiative.text')
								IconAndText
									svelte:fragment(slot="icon")
										IconFeather(icon!="{ initiative.icon }")
									svelte:fragment(slot="heading")
										span(class="!text-richBlack") {  initiative.heading  }
									svelte:fragment(slot="text") {  initiative.text  }
								+else
									IconAndText
										svelte:fragment(slot="icon")
											IconFeather(icon!="{ initiative.icon }")
										svelte:fragment(slot="heading")
											div(class="!text-richBlack") {  initiative.heading  }
											ul.font-normal.pl-3(class="text-[13.5px]")
												+each('initiative.bullets as bullet')
													li.mb-2 {  bullet  }
						.mt-6.w-full.bg-blue-500.h-56.overflow-hidden.rounded-md
							picture.flex.w-full.h-full
								img.min-w-full.min-h-full.object-cover.m-0(
									src="/images/contingency-planning.webp")
				div
					//- leading
					TopicHeading(
						articleNumber!="{ 1 }",
						chapterNumber!="{ 5 }",
						page!="{ page }",
						topicNumber!="{ 2 }",
						topicTitle!="Digital Transformation")
					//- content
					div
						p.mt-0 We have advanced our health and safety preparedness, processes and procedures through investments in digital platforms for management of multiple plan types for every U.S. terminal. Our digital software and management programs include:

						//- Icon & Text
						ul.pl-3
							+each('transformations as transformation')
								li.mb-2(class="text-[13.5px]") {  transformation  }

						//- trailing paragraph
						p With increased innovation, digitization, and automation, we are able to improve our financial and HSE outcomes, while building a highly trained, agile workforce and culture of safety.

		ContentPageFooter
</template>

<style>
	::marker {
		color: #7cc022;
	}
</style>
