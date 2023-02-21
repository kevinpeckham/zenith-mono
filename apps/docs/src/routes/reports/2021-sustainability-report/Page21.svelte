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

	const tableData = [
		["", "Females", "Males", "Total"],
		["Employees in position of VP or above", "5", "7", "12"],
		["Employees ages 30-50 in positions of VP or above", "1", "3", "4"],
		["Employees ages 50 + in positions of VP or above", "4", "4", "8"],
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
				chapterNumber!="{ 6 }",
				chapterTitle!="Our People",
				page!="{ page }")

			.relative.mb-2.grid.max-w-none.grid-cols-2.gap-8.pb-0.leading-normal(
				class="border-richBlack/40")
				section.mt-0.pt-0
					//- left column
					ArticleHeading(
						classes="mb-0",
						articleNumber!="{ 1 }",
						articleTitle!="Employee Engagement",
						chapterNumber!="{ 6 }",
						page!="{ page }")

					//- text content
					.prose.prose-sm.prose-slate.mb-6.leading-normal
						p.mt-0 We believe our employees are the biggest contributor to our success. As such, we are committed to ensuring that our employees find value in their work and are being supported to succeed.
						p In 2021, we conducted three employee engagement and employee satisfaction surveys at our terminals in Ohio, using in house resources, with response rates ranging from 87-percent to 100-percent.

					.grid.grid-cols-1.gap-6
						//- stat
						.w-full.rounded-md.px-4.pt-4(class="bg-yellowGreen/10")
							//- bubble graphic
							.text-richBlack.grid.grid-cols-2.gap-4
								.order-1
									PieChart(
										primaryColor!="{ $colors.yellowGreen }",
										secondaryColor!="rgba(255, 255, 255, 1)",
										value!="{ 42 }",
										width!="{ 145 }")
								.text-13.order-0.font-medium 42 percent female representation in Executive Team management, U.S. workforce

						//- stat
						.w-full.rounded-md.px-4.pt-4(class="bg-yellowGreen/10")
							//- bubble graphic
							.text-richBlack.grid.grid-cols-2.gap-4
								.order-1
									PieChart(
										primaryColor!="{ $colors.yellowGreen }",
										secondaryColor!="rgba(255, 255, 255, 1)",
										value!="{ 28 }",
										width!="{ 145 }")
								.text-13.order-0.font-medium
									div Percentage of minorities
									div in the U.S. workforce

				//- right column
				section.mt-0.pt-0
					//- left column
					ArticleHeading(
						classes="mb-0",
						articleNumber!="{ 2 }",
						articleTitle!="Human Capital",
						chapterNumber!="{ 6 }",
						page!="{ page }")

					//- text content
					.prose.prose-sm.prose-slate.leading-normal
						p.mt-0.mb-4 From the beginning we understood that our people are the key to our success. We believe that a dedicated, diverse team makes our company stronger and more adaptable to changing market conditions. Our focus is on recruiting the talent that shares our commitment to integrity and operational excellence across our business functions.

					.mb-2
						TopicHeading(
							articleNumber!="{ 2 }",
							chapterNumber!="{ 6 }",
							hideNumber!="{ true }",
							page!="{ page }",
							topicNumber!="{ 10 }",
							topicTitle!="Supporting our People: Training & Development")

						.prose.prose-sm.prose-slate
							p.mt-0.mb-4 We care about our employees’ futures. That is why we have invested our time into creating a mentor program and internship program to stimulate professional development. Our professional development program includes mentoring and learning management training.
							p All personnel are required to receive training specific to their job responsibilities. Upon completion of training, each employee shall receive an acknowledgment or certificate that they have successfully completed each different type of training. It is of utmost importance that our employees understand and comply with our values and commitments. As part of this, they are required to adhere to the Code of Conduct, Anti-Harassment & Non-Discrimination Policy, New Employee safety Orientation and Driving Safety Policy.

			.grid.grid-cols-1.mt-8
				figure.grid.w-full.w-full.grid-cols-1.place-content-start.place-items-start.gap-4.rounded-md.px-0.font-normal.leading-normal
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
