<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	export let chapterNumber = 0;
	export let chapterTitle = "Chapter Title";
</script>

<template lang="pug">
	//- Chapter Heading
	div(data-chapter!="{ chapterNumber }")
		//- Chapter #
		.text-yellowGreen.text-20.leading-none.tracking-wider {  chapterNumber  }.0
		//- Chapter Title
		h2.text-36.text-yellowGreen.mb-6.font-medium.leading-tight(
			data-index!="{ chapterNumber }",
			data-type!="chapter") {  chapterTitle  }
</template>
