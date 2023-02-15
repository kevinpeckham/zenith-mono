<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	export let doc;

	const longTitle =
		doc & doc.longTitle ||
		"Zenith Energy U.S. - 2021 Sustainability Report";
</script>

<template lang="pug">
	//- eyebrow
	.text-11.italic.tracking-wide.opacity-70 {  longTitle  }
</template>
