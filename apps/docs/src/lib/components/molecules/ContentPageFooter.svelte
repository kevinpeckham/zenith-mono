<!--
@component
Footer component
-->
<script lang="ts">
	import { LogoZenith } from "zenith-ui";
	import { getContext } from "svelte";

	// props
	export let svgFillClass = "fill-current";
	export let showLogo = true;

	$: page = getContext("page");
</script>

<template lang="pug">
	//- foo ter w/ angled background
	.absolute.bottom-0.left-0.w-full(class="h-[80px] translate-y-[-5px]")
		.text-yellowGreen.h-full.w-full
			svg(
				role="img",
				viewBox="0 0 768 80",
				xmlns="http://www.w3.org/2000/svg")
				polygon(class!="{ svgFillClass }", points="0,80 768,80 768,0")
		.absolute.right-0.bottom-0.pr-8.pb-4
			+if('showLogo')
				LogoZenith
		.absolute.left-0.bottom-2.pl-8.text-11.tracking-wide.opacity-70 {  page  }
</template>
