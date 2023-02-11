export class Link {
	label: string;
	title?: string;
	url: string;
	constructor(url: string, label: string, title?: string) {
		this.url = url;
		this.label = label ? label : "Learn More";
		this.title = title ? title : `Go to ${this.label}`;
	}
}

export const exampleLink = new Link(
	"https://www.google.com",
	"Google",
	"Go to Google",
);
