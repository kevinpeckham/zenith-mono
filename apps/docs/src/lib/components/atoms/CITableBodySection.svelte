<script lang="ts">
	// components
	import { contentIndex2021 } from "$stores/contentIndex2021";

	// props
	export let first_cell_value = "";
	export let first_col_width = "";
	export let grid_template = "";
	export let from = 0;
	export let to = 0;
	export let classes = "";

	// content massaging
	function cellCleanup(metric: string) {
		const replaced = metric
			.replace("CO2 ", `CO<sub>2</sub> `)
			.replace("percentage (%)", "percentage<br>(%)")
			.replace(
				"[1]",
				"<span class='inline-block opacity-80' style='font-size:8px;'>[1]</span>",
			)
			.replace(
				"[2]",
				"<span class='inline-block opacity-80' style='font-size:8px;'>[2]</span>",
			);

		return replaced;
	}

	function isLessThan(num: number, target: number) {
		return num < target;
	}
	function isGreaterThan(num: number, target: number) {
		return num > target;
	}
</script>

<template lang="pug">

	//- table body
	.w-full.flex(class!="{classes}")
		//- first cell
		.border.text-richBlack.overflow-x-hidden.shrink-0.border-t(
			class!="bg-slate-100 border-t-richBlack/40"
			style!="width:{first_col_width}!important;"
			)
			.leading-none.whitespace-nowrap.rotate-90.origin-center.pl-8.text-11.font-semibold {  first_cell_value  }

		//- other cells
		.h-full.grid.text-richBlack.bg-antiFlash.place-content-center.place-items-center.border-t(
			class="border-t-richBlack/40"
			style!="grid-template-columns:{grid_template};"
			)
			+each('$contentIndex2021.data as row, index')
				+if(`isGreaterThan(index, from - 1) && isLessThan(index, to + 1)`)
					+const('metric = cellCleanup(row.metric)')
					+const('units = cellCleanup(row.units)')
					+const('twenty19 = row["2019"]')
					+const('twenty20 = row["2020"]')
					+const('twenty21 = row["2021"]')
					+const('sasb_code = row["sasb_code"]')
					+const('gri_code = row["gri_code"]')
					+const('eic = row["eic"]')
					.text-cell {@html metric }
					.cell {@html units }
					.cell {@html twenty19 }
					.cell {@html twenty20 }
					.cell {@html twenty21 }
					.cell {@html sasb_code }
					.cell {@html gri_code }
					.cell {@html eic }

</template>

<style>
	.header-cell {
		@apply flex items-center justify-center bg-yellowGreen uppercase border-[.5px] font-normal text-white leading-tight overflow-hidden;
	}
	.text-cell {
		@apply w-full h-full bg-antiFlash border border-[.5px] text-richBlack px-2 py-2;
	}
	.cell {
		@apply w-full h-full flex items-center justify-center bg-antiFlash border border-[.5px] px-1 text-richBlack text-center py-2 overflow-hidden;
	}
</style>
