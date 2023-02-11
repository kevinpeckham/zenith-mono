<script lang="ts">
	// Components
	import BodyText from "$atoms/BodyText.svelte";
	import ColumnsTwo from "$atoms/ColumnsTwo.svelte";
	import Main from "$atoms/Main.svelte";
	import PageLayout from "$atoms/PageLayout.svelte";
	import SectionHeading from "$atoms/SectionHeading.svelte";
	import FactoidBubble from "$atoms/FactoidBubble.svelte";
	import Footer from "$molecules/Footer.svelte";
	import PageNumber from "$atoms/PageNumber.svelte";

	import { LogoAcme } from "slx-ui";
	import { LogoATT } from "slx-ui";
	import { LogoBrandedCallSecure } from "slx-ui";
	import { LogoSecureLogix } from "slx-ui";
	import { IconNorthAmerica } from "slx-ui";
	import { IconOutboundCallSpoofing } from "slx-ui";
	import { IPhoneFrame } from "slx-ui";
	import { IPhoneUtilityBar } from "slx-ui";

	// from stores
	import { imageSourceNightMountain } from "slx-ui";

	// types
	import type { Document } from "$types/documentTypes.js";

	// props

	export let document: Document;

	export let edition = "";

	export let page = 0;

	export let pageCount = 0;

	// settings
	let headerHeight = 0;

	// calculated
	$: mainHeight = 1008 - headerHeight;
</script>

