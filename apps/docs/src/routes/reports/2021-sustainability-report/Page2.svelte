<script lang="ts">
	// svelte
	import { onMount } from "svelte";

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
	export let page = 0;

	// set page context
	import { setContext } from "svelte";
	setContext("page", page);

	// variables
	let headingsNodeList: NodeListOf<Element>;
	let headingsArray: HTMLElement[];
	$: headingsArray = [];

	let indices: HTMLElement[];
	$: indices = [];

	// onMount
	onMount(() => {
		headingsNodeList = document.querySelectorAll("[data-index]");
		headingsNodeList.forEach((el, i) => {
			if (el instanceof HTMLElement) {
				headingsArray = [...headingsArray, el];
			}
		});
	});

	function limit(num: number, upper: number, lower?: number) {
		const derivedLower = lower || 0;
		if (num < upper && num > derivedLower) {
			return true;
		} else {
			return false;
		}
	}
</script>

<template lang="pug">
	PageLayout(classes!="!p-0 font-sans text-richBlack text-15 ")
		//- Header
		//-Header(
			{doc},
			{page})

		//- Main
		Main
			ChapterHeading(
				chapterNumber!="{ 0 }",
				chapterTitle!="Contents")

			//- text columns
			.mb-6.relative.max-w-none.columns-2.gap-8.leading-normal(class="")
				+each('headingsArray as heading, index')
					+if('heading.dataset.index != "0" && limit(index, 80)')

						//- description
						.mt-0.text-slate-800(
							style="grid-template-columns: 12fr 1fr"
							class!="{(heading.dataset.type == 'chapter' && heading.dataset.index == '1') ? 'font-medium text-[14.5px] mb-1' : ''}"
							class!="{(heading.dataset.type == 'chapter' && heading.dataset.index != '1') ? 'font-medium mt-4 mb-1 text-[14.5px]' : ''}"
							class!="{(heading.dataset.type == 'article') ? 'font-normal my-0 text-[13.5px] mb-1' : ''}"
							)
							+if('heading.dataset.type == "article"')
								a.flex.relative.block.w-full.whitespace-nowrap(href!="#{heading.id}")
									div.grow-0 {  heading.dataset.title  }
									.w-full.pl-0.pr-0.relative(class="px-[2px]")
										.grow-1.border-b-2.border-dotted.w-full(class="border-richBlack/60 -translate-y-[7px]") &nbsp;
									.absolute.right-0.top-0.bg-white {	heading.dataset.page  }

								+elseif('heading.dataset.type == "chapter"')
									a.flex.relative.block.w-full.whitespace-nowrap(href!="#{heading.id}")
										div.grow-0 {  heading.dataset.title  }
										.w-full.pl-0.pr-0.relative(class="px-[2px]")
											.grow-1.border-b-2.border-dotted.w-full.border-black(class="-translate-y-[7px]") &nbsp;
										.absolute.right-0.top-0.bg-white {	heading.dataset.page  }
			//- bottom image
			div.w-full.overflow-hidden.rounded(class="aspect-[4/2]")
				picture.flex.w-full.h-full
					img(src="/images/mountain-lake.webp" alt="Mountain Lake" class="object-cover min-w-full min-h-full")

		ContentPageFooter(
			{doc}
			{page}
			)
</template>
