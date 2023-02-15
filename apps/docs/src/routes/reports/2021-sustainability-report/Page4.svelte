<script lang="ts">
	// components
	import ArticleHeading from "$atoms/ArticleHeading.svelte";
	import ArticleSubheading from "$atoms/ArticleSubheading.svelte";
	import ChapterHeading from "$atoms/ChapterHeading.svelte";
	import ContentPageFooter from "$molecules/ContentPageFooter.svelte";
	import Header from "$molecules/Header.svelte";
	import Main from "$atoms/Main.svelte";
	import { PageLayout } from "lj-svelte-ui";
	import { PictureCloudinary } from "lj-svelte-ui";

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
			//-ChapterHeading(
				chapterNumber!="{ 1 }",
				chapterTitle!="Message from the CEO")

			ArticleHeading(
				articleNumber!="{ 2 }",
				articleTitle!="Commitment to ESG",
				chapterNumber!="{ 1 }")

			//- text columns
			.relative.grid.grid-cols-2.gap-8.leading-normal
				//- col left
				.prose.prose-sm.prose-slate
					ArticleSubheading
						| Dedicated to the sustainability of our environment, business, and community.

					p Zenith Energy is committed to protecting the health and safety of our employees and community and minimizing the impact of our operations on the environment. We work every day to responsibly operate our terminals and protect the environment and the products we handle and store. Through rigorous trainings, extensive emergency response planning, and investments in our infrastructure, Zenith Energy is helping to ensure that our business is sustainable and well-prepared to serve our communities for years to come.

					p In 2021, Zenith Energy built on our commitments established in our inaugural Sustainability Report, further solidifying our Environmental, Social and Governance (ESG) practices. Advancements include establishing sustainability targets, including commitments to reduce greenhouse gas (GHG) emissions to support a low carbon future, as well as taking steps toward greater transparency, including adopting the Sustainability Accounting Standards Board (SASB) framework for reporting.

					p We also created a number of new ESG policies and procedures in our Employee Handbook to facilitate employee contribution to our ESG targets to better reflect our commitments to ensure all our associates and partners are aligned with our values.

				//- col right
				aside.grid.grid-cols-1.place-content-start.place-items-start.gap-4
					.prose.prose-sm.order-1
						blockquote.text-kellyGreen.order-1.italic.leading-relaxed
							.mb-4 “Sustainability is not only a core part of our values but is essential to the future of our business. Our focus to build more sustainable practices provides us with our social license to operate. We are committed to institutionalizing sustainability into all areas of our business and improving our performance based on best practices.”
							.font-normal - Jeff Armstrong, CEO

					//- image
					.order-0
						PictureCloudinary(
							alt="3:2",
							aspectRatio!="3:2",
							sourceUrl="https://res.cloudinary.com/dn0pqjjbq/image/upload/v1676225453/image-from-rawpixel-id-31304-jpeg_edhqqk.jpg")
		ContentPageFooter
</template>
