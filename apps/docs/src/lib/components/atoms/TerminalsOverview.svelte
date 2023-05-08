<!--
@component
Here's some documentation for this component.
-->
<script lang="ts">
	export let liquids: string[] = [];
	export let stats: [number, string][] = [];

	import SidebarCallout from "$atoms/SidebarCallout.svelte";

	// $: {
	// 	console.log(stats);
	// }
</script>

<template lang="pug">
	.text-14.grid.w-full.grid-cols-3.gap-6.pt-0.relative(class="text-white/90 ")
		//- liquids stored
		//-.h-full.w-full.rounded-sm.pl-6.pr-4.pt-4.pb-4(
			class=" outline-kellyGreen/0 outline bg-yellowGreen")
			.font-medium.text-white.mb-2.text-14.uppercase Now Storing
			div(class="text-white/90")
				+each('liquids as liquid')
					span.whitespace-nowrap.inline-block {  liquid  },&nbsp;
		.bg-yellowGreen.rounded-md.w-full.h-auto.px-6.py-4
			//-SidebarCallout(classes="pr-0")
			//-svelte:fragment(slot="number") 22
			.text-maize.text-20.font-semibold.mb-1 Now Storing
			.text-white.leading-tight biodiesel, ethanol, renewable diesel, traditional fuels, vegetable oils
		div
			SidebarCallout
				svelte:fragment(slot="number") 22
				| terminals in North America
		div
			SidebarCallout
				svelte:fragment(slot="number") 17
				| million barrels of storage capacity
		//- stats
		//-+each('stats as stat, index')
			.h-full.w-full.rounded-sm.pl-6.pr-12.py-4.flex.items-center(
				class!="{ (index == 0) ? 'bg-yellowGreen' : 'bg-yellowGreen' }")
				div
					//- number
					.text-accent.mb-2.font-medium.text-white(class="text-[48px] leading-none") {  stat[0]  }
					//- label
					.leading-tight.text-14 {  stat[1]  }

		//- .absolute.bottom-0.left-0.text-white.w-full
		//- 	svg.w-full.h-auto(
		//- 		role="img",
		//- 		viewBox="0 0 768 80",
		//- 		xmlns="http://www.w3.org/2000/svg")
		//- 		polygon.fill-current(points="0,80 768,80 768,0")
</template>
