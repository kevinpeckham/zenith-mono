import type { Link } from "./linkTypes";

export interface Article {
	type: string;
	title: string;
	summary: string;
	links: Link[];
	img: {
		slug: string;
		alt: string;
		height: string;
		width: string;
	};
}
