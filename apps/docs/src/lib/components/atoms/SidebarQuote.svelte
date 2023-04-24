<!--
@component
Here's some documentation for this component.
-->
<script lang="ts">
	import QuotationMarkGraphic from "$atoms/QuotationMarkGraphic.svelte";
</script>

<template lang="pug">
	.border-l-2.border-yellowGreen.border-opacity-80.bg-yellowGreen.rounded-md.px-6.pt-3.pb-6.font-normal.leading-normal.text-white
		.mb-2.flex.items-center.justify-start.overflow-hidden.w-6.h-6
			QuotationMarkGraphic
		//- Quote
		.mb-2.leading-normal(class="text-16")
			slot
		.mb-1.flex.items-center.justify-start.overflow-hidden.w-6.h-6.mb-4
			.w-full.h-full.rotate-180
				QuotationMarkGraphic

		.text-13.font-normal.not-italic
			slot(name="name")
		.text-13.font-normal.not-italic
			slot(name="title")
</template>
