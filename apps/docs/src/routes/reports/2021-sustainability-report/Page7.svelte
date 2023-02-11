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
	import VersionInfo from "$atoms/VersionInfo.svelte";

	import { CopyrightLanguage } from "slx-ui";
	import { IconAuthentication } from "slx-ui";
	import { IconCallSecurity } from "slx-ui";
	import { IconNorthAmerica } from "slx-ui";
	import { IconOutboundCallSpoofing } from "slx-ui";
	import { IPhoneFrame } from "slx-ui";
	import { IPhoneUtilityBar } from "slx-ui";
	import { LogoAcme } from "slx-ui";
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
	const russianViolet = "#1F0144";

	const content = {
		bullets: [
			"Call Security & Network Protection",
			"Inbound Call Authentication",
			"Outbound Call Branding & Spoofing Protection",
		],
	};
</script>

<template lang="pug">
PageLayout(classes="font-montserrat !p-0 bg-white text-russianViolet overflow-hidden")

	// background full bleed image
	.absolute.inset-0.flex(class="bg-gradient-to-br from-[#FF00D0] via-[#B428A7] to-[#670F83] flex ")
		.absolute.inset-0.text-white.grid.grid-cols-1.place-items-center.place-content-center(class="overflow-hidden")
			div.relative(class="w-[320px] pt-40 mix-blend-normal")
				IPhoneFrame(
					aspectRatio!="{.5}"
					batteryLevel!="{0.76}"
					branded!="{true}"
					brandedHeading='SecureLogix'
					brandedSubheading=''
					brandedLogo!="{true}"
					brandedLogoDefault!="{false}"
					caseDropShadow!="{true}"
					cellReception!="{2}"
					description='This is a mockup of an iPhone screen with the SecureLogix logo on it .'
					fixedSize!="{false}"
					frameHide!="{false}"
					height!="{undefined}",
					locked!="{true}"
					notchHide!="{false}"
					ringing!="{true}"
					screenBackgroundShading!="{0}"
					screenContentShadow!="{true}"
					screenContentShadowColor!="{undefined}"
					textColor='white'
					timeValue='8:02'
					timeHide!="{false}"
					wallpaperBackgroundClasses="bg-gradient-to-b from-[#5A1CB4] to-[#400E8B]"
					wallpaperImageSource=""
					wallpaperImageStack!="{undefined}"
					width!="{undefined}"
					wifiReception!="{2}"
					)
					svelte:fragment(slot="brandedLogo")
						.absolute.w-full.left-0(class="top-[24%] scale-[.8] orgin-center")
							LogoSecureLogix(
								primaryColor="#fff"
								orientation="mark"
								)

		// background image
		.absolute.top-0.left-0.w-full.h-full
			img(src="/images/white-ripped.webp" alt="ripped" class="object-cover min-w-full min-h-full")





	.absolute.inset-0.flex-column.h-full
		.absolute.inset-0.bg-transparent.w-full(class="h-[14px]") &nbsp;

		div(class="h-[50%] ")
			// Header
			.px-12.pt-8
				.border-b.pb-4.flex.justify-between.items-center.text-russianViolet(class="border-russianViolet/60")
					.uppercase.tracking-wider(class="text-[26px] leading-none") Full Call Security & Trust
					div.italic.tracking-widest &nbsp;
			div.p-6
				ColumnsTwo
					div(slot="left")
						.mb-6
							p.text-xs.mb-2.text-russianViolet SecureLogix is the only vendor providing a single, unified solution set for the full range of voice security and call trust issues threatening the enterprise, from Telephony Denial of Service attacks, to contact center fraud, robocalls, vishing scams, malicious calls, voice spam, and call spoofing.
							p.text-xs.mb-2.text-russianViolet
								span Industry leading SecureLogix is solely dedicated corporate-wide to solving call security and trust issues
								span.block for the enterprise, and has been a trusted partner
								span.block helping clients navigate the ever-evolving call
								span.block security and trust risk landscape for over
								span.block 20 years.


					div(slot="right")
						.grid.grid-cols-3.text-russianViolet.mb-8
							div
								.mb-2.text-center.grid.place-content-center.text-xs.w-full
									.grid.place-content-center(class="h-[50px] w-[50px]")
										IconCallSecurity(
											circle!="{false}"
											primaryColor!="{russianViolet}"
										)
								.text-center.font-semibold(class="text-[11px]") Security
							div
								.mb-2.text-center.grid.place-content-center.text-xs.w-full
									.grid.place-content-center(class="h-[50px] w-[50px]")
										IconAuthentication(
											circle!="{false}"
											primaryColor!="{russianViolet}"
										)
								.text-center.font-semibold(class="text-[11px]") Authentication
							div
								.mb-2.text-center.grid.place-content-center.text-xs.w-full
									.grid.place-content-center(class="h-[50px] w-[50px]")
										IconOutboundCallSpoofing(
											circle!="{false}"
											primaryColor!="{russianViolet}"
											style="max-height:48px;"
											)
								.text-center.font-semibold(class="text-[11px]") Trust
						ul.pl-8.text-xs.mb-8.text-russianViolet(class="list-disc list-inside")
							+each('content.bullets as bullet, index')
								li.mb-2.font-medium {bullet}


		div.flex(class="h-[50%]") &nbsp;

	//- Footer
	Footer(
		primaryColor!="{russianViolet}"
		cobranded!="{edition}"
		)


	.absolute.bottom-0.right-0.px-8.pb-8(class="w-1/2 text-midnight" style="font-family: 'Arial', sans-serif;")
		CopyrightLanguage("{document}")
	.absolute.bottom-0.right-0.pr-8.pb-4(class=" text-midnight")
		VersionInfo("{document}")



</template>
