<!--
@component
Here's some documentation for this component.
-->
<script lang="ts">
	export let bullets: string[] = [];
</script>

<template lang="pug">
	.mb-4
		//- icon
		//-.mb-3.grid.h-16.w-16.grid-cols-1.place-content-center.place-items-center.rounded-full(
			class="bg-yellowGreen/20")
			div
				slot(name="icon")
		//- heading
		.mb-1.font-medium.leading-normal(class="text-[14.5px] richBlack/80")
			slot(name="heading")
		//- text
		+if('$$slots.text')
			.text-13
				slot(name="text")
				div test
		//- bullets
		+if('bullets.length !=0')
			ul.text-13.list-inside.list-disc
				+each('bullets as bullet')
					li {  bullet  }
</template>
