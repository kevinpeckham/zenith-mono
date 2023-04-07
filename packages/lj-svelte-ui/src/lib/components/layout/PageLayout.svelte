<!--
@component
Set's up the basic layout for different page sizes and types.
* slotted - unnamed slot
* prop - id - string - id of the page
-->
<script lang="ts">
	export let padding: string = "24px";
	export let classes: string = "";
	export let layout: string = "portrait";
</script>

<template lang="pug">
+if('layout == "portrait"')
	.flex(
		data-doc="new-page"
		class="min-w-[816px] min-h-[1056px] print-w-[816px] min-h-screen w-full items-center justify-center bg-slate-200 p-4 print:block print:h-[1056px] print:min-h-[1056px] print:p-0")
		//- Page Container
		.bg-white.relative(
			class="h-[1056px] w-[816px] min-w-[816px] min-h-[1056px] max-w-[816px] max-h-[816px] print:bg-white {classes} overflow-hidden"
			style!="padding: {padding};"
			)
			slot
	+elseif('layout == "landscape"')
		.flex(
			data-doc="new-page"
			class="min-w-[1056px] min-h-816px print-w-[1056px] min-h-screen w-full items-center justify-center bg-slate-200 p-4 print:block print:h-[816px] print:min-h-[816px] print:p-0")
			.w-full.bg-white.relative(
				class="h-[816px] w-[1056px] min-w-[1056px] min-h-[816px] print:bg-white {classes}"
				style!="padding: {padding};"
				)
				slot
	+elseif('layout == "powerpoint"')
		.flex(
			data-doc="new-page"
			class="min-w-[1186px] min-h-667px print-w-[1186px] min-h-screen w-full items-center justify-center bg-slate-200 p-4 print:block print:h-[667px] print:min-h-[667px] print:p-0")
			.w-full.bg-white.relative(
				class="h-[667px] w-[1186px] min-w-[1186px] min-h-[667px] print:bg-white {classes}"
				style!="padding: {padding};"
				)
				slot
</template>
