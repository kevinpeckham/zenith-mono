<script lang="ts">
	// components
	import ArticleHeading from "$atoms/ArticleHeading.svelte";
	import ChapterHeading from "$atoms/ChapterHeading.svelte";
	import ContentPageFooter from "$molecules/ContentPageFooter.svelte";
	import Header from "$molecules/Header.svelte";
	import Main from "$atoms/Main.svelte";
	import TopicHeading from "$atoms/TopicHeading.svelte";
	import { midnight, PageLayout } from "lj-svelte-ui";
	import SidebarCallout from "$atoms/SidebarCallout.svelte";
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
		//- Header
		Header(
			{doc},
			{page})

		//- Main
		Main
			ChapterHeading(
				chapterNumber!="{ 4 }",
				chapterTitle!="Environment",
				page!="{ page }")

			ArticleHeading(
				articleNumber!="{ 1 }",
				articleTitle!="Clean Energy Future",
				chapterNumber!="{ 4 }",
				page!="{ page }")

			//- text columns
			.prose.prose-sm.prose-slate.relative.mb-6.max-w-none.columns-2.gap-8.border-b.pb-4.leading-normal(
				class="border-richBlack/40")
				div
					p.mt-0 Zenith Energy is leading the way in the transition to a cleaner energy future by pioneering a safer and more sustainable liquid storage model. We are working together to meet the needs of our stakeholders to actively restructure our infrastructure to a hybrid renewables fuel model in nearly one-third of our operations. Specifically, 17-percent of our terminal’s storage capacity was used for renewable fuel storage in 2021 with a contracted capacity of 29-percent in 2022.
					p Zenith Energy is providing solutions to support the emerging green industry through investments in state-of-the-art offloading and tankage for alternative fuel products like renewable diesel, biodiesel, and ethanol. By adding and repurposing infrastructure to expand their role in the renewable fuels market, Zenith Energy is working to meet the demands of a clean energy future.

			.prose.prose-sm.prose-slate.relative.grid.max-w-none.grid-cols-2.gap-8.leading-normal
				div
					TopicHeading(
						classes="text-richBlack/90",
						articleNumber!="{ 1 }",
						chapterNumber!="{ 4 }",
						page!="{ page }",
						topicNumber!="{ 1 }",
						topicTitle!="Energy Transition & Climate Strategy")

					p We are developing infrastructure solutions and assets to actively contribute to the introduction of emerging renewable fuels and renewable blends with traditional fuels. In support of this we have commissioned an internal renewable fuels team to pursue low carbon commercial opportunities focused on deploying capital to bring renewable fuels and associated infrastructure to the communities we operate in. The team is pursuing strategic opportunities to provide all-in-one solutions for renewable feedstock aggregation and local storage of finished renewable products.
					p Zenith Energy is planning to invest $35 million in a renewable fuels campaign in Portland that includes biodiesel and renewable diesel blending services, 500,000 barrels of tankage for renewable fuel storage, and construction of a new offloading station to deliver renewable diesel to the Pacific Northwest. We have already deployed over 36-percent of that capital in Portland and plan to finish this investment in the next year.
					p We are providing a safe, economic rail solution for renewable fuels through our renewable diesel manifest rail service.

				aside.grid.grid-cols-1.place-content-start.place-items-start.gap-6.pt-10
					//.prose.prose-sm
						//- quote
						.bg-antiFlash.order-1.rounded-md.px-4.py-4.font-normal.italic.leading-normal
							.text-13.mb-2.font-medium “Zenith Energy is committed to reducing carbon emissions, facilitating energy transition and addressing climate change. We believe in doing the right thing for the environment, which is why we are making these voluntary investments. Our goal is for all our operations to be carbon neutral in 2022. We can do this immediately through our investment in carbon offset credits while we continue to improve our existing infrastructure to reduce our onsite emissions and by storing more renewable fuels.”
							.text-12.font-normal - Jeff Armstrong, CEO
					SidebarCallout
						svelte:fragment(slot="number") 29
						svelte:fragment(slot="symbolAfter") %
						| of 2021 expansion capital allocated towards renewable fuel infrastructure and building renewable diesel hub in Portland
					SidebarCallout
						svelte:fragment(slot="symbolBefore") $
						svelte:fragment(slot="number") 35
						svelte:fragment(slot="unit") million
						| amount Zenith is investing in biodiesel and renewable diesel blending services, renewable fuel storage, and a new offloading station in Portland

		ContentPageFooter
</template>
