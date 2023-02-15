<!--
@component
Footer component
-->
<script lang="ts">
	import { LogoZenith } from "zenith-ui";
</script>

<template lang="pug">
	//- foo ter w/ angled background
	.absolute.bottom-0.left-0.w-full(class="h-[80px]")
		.text-yellowGreen.h-full.w-full
			svg(
				role="img",
				viewBox="0 0 768 80",
				xmlns="http://www.w3.org/2000/svg")
				polygon(class="fill-current", points="0,80 768,80 768,0")
				//-text.fill-white(
					x="78%",
					y="70%") Zenith Energy U.S.
		.absolute.right-0.bottom-0.pr-8.pb-4
			LogoZenith
</template>
