<!--
@component
Footer component
* @prop {number} [height] - height of footer in px
* @prop {string} [bgClasses] - tw classes for background
-->
<script lang="ts">
	import { LogoZenith } from "zenith-ui";

	// Props
	export let height = 80;
	export let bgClasses = "bg-transparent";
	export let logo = "zenith";
	export let primaryColor = "#fff";
</script>

<template lang="pug">
#footer.absolute.bottom-0.left-0.w-full.p-6
	.flex.items-center.px-6(
		class!="{bgClasses}"
		style="color:{primaryColor}; height:{height}px;"
		)
		div
			LogoZenith



</template>
