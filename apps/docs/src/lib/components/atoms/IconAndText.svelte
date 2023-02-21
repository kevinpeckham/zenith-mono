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
		.mb-3.grid.h-16.w-16.grid-cols-1.place-content-center.place-items-center.rounded-full.bg-slate-300
			div
				slot(name="icon")
		//- heading
		.text-13.mb-1.font-semibold.leading-normal
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
