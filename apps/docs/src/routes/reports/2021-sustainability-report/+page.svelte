<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	// settings
	const docNumber = 0; // unique document number
	const pageCount = 2; // number of pages in document

	// svelte functions
	import { writable, derived } from "svelte/store";

	//  components
	import Page1 from "./Page1.svelte";
	//-import Page2 from "./Page2.svelte";

	// global stores
	import { documents } from "$stores/documentTracking";

	// props
	export let data: PageData; // data coming in from page.ts LoadEvent

	// types
	import type { PageData } from "./$types";
	import { dummyDocument } from "lj-svelte-ui";

	// edition -- this value comes from the URL request e.g. '?edition=att'
	$: edition = data.edition ? data.edition : "";

	// document -- find settings for this document in the master store
	// short-circuit eval for type safety
	$: document =
		$documents.find((doc) => doc.documentNumber === docNumber) ||
		dummyDocument;
</script>

<template lang="pug">
	Page1(
		page!="{ 1 }",
		{document},
		{edition},
		{pageCount})
	//-Page2(
		page!="{ 2 }",
		{document},
		{edition},
		{pageCount})
</template>
