<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	export let liquids: string[] = [];
	export let stats: [number, string][] = [];

	$: {
		console.log(stats);
	}
</script>

<template lang="pug">
	.text-14.grid.w-full.grid-cols-3.gap-8.bg-opacity-10.pt-8
		//- liquids stored
		.h-full.w-full.rounded-sm.px-4.py-3(class="bg-kellyGreen/20")
			.font-medium Now Storing
			ul(class="text-richBlack/80")
				+each('liquids as liquid')
					li {  liquid  }
		//- stats
		+each('stats as stat')
			.h-full.w-full.rounded-sm.px-4.py-3(class="bg-kellyGreen/20")
				//- number
				.text-accent.mb-2.text-4xl.font-light {  stat[0]  }
				//- label
				.leading-tight(class="text-richBlack/80") {  stat[1]  }
</template>
