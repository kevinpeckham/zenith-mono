<!--
@component
Here's some documentation for this component.
-->

<script lang="ts">
	// settings

	const docNumber = 0; // unique document number
	let pageCount = 0; // number of pages in document

	// svelte functions
	import { writable, derived } from "svelte/store";
	import { onMount } from "svelte";

	//  components
	import Page1 from "./Page1.svelte";
	import Page2 from "./Page2.svelte";
	import Page3 from "./Page3.svelte";
	import Page4 from "./Page4.svelte";
	import Page5 from "./Page5.svelte";
	import Page6 from "./Page6.svelte";
	import Page7 from "./Page7.svelte";
	import Page8 from "./Page8.svelte";
	import Page9 from "./Page9.svelte";
	import Page10 from "./Page10.svelte";
	import Page11 from "./Page11.svelte";
	import Page12 from "./Page12.svelte";
	import Page13 from "./Page13.svelte";

	// global stores
	import { documents } from "$stores/documentTracking";

	// props
	export let data: PageData; // data coming in from page.ts LoadEvent

	// types
	import type { PageData } from "./$types";
	import { dummyDocument } from "lj-svelte-ui";
	import HamburgerButton from "lj-svelte-ui/src/lib/components/nav/HamburgerButton.svelte";

	// edition -- this value comes from the URL request e.g. '?edition=att'
	$: edition = data.edition ? data.edition : "";

	// document -- find settings for this document in the master store
	// short-circuit eval for type safety
	$: doc =
		$documents.find((doc) => doc.documentNumber === docNumber) ||
		dummyDocument;

	// page refs
	let pages: HTMLDivElement[];
	let page1: HTMLDivElement;
	let page2: HTMLDivElement;
	let page3: HTMLDivElement;
	let page4: HTMLDivElement;
	let page5: HTMLDivElement;
	let page6: HTMLDivElement;
	let page7: HTMLDivElement;
	let page8: HTMLDivElement;
	let page9: HTMLDivElement;
	let page10: HTMLDivElement;
	let page11: HTMLDivElement;
	let page12: HTMLDivElement;
	let page13: HTMLDivElement;

	$: {
		//- collect pages into array
		pages = [
			page1,
			page2,
			page3,
			page4,
			page5,
			page6,
			page7,
			page8,
			page9,
			page10,
			page11,
			page12,
			page13,
		];
		//- update page count
		pageCount = pages.length;
		doc.pageCount = pageCount;
	}
</script>

<template lang="pug">
	//- cover
	#page-1(
		bind:this!="{ page1 }",
		data-description="cover page",
		data-page="1")
		Page1(
			page!="{ 1 }",
			{doc},
			{edition})

	//- toc
	#page-2(
		bind:this!="{ page2 }",
		data-description="table of contents",
		data-page="2")
		Page2(
			page!="{ 2 }",
			{doc},
			{edition})

	//- chapter 1, article 1
	#page-3(
		bind:this!="{ page3 }",
		data-description="chapter 1, article 1",
		data-page="3")
		Page3(
			page!="{ 3 }",
			{doc},
			{edition})

	//- chapter 1, article 2
	#page-4(
		bind:this!="{ page4 }",
		data-description="chapter 1, article 2",
		data-page="4")
		Page4(
			page!="{ 4 }",
			{doc},
			{edition})

	//- chapter 1, article 2
	#page-5(
		bind:this!="{ page5 }",
		data-description="chapter 2, article 1",
		data-page="5")
		Page5(
			page!="{ 5 }",
			{doc},
			{edition})

	#page-6(
		bind:this!="{ page6 }",
		data-description="chapter 3, article 1",
		data-page="6")
		Page6(
			page!="{ 6 }",
			{doc},
			{edition})

	#page-7(
		bind:this!="{ page7 }",
		data-description="chapter 3, article 2: 'Awards & Recognition'",
		data-page="7")
		Page7(
			page!="{ 7 }",
			{doc},
			{edition})

	#page-8(
		bind:this!="{ page8 }",
		data-description="chapter 3, article 3: 'About this Report'",
		data-page="8")
		Page8(
			page!="{ 8 }",
			{doc},
			{edition})

	#page-9(
		bind:this!="{ page9 }",
		data-description="chapter 4, article 1: 'Clean Energy Future'",
		data-page="9")
		Page9(
			page!="{ 9 }",
			{doc},
			{edition})

	#page-10(
		bind:this!="{ page10 }",
		data-description="chapter 4, article 1, topic 2: 'Case Study'",
		data-page="10")
		Page10(
			page!="{ 10 }",
			{doc},
			{edition})

	#page-11(
		bind:this!="{ page11 }",
		data-description="chapter 4, article 2: 'Climate Change'",
		data-page="11")
		Page11(
			page!="{ 11 }",
			{doc},
			{edition})

	#page-12(
		bind:this!="{ page12 }",
		data-description="chapter 4, article 2, topic 2: 'Greenhouse Gas Emissions'",
		data-page="12")
		Page12(
			page!="{ 12 }",
			{doc},
			{edition})

	#page-13(
		bind:this!="{ page13 }",
		data-description="chapter 4, article 3, topic 3: 'Emission Reduction Goals'",
		data-page="13")
		Page13(
			page!="{ 13 }",
			{doc},
			{edition})
</template>
