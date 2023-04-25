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
	.bg-yellowGreen.rounded-md.w-full.h-auto.pl-6.pr-4.pt-4.pb-8.text-white
		//- tout heading
		.uppercase.text-16.font-normal.mb-4.tracking-wider
			slot
		//- tout body
		.grid.grid-cols-2.gap-y-5.gap-x-3
			+each('stats as stat')
				+const('isNumber = Number(stat.heading[0]) ? true : false')
				+const('colspan = stat.colspan ? stat.colspan : 1')
				div(class!="{ (colspan == 2) ? 'col-span-2' : '' }")
					.text-maize.font-medium.leading-tight.tracking-wide.mb-1(
						class!="{ isNumber ? 'text-[19.5px]' : 'text-17' }") {  (stat.heading) ? stat.heading : ''  }
					+if("stat.text")
						.leading-tight.text-14.opacity-90(class!="{ (colspan == 2) ? 'pr-8' : '' }") {  stat.text  }
					+if("stat.bullets && stat.bullets.length > 0")
						ul.list-disc.pl-3.pt-1.opacity-90
							+each('stat.bullets as bullet')
								li.leading-tight.p-0.mb-2.text-14(class="text-white/90") {  bullet  }
</template>
