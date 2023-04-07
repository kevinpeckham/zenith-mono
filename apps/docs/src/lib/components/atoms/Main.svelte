<!--
@component
Main page component for the docs app.
Adds padding for body of page (below header and above footer).
-->
<script lang="ts">
	export let classes = "";
</script>

<template lang="pug">
	main.px-12(class!="mt-[40px] h-[931px] { classes }")
		slot
</template>
