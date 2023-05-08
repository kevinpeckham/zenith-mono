<script lang="ts">
	// components
	import ArticleHeading from "$atoms/ArticleHeading.svelte";
	import ChapterHeading from "$atoms/ChapterHeading.svelte";
	import ContentPageFooter from "$molecules/ContentPageFooter.svelte";
	import Header from "$molecules/Header.svelte";
	import Main from "$atoms/Main.svelte";
	import TopicHeading from "$atoms/TopicHeading.svelte";
	import TopicSubheading from "$atoms/TopicSubheading.svelte";
	import { PageLayout, PieChart } from "lj-svelte-ui";
	import SidebarQuote from "$atoms/SidebarQuote.svelte";
	import PictureCloudinary from "lj-svelte-ui/src/lib/components/pictures/PictureCloudinary.svelte";

	// store
	import { colors, midnight } from "lj-svelte-ui";

	// props
	export let doc: Document;
	export let edition = "";
	export let page = 0;

	// set page context
	import { setContext } from "svelte";
	setContext("page", page);
</script>

<template lang="pug">
	PageLayout(classes!="font-sans !p-0 text-richBlack text-15 ")
		//- Header
		Header(
			{doc},
			{page})

		//- Main
		Main
			ArticleHeading(
				articleNumber!="{ 2 }",
				articleTitle!="Climate Change",
				chapterNumber!="{ 4 }",
				page!="{ page }")

			.relative.grid.grid-cols-2.gap-8.leading-normal.mt-6
				//- col left
				.prose.prose-sm.prose-slate
					TopicHeading(
						articleNumber!="{ 2 }",
						chapterNumber!="{ 4 }",
						page!="{ page }",
						topicNumber!="{ 1 }",
						topicTitle!="Offsets and Carbon Neutral Operations")

					p.mb-4.leading-normal Zenith Energy’s commitment to sustainability extends beyond the renewable solutions we can provide to our customers. We are investing in our own footprint to reduce our carbon impacts through infrastructure improvements to reduce our facility emissions, development of decarbonization strategies using a third-party consultant, and use of carbon offset credits.

					//- topic subheading
					.mb-3
						TopicSubheading
							span(class="text-[1.05em] mb-0 leading-tight") Zenith Energy U.S. Terminals Achieved <br> Carbon Neutrality in 2021

					p.mb-2.leading-normal
						| The Zenith Energy U.S. Terminals have achieved carbon neutrality in 2021 for greenhouse gas (GHG) emissions by using emission reduction credits to offset all Scope 1, Scope 2, and limited Scope 3 categories. Specifically, all direct operational GHG emissions (Scope 1), all indirect GHG emissions from purchased electricity (Scope 2), and all company business travel and employee commuting (limited Scope 3).
					p.m-0.leading-normal
						| Zenith Energy U.S. Terminals acquired approximately 41 thousand unique carbon credits verified using the Verified Carbon Standard (VCS). Emissions were quantified in terms of metric tons of carbon dioxide equivalent (CO2e) in accordance with the WRI/WBCSD GHG Protocol and SASB Midstream Standard for the reporting of GHG emissions. Achieving carbon neutrality in 2021 is a significant milestone for Zenith Energy U.S. and further supports the goal of achieving a carbon neutral society. Since the founding of Zenith Energy U.S. in 2017, we have worked hard to fulfill our mission of creating a sustainable, independent liquid storage terminals business and we are entirely committed to environmental sustainability and are unaware of any other U.S. liquids storage terminals that has achieved carbon neutrality. We are proud to be the first major U.S. terminal company to achieve this milestone.

				aside.grid.grid-cols-1.place-content-start.place-items-start.gap-6.mt-2.bg-white
					SidebarQuote
						| At Zenith Energy, actions speak louder than words. Our team devised aggressive ESG goals &amp; targets and made fantastic headway executing the plan. The organization is carbon neutral for 2021 operations, becoming the first terminal company to earn this achievement.
						svelte:fragment(slot="name") Grady Reamer
						svelte:fragment(slot="title") VP of U.S. West Operations

					.overflow-hidden.rounded-md.relative.grid.grid-cols-1(class="h-auto")
						img.order-1.w-full.h-auto.mb-6.rounded-md.overflow-hidden(
							src="/images/joliet.webp")
						img.order-0.w-full.h-auto.mb-6.rounded-md.overflow-hidden(
							src="/images/climbing-tank.webp")
						//-.w-full.rounded-md.overflow-hidden
							PictureCloudinary(
								alt="lorem ipsum",
								aspectRatio!="3:2",
								sourceUrl="https://res.cloudinary.com/dn0pqjjbq/image/upload/ar_3:2,c_fill,f_auto,w_700/v1677259718/image-from-rawpixel-id-4033103-original_ngzaee.jpg")
							.absolute.bottom-0.left-0.text-white.w-full
						//- svg.w-full.h-auto.text-white.absolute.bottom-0(
						//- 	role="img",
						//- 	viewBox="0 0 768 80",
						//- 	xmlns="http://www.w3.org/2000/svg")
						//- 	polygon.fill-current(points="0,80 768,80 768,0")
		ContentPageFooter
</template>
