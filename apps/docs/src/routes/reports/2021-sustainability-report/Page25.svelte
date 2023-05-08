<script lang="ts">
	import { integerToArray } from "lj-svelte-ui";
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

	const charities = [
		//Nature Conservancy, Ozanam Family Shelter, Easter Seals, Volunteer for America, PHFS Homeless Shelter, Easter Seals, Gulf Coast Food Bank and Toys for Tots.
		"Nature Conservancy",
		"Ozanam Family Shelter",
		"Easter Seals",
		"Volunteer for America",
		"PHFS Homeless Shelter",
		"Gulf Coast Food Bank",
		"Toys for Tots",
	];

	const logos = [
		"logo-nature-conservancy",
		"logo-ozanam-family-shelter",
		"logo-easter-seals",
		"logo-volunteer-for-america",
		"logo-phfs-homeless-shelter",
		"logo-gulf-coast-food-bank",
		"logo-toys-for-tots",
	];
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
				chapterNumber!="{ 7 }",
				chapterTitle!="Customers & Community",
				page!="{ page }")

			.relative.mb-2.grid.max-w-none.grid-cols-2.gap-8.pb-0.leading-normal(
				class="border-richBlack/40")
				section.mt-0.pt-0
					//- left column
					ArticleHeading(
						classes="mb-0",
						articleNumber!="{ 1 }",
						articleTitle!="Community Engagement",
						chapterNumber!="{ 7 }",
						page!="{ page }")

					//- text content
					.prose.prose-sm.prose-slate.mb-6.leading-normal
						div
							p.mt-0 Zenith Energy recognizes that community engagement is a critical component to create long-lasting partnerships with the communities in which we operate. Since our founding in 2014, we have focused on ways we can contribute to the communities where we are located.

							p More recently, Zenith Energy has engaged in holiday gift giving for low-income families and food drives. Every year, a company-wide volunteer day is organized in which all employees are encouraged to participate.

							p Zenith Energy is committed to strictly adhering to all information sharing requirements to provide local communities necessary information as required by local, state, and federal regulations. Zenith Energy takes any opportunity possible to educate their local communities and external stakeholders through public open houses and meetings to build trust and foster collaboration. Zenith Energy is fully in support of community-based safety programs to help educate and protect individuals who live in their neighboring communities. To engage with these communities, emergency contingency situations have been discussed with the local communities through spill drills with the area first responders and community representatives as well as the hosting of local fire departments for facility overview training on how to jointly respond to a potential incident.

							p Looking forward, our goal is to engage with all Zenith Energy communities at least annually through philanthropic and educational outreach, including but not limited to conducting community-based safety and awareness campaigns in all communities where Zenith Energy is active.

							p Additionally, we aim to track the number of local hires as a result of workforce training programs sponsored by Zenith Energy.

				aside.grid.grid-cols-1.justify-content-start.place-content-start.gap-y-6
					.mb-4
						.mt-2.mb-4.font-medium.text-15(class="text-richBlack/90") Charitable Giving
						.w-full.grid.grid-cols-2.gap-x-4
							+each('logos as logo, index')
								picture.flex.justify-center.items-center.bg-white
									img.rounded-md.bg-clip-border(
										alt!="{ charities[index] }",
										height="200",
										src!="/images/{logo}.webp",
										width="300")
					.mb-0
						SidebarCallout
							svelte:fragment(slot="number") 77
							svelte:fragment(slot="symbolAfter") %
							| of new hires in 2021 were local to the community
					.mb-0
						SidebarCallout
							svelte:fragment(slot="number") 8 years
							| Since our founding in 2014, we have focused on ways we can contribute to the communities where we are located

		ContentPageFooter
</template>
