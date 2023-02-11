// note: naming feels weird, going with it for now
// classes may be an even weirder choice...

// imported functions
import {
	getMonthNameFromDate,
	getDaysUntilToday,
	getTwoDigitYear,
} from "../utils/timeUtils";
import { capitalize, slugify } from "../utils/stringUtils";

// local functions
function docLink(category: string, slug: string, edition: string) {
	return category &&
		slug &&
		edition &&
		edition.toLowerCase() != "general"
		? `/${category}/${slug}?edition=${edition}`
		: `/${category}/${slug}`;
}
function docLinkLabel(edition: string) {
	if (edition.toLowerCase() == "att") {
		return "AT&T";
	} else if (
		edition.toLowerCase() == "" ||
		edition.toLowerCase() == "general"
	) {
		return "General";
	} else {
		return capitalize(edition);
	}
}

export class DocumentSettings {
	[key: string]:
		| string
		| number
		| string[]
		| ((edition: string) => string)
		| (() => string)
		| (() => number);
	title: string;
	slug: string;
	category: string;
	createdDate: string;
	currentVersionNumber: string;
	currentVersionDate: string;
	documentNumber: number;
	editions: string[];
	status: string;
	constructor() {
		this.title = "";
		this.slug = "";
		this.category = "";
		this.createdDate = "";
		this.currentVersionNumber = "";
		this.currentVersionDate = "";
		this.documentNumber = 0;
		this.editions = [];
		this.status = "";
	}
}

// the derived store should not have optional properties
export class Document extends DocumentSettings {
	[key: string]:
		| string
		| number
		| string[]
		| ((edition: string) => string)
		| (() => string)
		| (() => number);
	docLink: (edition: string) => string;
	linkLabel: (edition: string) => string;
	monthShort: () => string;
	daysUntilToday: () => number;
	yearShort: () => string;
	constructor(ds: DocumentSettings) {
		let category: string = ds.category;
		// standardize category names to plural
		category =
			ds.category == "battlecard" ? ds.category + "s" : category;
		category =
			ds.category == "brochure" ? ds.category + "s" : category;
		category = ds.category == "flyer" ? ds.category + "s" : category;
		super();
		this.title = ds.title;
		this.slug = ds.slug;
		this.category = category;
		this.createdDate = ds.createdDate;
		this.currentVersionNumber = ds.currentVersionNumber;
		this.currentVersionDate = ds.currentVersionDate;
		this.documentNumber = ds.documentNumber;
		this.editions = ds.editions;
		this.status = ds.status;
		this.docLink = (edition: string) =>
			docLink(slugify(this.category), this.slug, edition);
		this.linkLabel = (edition: string) => docLinkLabel(edition);
		this.monthShort = () =>
			getMonthNameFromDate(new Date(this.currentVersionDate));
		this.daysUntilToday = () =>
			getDaysUntilToday(new Date(this.currentVersionDate));
		this.yearShort = () =>
			getTwoDigitYear(new Date(this.currentVersionDate));
	}
}

// dummy document for testing and type safety fallback
const ds = new DocumentSettings();
export const dummyDocument = new Document(ds);
