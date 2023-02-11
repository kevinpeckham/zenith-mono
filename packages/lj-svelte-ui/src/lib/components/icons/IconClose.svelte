<script lang="ts">
	export let role = "";
	export let ariaHidden = true;
</script>
<template lang="pug">
	svg(
		aria-hidden!="{ ariaHidden }",
		class="h-auto w-full",
		height="16",
		role!="{ role }",
		viewBox="0 0 16 16",
		width="16",
		xmlns="http://www.w3.org/2000/svg")
		line(
			stroke="currentColor",
			stroke-width="2",
			x1="0",
			x2="16",
			y1="16",
			y2="0")
		line(
			stroke="currentColor",
			stroke-width="2",
			x1="16",
			x2="0",
			y1="16",
			y2="0")
</template>
