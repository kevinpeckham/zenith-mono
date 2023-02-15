<!--
@component
Displays a box with a gray background and a heading.
* props - bodyClasses - string - additional classes to apply to the body
* props - bodyStyles - string - additional styles to apply to the body
* props - boxClasses - string - additional classes to apply to the box
* props - boxStyles - string - additional styles to apply to the box
-->
<script lang="ts">
	export let outerClasses: string = "";
	export let outerStyle: string = "";
	export let boxClasses: string = "";
	export let boxStyle: string = "";

	// components
	import SectionHeading from "$atoms/SectionHeading.svelte";
	import Caption from "$atoms/Caption.svelte";
</script>

<template lang="pug">
	div(
		class!="{ outerClasses }",
		style!="{ outerStyle }"
	)
		SectionHeading
			slot(name="heading")

		// box
		.mb-3.rounded-sm.bg-neutral-100.px-6.pt-4.pb-6(
			class!="{ boxClasses }",
			style!="{ boxStyle }"
		)
			slot(name="body")

		// footer - caption
		Caption
			slot(name="caption")
</template>
