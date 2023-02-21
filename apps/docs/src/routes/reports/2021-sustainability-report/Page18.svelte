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
	//-import { BubbleGraphic } from "lj-svelte-ui";
	import { PieChart } from "lj-svelte-ui";

	// store
	import { colors } from "lj-svelte-ui";
	import { init } from "svelte/internal";
	// props
	export let doc: Document;
	export let edition = "";
	export let page = 0;

	interface Initiative {
		icon: string;
		heading: string;
		text: string;
		bullets?: string[];
	}
	const initiatives = [
		{
			icon: "icon",
			heading: "Industrial Hygiene Exposure Assessments",
			text: "Conducted Industrial Hygiene Exposure Assessments for noise and light at all U.S. terminals to understand exposure levels and confirmed that employees have access and are using correct PPE for the required job",
		},
		{
			icon: "icon",
			heading: "SMARTPLAN™ HSER Plans Digital Repository",
			text: "Uploaded all regulatory and response plans into a digital platform to streamline and customize our regulatory plans and preparedness program",
		},
		{
			icon: "icon",
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
		Main(classes="h-[890px]")
			.prose.prose-sm.prose-slate.relative.mb-6.max-w-none.grid.grid-cols-2.gap-8.leading-normal.h-full(
				class="border-richBlack/40")
				//- left column
				.grid.grid-cols-1.place-content-between.h-full
					div
						//- leading
						TopicHeading(
							articleNumber!="{ 1 }",
							chapterNumber!="{ 5 }",
							page!="{ page }",
							topicNumber!="{ 3 }",
							topicTitle!="Health &amp; Safety Indicator")

						//- content
						.mb-4
							p.mt-0 We created an internal workforce H&amp;S indicator for Zenith Energy, the Incident Composite Rate (ICR), to better represent the factors that could attribute to workplace incidents. The ICR considers employee tenure with the company because an increased rate of error can be expected from employees within the first stages of employment and when there is a high turnover rate. The maximum score for the ICR is 100, representing work successfully performed every time, and our annual target is 90.

						//- content
						.mb-4
							p.mt-0 Some of the best safety improvement ideas come from employees. We encourage our employees with ideas, concerns, or suggestions for improved safety in the workplace to raise them and bring them to the attention of the Health, Safety, Environmental, and Regulatory Manager. Reports and concerns about workplace safety issues may be made anonymously if the employee wishes and all reports can be made without fear of reprisal.

					//- shunt to the bottom
					.self-end
						.italic.text-13.opacity-80 Meeting ICR Goals
						//- graphic
						.bg-slate-200.w-full.h-48.flex.justify-center.items-center
							.text-white [ Graphic Placeholder ]
							//-  During 2021, all our terminals had industrial hygiene surveys conducted.

							//PieChart(
								{colors},
								{midnight},
								{transformations})

				//-right column

				.grid.grid-cols-1.place-content-between.h-full
					div
						//- leading
						TopicHeading(
							articleNumber!="{ 1 }",
							chapterNumber!="{ 5 }",
							page!="{ page }",
							topicNumber!="{ 4 }",
							topicTitle!="Contractor Safety")

						//- content
						.mb-6
							p.mt-0.mb-6 We created an internal workforce H&amp;S indicator for Zenith Energy, the Incident Composite Rate (ICR), to better represent the factors that could attribute to workplace incidents. The ICR considers employee tenure with the company because an increased rate of error can be expected from employees within the first stages of employment and when there is a high turnover rate. The maximum score for the ICR is 100, representing work successfully performed every time, and our annual target is 90.

						//- leading
						TopicHeading(
							articleNumber!="{ 1 }",
							chapterNumber!="{ 5 }",
							page!="{ page }",
							topicNumber!="{ 5 }",
							topicTitle!="Safety in Our Facilities")

						//- content
						.mb-6
							p.mt-0 As part of our comprehensive Health, Safety, Environmental, and Regulatory (HSER) framework we have implemented specific safety measures and procedures at all our facilities ranging from training of site management and staff to monitoring and inspections of facilities, and incident related protocols. Frontline supervisors must complete a verification to evaluate on-site personnel safety performance and utilize reporting channels in place for disclosure of unsafe conditions including an anonymous hotline. There are onsite safety personnel at our four largest terminals, rigorous on-site inspections at all our facilities, and routine incident response drills and training of our operations teams. In an effort to continuously improve, Zenith Energy conducts annual assessments and has digitized our plan management.

					//- shunt to the bottom
					div
						.italic.text-13.opacity-80 Meeting ICR Goals
						//- Placeholder
						.bg-slate-200.w-full.h-48.flex.justify-center.items-center
							.text-white [ Graphic Placeholder ]
							//PieChart(
								{colors},
								{midnight},
								{transformations})
		ContentPageFooter
</template>

<style>
	::marker {
		color: #7cc022;
	}
</style>
