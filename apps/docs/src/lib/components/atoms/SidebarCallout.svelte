<!--
@component
Here's some documentation for this component.
-->
<script lang="ts">
</script>

<template lang="pug">
	.bg-yellowGreen.w-full.rounded-md.px-8.pt-5.pb-6.text-white.text-30
		.leading-none.mb-2.font-medium.mt-0.text-maize
			+if('$$slots.symbolBefore')
				.inline-block.mr-1
					slot(name="symbolBefore")
			+if('$$slots.number')
				.inline-block(class="text-[1.125em]")
					slot(name="number")
			+if('$$slots.symbolAfter')
				.inline-block.ml-1
					slot(name="symbolAfter")
					+if('$$slots.unit')
				.inline-block(class="text-[.95em]") &nbsp;
					slot(name="unit")
		.text-14.leading-snug
			slot
</template>
