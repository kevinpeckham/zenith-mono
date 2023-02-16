<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	export let topicTitle = "";
	export let topicNumber = 0;
	export let articleNumber = 0;
	export let chapterNumber = 0;
	export let page = 0;
</script>

<template lang="pug">
	h4.prose.prose-slate.text-15.opacity-9.mt-0.mb-2.font-semibold.leading-tight(
		data-index!="{ chapterNumber }.{ articleNumber }.{ topicNumber }",
		data-page!="{ page }",
		data-title!="{ topicTitle }",
		data-type="topic",
		id!="topic-{ chapterNumber }.{ articleNumber }.{ topicNumber }")
		span {  topicTitle  }
		span.text.text-12.inline-block.font-normal &nbsp;- {  chapterNumber  }.{  articleNumber  }.{  topicNumber  }
</template>
