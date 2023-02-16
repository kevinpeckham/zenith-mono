<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	export let chapterNumber = 0;
	export let chapterTitle = "Chapter Title";
	export let page = 0;
</script>

<template lang="pug">
	//- Chapter Heading
	div(data-chapter!="{ chapterNumber }")
		//- Chapter #
		+if('chapterNumber != "0"')
			.text-yellowGreen.text-20.leading-none.tracking-wider {  chapterNumber  }.0
		//- Chapter Title
		h2.text-36.text-yellowGreen.mb-6.font-medium.leading-tight(
			data-index!="{ chapterNumber }",
			data-page!="{ page }",
			data-title!="{ chapterTitle }",
			data-type!="chapter",
			id!="chapter-{ chapterNumber }") {  chapterTitle  }
</template>
