<script lang="ts">
	import LogoZenith from "$a/LogoZenith.svelte";
</script>

<template lang="pug">
	.flex.items-center.justify-start(class="w-full", tab-index="-1")
		a.block.h-auto(
			class="w-[9.5rem] !outline-none sm:w-[9rem] xl:w-[8rem]",
			href="/",
			tile="Go to homepage")
			span.sr-only Zenith Energy
			LogoZenith
</template>
