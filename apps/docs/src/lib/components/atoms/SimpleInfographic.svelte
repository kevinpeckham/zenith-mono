<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	export let statClasses = "";
	export let stat = "";
	export let heading = "";
	export let label = "";
</script>

<template lang="pug">
	div
		.text-11.mb-1.font-medium.uppercase.leading-tight.tracking-wide.opacity-80 {  @html heading  }
		.bg-kellyGreen.rounded-md.px-3.py-3.text-white(class="h-[90px]")
			.leading-tight.tracking-normal(class="text-[12.5px]") {  @html label  }
</template>
