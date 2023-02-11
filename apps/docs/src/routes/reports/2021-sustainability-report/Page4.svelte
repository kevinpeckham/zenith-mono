<!-- Example Svelte Page / Starter Web Page-->
<script lang="ts">
	// Components
	import Footer from "$molecules/Footer.svelte";
	import PageLayout from "$atoms/PageLayout.svelte";
	import PageNumber from "$atoms/PageNumber.svelte";
	import SectionHeading from "$atoms/SectionHeading.svelte";

	// from ui package
	import { IconNorthAmerica } from "slx-ui";
	import { IconOutboundCallSpoofing } from "slx-ui";
	import { LogoATT } from "slx-ui";
	import { LogoSecureLogix } from "slx-ui";
	import { LogoTMobile } from "slx-ui";
	import { LogoVerizon } from "slx-ui";

	import { russianViolet, byzantine } from "slx-ui";

	// types
	import type { Document } from "$types/documentTypes.js";

	// props

	export let document: Document;

	export let edition = "";

	export let page = 0;

	export let pageCount = 0;

	const showCarrierLogos = true;

	// props
	export let headerHeight = 0;

	const content = {
		benefits: [
			["15", "days to full deployment"],
			["37K", "corporate numbers with full call branding"],
			["5K", "corporate mobile devices with full call branding"],
			[
				"95%",
				"percent of US wireless customers covered by branding service (AT&T, T-Mobile, Verizon)",
			],
		],
	};

	// calculated
	$: mainHeight = 1008 - headerHeight;
</script>

<template lang="pug">
	PageLayout(classes="font-montserrat !p-0  bg-white")
		// gradient bar
		.w-full(
			class="from-byzantine bg-byzantine to-steelPink h-[14px] bg-gradient-to-r")

		// Header
		.text-byzantine.px-12.pt-8
			.flex.items-center.justify-between.border-b.pb-4(
				class="border-byzantine/20")
				.uppercase.leading-none.tracking-wider(class="text-[26px]") Solution &amp; Deployment
				.italic.tracking-widest Global Insurance Company

		// background full bleed image
		//-.absolute.h-auto.w-full(class="translate-y-[160px]")
			img.opacity-50(
				alt="dot map",
				src="/images/dot-map.webp")

		// Body
		.text-russianViolet.px-12.pt-6
			SectionHeading
				.grid.grid-cols-3.gap-10
					//- left
					.pr-0(class="w-full")
						//- Deployment
						.mb-8
							//- bullet headings
							.text-byzantine.mb-4.font-medium Deployment Numbers

							//- bullets
							.grid.gap-5
								+each('content.benefits as bubble')
									.text-byzantine.grid.h-auto.grid-cols-1.gap-x-4.gap-y-2.rounded-md.py-3.px-4.text-xs.opacity-80(
										class="bg-darkOrchid/10 ")
										.text-russianViolet.text-20 {  bubble[0]  }
										.text-12.font-normal {  bubble[1]  }

						//- Service Providers
						div
							SectionHeading
								//- left
								.pr-0(class="w-full")
									.text-byzantine.mb-4.font-medium Network Coverage
							.mt-2
								+if('showCarrierLogos')
									.bottom-0.left-0.grid.w-full.grid-cols-1.gap-3.px-0.pb-2
										.grid.place-content-center.rounded.rounded-bl-xl.px-1(
											class="bg-darkOrchid/10")
											.h-auto.w-24
												LogoATT(primaryColor!="#200144")

										.grid.place-content-center.rounded.px-1(class="bg-darkOrchid/10")
											.h-auto.w-24
												LogoTMobile(primaryColor!="#200144")

										.grid.place-content-center.rounded.rounded-br-xl.px-1(
											class="bg-darkOrchid/10")
											.h-auto.w-24
												LogoVerizon(
													layout="padded",
													primaryColor!="#200144")

					//- right
					.text-13.font-montserrat.col-span-2.flex-grow.pr-8.font-normal.tracking-normal(
						class="text-russianViolet/90")
						SectionHeading
							.text-byzantine.mb-2.inline-block Identified Solution & Deployment
						.mb-4 The insurance company was eager to deploy and move quickly. SecureLogix was able to turn on and deliver full call branding services just 15 business days following contract signature for all 37,000 corporate phone numbers, 5,000 of which are corporate wireless devices. This included call branding coverage across all major service providers (AT&amp;T, T-Mobile and Verizon) representing 95% of wireless customers.

						.mb-4 SecureLogix is uniquely positioned to deliver fast and unified call branding results with a single contracting handshake. SecureLogix provides clients with a single contracting relationship through its consolidated stack of resellers agreements and API technology integrations that simplifies call branding coverage across all major voice carriers and their associated data analytics vendors.

						.mb-4 Though they had not planned and budgeted for a purchase in 2022, project sponsors inside the voice infrastructure team advocated that call branding and spoofing protection services were	cost reduction initiatives backed by immediate hard-dollar payback and ROI. Ultimately the company purchased to cover all outbound calls across all lines-of-business to measure the full potential business impact of increased call answer rates.

						.mb-4 SecureLogix and its service provider channel partners quickly analyzed the insurance company’s outbound call volumes to develop a single contract proposal covering calls to 95% of wireless devices and providers. Rigorous pre-and-post-deployment data gathering and reporting was equally important to establish the high confidence answer rate baselines across all calling numbers needed to build true, hard-dollar ROI figures post deployment. This required fast and accurate coordination by SecureLogix to resolve and unify corporate calling number lists, answer rates, and other call data across the three major service providers and call analytics vendors.

						.mb-4 In addition to call branding, the insurance company purchased spoofing protection for calls to AT&amp;T wireless devices in late 2022 as a pilot prior to extending spoofing protection services to Verizon and T-Mobile devices in early 2023.

		//- Footer
		Footer(
			cobranded!="{ edition }",
			primaryColor!="hsla(308, 75%, 47%, 1.0)")

		.text-byzantine.absolute.bottom-0.right-0.p-8.pr-12
			PageNumber(
				{pageCount},
				{page})
</template>
