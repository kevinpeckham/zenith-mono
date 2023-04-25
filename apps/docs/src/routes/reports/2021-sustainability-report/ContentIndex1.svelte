<script lang="ts">
	// components
	import ContentPageFooter from "$molecules/ContentPageFooter.svelte";
	import Header from "$molecules/Header.svelte";
	import Main from "$atoms/Main.svelte";
	import TopicHeading from "$atoms/TopicHeading.svelte";
	import { PageLayout } from "lj-svelte-ui";

	// store
	import { colors } from "lj-svelte-ui";
	import { contentIndex2021 } from "$stores/contentIndex2021";

	// props
	export let doc: Document;
	export let edition = "";
	export let page = 0;

	// set page context
	import { setContext } from "svelte";
	setContext("page", page);

	const tableData = [
		// ["", "Units", "2019", "2020", "2021"],
		//-[...$contentIndex2021.headings],
		[
			$contentIndex2021.data[0].topic,
			$contentIndex2021.data[0].metric,
			"CO2e (t)",
			"26,028",
			"33,123",
			"31,348",
		],
	];
	const topic_width = 48;
	const w_0 = "42px"; // topic
	const w_1 = "1fr"; // metric
	const w_2 = "90px"; // unit
	const w_3 = "66px"; // 2019
	const w_4 = "66px"; // 2020
	const w_5 = "66px"; // 2021
	const w_6 = "80px"; // sasb code
	const w_7 = "86px";
	const w_8 = "60px";
	const body_template_columns = `${w_1} ${w_2} ${w_3} ${w_4} ${w_5} ${w_6} ${w_7} ${w_8}`;
	const header_template_columns = `${w_0} ${body_template_columns}`;


	// content massaging
	function cellCleanup(metric: string) {
		const replaced =
			// make lower case
			metric
			.replace("ghg","GHG")
			.replace("co2 ", `CO<sub>2</sub> `)
			.replace("co2-e", "CO2-e")
			.replace("[1]","<span class='inline-block opacity-80' style='font-size:8px;'>[1]</span>")
			.replace("[2]","<span class='inline-block opacity-80' style='font-size:8px;'>[2]</span>")
			//.replace("Percentage", "percentage")
			.replace("percentage (%)","percentage<br>(%)")
			// .replace("Metric", "metric")
			// .replace("Operational", "operational")
			.replace("--", "-")
			// .replace(" (%)","<span class='inline-block ml-[2px]'>(%)<span>")
			// .replace(" (t)","<span class='inline-block ml-[2px]'>(t)<span>")
			// .replace("Emissions", "emissions")
			// .replace("- Total", "total")
			// .replace("Methane", "methane")
			// .replace("of Scope 1","of scope 1")
			// .replace("of Scope 1","of scope 1")
		return replaced
	}
</script>

<template lang="pug">
	PageLayout(classes!="font-sans !p-0 text-richBlack text-15 ")
		//- Header
		Header(
			{doc},
			{page})

		//- Main
		Main
			.text-18.text-richBlack.mb-6.font-semibold.leading-tight ESG Content Index
			//-table
			figure.order-1.grid.w-full.w-full.grid-cols-1.place-content-start.place-items-start.gap-4.rounded-md.px-0.py-2.font-normal.leading-normal
				.text-13.mb-4.w-full
					.border-richBlack.w-full.border-collapse.overflow-hidden.rounded-sm
						//- header row
						.w-full.grid.text-9(
							style!="grid-template-columns:{ header_template_columns }")
							+each('$contentIndex2021.headings as cell, i')
								.flex.items-center.justify-center.bg-yellowGreen.uppercase.border.font-normal.text-white.leading-tight.overflow-hidden.font-mono(
									class!="py-[6px] {(i == 0 | i == 1) ? 'text-left pl-2' : 'text-center px-0'}")
									span {  cell  }

						//- table
						.w-full.font-mono.text-9.flex
							//- first cell
							.bg-antiFlash.border.text-richBlack.overflow-x-hidden.shrink-0(
								class!=""
								style!="width:{w_0}!important;"
								)
								.leading-none.whitespace-nowrap.rotate-90.origin-center.pl-8.text-11 {  $contentIndex2021.data[0].topic  }

							//- other cells
							.grid.text-richBlack.bg-antiFlash.place-content-center.place-items-center(style!="grid-template-columns:{body_template_columns};")
								+each('$contentIndex2021.data as row, index')
									+if(`row.topic == "" && index <= 11`)
										+const('metric = cellCleanup(row.metric)')
										+const('units = cellCleanup(row.units)')
										//- +const("c2019 = cellCleanup(row['2019'])")
										.text-cell {@html metric }
										.cell {@html units }
										.cell {  row["2019"]  }
										.cell {  row["2020"]  }
										.cell {  row["2021"]  }
										.cell {  row["sasb_code"]  }
										.cell {  row["gri_code"]  }
										.cell {  row["eic"]  }


						//-+each('tableData as row, rowIndex')
							tr
								+each('row as cell, cellIndex')
									+if('rowIndex == 0')
										//- header row
										td.bg-yellowGreen.text-14.border.px-2.font-medium.text-white(class="py-[6px]") {  cell  }
										+else
											td.bg-antiFlash.text-richBlack.border.px-2.py-2 {  cell  }
		ContentPageFooter
</template>

<style>
	.text-cell {
		@apply w-full h-full bg-antiFlash border text-richBlack px-2 py-2;
	}
	.cell {
		@apply w-full h-full flex items-center justify-center bg-antiFlash border px-1 text-richBlack text-center py-2 overflow-hidden;
	}


</style>
