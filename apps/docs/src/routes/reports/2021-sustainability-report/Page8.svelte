<script lang="ts">
	// components
	import ArticleHeading from "$atoms/ArticleHeading.svelte";
	import ChapterHeading from "$atoms/ChapterHeading.svelte";
	import ContentPageFooter from "$molecules/ContentPageFooter.svelte";
	import Header from "$molecules/Header.svelte";
	import IconFeather from "$atoms/IconFeather.svelte";
	import Main from "$atoms/Main.svelte";
	import { PageLayout } from "lj-svelte-ui";
	import TerminalsMap from "$atoms/TerminalsMap.svelte";
	import TerminalsOverview from "$atoms/TerminalsOverview.svelte";
	import TopicHeading from "$atoms/TopicHeading.svelte";

	// props
	export let doc: Document;
	export let edition = "";
	export let page = 0;

	// set page context
	import { setContext } from "svelte";
	setContext("page", page);

	/*
	Workforce Health & Safety
	Operational Excellence (Operational Safety, Emergency Preparedness & Response)
	Environmental Compliance
	Diversity and Inclusion
	Air Quality
	Greenhouse Gas (GHG) Emissions
	Community Engagement
	ESG Board Oversight
*/

	const topics = [
		{
			name: "Workforce Health & Safety",
			icon: "heart",
		},
		{
			name: "Operational Excellence",
			icon: "star",
		},
		{
			name: "Environmental Compliance",
			icon: "globe",
		},
		{
			name: "Diversity & Inclusion",
			customIcon: "DEI",
		},
		{
			name: "Air Quality",
			icon: "wind",
		},
		{
			name: "Greenhouse Gas Emissions",
			// icon: "alert",
			customIcon: "GHG",
		},
		{
			name: "Community Engagement",
			icon: "user",
		},
		{
			name: "ESG Board Oversight",
			icon: "clipboard",
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
			.grid.grid-cols-1.gap-6
				section
					.mb-2
						ArticleHeading(
							articleNumber!="{ 4 }",
							articleTitle!="About This Report",
							chapterNumber!="{ 3 }",
							page!="{ page }")

					//- text columns
					.prose.prose-sm.prose-slate.relative.max-w-none.columns-2.gap-8.leading-snug
						p Our second annual Sustainability Report covers Zenith Energy’s performance in the areas of environment, energy transition, health and safety, our employees, our customers, community involvement, and governance during the 2021 calendar year.
						p We’ve included an ESG Content Index at the end of this report, which references each standard as it’s reported and cross-references the SASB Standards with supplemental Global Reporting Initiative’s (GRI) standards.

						//- topic 1
						.mb-4
							TopicHeading(
								articleNumber!="{ 4 }",
								chapterNumber!="{ 3 }",
								page!="{ page }",
								topicNumber!="{ 1 }",
								topicTitle!="Forward-Looking Statements")
							p Information in this report may involve outlook, expectations, beliefs, plans, intentions, strategies, or other statements regarding the future, which are forward-looking statements. These forward-looking statements involve risks and uncertainties. All forward-looking statements included in this report are based upon information available to Zenith Energy as of the date of the report, and Zenith Energy assumes no obligation to update any such forward-looking statements. The statements in this report are not guarantees of future performance and actions, and actual results could differ materially from current expectations. Numerous factors could cause or contribute to such differences.

						//- topic 2
						.mb-4
							TopicHeading(
								articleNumber!="{ 4 }",
								chapterNumber!="{ 3 }",
								page!="{ page }",
								topicNumber!="{ 2 }",
								topicTitle!="Materiality Assessment & Reporting")
							p Our reporting process began in 2021 with a materiality assessment conducted by a third-party consultant to support the development of our sustainability reporting initiatives and long-term sustainability strategy. The materiality assessment considered 29 topics within environmental, social, and governance categories. Our assessment captured the perspectives of stakeholders via surveys, proxy research, and an internal review exercise. The assessments findings were validated by the Zenith Energy Leadership Team to then become the foundation for our sustainability reporting. Our goal is to ensure our approach to sustainability is aligned with our internal business strategy and will resonate with our stakeholders as the landscape continues to evolve.
							p The Zenith Energy Leadership Team continues to evaluate our reporting process, methods, and metrics to ensure we are providing efficient and relevant information to our stakeholders – our team members, customers, investors, communities, and the environments we work in. The materiality assessment identified eight priorities based on shared importance determined by both internal respondents and external benchmarks. These topics represent our highest ESG priorities and are the focus of this report and our over-arching company-wide goals.

				aside
					figure
						h5.text-15.mb-4.border-t.pt-6.font-semibold(
							class="border-richBlack/20 text-richBlack/90") Zenith's Material ESG Priority Topics
						.grid.grid-cols-4.gap-4
							+each('topics as topic')
								.w-full.rounded-md.px-4.py-3(class="bg-kellyGreen text-white/90")
									.text-11.mb-2.grid.h-8.w-8.grid-cols-1.place-content-center.text-center(
										class=" text-maize")
										+if('topic.customIcon')
											.text-20(class="tracking-wide") {  topic.customIcon  }
											+else
												IconFeather(icon!="{ (topic.icon) ? topic.icon : 'star' }")
									.text-13.font-medium.leading-tight {  topic.name  }

		ContentPageFooter
</template>
