<script lang="ts">
	// components
	import IconChevronDown from "./../icons/IconChevronDown.svelte";
	import NavMenuItem from "./../nav/NavMenuItem.svelte";
	import NavMenuDivider from "./../nav/NavMenuDivider.svelte";
	import NavFlyoutMenu from "./../nav/NavFlyoutMenu.svelte";

	// types
	import type { NavDataItem } from "./../../types/navTypes.js";

	// props
	export let buttonClasses: string = "";
	export let menuClasses: string = "";
	export let navItem: NavDataItem = {
		externalUrl: "",
		items: [],
		label: "",
		relativePath: "",
		type: "",
	};

	// variables
	$: label = navItem.label;
	$: items = navItem.items;
</script>

<template lang="pug">
	.group.relative.ml-10
		//- nav menu button
		button.inline-flex.items-center.rounded-md.opacity-90.transition-opacity(
			aria-expanded="false",
			class="{buttonClasses} text-white decoration-white/60 underline-offset-4 !outline-none focus:underline group-focus-within:text-opacity-100 group-hover:opacity-100",
			type="button") {  navItem.label  }

		//- nav menu
		.nav-menu.pointer-events-none.absolute.z-10.-ml-4.pt-2.opacity-0.transition-opacity(
			class="{menuClasses} min-w-[14rem] group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:opacity-100 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2")
			.relative.grid.grid-cols-1.gap-1.rounded-lg.bg-white.px-2.py-2.shadow-lg.ring-1.ring-black.ring-opacity-5(
				class="sm:gap-0 sm:px-0 sm:pt-2 sm:pb-4 lg:gap-1")
				+each('navItem.items as navItem')
					+if('navItem.type == "divider"')
						NavMenuDivider
						+elseif('navItem.type == "flyout"')
							NavFlyoutMenu(
								buttonClasses="nav-menu-item",
								{navItem})
						+elseif('navItem.type == "heading"')
							NavMenuItem(
								classes="nav-menu-item-heading",
								{navItem})
						+else
							NavMenuItem(
								classes="",
								{navItem})
</template>
