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

	// set page context
	import { setContext } from "svelte";
	setContext("page", page);
</script>

<template lang="pug">
	PageLayout(classes!="font-sans !p-0 text-richBlack text-15 ")
		//- Main
		Main
			.absolute.flex.inset-0
				//- background
				.absolute.inset-0.flex
					img.w-full.h-auto(
						height="1056",
						src="/images/brooklyn-full-bleed.webp",
						width="816")
					//-.absolute.inset-0(
						class="bg-gradient-to-t from-richBlack/0 via-richBlack/0 to-richBlack/0")
				//- foreground
				.z-20.w-full.h-full.px-16.pt-12
					.font-normal.italic.leading-normal.text-white
						.mb-10.font-normal(class="text-[30px] leading-[1.3]") “Zenith Energy is committed to reducing carbon emissions, facilitating energy transition and addressing climate change.
							//-| &nbsp;We believe in doing the right thing for the environment, which is why we are making these voluntary investments.
							| &nbsp; Our goal is for all our operations to be carbon neutral in 2022. We can do this immediately through our investment in carbon offset credits while we continue to improve our existing infrastructure to reduce our onsite emissions and by storing more renewable fuels.”
						.text-18.font-normal - Jeff Armstrong, CEO

		//- ContentPageFooter
</template>
