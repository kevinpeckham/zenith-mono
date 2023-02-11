<!--
@component
A statistic inside a circle.
-->
<script lang="ts">
	// tween
	import { tweened } from "svelte/motion";
	import { cubicOut } from "svelte/easing";

	const animatedValue = tweened(0, {
		duration: 800,
		easing: cubicOut,
	});

	// props
	export let animate = false;
	export let runAnimation = false;
	export let primaryColor = "#ea0026";
	export let secondaryColor = "#fff";
	export let value = 30;
	export let width = 150;

	// animation states
	// animate = animation mode is on
	// runAnimation = animation will run
	$: {
		if (animate && runAnimation) {
			$animatedValue = value;
		} else {
			$animatedValue = 0;
		}
	}

	// for managing different states of the big number
	let bigNumber = "";
	$: {
		if (animate && runAnimation) bigNumber = Math.round($animatedValue) + "%";
		else if (animate && !runAnimation) bigNumber = "";
		else bigNumber = value + "%";
	}

	let shapeOpacity = 0;
	$: {
		if (animate && runAnimation) shapeOpacity = 1;
		else if (animate && !runAnimation) shapeOpacity = 0;
		else shapeOpacity = 1;
	}
</script>

<template lang="pug">
.rounded-full(
	class!="flex items-center justify-center"
	style!="opacity: {shapeOpacity}; background-image:linear-gradient(180deg, {primaryColor} 0%, {primaryColor} 100%); width: {width}px; height: {width}px;"
	)
	.text-12
		.w-full(
			style="color: {secondaryColor}!important;"
			class="text-30 font-medium w-full text-center"
			)
			| ↑
			| {bigNumber}
</template>