<template lang="pug">
	PageLayout(
		classes!="font-montserrat !p-0 bg-gradient-to-br from-[#BB17A2] via-[#BD2986] to-[#370F66] text-white")
		//-Main(
			headerHeight!="{headerHeight}"
			style!="padding-top:0px;"
			)
		// gradient bar
		.w-full.bg-transparent(class="h-[14px]")

		// Header
		.px-12.pt-8
			.flex.items-center.justify-between.border-b.pb-4(class="border-white/60")
				.uppercase.tracking-wider.text-white(class="text-[26px] leading-none") Pain Points
				.italic.tracking-wide.text-white Global Insurance Company

		// Body
		.px-6.pt-6
			ColumnsTwo
				// left
				div(slot="left")
					//-SectionHeading
						.pb-1.font-medium.leading-snug.tracking-wide Outbound Calling Customer Pain Points
					p.mb-3(class="text-[13px] leading-[19px]") The company detailed how low answer rates of calls to policy holders were negatively impacting corporate operations, costs, and reputation. General industry averages report that around 87% of unidentified calls U.S.-wide go unanswered. The insurance company confirmed that they were having similar difficulty in getting customers to answer their calls, and the time and cost to resolve policy claims and complete other policy coverage transactions had dramatically risen as a result.

					p.mb-3(class="text-[13px] leading-[19px]") The company highlighted one specific answer rate use case among many in its disability line-of-business. Customers want and need disability payments to begin as soon as possible following an accident The insurance company requires a series of phone conversations as part of a process to document and initialize payments. However, customers often wouldn’t recognize and answer calls from the insurance company agents, thereby substantially delaying the emergency payments process.

					p.mb-3(class="text-[13px] leading-[19px]") Equally important to the insurance company was the timely adjustment or ceasing of payments once the injured customers had recovered and returned to work. This process also involves a phone interview and questionnaire with the policy holder, if and when the agents can successfully reach the policy holder by phone. Delays in this process are again very costly and disruptive. The insurance company also shared many examples of customers calling to

					.flex
						//-div(style="width:200px; height:400px")
							IPhoneFrame(
								batteryLevel!="{0.8}"
								branded!="{true}"
								brandedHeading='+1 (888) 867-5309'
								brandedSubheading='New York, NY'
								brandedLogo!="{false}"
								brandedLogoDefault!="{false}"
								caseDropShadow!="{false}"
								cellReception!="{3}"
								description='This is a mockup of an iPhone screen.'
								fixedSize!="{true}"
								frameHide!="{false}"
								height: undefined,
								locked!="{true}"
								notchHide!="{false}"
								ringing!="{true}"
								screenBackgroundShading!="{0.2}"
								screenContentShadow!="{true}"
								screenContentShadowColor!="{undefined}"
								textColor='white'
								timeValue='8:02'
								timeHide!="{false}"
								wallpaperBackgroundClasses="bg-gradient-to-tr from-[#0E141B] via-[#151F29] to-[#1B2632]"
								wallpaperImageSource=""
								wallpaperImageStack!="{undefined}"
								width!="{200}"
								wifiReception!="{3}"
							)
						//- .h-full
						//- 	.mb-4 New Outbound Challenges:
						//- 	.text-13.mb-4.w-full.rounded-md.border.border-transparent.py-3.pl-3.pr-1.italic.leading-normal.tracking-normal(
						//- 		class="bg-russianViolet/40 leading-tight") Company was having trouble getting customers to answer the phone.
						//- 	.text-13.mb-4.w-full.rounded-md.border.border-transparent.px-3.py-3.italic.tracking-normal(
						//- 		class="bg-russianViolet/40 leading-normal") Customers were receiving calls from spoofed numbers posing as the company.
						//- 	.text-13.mb-4.w-full.rounded-md.border.border-transparent.px-3.py-3.italic.tracking-normal(
						//- 		class="bg-russianViolet/40 leading-normal") Legitimate company calls were now getting labeled as fraud / spam.
						//- 	.text-13.mb-4.w-full.rounded-md.border.border-transparent.px-3.py-3.italic.tracking-normal(
						//- 		class="bg-russianViolet/40 leading-normal") Low call answer rates were having a negative impact on business operations and revenue.

				// right
				div(slot="right")
					p.mb-3(class="text-[13px] leading-[19px]") report unusual calls seemingly from the insurance company asking for personal customer security information. These documented fraud attempts where attackers had spoofed the company’s legitimate outbound calling numbers not only threatened customer accounts, but also illustrated why legitimate calls by the insurance agents from the same corporate number were now being labeled as potential fraud by the fraud monitoring agencies. The company estimated they were receiving 5-10 calls per week from customers complaining that calls from the insurance company came with fraud / spam labels attached.
					.text.mb-4(class="text-[13px] leading-[19px]") Apart from customer service and support issues, use cases from other lines of business illustrated the impact low call answer rates were having on business operations and revenue	growth. Primary among them were the declining results in up-sell policy, renewal, and new policy sales campaigns. Sales conversion numbers showed that company representatives had maintained the same success levels in closing business once they were able to connect with new and existing policy holders by phone. But the number of daily connections and interactions company agents were able to have with customers and prospects had declined due to the overall loss of trust by the public in answering calls from unidentified numbers, not to mention any calls from the company that were being mislabeled as fraud/spam due to previous spoofing attacks.

		//- Picture Section
		.mb-3.mt-3.px-12
			.border-t.pt-4(class="border-white/40") Outbound Pain Points
		.grid.w-full.grid-cols-2.gap-x-8.gap-y-3.px-12
			.text-13.mb-0.w-full.rounded-md.border.border-transparent.py-3.pl-3.pr-1.italic.leading-normal.tracking-normal(
				class="bg-russianViolet/40 leading-tight") Company was having trouble getting customers to answer the phone.
			.text-13.mb-0.w-full.rounded-md.border.border-transparent.px-3.py-3.italic.tracking-normal(
				class="bg-russianViolet/40 leading-normal") Customers were receiving calls from spoofed numbers posing as the company.
			.text-13.mb-0.w-full.rounded-md.border.border-transparent.px-3.py-3.italic.tracking-normal(
				class="bg-russianViolet/40 leading-normal") Legitimate company calls were now getting labeled as fraud / spam.
			.text-13.mb-0.w-full.rounded-md.border.border-transparent.px-3.py-3.italic.tracking-normal(
				class="bg-russianViolet/40 leading-normal") Low call answer rates were having a negative impact on business operations and revenue.

		//- Footer
		Footer(
			cobranded!="{ edition }",
			primaryColor!="#ffffff")

		.absolute.bottom-0.right-0.p-8.pr-12
			PageNumber(
				{pageCount},
				{page})
</template>
