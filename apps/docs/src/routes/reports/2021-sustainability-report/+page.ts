import type { PageLoadEvent } from "./$types.js";

export function load(e: PageLoadEvent) {
	const url = e.url;
	return {
		edition: url.searchParams.get("edition"),
	};
}
