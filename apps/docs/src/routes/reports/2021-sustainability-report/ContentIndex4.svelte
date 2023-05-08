<script lang="ts">
	// components
	import ContentPageFooter from "$molecules/ContentPageFooter.svelte";
	import Main from "$atoms/Main.svelte";
	import { PageLayout } from "lj-svelte-ui";
	import CITableBodySection from "$atoms/CITableBodySection.svelte";
	import CITableHeader from "$atoms/CITableHeader.svelte";

	// store
	import { contentIndex2021 } from "$stores/contentIndex2021";

	// props
	export let doc: Document;
	export let edition = "";
	export let page = 0;

	// set page context
	import { setContext } from "svelte";
	setContext("page", page);

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
</script>

<template lang="pug">
	PageLayout(classes!="font-sans !p-0 text-richBlack text-15 ")
		Main
			.text-14.text-richBlack.mb-2.font-medium.leading-tight Zenith Energy - ESG Content Index

			//-table
			.mb-6.font-sans.rounded-md.leading-snug(class="text-[10.25px]")
				.w-full.border-richBlack.w-full.border-collapse.overflow-hidden.rounded-sm
					//- table header
					CITableHeader(grid_template!="{ header_template_columns }")

					//- table body section - GHG Emissions
					CITableBodySection(
						classes!="bg-[#F8F9FA]",
						first_cell_value!="<div class='tracking-tight translate-x-[-8px] !text-10'>Employee Recruitment</div><div class='tracking-tight translate-x-[-8px] !text-10'>Inclusion & Performance</div>",
						first_col_width!="{ w_0 }",
						from!="{ 48 }",
						grid_template!="{ body_template_columns }",
						hide_top_border!="{ true }",
						to!="{ 50 }")
					CITableBodySection(
						classes!="bg-antiFlash min-h-[106px]",
						first_cell_value!="{ $contentIndex2021.data[51].topic }",
						first_col_width!="{ w_0 }",
						from!="{ 51 }",
						grid_template!="{ body_template_columns }",
						to!="{ 55 }")

			//- notes
			.text-11
				div.mb-2.font-semibold notes:
				.grid.grid-cols-2.gap-x-2.gap-y-4(style="grid-template-columns: 16px 1fr;")
					+each('$contentIndex2021.notes as note, index')
						+if('!Number(note[0])')
							div.text-10 ({@html note[0]})
							+else
								div.text-10 [{@html note[0]}]
						div {@html note[1]}

		ContentPageFooter(
			showLogo!="{ false }",
			svgFillClass="fill-transparent")
</template>
