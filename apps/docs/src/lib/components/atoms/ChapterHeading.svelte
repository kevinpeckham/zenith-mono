<!--
@component
Here's some documentation for this component.
-->
<script lang="ts">
	export let chapterNumber = 0;
	export let chapterTitle = "Chapter Title";
	export let page = 0;
	export let hideNumber = true;
	export let hide = false;
</script>

<template lang="pug">
	//- Chapter Heading
	div(data-chapter!="{ chapterNumber }")
		//- Chapter #
		+if('chapterNumber != "0" && !hideNumber')
			.text-yellowGreen.text-20.leading-none.tracking-wider {  chapterNumber  }.0
		//- Chapter Title
		h2.text-36.text-yellowGreen.mb-6.font-medium.leading-tight(
			class!="{ (hide) ? 'opacity-0' : '' }",
			data-index!="{ chapterNumber }",
			data-page!="{ page }",
			data-title!="{ chapterTitle }",
			data-type!="chapter",
			id!="chapter-{ chapterNumber }") {  chapterTitle  }
</template>
