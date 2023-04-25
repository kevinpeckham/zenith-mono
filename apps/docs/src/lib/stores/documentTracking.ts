import { readable, writable, derived } from "svelte/store";
// Notes
// single source of truth for document versioning

// types
import { type DocumentSettings, Document } from "lj-svelte-ui";
type DocumentLibrary = Document[];

export const documentData: DocumentSettings[] = [
	{
		title: "2021 Sustainability Report",
		slug: "2021-sustainability-report",
		category: "reports",
		createdDate: "2/01/2023",
		currentVersionNumber: "v0.0.2",
		currentVersionDate: "4/24/2023",
		documentNumber: 0,
		editions: ["general"],
		longTitle: "Zenith Energy U.S. - 2021 Sustainability Report",
		pageCount: 0,
		status: "draft",
	},
];

export const documentSettings = writable(documentData);

export const documents = derived(documentSettings, ($documentSettings) => {
	const library: DocumentLibrary = [];
	// iterate through each document, add derived properties
	$documentSettings.forEach((ds: DocumentSettings) => {
		// use constructor from Document Class to do the work
		const document = new Document(ds);
		library.push(document);
	});
	return library;
});
