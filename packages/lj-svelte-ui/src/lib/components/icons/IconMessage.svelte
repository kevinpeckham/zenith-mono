<!--
@component
Here's some documentation for this component.
-->
<script lang="ts">
	// icon standard props
	export let ariaHidden = true;
	export let classes = "";
	export let dataIcon = "phone-message";
	export let role = "";
	export let styles = "";
	export let title = "phone message icon";
</script>

<template lang="pug">
svg(
	aria-hidden!="{ariaHidden}"
	class!="w-full h-auto fill-current overflow-visible {classes}"
	data-icon!="{dataIcon}"
	height="1600"
	viewBox="0 0 1600 1600"
	role!="{role}"
	style!="{styles}"
	width="1600"
	xmlns="http://www.w3.org/2000/svg"
	)
	+if('title && !ariaHidden')
		title {title}
	path(
		class="fill-current"
		d="m612 138c-308.4 0-558 188.4-558 421.2 0 91.199 38.398 176.4 104.4 244.8-26.398 52.801-67.199 124.8-116.4 181.2-28.801 32.398 0 84 42 75.602 122.4-22.801 237.6-69.602 322.8-110.4 63.602 19.199 133.2 30 205.2 30 308.4 0 558-188.4 558-421.2 0-232.8-249.6-421.2-558-421.2z"
		)
</template>
