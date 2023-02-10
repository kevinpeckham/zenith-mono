<!--
Gallery showing all available documents
-->
<script lang="ts">
	// Components
	import DocumentSummary from "$atoms/DocumentSummary.svelte";

	// stores
	import { documents } from "$stores/documentTracking.js";

	// functions
	import { capitalize } from "$utils/helpers.js";

	// get unique categories from $documents
	$: categories = [...new Set($documents.map((doc) => doc.category))];
</script>

<template lang="pug">
	svelte:head
		title SecureLogix Document Center
	.px-8.py-8
		h1.mb-4.font-semibold SecureLogix Document Center
 d
		+each('categories as category')
			+const('docs = $documents.filter((doc) => doc.category === category)')
			.py-8
				h2.mb-4.font-bold {  capitalize(category)  }
				+each('docs as doc')
					DocumentSummary(
						docNumber!="{ doc.documentNumber }",
						outerClasses!="mb-4"
					)
</template>
