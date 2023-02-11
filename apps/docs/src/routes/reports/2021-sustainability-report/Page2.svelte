<!-- Example Svelte Page / Starter Web Page-->
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
	import CalloutBox from "$atoms/CalloutBox.svelte";
	import { PictureCloudinary } from "slx-ui";

	// from ui package
	import { LogoBrandedCallSecure } from "slx-ui";
	import { LogoSecureLogix } from "slx-ui";

	// types
	import type { Document } from "$types/documentTypes.js";

	// props

	export let document: Document;

	export let edition = "";

	export let page = 0;

	export let pageCount = 0;

	// settings
	const headerHeight = 0;

	// calculated
	$: mainHeight = 1008 - headerHeight;

	const summaryBullets = [
		"Global diversified insurance company success story",
		"SecureLogix voice security customer since 2018",
		"Wanted to address additional pain points in outbound calling",
		"Deployed call branding and spoofing protection services in 2022",
		"Full branding service covering 95% of wireless customers turned on in 15 days",
		"After 2 months, call answer rates increased 44.6%, resulting in 60,000 additional customer interactions/month",
		"$285,233 in additional economic value for a 268% ROI",
	];
</script>

<template lang="pug">
	PageLayout(classes="font-montserrat !p-0")
		// gradient bar
		.w-full(
			class="from-byzantine bg-byzantine to-steelPink h-[14px] bg-gradient-to-r")

		// Header
		.px-12.pt-8
			.flex.items-center.justify-between.border-b.pb-4(
				class="border-byzantine/20")
				.text-steelPink.uppercase.leading-none.tracking-wider(
					class=" text-26 text-byzantine") Background
				.italic.tracking-wider(class="text-byzantine/90") Global Insurance Company

		// Body
		.px-6.pt-6
			ColumnsTwo
				// left
				div(slot="left")
					SectionHeading
						span(class="text-byzantine/90") Overview
					div(class="text-russianViolet text-[13.5px]")
						p.mb-3(class="leading-[19px]") SecureLogix is a trusted call security and trust solutions provider for one of the largest global providers of insurance and other employee benefit programs, servicing nearly 100 million customers across 50+ countries.
						p.mb-3(class="leading-[19px]") This leading global insurance company originally turned to SecureLogix in 2018 to help secure their critical voice resources and communications against unwanted inbound calls and voice attacks (TDoS, robocalls, fraud, spam, etc.). The company deployed the SecureLogix Call Defense System across all lines of business, securing up to 3,500 concurrent call sessions.
						p.mb-4(class="leading-[19px]") In 2022, leadership from the insurance company’s voice infrastructure group shared that several lines-of-business were reporting serious issues surrounding the company’s outbound calls. Chiefly among their concerns, many calls to customers were going unanswered and calls from the company’s phone numbers were often labeled as fraud / spam due to the frequent spoofing of those calling numbers.

				// right
				div(slot="right")
					SectionHeading
						span(class="text-byzantine/90") Summary
						CalloutBox(boxClasses="bg-byzantine/5")
							ul.m-0.list-outside.list-disc.p-0.pl-1.font-normal(
								slot="body")
								+each('summaryBullets as bullet, index')
									li.mb-2.pl-2.font-sans.tracking-normal(
										class="text-russianViolet/90 text-[14.5px]") {  bullet  }

		.absolute.bottom-4.flex.h-full.items-end.overflow-hidden.rounded-sm.px-6.pt-0.pb-0(
			class="h-[420px]")
			PictureCloudinary(
				aspectRatio="3:2",
				crop="fill",
				resolutions!="{ [2] }",
				sizes!="{ ['1600'] }",
				sourceUrl="https://res.cloudinary.com/dn0pqjjbq/image/upload/ar_3:2,c_fill,dpr_2.0,w_1800/v1675274086/office-building-exterior_zcvgnp.jpg")
			//- image overlay
			.bg-byzantine.mix-blend-darker.absolute.inset-0.mx-6.opacity-40

		//- Footer
		Footer(
			cobranded!="{ edition }",
			primaryColor!="white")

		// Page Number
		.absolute.bottom-0.right-0.z-10.p-8.pr-12.text-white
			PageNumber(
				{pageCount},
				{page})
</template>
