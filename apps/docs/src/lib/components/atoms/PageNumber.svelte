<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	export let pageCount = 0;
	export let page = 0;
</script>

<template lang="pug">
	//- page number
	.text-11.italic.tracking-wide.opacity-70 {  page  } of {  pageCount  }
</template>
