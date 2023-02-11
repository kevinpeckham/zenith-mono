<script lang="ts">
// props
export let alt = "";
export let classes = "";
export let draggable = "false";
export let src = "";
export let height: string | null = null;
export let loading: string | undefined = "lazy";
export let mimeType: string | null = null;
export let width: string | null = null;
export let style: string | null = null;
export let title: string | null = null;
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<template lang="pug">
	img(
		class!="{'w-full ' + classes} h-auto select-none",
		data-mimeType!="{ mimeType }",
		loading!="{ loading }",
		{alt},
		{draggable},
		{height},
		{src},
		{title},
		{width},
		{style})
</template>
