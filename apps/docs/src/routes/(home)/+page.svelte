<!--
Gallery showing all available documents
-->
<script lang="ts">
	// Imports from lj-svelte-ui
	import { capitalize, DocumentSummary } from "lj-svelte-ui";

	// stores
	import { documents } from "$stores/documentTracking";

	// get unique categories from $documents
	$: categories = [...new Set($documents.map((doc) => doc.category))];
</script>

<template lang="pug">
	svelte:head
		title Zenith Document Center
	.px-8.py-8
		h1.mb-4.font-semibold Zenith Document Center
		+each('categories as category')
			+const('docs = $documents.filter((doc) => doc.category === category)')
			.py-8
				h2.mb-4.font-bold {  capitalize(category)  }
				+each('docs as doc')
					DocumentSummary(
						docNumber!="{ doc.documentNumber }",
						documents!="{ $documents }",
						outerClasses!="mb-4")
</template>
