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
	PageLayout(classes!="font-sans !p-0 text-richBlack text-15 ")
		//- Header
		Header(
			{doc},
			{page})

		//- Main
		Main
			ChapterHeading(
				chapterNumber!="{ 0 }",
				chapterTitle!="Contents")

			//- text columns
			.prose.prose-sm.prose-slate.relative.max-w-none.columns-2.gap-8.leading-normal
			+each('headingsArray as heading, index')
				//- index
				+if('heading.dataset.index != "0" && limit(index, 31)')
					.mt-0.grid.grid-cols-3.text-slate-800(
						style="grid-template-columns: 1fr 12fr 1fr"
						class!="{(heading.dataset.type == 'chapter' && heading.dataset.index == '1') ? 'font-semibold text-15 mb-2' : ''}"
						class!="{(heading.dataset.type == 'chapter' && heading.dataset.index != '1') ? 'font-semibold mt-6 mb-2 text-15' : ''}"
						class!="{(heading.dataset.type == 'article') ? 'font-normal my-0 text-14 mb-1' : ''}"
						class!="{(heading.dataset.type == 'topic') ? 'font-normal my-0 text-14 mb-1' : ''}"
						)

						//- if topic
						+if('heading.dataset.type == "topic"')
							.text-14.opacity-80 {  heading.dataset.index  }
							a.opacity-80.text-14(href!="#{heading.id}") {  heading.dataset.title  }
							.font-normal.text-14.opacity-80 {	heading.dataset.page  }

							+elseif('heading.dataset.type == "article"')
								.text-14.opacity-80 {  heading.dataset.index  }
								a.opacity-100.font-medium.text-14.text-kellyGreen(href!="#{heading.id}") {  heading.dataset.title  }
								.font-normal.text-14.opacity-80 {	heading.dataset.page  }

							+elseif('heading.dataset.type == "chapter"')
								.text-15 {  heading.dataset.index  }.0
								a(href!="#{heading.id}") {  heading.dataset.title  }
								.font-extrabold.text-15.opacity-80 {	heading.dataset.page  }

		ContentPageFooter
</template>
