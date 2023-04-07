<!--
@component
Here's some documentation for this component.
-->
<script lang="ts">
</script>

<template lang="pug">
	.border-l-2.border-yellowGreen.border-opacity-80.bg-yellowGreen.rounded-md.px-6.py-6.font-normal.italic.leading-normal.text-white
		.mb-5.leading-relaxed(class="text-[15.5px]")
			slot
		.text-14.font-normal.not-italic
			slot(name="name")
		.text-14.font-normal.not-italic
			slot(name="title")
</template>
