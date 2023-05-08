<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	// store
	import { contentIndex2021 } from "$stores/contentIndex2021";

	// props
	export let grid_template = "";
</script>

<template lang="pug">
.w-full.grid.text-9(
	style!="grid-template-columns:{ grid_template }")
	+each('$contentIndex2021.headings as cell, i')
		.header-cell(
			class!="py-[8px] {(i == 0 | i == 1) ? 'pl-2 !justify-start' : 'text-center px-0'}")
			span.tracking-wider {@html  cell  }
</template>
