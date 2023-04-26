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
	import Page1b from "./Page1b.svelte";
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
	import Page14 from "./Page14.svelte";
	import Page15 from "./Page15.svelte";
	import Page16 from "./Page16.svelte";
	import Page17 from "./Page17.svelte";
	import Page18 from "./Page18.svelte";
	import Page19 from "./Page19.svelte";
	import Page20 from "./Page20.svelte";
	import Page21 from "./Page21.svelte";
	import Page22 from "./Page22.svelte";
	import Page23 from "./Page23.svelte";
	import Page24 from "./Page24.svelte";
	import Page25 from "./Page25.svelte";
	import Page26 from "./Page26.svelte";
	import Page27 from "./Page27.svelte";
	import Page28 from "./Page28.svelte";
	import Appendix1 from "./Appendix1.svelte";
	import Appendix2 from "./Appendix2.svelte";
	import ContentIndex1 from "./ContentIndex1.svelte";
	import ContentIndex2 from "./ContentIndex2.svelte";
	import ContentIndex3 from "./ContentIndex3.svelte";
	import ContentIndex4 from "./ContentIndex4.svelte";
	import BackCover from "./BackCover.svelte";

	// global stores
	import { documents } from "$stores/documentTracking";

	// props
	export let data: PageData; // data coming in from page.ts LoadEvent

	// types
	import type { PageData } from "./$types";
	import { dummyDocument } from "lj-svelte-ui";
	import HamburgerButton from "lj-svelte-ui/src/lib/components/nav/HamburgerButton.svelte";
	import Header from "$molecules/Header.svelte";

	// edition -- this value comes from the URL request e.g. '?edition=att'
	$: edition = data.edition ? data.edition : "";

	// document -- find settings for this document in the master store
	// short-circuit eval for type safety
	$: doc =
		$documents.find((doc) => doc.documentNumber === docNumber) || dummyDocument;

	// page refs
	let pages: HTMLDivElement[];
	let page1: HTMLDivElement;
	let page1b: HTMLDivElement;
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
	let page14: HTMLDivElement;
	let page15: HTMLDivElement;
	let page16: HTMLDivElement;
	let page17: HTMLDivElement;
	let page18: HTMLDivElement;
	let page19: HTMLDivElement;
	let page20: HTMLDivElement;
	let page21: HTMLDivElement;
	let page22: HTMLDivElement;
	let page23: HTMLDivElement;
	let page24: HTMLDivElement;
	let page25: HTMLDivElement;
	let page26: HTMLDivElement;
	let page27: HTMLDivElement;
	let page28: HTMLDivElement;
	let page29: HTMLDivElement;
	let page30: HTMLDivElement;
	let page31: HTMLDivElement;
	let page32: HTMLDivElement;
	let page33: HTMLDivElement;
	let page34: HTMLDivElement;
	let page35: HTMLDivElement;

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
			page14,
			page15,
			page16,
			page17,
			page18,
			page19,
			page20,
			page21,
			page22,
			page23,
			page24,
			page25,
			page26,
			page27,
			page28,
			page29,
			page30,
			page31,
			page32,
			page33,
			page34,
			page35,
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

	#page-1b(
		data-description="cover page alt",
		data-page="1b")
		Page1b(
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

	#page-3(
		bind:this!="{ page3 }",
		data-page="3")
		Page3(
			page!="{ 3 }",
			{doc},
			{edition})

	#page-4(
		bind:this!="{ page4 }",
		data-page="4")
		Page4(
			page!="{ 4 }",
			{doc},
			{edition})

	//- chapter 1, article 2
	#page-5(
		bind:this!="{ page5 }",
		data-page="5")
		Page5(
			page!="{ 5 }",
			{doc},
			{edition})

	#page-6(
		bind:this!="{ page6 }",
		data-page="6")
		Page6(
			page!="{ 6 }",
			{doc},
			{edition})

	#page-7(
		bind:this!="{ page7 }",
		data-page="7")
		Page7(
			page!="{ 7 }",
			{doc},
			{edition})

	#page-8(
		bind:this!="{ page8 }",
		data-page="8")
		Page8(
			page!="{ 8 }",
			{doc},
			{edition})

	#page-9(
		bind:this!="{ page9 }",
		data-page="9")
		Page9(
			page!="{ 9 }",
			{doc},
			{edition})

	#page-10(
		bind:this!="{ page10 }",
		data-page="10")
		Page10(
			page!="{ 10 }",
			{doc},
			{edition})

	#page-11(
		bind:this!="{ page11 }",
		data-page="11")
		Page11(
			page!="{ 11 }",
			{doc},
			{edition})

	#page-12(
		bind:this!="{ page12 }",
		data-page="12")
		Page12(
			page!="{ 12 }",
			{doc},
			{edition})

	#page-13(
		bind:this!="{ page13 }",
		data-page="13")
		Page13(
			page!="{ 13 }",
			{doc},
			{edition})

	#page-14(
		bind:this!="{ page14 }",
		data-page="14")
		Page14(
			page!="{ 14 }",
			{doc},
			{edition})

	#page-15(
		bind:this!="{ page15 }",
		data-page="15")
		Page15(
			page!="{ 15 }",
			{doc},
			{edition})

	#page-16(
		bind:this!="{ page16 }",
		data-page="16")
		Page16(
			page!="{ 16 }",
			{doc},
			{edition})

	#page-17(
		bind:this!="{ page17 }",
		data-page="17")
		Page17(
			page!="{ 17 }",
			{doc},
			{edition})

	#page-18(
		bind:this!="{ page18 }",
		data-page="18")
		Page18(
			page!="{ 18 }",
			{doc},
			{edition})

	#page-19(
		bind:this!="{ page19 }",
		data-page="19")
		Page19(
			page!="{ 19 }",
			{doc},
			{edition})

	#page-20(
		bind:this!="{ page20 }",
		data-page="20")
		Page20(
			page!="{ 20 }",
			{doc},
			{edition})

	#page-21(
		bind:this!="{ page21 }",
		data-page="21")
		Page21(
			page!="{ 21 }",
			{doc},
			{edition})

	#page-22(
		bind:this!="{ page22 }",
		data-page="22")
		Page22(
			page!="{ 22 }",
			{doc},
			{edition})

	#page-23(
		bind:this!="{ page23 }",
		data-page="23")
		Page23(
			page!="{ 23 }",
			{doc},
			{edition})

	#page-24(
		bind:this!="{ page24 }",
		data-page="24")
		Page24(
			page!="{ 24 }",
			{doc},
			{edition})

	#page-25(
		bind:this!="{ page25 }",
		data-page="25")
		Page25(
			page!="{ 25 }",
			{doc},
			{edition})

	#page-26(
		bind:this!="{ page26 }",
		data-page="26")
		Page26(
			page!="{ 26 }",
			{doc},
			{edition})

	#page-27(
		bind:this!="{ page27 }",
		data-page="27")
		Page27(
			page!="{ 27 }",
			{doc},
			{edition})

	#page-28(
		bind:this!="{ page28 }",
		data-page="28")
		Page28(
			page!="{ 28 }",
			{doc},
			{edition})

	#page-29(
		bind:this!="{ page29 }",
		data-page="29")
		Appendix1(
			page!="{ 29 }",
			{doc},
			{edition})

	#page-30(
		bind:this!="{ page30 }",
		data-page="30")
		Appendix2(
			page!="{ 30 }",
			{doc},
			{edition})

	#page-31(
		bind:this!="{ page31 }",
		data-page="31")
		ContentIndex1(
			page!="{ 31 }",
			{doc},
			{edition})

	#page-32(
		bind:this!="{ page32 }",
		data-page="32")
		ContentIndex2(
			page!="{ 32 }",
			{doc},
			{edition})

	#page-33(
		bind:this!="{ page33 }",
		data-page="33")
		ContentIndex3(
			page!="{ 33 }",
			{doc},
			{edition})

	#page-34(
		bind:this!="{ page34 }",
		data-page="34")
		ContentIndex4(
			page!="{ 34 }",
			{doc},
			{edition})

	//- back cover
	#page-35(
		bind:this!="{ page35 }",
		data-page="35")
		BackCover(
			page!="{ 35 }",
			{doc},
			{edition})
</template>
