<!-- Example Svelte Page / Starter Web Page-->
<script lang="ts">
	// Components
	import BodyText from "$atoms/BodyText.svelte";
	import ColumnsTwo from "$atoms/ColumnsTwo.svelte";
	import FactoidBubble from "$atoms/FactoidBubble.svelte";
	import Footer from "$molecules/Footer.svelte";
	import Main from "$atoms/Main.svelte";
	import PageLayout from "$atoms/PageLayout.svelte";
	import PageNumber from "$atoms/PageNumber.svelte";
	import SectionHeading from "$atoms/SectionHeading.svelte";
	import ChartCustomerStory from "$atoms/ChartCustomerStory.svelte";
	import TableCustomerStory from "$atoms/TableCustomerStory.svelte";

	import { CopyrightLanguage, russianViolet } from "slx-ui";
	import VersionInfo from "$atoms/VersionInfo.svelte";

	// from ui package
	import { IPhoneUtilityBar } from "slx-ui";
	import { IPhoneFrame } from "slx-ui";
	import { PieChart } from "slx-ui";

	// types
	import type { Document } from "$types/documentTypes.js";

	// props

	export let document: Document;
	export let edition = "";
	export let page = 0;
	export let pageCount = 0;

	const content = {
		bullets: [
			"Quick-turn onboarding with number aggregation and registration of all corporate phone numbers of interest, even when purchased from different service providers.",
			"Security policy definition and coordination for Outbound Call Spoofing Protection with full monitoring and proactive updating.",
			'Consolidated work across all major SPs and associated analytics vendors to clean your outbound calling number reputation scores across all major SPs. Calling number scores are restored to a positive or neutral state so they are no longer labeled as “Spam,” “Fraud,” or “Scam."',
			"Consolidated vendor portal administration, change management, and unified call branding reporting across all major SPs including branded call volumes, first call and overall answer rates, contact and engagement rates, call spoofing attempts, etc.",
			"Coordinated calling campaign management across all SPs to ensure calls are delivered and labeled properly.",
			"Ongoing, rigorous Phone Number Reputation Monitoring and Management to prevent fraudulent use of your corporate calling numbers and maintain reputation for higher outbound call trust levels and answer rates.",
		],
	};

	// calculated
	//$: mainHeight = 1008 - headerHeight;
</script>

<template lang="pug">
	PageLayout(
		classes="font-montserrat !p-0 bg-white overflow-hidden")

		//- page grid
		.grid.grid-cols-1.absolute.inset-0.h-full.w-full.place-content-start

			//- gradient bar
			.from-steelPink.to-blueViolet.absolute.top-0.left-0.w-full.bg-gradient-to-r(
				class="h-[14px]")

			//- Header
			.w-full.mb-0

				.px-12.pt-8
					//-horizontal rule
					.flex.items-center.justify-between.border-b.pb-0.mb-6(
						class="border-steelPink/60")
						//- heading
						.text-steelPink.uppercase.tracking-wider(class="text-[26px] leading-7")
							div Business Impact & ROI
						.text-steelPink.italic.tracking-wider.pb-4 &nbsp;
							div.italic Global Insurance Company
			//- Main
			.px-12.grid.grid-cols-1.place-items-start.place-content-start

				//- heading
				.mb-0.mb-6
					SectionHeading
						.text-steelPink.mb-2.grid.gap-y-2.gap-x-3(style="grid-template-columns: 60px 1fr")
							.text-left.text-17.flex
								.inline-block.mr-1 60K
								.inline-block +
							.font-normal Additional Customer Interactions
							.text-left.text-17.flex
								.inline-block.mr-1 285K
								.inline-block +
							.font-normal Added $ Value
							.text-left.text-17.flex
								.inline-block(class="mr-[2px]") 268
								.inline-block %
							.font-normal Monthly ROI

				//- columns
				.grid.grid-cols-2.gap-x-6.px-0.mb-8.place-content-start
					//- column 1
					.mb-0
						p.text-russianViolet.mb-2(class="text-[12.5px]") An internal analysis showed the call answer rate increases resulted in 60,049 more customer interactions per month compared to their pre-branding numbers. The company conservatively placed an economic value of $285,233 on the 60,000 additional customer transactions, resulting in a 268% monthly ROI.
						p.text-12.text-russianViolet.mb-2 Additionally, the 5-10 calls per week from customers reporting that calls from the company were being labeled as fraud or spam ceased following deployment of the SecureLogix spoofing prevention services. Company officials now report that they are receiving calls from appreciative customers mentioning that calls now have the company trusted name/label attached.

					//- column 2
					.col-span-1
						//-.mb-2.w-full.pl-4.uppercase(class="text-[11px]")
							.border-blueViolet.border-none.pt-0.font-medium(
								class="text-russianViolet/100") services include
						.grid.grid-cols-1.gap-3(class="text-russianViolet/95")
							div
								//.mb-4
									SectionHeading
										span.text-steelPink.font-medium Phone Services Include
								p.text-12.text-russianViolet.mb-2 Senior leadership recognized that the project was an immediate success with strong ROI, and highlighted the project team for their contributions and great work on several occasions, including profiling the team and the results in the company president’s quarterly corporate newsletter. Heads of all of the company’s lines-of-business communicated substantial benefits resulting from the increased call answer rates. Further, the call branding and spoofing project sponsor and her team were asked by the president to present the call answer rate results at the company’s bi-annual all-hands town hall meeting, after which she and her team received a company-wide standing ovation.

								//-ul.mb-8.text-xs(class="list-outside list-disc pl-4 ")
									+each('content.bullets as bullet, index')
										// this is ugly, but there is a pug / preprocess bug with angle brackets
										+if('index == 0 || index == 1 || index == 2')
											li.mb-2.leading-4 {  bullet  }

							//-div
								//.mb-4
									SectionHeading
										span.text-steelPink.font-medium &nbsp;
								ul.mb-8.text-xs(class="list-outside list-disc pl-4")
									+each('content.bullets as bullet, index')
										+if('index >= 3')
											li.mb-2 {  bullet  }

			//- bottom of page
			.relative.flex.w-full.px-12.pt-0.pb-6.px-12
				div.w-full


					div
						//- heading
						h2.text-17.mb-3.font-medium
							span.mr-1.inline-block Customer Results:
							span &nbsp;268% Monthly ROI

						//- chart section
						.border-0.relative.grid.h-auto.w-full.grid-cols-2.gap-4.rounded-sm.border(
							class="border-russianViolet/40 pt-2 bg-russianViolet/5")
							//- chart
							.relative.h-full.w-full.px-6
								ChartCustomerStory

							//- table section
							.relative.h-full.w-full.py-4.px-6
								TableCustomerStory

				//-.absolute.bottom-0.left-0.pl-6.pr-4.pb-4
					CopyrightLanguage({document})

				//-.absolute.bottom-0.right-0.pb-2
					VersionInfo(
						{document},
						{edition})


		.opacity-80
			Footer(
				cobranded!="{ edition }",
				primaryColor!="#DD23C4")

		.absolute.bottom-0.right-0.p-8.pr-12(class="text-byzantine")
			PageNumber(
				{pageCount},
				{page})
</template>
