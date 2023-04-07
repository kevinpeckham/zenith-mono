<script lang="ts">
	import { integerToArray } from "lj-svelte-ui";
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

	const charities = [
		//Nature Conservancy, Ozanam Family Shelter, Easter Seals, Volunteer for America, PHFS Homeless Shelter, Easter Seals, Gulf Coast Food Bank and Toys for Tots.
		"Nature Conservancy",
		"Ozanam Family Shelter",
		"Easter Seals",
		"Volunteer for America",
		"PHFS Homeless Shelter",
		"Gulf Coast Food Bank",
		"Toys for Tots",
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
				chapterNumber!="{ 8 }",
				chapterTitle!="Governance & Ethics",
				page!="{ page }")

			.relative.mb-2.grid.max-w-none.grid-cols-2.gap-8.pb-0.leading-normal(
				class="border-richBlack/40")
				//- left column
				div
					section.mt-0.pt-0
						ArticleHeading(
							classes="mb-0",
							articleNumber!="{ 1 }",
							articleTitle!="Board Governance",
							chapterNumber!="{ 8 }",
							page!="{ page }")

						//- text content
						.prose.prose-sm.prose-slate.mb-6.leading-normal
							div
								p.mt-0 Zenith Energy’s Board of Directors is comprised of business leaders with demonstrated experience in finance, risk, and relevant industry backgrounds.
								p The board consists of nine directors and is led by the Chairman & CEO. It is comprised of two committees: the Audit Committee and the Compensation Committee. On a quarterly basis the Board meets to discuss the enterprise risk management of the company and its significant risks related to the business.

					section.mt-0.pt-0
						//- left column
						ArticleHeading(
							classes="mb-0",
							articleNumber!="{ 2 }",
							articleTitle!="ESG Board Governance",
							chapterNumber!="{ 8 }",
							page!="{ page }")

						//- text content
						.prose.prose-sm.prose-slate.mb-6.leading-normal
							div
								p.mt-0 Zenith Energy’s Board of Directors is comprised of business leaders with demonstrated experience in finance, risk, and relevant industry backgrounds.
								p The board consists of nine directors and is led by the Chairman & CEO. It is comprised of two committees: the Audit Committee and the Compensation Committee. On a quarterly basis the Board meets to discuss the enterprise risk management of the company and its significant risks related to the business.

						ArticleHeading(
							classes="mb-0",
							articleNumber!="{ 3 }",
							articleTitle!="Ethics &amp; Compliance",
							chapterNumber!="{ 8 }",
							page!="{ page }")

					.prose.prose-sm.prose-slate.mb-6.leading-normal
						div
							p.mt-0 As part of Zenith Energy’s core values, we are dedicated to compliance and transparency which is core to our commitment to putting people first. We believe our entire organization should uphold the highest possible standards of business conduct. Our Board of Directors and Management are committed to their corporate governance obligations and sound governance practices to ensure compliance across all jurisdictions. Directors, officers, and other employees must work together to ensure prompt and consistent action against violations of the Code. However,

				//- right column
				div
					section.mt-0.pt-0
						//-ArticleHeading(
							classes="mb-0",
							articleNumber!="{ 3 }",
							articleTitle!="Ethics &amp; Compliance",
							chapterNumber!="{ 8 }",
							page!="{ page }")

						//- text content
						.prose.prose-sm.prose-slate.mb-6.leading-normal
							div
								p.mt-0 a director, officer, or other employee may encounter a situation in which it is difficult to determine how to proceed while also complying with the Code.
								p Zenith Energy expects employees to understand all relevant information, ethical practices, and their individual responsibility and role. As part of this commitment, we have put in place a structure to ensure to ensure that all our employees and stakeholders are aware of and comply with our standards. Employees are encouraged to discuss any issues that arise with a supervisor. It is the responsibility of supervisors to help solve problems and ensure compliance with the Code of Business Conduct and Ethics.
								p Employees are also encouraged to seek help from Zenith Energy resources, if necessary. In the rare case in which it may not be appropriate to discuss an issue with a supervisor or a supervisor is not available to answer a question, employees should discuss it with Human Resources. If that is not appropriate or if a satisfactory resolution is not obtained, call, or send concerns to the Company’s Compliance Officer or follow the procedures outlined in the Whistleblower Policy. Employees should always feel safe to report ethical violations in confidence and without fear of retaliation.
								p Annual certifications of training and compliance with Zenith Energy’s ethics policies are required for all individuals at the organizations. All employees receive antibribery and foreign corrupt practice training. The employee handbook is also reviewed annually to ensure that the most up to date and relevant policies and procedures are included. Some of the policies that are included and regularly reviewed in the Employee Handbook are our Code of Conduct, Whistleblower Policy, and Human Rights Policy.

		ContentPageFooter
</template>
