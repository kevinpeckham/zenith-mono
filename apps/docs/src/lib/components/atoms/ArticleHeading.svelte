<!--
@component
Here's some documentation for this component.
-->
<script lang="ts">
	export let articleTitle = "";
	export let articleNumber: number | string = 0;
	export let chapterNumber: number | string = 0;
	export let classes = "";
	export let page = 0;
	export let showNumber = false;
	export let hide = false;

	const indexNumber = showNumber ? chapterNumber + "." + articleNumber : "";
</script>

<template lang="pug">
	h3.prose.mb-6.font-semibold.leading-tight.text-18(
		class!="text-richBlack {(hide) ? 'opacity-0 pointer-events-none absolute' : ''} { classes }",
		data-index!="{ chapterNumber}.{articleNumber }",
		data-page!="{ page }",
		data-title!="{ articleTitle }",
		data-type="article",
		id!="article-{ chapterNumber }.{ articleNumber }") {  indexNumber  } {  articleTitle  }
</template>
