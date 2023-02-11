<!--
@component
Provides padding and outline for body of page (below header and above footer).
* slotted - unnamed slot
-->
<script lang="ts">
	// props
	export let layout = "portrait";
	export let headerHeight = layout == "portrait" ? 64 : 0;
	export let classes = "border border-neutral-200 round-sm pt-4";
	export let style: string = "";

	// calculated
	$: mainHeight = layout == "portrait" ? 1008 - headerHeight : 0;
</script>

<template lang="pug">
main.relative(
  class!="{classes}"
  style!="{ (layout == 'portrait') ? 'height:' + mainHeight + 'px;' : '' } {style}"
  )
  slot
</template>
