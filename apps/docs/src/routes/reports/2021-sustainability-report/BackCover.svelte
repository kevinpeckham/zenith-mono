<script lang="ts">
	// components
	import Main from "$atoms/Main.svelte";
	import { PageLayout } from "lj-svelte-ui";
	import LogoZenith from "zenith-ui/src/lib/components/atoms/LogoZenith.svelte";

	// props
	export let doc: Document;
	export let edition = "";
	export let page = 0;

	// set page context
	import { setContext } from "svelte";
	setContext("page", page);

	const address = [
		"Zenith Energy U.S.",
		"1 Highland Avenue",
		"Metuchen, NJ 08840",
		"https://zenithterminals.com",
	];
</script>

<template lang="pug">
	PageLayout(classes!="font-sans !p-0 text-white text-13 ")
		//- Main
		Main
			.absolute.flex.inset-0.bg-yellowGreen
				.w-full.h-full.px-16.pt-12
					LogoZenith
					ul.mt-6
						+each('address as line, index')
							+if('index != address.length - 1')
								li.leading-relaxed(class="text-white/90") {  line  }
								+else
									li.mt-2.leading-relaxed.tracking-wide(class="text-maize")
										a.underline-offset-4(class="hover:underline", href!="{ line }") {  line  }
</template>
