<script lang="ts">
	// components
	import IconChevronDown from "./../icons/IconChevronDown.svelte";
	//- import types
	import type { NavDataItem } from "./../../types/navTypes";

	//- props
	export let navItem: NavDataItem;
	export let classes: string = "";

	let hasFlyout = false;

	$: {
		if (navItem && navItem.items && navItem.items.length > 0)
			hasFlyout = true;
		else hasFlyout = false;
	}

	//- variables

	let href: string = "";
	$: {
		if (navItem.relativePath) {
			href = navItem.relativePath;
		} else if (navItem.externalUrl) {
			href = navItem.externalUrl;
		} else {
			href = "";
		}
	}
</script>

<template lang="pug">
	.relative.flex.overflow-visible(class="group/item")
		// has a link
		+if('href')
			a.nav-menu-item(
				class!="{ classes } group-hover/item:bg-spanishRed group-hover/item:text-white group-hover/item:opacity-100",
				data-sveltekit-reload="true",
				href!="{ href }") {  navItem.label  }

			// doesn't have a link
			+else
				.nav-menu-item(
					class!="group-hover/item:bg-spanishRed { classes } group-hover/item:text-white group-hover/item:opacity-100 ") {  navItem.label  }

		+if('navItem.hover')
			.nav-item-callout(
				class="group-hover/item:pointer-events-auto group-hover/item:opacity-100") {  @html navItem.hover  }
				+if('href')
					div
						a(class="hover:text-spanishRed hover:bg-white", href!="{ href }") Learn More
</template>
