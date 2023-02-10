<!--
@component
Master layout for web app.
-->
<script lang="ts">
	// css
	import "../app.css";
</script>

<template lang="pug">
	div(class="outline-x-2 mx-auto max-w-[1800px] bg-white shadow")
		slot
</template>
