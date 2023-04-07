<!--
@component
Displays document header.
-->
<script lang="ts">
	// components
	import Eyebrow from "$atoms/Eyebrow.svelte";
	import PageNumber from "$atoms/PageNumber.svelte";

	import { dummyDocument } from "lj-svelte-ui";

	// props
	export let doc = dummyDocument;
	export let page = 0;

	const pageCount = doc && doc.pageCount ? doc.pageCount : 0;
</script>

<template lang="pug">
	//-header.px-12.pt-8
		//- eyebrow
		.mb-6.flex.justify-between
			//- Eyebrow({doc})

			//- PageNumber(
			//- 	page!="{ page }",
			//- 	pageCount!="{ pageCount }")
		slot
</template>
