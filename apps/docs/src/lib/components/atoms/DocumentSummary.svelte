<!--
@component
Here's some documentation for this component.
-->
<script lang="ts">
	// stores
	import { documents } from "$stores/documentTracking.js";

	// types
	import type { Document } from "$types/documentTypes.js";

	// props
	export let docNumber: number = 0;
	export let outerClasses: string = "";

	// get document info from documents store
	let document: Document | undefined;
	$: document = $documents.find(
		(doc) => doc.documentNumber === docNumber,
	);
</script>

<template lang="pug">
	.grid.max-w-2xl.grid-cols-2.place-content-start.bg-neutral-100(
		class="{ outerClasses }")
		// left column
		img.block.h-auto.w-full.max-w-xs(
			alt="{document.title} thumbnail",
			decoding="async",
			height="612",
			loading="lazy",
			src="/screenshots/{document.category}-{document.slug}-thumbnail.png",
			width="816")
		// right column
		.relative.p-6
			// title
			.mb-2.font-semibold {  document.title  }

			// doc links
			ul.list-none
				+each('document.editions as edition')
					li.mb-2
						a.text-15.underline.underline-offset-4(
							href!="{ document.docLink(edition) }") {  document.linkLabel(edition)  }

			.text-13.absolute.bottom-0.left-0.pl-6.pb-4.opacity-80 {  document.status  } | latest: {  document.currentVersionNumber  } - {  document.monthShort()  } {  document.yearShort()  } | {  document.daysUntilToday()  } days ago
</template>
