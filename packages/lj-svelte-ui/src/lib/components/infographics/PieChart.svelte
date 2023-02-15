<!--
@component
Generates a simple pie chart given a number input.
* prop animate: boolean -- Whether to animate the pie chart.
* prop runAnimation: boolean -- Whether to run the animation.
* prop primaryColor: string -- The color of the pie chart data line.
* prop secondaryColor: string -- The color of the pie chart background.
* prop valueClass: string -- to inject classes on the value text element for styling purposes.
* prop value: number -- The value to display in the pie chart.
* prop thickness: number -- The thickness of the pie chart data line.
* prop width: number -- The width of the pie chart.
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
	export let animate: boolean = false;
	export let runAnimation: boolean = false;
	export let value: number = 20;
	export let thickness: number = 22;
	export let primaryColor: string = "#DD23C4";
	export let secondaryColor: string = "#fff";
	export let valueClass: string = "";
	export let width: number = 150;

	// $animated
	$: {
		if (animate && runAnimation) {
			$animatedValue = value;
		} else {
			$animatedValue = 0;
		}
	}

	let bigNumber = "";
	$: {
		if (animate) {
			if (runAnimation) {
				bigNumber = Math.round($animatedValue) + "%";
			} else {
				bigNumber = "";
			}
		} else {
			bigNumber = value + "%";
		}
	}

	// variables
	const conicValue = 0.2 * width;

	// before styles
	$: beforeGradient = `background: conic-gradient(${primaryColor} ${
		animate ? $animatedValue : value
	}%, transparent 0%);`;

	// after styles
	$: afterInset = `inset: ${0.5 * width - thickness / 2}px;`;
	$: afterTransform = `transform: rotate(${
		$animatedValue * 3.6
	}deg) translateY(calc(50% - ${width}px / 2));`;
</script>

<template lang="pug">
.overflow-hidden(style="max-width: {width}px; max-height: {width}px;")
	//- main
	.relative.font-medium(
		class!="m-0 text-25 aspect-square place-content-center inline-grid"
		style="width: {width}px;"
		)
		//- before
		.absolute.aspect-square.w-full(
			class="rounded-[50%]"
			style!="{beforeGradient}"
			)
		//- center mask
		.absolute.inset-0.grid.place-content-center
			.rounded-full.bg-white.aspect-square(
				style="width: {width  - thickness * 2}px; background-color: {secondaryColor};")
		// text
		.absolute.inset-0.grid.place-content-center
			.w-full.text-center.z-10(class!="{valueClass}") {bigNumber}
			.w-full.text-center.text-xs.z-10
				slot(name="caption")

</template>
