<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	export let articleTitle = "";
	export let articleNumber = 0;
	export let chapterNumber = 0;
</script>

<template lang="pug">
	h3.prose.prose-slate.mb-3.font-semibold.leading-tight(
		data-article!="{ chapterNumber}.{articleNumber }") { chapterNumber }.{ articleNumber } {  articleTitle  }
</template>
