import { readable } from "svelte/store";

// hierarchy of the report
// 0 - chapters
// 1 - articles
// 2 - topics

type Paragraph = string;
type Quote = string;
type Bullets = string[];

interface Infographic {
	title: string;
	number: number;
	unit: string;
	description: string;
}

interface Topic {
	title: string;
	content: (Paragraph | Quote | Bullets | Infographic)[];
}

interface Article {
	title: string;
	id: string;
	content: (Paragraph | Topic | Quote | Bullets | Infographic)[];
}

interface Chapter {
	title: string;
	articles: Article[];
}

//- content: 1. Message from the CEO
const CEOLetter: Article = {
	title: "CEO Letter",
	id: "ceo-letter",
	content: [
		"Welcome to Zenith Energy’s Second Annual Sustainability Report: Storage for the New Energy Age.",
		"Sustainability is a core of Zenith Energy’s mission and values through contributing to the new energy future. In publishing our 2021 Sustainability Report we highlight our progress to date and our path forward to fulfilling our commitment to progress in our sustainability journey and positioning ourselves for the new energy future. ",
		"Reflecting on 2021 and beyond, four key concepts support our confidence in Zenith Energy’s current and long-term success in operating a sustainable business and positioning for the new energy age.",
		[],
	],
};

const CommitmentToESG: Article = {
	title: "Commitment to ESG",
	id: "commitment-to-esg",
	content: [],
};

export const MessageFromTheCEO: Chapter = {
	title: "Message from the CEO",
	articles: [CEOLetter, CommitmentToESG],
};
