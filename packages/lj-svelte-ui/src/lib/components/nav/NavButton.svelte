<!--
@component
For adding action button to the header.
-->
<script lang="ts">
//- import types
import type { NavDataItem } from "./../../types/navTypes";

//- props
export let navItem: NavDataItem = {
	label: "",
	relativePath: "",
	externalUrl: "",
	type: "",
};

const link = navItem.relativePath || navItem.externalUrl || "#";
</script>

<template lang="pug">
	a.group.ml-10.whitespace-nowrap.px-4.transition-opacity(
		class="hover:bg-spanishRed-dark rounded border border-white border-opacity-60 bg-transparent py-[6px] text-[.9em] text-white opacity-80  !outline-none xl:text-[.9em]",
		href!="{ link }")
		span(class="underline-offset-4 group-focus:underline") {  navItem.label  }
</template>
