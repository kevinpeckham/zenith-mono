<!--
@component
Displays header with red background and white text.
* slot: 'test' - header text
* prop: 'height' - string - height of header
* prop: 'isCobranded' - boolean - whether to display cobrand logo
* prop: 'cobrandCompany' - string - which cobrand logo to display e.g. 'verizon'
* prop: 'textColorClass' - string - class to apply text color e.g. 'text-white'
* prop: 'bgColorClass' - string - class to apply background color e.g. 'bg-red'
-->
<script lang="ts">
	// components
	//-import HeaderLogoBlock from "$molecules/HeaderLogoBlock.svelte";

	// props
	export let textColorClass: string = "text-white";
	export let bgColorClass: string = "bg-accentDark";
	export let logo: string = "securelogix";
	export let logoLockup: string = "";
	export let isCobranded: boolean = true;
	export let cobrandCompany: string = "";
	export let color: string = "";
	export let height: number = 64;
	export let style: string = "";
	export let primaryColor: string = "#fff;";
	export let accentColor: string = "#ea0026";
</script>

<template lang="pug">
header.w-full.flex.justify-between.text-white.rounded-t-sm.relative(
	class!="{bgColorClass} {textColorClass} z-20"
	style!="height:{height}px; {style}"
	)
	//-HeaderLogoBlock(
		isCobranded!="{isCobranded}"
		cobrandCompany!="{cobrandCompany}"
		color!="{(color) ? color : ''}"
		logo!="{logo}"
		logoLockup!="{logoLockup}"
		primaryColor!="{primaryColor}"
		accentColor!="{accentColor}"
		)
	// Header Text
	.flex.items-center.text-right
		slot(name="text")
</template>
