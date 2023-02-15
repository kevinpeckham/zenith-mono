<!--
@component
Displays H2 heading.
* slotted - unnamed
* prop - 'size' - number - px | default 16
* prop - 'lineHeight' - number - px | default 20
* prop - 'style' - string - css | default ''
-->
<script lang="ts">
	export let style: string = '';
	export let size: number = 16;
	export let lineHeight: number = 20;
	export let classes: string = '';
</script>

<template lang="pug">
h2.font-semibold.tracking-tight(
  class="mb-2 {classes}"
  style!="font-size:{size}px; line-height:{lineHeight}px; {style}"
  )
  slot
</template>
