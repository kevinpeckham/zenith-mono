<!--
@component
Here's some documentation for this component.
-->
<script lang="ts">
	export let topicTitle = "";
	export let topicNumber = 0;
	export let articleNumber = 0;
	export let chapterNumber = 0;
	export let classes = "";
	export let hideNumber = true;
	export let page = 0;
</script>

<template lang="pug">
	h4.prose.prose-slate.opacity-9.mt-0.mb-4.font-semibold.leading-tight.text-kellyGreenDark(
		class!="text-[15.5px] {classes}",
		data-index!="{ chapterNumber }.{ articleNumber }.{ topicNumber }",
		data-page!="{ page }",
		data-title!="{ topicTitle }",
		data-type="topic",
		id!="topic-{ chapterNumber }.{ articleNumber }.{ topicNumber }")
		span {  topicTitle  }
		+if('!hideNumber')
			span.text.text-12.inline-block.font-normal &nbsp;- {  chapterNumber  }.{  articleNumber  }.{  topicNumber  }
</template>
