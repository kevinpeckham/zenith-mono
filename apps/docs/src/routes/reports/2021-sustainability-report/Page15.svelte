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
</script>

<template lang="pug">
	PageLayout(classes!="font-sans !p-0 text-richBlack text-15 ")
		//- Header
		Header(
			{doc},
			{page})

		//- Main
		Main
			.prose.prose-sm.prose-slate.relative.grid.max-w-none.grid-cols-2.gap-8.leading-normal
				//- left column
				div
					ArticleHeading(
						articleNumber!="{ 4 }",
						articleTitle!="Air Quality",
						chapterNumber!="{ 4 }",
						classes="mt-0")

					p.mt-0 We are committed to maintaining all emissions levels at or below the state and federally permitted quantities as well as minimizing emissions by operating our facilities in a manner that is consistent with industry recognized air quality control standards. We manage our air permitting and compliance programs by quantifying facility annual emissions per federal, state, provincial, or local requirements, providing necessary documentation to regulators, and training our operations, engineering, and maintenance employees on permit requirements. Emissions are further reduced through preventative measures such as regular leak monitoring, floating roofs, and seal inspection programs. Zenith Energy U.S. has been in compliance with all U.S. air quality regulatory requirements the past two years (2020 and 2021).

					ul.list-outside.list-disc.pl-3(class="text-[13.5px]")
						li.mb-2.leading-snug We track our total criteria air emissions in tons per year (tpy). We continue to develop policies and internal procedures focused on the reduction of air emissions not only as an opportunity to conserve assets, but also as a goal for improving the air quality in the areas that we operate.

					p To achieve these goals, we have committed to:

					ul.list-outside.list-disc.pl-3(class="text-[13.5px]")
						li.mb-2.leading-snug Implement three projects per year to improve or upgrade our control devices including vapor control devices and floating roof installation.
						li.leading-snug Enhance employee training opportunities on maintaining air quality compliance and how to work towards zero incidents.

					p The ESG Content Index included in this report provides our organization’s ongoing criteria pollutant reporting efforts we are using to track year-over-year performance.

					//-aside.grid.grid-cols-1.place-content-start.place-items-start.gap-4.bg-white
						.prose.prose-sm
							//- quote
							.bg-antiFlash.order-1.rounded-md.px-4.py-4.font-normal.italic.leading-normal
								.text-13.mb-2.font-medium Progress against goal: 8% reduction in one year (2021) since 2020 baseline

				//- right
				div
					ArticleHeading(
						articleNumber!="{ 5 }",
						articleTitle!="Environmental Management",
						chapterNumber!="{ 4 }",
						classes="mt-0")

					p Since beginning operations in 2017, Zenith Energy has established a team of experts to address topics ranging from environmental management to site assessments and emergency response. Our environmental management is incorporated as part of our company-wide risk management program. Zenith Energy’s Vice President of HSER is responsible for executing our program and ensuring we are on progress with reaching our commitments and goals. We have operationalized our environmental management by incorporating regulatory plans into our SMARTPLAN™ HSE Plans Digital Repository platform.
					p We comply with all environmental regulation and legislative requirements to protect the diverse ecosystems within the footprint of our facilities and operations, manage the use of our shared natural resources, and minimize our waste generation and air emissions for a sustainable future. It is our belief that we have a responsibility for environmental stewardship using conservation and sustainable practices as well as continuous compliance with all federal and local regulatory obligations, including EPA and individual state and county environmental departments. Through internal review, we identify and comply with any updates to laws and regulations concerning environmental compliance. Additionally, we educate and encourage employees and contractors to identity and mitigate environmental risks while providing HSER training on Zenith Energy requirements, regulations, and best practices. Our state-of-the-art asset management approach through Site Docs – our incident management system – utilizes real-time inspection tracking and incident management documentation.
					p In support of the SASB Index and ecological impacts, we will be reporting the percentage of land owned, leased and/or operated within areas of protected conservation status or endangered species habitat.
		ContentPageFooter
</template>
