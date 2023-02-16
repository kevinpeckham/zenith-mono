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

		console.log(headingsArray);
	});
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
			+each('headingsArray as index')
				//- index
				+if('index.dataset.index != "0"')
					.grid.grid-cols-3.text-slate-800.leading-normal(
						style="grid-template-columns: 1fr 12fr 1fr"
						class!="{(index.dataset.type == 'chapter') ? 'font-semibold mt-3 text-15' : ''}"
						class!="{(index.dataset.type == 'article') ? 'font-normal my-0 text-13' : ''}"
						class!="{(index.dataset.type == 'topic') ? 'font-normal my-0 text-13' : ''}"
						)

						//- if topic
						+if('index.dataset.type == "topic"')
							.opacity-80 {  index.dataset.index  }
							a.opacity-80.text-12.italic(href!="#{index.id}") {  index.dataset.title  }
							.font-normal.text-13.opacity-80 {	index.dataset.page  }

							+elseif('index.dataset.type == "article"')
								.opacity-80 {  index.dataset.index  }
								a.opacity-100.font-semibold.text-12.text-kellyGreen(href!="#{index.id}") {  index.dataset.title  }
								.font-normal.text-13.opacity-80 {	index.dataset.page  }

							+elseif('index.dataset.type == "chapter"')
								.text-14 {  index.dataset.index  }.0
								a(href!="#{index.id}") {  index.dataset.title  }
								.font-extrabold.text-13.opacity-80 {	index.dataset.page  }

		ContentPageFooter
</template>
