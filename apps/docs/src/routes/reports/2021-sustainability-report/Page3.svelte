<script lang="ts">
	// components
	import ArticleHeading from "$atoms/ArticleHeading.svelte";
	import ChapterHeading from "$atoms/ChapterHeading.svelte";
	import ContentPageFooter from "$molecules/ContentPageFooter.svelte";
	import Header from "$molecules/Header.svelte";
	import Main from "$atoms/Main.svelte";
	import { PageLayout } from "lj-svelte-ui";

	// props
	export let doc: Document;
	export let edition = "";
	export let page = 3;

	// set page context
	import { setContext } from "svelte";
	setContext("page", page);
</script>

<template lang="pug">
	PageLayout(classes!="font-sans !p-0 text-richBlack text-15 ")
		//- Main
		Main
			ChapterHeading(
				chapterNumber!="{ 1 }",
				chapterTitle!="Message from the CEO",
				page!="{ page }")

			ArticleHeading(
				articleNumber!="{ 1 }",
				articleTitle!="CEO Letter",
				chapterNumber!="{ 1 }",
				hide!="{ true }",
				page!="{ page }")

			//- text columns
			.prose.prose-sm.prose-slate.relative.max-w-none.columns-2.gap-8.leading-normal
				p.font-semibold.tracking-tight(class="text-[1.15em]")
					span Welcome to Zenith Energy’s Second Annual Sustainability Report:&nbsp;
					span.italic Storage for the New Energy Age

				p Sustainability is a core of Zenith Energy’s mission and values through contributing to the new energy future. In publishing our 2021 Sustainability Report we highlight our progress to date and our path forward to fulfilling our commitment to progress in our sustainability journey and positioning ourselves for the new energy future.

				p Reflecting on 2021 and beyond, four key concepts support our confidence in Zenith Energy’s current and long-term success in operating a sustainable business and positioning for the new energy age.

				//- Bullets
				ul.text-13.pl-3.list-disc
					li Zenith's investment in the low carbon future and strategic terminal locations
					li Zenith's ability to support energy reliability and security
					li Zenith's commitment to safety and operational excellence
					li Zenith's achievements in Environmental Stewardship

				p In 2021, we continued our investment in our renewable fuels campaign at our Portland terminal that includes biodiesel and renewable diesel blending services, additional tankage for renewable fuel storage, renewables rail service and an offloading station to deliver renewable diesel to the Pacific Northwest. Our Portland terminal serves as a critical entry point and logistics hub for distribution of renewable diesel to the Greater Portland area. Zenith is also moving forward with new projects to bring Sustainable Aviation Fuel (SAF) into the west coast via Portland.

				p To-date, we have invested $12.8 million into this campaign and plan to finish out the investment within the next year as we work toward our goal of converting over 96-percent of the fuel stored at our Portland facility to renewable fuels. These assets are critical in supporting the end-use of renewable fuels, which will ultimately support the reduction of carbon emissions globally.

				p Our sustainability initiatives extend beyond the renewable solutions we provide to our customers, and we are making enhancements to our operations to reduce our carbon impacts through infrastructure improvements to reduce our terminals emissions, development of decarbonization strategies using a third-party consultant, and use of carbon offset credits.

				p Our commitment to innovation to meet the demands of a clean energy future while supporting energy reliability and security has positioned Zenith Energy as an industry leader. This commitment begins with our leadership team and is upheld across every level of our organization. Our decisions are driven by our core values – safety first, environmental stewardship, customer driven and operational excellence, which are guided under a strong governance and oversight program.

				p As you read this report, you will not only learn about our approach to sustainability, you will also gain insight into Zenith Energy’s performance in the areas of environment, energy transition, health and safety, our employees, our customers, community involvement, and governance during the 2021 calendar year. Thank you for your interest in Zenith Energy and, on behalf of our dedicated team, we look forward to continuing to share our progress with you.

				.block.flex.items-center.mt-2
					//-img.block.mr-6(
						class="mb-2 w-28 h-28",
						alt="Jeff Armstrong",
						src="/images/jeff-armstrong.webp")
					div
						//-.font-semibold.text-13.mb-1 Jeff Armstrong

						//-signature
						img.block.mb-1.mt-2.w-full.h-auto(
							class="max-w-[72px]",
							alt="Jeff Armstrong Signature",
							height="111",
							src="/images/signature.jpg",
							width="131")
						.font-semibold.text-13.mb-1 Jeff Armstrong
						.text-13.italic.bg-white Chief Executive Officer

		ContentPageFooter
</template>
