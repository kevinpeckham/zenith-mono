<script lang="ts">
	// components
	// import { NavButton, NavMenuItem, NavPullDownMenu } from "ui";
	import NavButton from "./../nav/NavButton.svelte";
	import NavMenuItem from "./../nav/NavMenuItem.svelte";
	import NavPullDownMenu from "./../nav/NavPullDownMenu.svelte";

	import type { NavDataItem } from "./../../types/navTypes.js";

	// props
	export let navContent: NavDataItem[] = [];
	export let mainNav: HTMLElement;
</script>

<template lang="pug">
	nav#mainNav.hidden(
		bind:this!="{ mainNav }",
		class="text-16 xl:text-17 2xl:text-18 3xl:text-20 min-h-[3.75rem] items-center whitespace-nowrap lg:flex lg:pt-[.35rem] xl:min-h-[3.5rem]")
		+each('navContent as navItem')
			// if menu
			+if('navItem.type.toLowerCase() == "menu"')
				NavPullDownMenu({navItem})
				// else if item
				+elseif('navItem.type != "button"')
					NavMenuItem(
						classes!="main-nav-link",
						{navItem})
				// else if button
				+elseif('navItem.type == "button"')
					NavButton({navItem})
</template>
