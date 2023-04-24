<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	export let stats: Stat[];

	interface Stat {
		heading: string;
		text: string;
	}
</script>

<template lang="pug">
	.bg-yellowGreen.rounded-md.w-full.h-auto.pl-6.pr-4.pt-4.pb-6.text-white
		//- tout heading
		.uppercase.text-16.font-medium.mb-4.tracking-wider
			slot
		//- tout body
		.grid.grid-cols-2.gap-y-5.gap-x-3
			+each('stats as stat')
				+const('isNumber = Number(stat.heading[0]) ? true : false')
				div
					.text-maize.font-semibold.leading-tight.tracking-wide.mb-1(
						class!="{ isNumber ? 'text-18' : 'text-16' }") {  (stat.heading) ? stat.heading : ''  }
					+if("stat.text")
						.leading-tight.text-14 {  stat.text  }
					+if("stat.bullets && stat.bullets.length > 0")
						ul.list-disc.pl-3.m-0
							+each('stat.bullets as bullet')
								li.leading-tight.p-0.mb-2.text-14(class="text-white/90") {  bullet  }
</template>
