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
			.prose.prose-sm.prose-slate.relative.mb-6.max-w-none.columns-2.gap-8.leading-normal.h-full(
				class="border-richBlack/40")
				// section
				section.mb-8
					.mb-2
						TopicHeading(
							articleNumber!="{ 1 }",
							chapterNumber!="{ 5 }",
							page!="{ page }",
							topicNumber!="{ 6 }",
							topicTitle!="Emergency Preparedness & Response")
						//- content
					.mb-0
						p.mt-0 As part of our HSER framework and overall risk management we continue to drive continuous improvement in our ability to manage our emergency preparedness and response. The safety and environmental sustainability of our operations extends beyond our facilities. We see the communities where we operate as key partners, and we are investing in their health and well-being.
						p.m-0 We have local Emergency Response Teams to ensure that any incident is managed in a timely and professional manner. Our local teams are supported by our Crisis Response Team (CRT) and our Crisis Management Support Team (CMST). Through our All-Hazards Response Plan, we define our approach to emergency response to major incidents. Our plan includes a response checklist, an overview of potential crisis situations, a notification chart, a list of the Crisis Management Support Team and Crisis Response Team, and a summary of the emergency levels. The categorization of the level of an emergency is based on several factors, including type of incident, injuries, damages, regulatory reporting, offsite impact, and media coverage. The more serious an incident and the broader its potential impact, the higher the level and the more extensive the response procedures.

				//- image
				.text-xs.flex.justify-center.items-center.overflow-hidden.rounded-md(class="h-auto")
					img.w-full.h-auto.m-0(
						alt="Emergency Boat",
						height="296",
						src="/images/walkie-talkie.webp",
						width="344")

				section.break-before-column
					.mb-2
						TopicHeading(
							articleNumber!="{ 1 }",
							chapterNumber!="{ 5 }",
							page!="{ page }",
							topicNumber!="{ 7 }",
							topicTitle!="Coordination with First Responders")
					.mb-4
						p.mt-0 To better prepare personnel and practice our emergency response, we regularly conduct worst case discharge and spill drill emergency preparedness exercises with first responders. By conducting these exercises, employees and emergency responders are not only able to test their equipment, personnel, and procedures, but also to meet and work together face-to-face prior to an actual emergency.
						p We are currently implementing individualized fire plans for each of our diverse tanks to ensure both our employees and local first responders have all the information they need to address an emergency swiftly and effectively. These plans include details such as what could burn, how much fire retardant foam would be required to put out a fire, escalation prevention, and defensive roadmaps to prevent additional assets from igniting.

					.mb-2
						TopicHeading(
							articleNumber!="{ 1 }",
							chapterNumber!="{ 5 }",
							page!="{ page }",
							topicNumber!="{ 8 }",
							topicTitle!="Asset Integrity Management")
					.mb-4
						p.mt-0 Terminals are a vital component of our nation's supply chain, providing critical logistics services that spur trade both within the United States and with overseas markets. We work to provide safe, reliable, and efficient terminal operations. Our primary tool is our asset integrity management program. This program includes an assessment of operational risks related to our assets and development programs, policies, and procedures to address those risks.
						p.m-0 We share a collective goal with our customers to operate at the highest standards possible. We comply with all environmental, regulatory, and legislative requirements to ensure safe, clean, and efficient storage and handling of vital bulk liquid products within the footprint of our terminals. To ensure quality of service for our customers we conduct routine inspections for storage tank integrity using a third-party contractor for certified inspection services and superior knowledge of industry requirements. We document our integrity testing, inspections, and maintenance throughout the life of our tanks.

		ContentPageFooter
</template>

<style>
	::marker {
		color: #7cc022;
	}
</style>
