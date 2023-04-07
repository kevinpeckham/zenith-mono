<!-- 2020 Sustainability Report - Page 1 -->
<script lang="ts">
	// Components
	import { LogoZenith } from "zenith-ui";

	import { Main, PageLayout } from "lj-svelte-ui";
	import { PictureCloudinary } from "lj-svelte-ui";

	// from ui package

	// types
	import type { Document } from "lj-svelte-ui";

	// props

	export let doc: Document;
	export let edition = "";
	export let page = 0;
	export let pageCount = 0;

	// settings
	const headerHeight = 64;

	// calculated
	$: mainHeight = 1008 - headerHeight;
</script>

<template lang="pug">

PageLayout(classes="font-montserrat")
	Main(
		headerHeight!=0
		style!="border-width:0;"
		)

		//- full bleed background
		.absolute.inset-0.w-full.overflow-hidden(class="w-[768px] h-[1008px]")
			picture.w-full.h-full.flex
				img.object-cover.min-w-full.min-h-full(src="/images/zenith-report-cover.webp" width="768" height="1008" alt="Zenith 2020 Sustainability Report")
			.absolute.inset-0.bg-gradient-to-t.from-transparent(class="to-[#2657BA] via-[#2657BA]/5")

		//- raw pixel image test
		//.absolute.inset-0.w-full.overflow-hidden.flex(class="w-[768px] h-[1008px]")

			//- https://www.rawpixel.com/image/3286898/free-photo-image-landscape-background-sky-gradient
			img(
				src="https://images.rawpixel.com/image_1300/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Vwd2s2MjExNjIwMy13aWtpbWVkaWEtaW1hZ2Uta293Z3VsZ2guanBn.jpg"
				class="min-w-full min-h-full object-cover"
				)

			//- https://www.rawpixel.com/image/3282488/free-photo-image-sky-space-milky
			//-img(
				src="https://images.rawpixel.com/image_1300/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Vwd2s1ODc5ODYwNS13aWtpbWVkaWEtaW1hZ2Uta293YXRrcGcuanBn.jpg"
				class="min-w-full min-h-full object-cover"
				)

		//- overlay
		.absolute.inset-0.w-full.bg-gradient-to-t(
			class="from-richBlack/0 to-richBlack/20 h-full")

		//- logo
		.absolute
			.top-0.left-0
				.flex.items-center.px-10.pt-3
					div(class="w-[176px] h-auto")
						LogoZenith

		//- title
		.absolute.top-0.left-0.text-white.text-30.font-bold.font-sans.pl-10.mb-2(class="bg-[#557BCF]/0 border-0 border-b-white w-full h-auto translate-y-[204px]")
			div.text-28.mb-2 2021
			h1.leading-none(class="text-[80px] text-[#FCE74C]")
				| Storage for the
				br
				| New Energy Age


		//- footer w/ angled background
		//-.absolute.bottom-0.left-0.w-full(class="h-[80px]")
			.w-full.text-yellowGreen.h-full
				svg(
					viewBox="0 0 768 80",
					xmlns="http://www.w3.org/2000/svg",
					role="img",
					)
					polygon(
						points="0,80 768,80 768,0",
						class="fill-current",
						)
					text.fill-white(
						x="78%",
						y="70%",
					) Zenith Energy U.S.

		//- footer w/ transparent background
		.absolute.bottom-0.left-0.w-full(class="h-[80px]")
			//-.w-full.text-yellowGreen.h-full
				svg(
					viewBox="0 0 768 80",
					xmlns="http://www.w3.org/2000/svg",
					role="img",
					)
					polygon(
						points="0,80 768,80 768,0",
						class="fill-current",
						)
					text.fill-white(
						x="78%",
						y="70%",
					) Zenith Energy U.S.
				//div lorem ipsum

</template>
