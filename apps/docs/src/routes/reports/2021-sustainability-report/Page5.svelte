<!-- Example Svelte Page / Starter Web Page-->
<script lang="ts">
	// components
	import BodyText from "$atoms/BodyText.svelte";
	import ColumnsTwo from "$atoms/ColumnsTwo.svelte";
	import Main from "$atoms/Main.svelte";
	import PageLayout from "$atoms/PageLayout.svelte";
	import SectionHeading from "$atoms/SectionHeading.svelte";
	import FactoidBubble from "$atoms/FactoidBubble.svelte";
	import Footer from "$molecules/Footer.svelte";
	import PageNumber from "$atoms/PageNumber.svelte";
	import { PictureCloudinary, russianViolet } from "slx-ui";

	// from ui package
	// regex expression find string that begins with "$uiAtoms/" and ends with ".svelte"
	// replace with "import $1 from "$uiAtoms/$1.svelte";"

	import { IconAuthentication } from "slx-ui";
	import { IconCallSecurity } from "slx-ui";
	import { IconNorthAmerica } from "slx-ui";
	import { IconOutboundCallSpoofing } from "slx-ui";
	import { IPhoneFrame } from "slx-ui";
	import { IPhoneUtilityBar } from "slx-ui";
	import { LogoAcme } from "slx-ui";
	import { LogoBrandedCallSecure } from "slx-ui";
	import { LogoSecureLogix } from "slx-ui";

	// types
	import type { Document } from "$lib/types/documentTypes.js";

	// props

	export let document: Document;

	export let edition = "";

	export let page = 0;

	export let pageCount = 0;

	// settings
	let headerHeight = 0;

	const content = {
		benefits: [
			"30% average increase in call answer rates",
			"Full protection of corporate & calling numbers reputation",
			"Unified call branding and # reputation management & security solution",
			"Broad coverage across 95% of wireless devices",
			"Full call branding display capabilities",
			"Industry-leading, carrier-integrated call spoofing protection",
			"Full security call treatment control & blocking",
			"Full reporting, analytics, & management support from industry's most experienced call security & trust specialists",
			"Secure branding integration with full SecureLogix solutions portfolio covering inbound security attacks and authentication needs",
		],
	};

	// calculated
	$: mainHeight = 1008 - headerHeight;

	const tableData = [
		["", "Before", "Month 1", "Month 2", "", ""],
		["SP", "Answer Rate", "Rate", "Increase", "Rate", "Increase"],
		["AT&T", "", "54.0", "36.8", "56.0", "41.8"],
		["T-Mobile", "", "57.7", "46.1", "58.0", "46.9"],
		["Average", "39.48", "55.9", "41.5", "57", "44.6"],
	];
</script>

<template lang="pug">
	PageLayout(
		classes="font-montserrat !p-0 bg-gradient-to-bl from-[#BB17A2] via-[#BD2986] to-[#370F66] text-white overflow-hidden"
	)
		// gradient bar
		//.bg-transparent.w-full(class="h-[14px]")

		// Header
		//.px-12.pt-8
			.border-b.pb-4.flex.justify-between.items-center(class="border-white/60")
				.uppercase.text-white.tracking-wider(class="text-[26px] leading-none") Spoofing Protection
				.italic.text-white.tracking-widest Solution

		// background full bleed image
		.absolute.w-full.h-auto(
			class="translate-y-[0px]"
		)
			img(
				alt="dot map",
				class,
				src="/images/woman-on-phone.webp"
			)

		//- table
		.absolute.top-0.left-0.z-20.w-full.text-russianViolet.font-apple.tracking-wider.text-center(class="text-[11.5px] px-[14%] pt-[42%]")
			.grid.pl-4.pr-6.pt-3.pb-6.rounded-md.rounded-t-2xl.place-content-center.text-center(class="bg-white gap-[.5px]"
			style="grid-template-columns: 72px 100px repeat(4, minmax(0, 1fr));")
				+each('tableData as row, rowIndex')

					//- if it is the first row
					+if('rowIndex == 0')
						+each('row as cell, cellIndex')
							//- if it is the first cell in the row
							+if('cellIndex == 0')
								.w-full.text-black &nbsp;

								//- if it is the second cell in the row -- "Before"
								+elseif('cellIndex == 1')
									.tracking-normal.w-full.font-normal.text-white.text-center.mb-1.text-12.italic(class="text-russianViolet") {@html cell}

								//- if it is the third cell in the row -- "Month One"
								+elseif('cellIndex == 2')
									.tracking-normal.col-span-2.w-full.font-normal.text-center.mb-1.text-12.italic.text-white(class="text-russianViolet")  {@html cell}

								//- if it is the fourth cell in the row -- "Month Two"
								+elseif('cellIndex == 3')
									.tracking-normal.col-span-2.w-full.font-normal.text-center.mb-1.text-12.italic.text-white(class="text-russianViolet")  {@html cell}



						//- if it is the second row
						+elseif('rowIndex == 1')

							+each('row as cell, cellIndex')
								//- if it is the first cell in the second row

								+if('cellIndex == 0')
									.w-full.text-black &nbsp;

									//- if it is the second cell in the second row
									//- round the top left corner
									//- no left border
									+elseif('cellIndex == 1')
										.font-apple.w-full.h-full.bg-blueViolet.grid.grid-cols-1.place-content-center.place-items-center.rounded-tl-md.rounded-tr-sm
											.font-medium.uppercase.tracking-wide.leading-snug.text-center(class="text-9 py-[5px] text-white/90") {@html cell}

									//- if it is the 3rd or 5th cell in the second row
									+elseif('cellIndex==2 || cellIndex==4')
										.font-apple.w-full.h-full(class="pl-[5px]")
											.w-full.h-full.bg-byzantine.grid.grid-cols-1.place-content-center.place-items-center.rounded-tl-sm
												.font-medium.uppercase.tracking-wide.leading-snug.text-center(class="text-9 text-white/90") {@html cell}

									//- if it is the 4th cell in the second row
									+elseif('cellIndex==3')
										.font-apple.w-full.h-full.bg-byzantine.grid.grid-cols-1.place-content-center.place-items-center.rounded-tr-sm
											.font-medium.uppercase.tracking-wide.leading-snug.text-center(class="text-9 text-white/90") {@html cell}


									//- if it is the last cell in the row
									//- round the top right corner
									+elseif('cellIndex==5')
										.font-apple.w-full.h-full.bg-byzantine.grid.grid-cols-1.place-content-center.place-items-center.rounded-tr-md
											.font-medium.uppercase.tracking-wide.leading-snug.text-center(class="text-9 text-white/90") {@html cell}


						//- if it is the third row
						+elseif('rowIndex ==2')

							+each('row as cell, cellIndex')

								//- if it is the first cell in the third row
								+if('cellIndex == 0')
									.text-right.font-normal.pr-2.text-11.align-middle.h-full.py-1.text-russianViolet {cell}

									//- if it is the second cell in the third row
									+elseif('cellIndex == 1')
										.text-white.w-full.font-normal.leading-snug.text-center.py-1(class="text-[10.5px] border-white bg-[#36234E] text-white/90 border-l-0") {@html cell} -

									//- if it is the third or 5th cell in the last row
									+elseif('cellIndex == 2 || cellIndex == 4')
										.w-full.h-full(class="pl-[5px]")
											.w-full.h-full.font-normal.leading-snug.text-center.border-l-0.border-y-0.py-1(class="text-russianViolet border-white bg-[#5F1A5D] text-[10.5px] text-white/90") {@html cell}%

									//- if it is the last cell in the third row
									+elseif('cellIndex == 5')
										.w-full.font-normal.leading-snug.text-center.py-1(class=" text-[10.5px] border-x-0 bg-[#5F1A5D] text-white/90") {@html cell}%

									//- if it is any other cell in the third row
									+else
										.w-full.font-normal.leading-snug.text-center.py-1(class="border-l-0 border-white  bg-[#5F1A5D] text-white/90 text-[10.5px]") {@html cell}%

						//- if it is the last row
						+elseif('rowIndex == tableData.length - 1')

							+each('row as cell, cellIndex')

								//- if it is the first cell in the last row (average)
								+if('cellIndex == 0')
									.w-full.h-full
										.h-full.w-full.text-right.font-normal.pr-2.text-11.py-1.text-russianViolet {cell}

									//- if it is the second cell in the last row
									+elseif('cellIndex == 1')
										.h-full.w-full.rounded-bl-md.bg-blueViolet.grid.grid-cols-1.place-content-center.place-items-center
											.font-normal.leading-snug.text-center.py-1(class="text-[10.5px] text-white/90 border-l-0 border-y-0") {@html cell}%

									//- if it is the third or 5th cell in the last row
									+elseif('cellIndex == 2 || cellIndex == 4')
										.h-full.w-full(class="pl-[5px]")
											.h-full.w-full.rounded-bl-sm.bg-byzantine.grid.grid-cols-1.place-content-center.place-items-center(class="bg-byzantine")
												.font-normal.leading-snug.text-center.py-1(class="text-[10.5px] text-russianViolet border-white  text-white/90") {@html cell}%

									//- if it is the 4th row
									+elseif('cellIndex == 3')
										.h-full.w-full
											.h-full.w-full.rounded-br-sm.bg-byzantine.grid.grid-cols-1.place-content-center.place-items-center(class="bg-byzantine")
												.font-normal.leading-snug.text-center.py-1(class="text-[10.5px] text-russianViolet border-white  text-white/90") {@html cell}%

									//- //- if it is the penultimate cell in the last row
									//- +elseif('cellIndex == 4')
									//- 	.w-full.h-full.grid.grid-cols-1.place-items-center.place-content-center.bg-byzantine
									//- 		.w-full.font-normal.leading-snug.text-center.border-l-0.border-y-0.py-1(class="text-[10.5px] text-russianViolet rounded-br-sm border-white bg-byzantine text-white/90") {@html cell}%

									//- if it is the last cell in the last row
									+elseif('cellIndex == 5')
										.w-full.h-full.grid.grid-cols-1.place-items-center.place-content-center.bg-byzantine.rounded-br-md
											.h-full.font-normal.leading-snug.text-center.border-x-0.border-y-0.py-1(class="text-[10.5px] border-white  text-white/90") {@html cell}%

									//- if it is any other cell in the row
									+else
										.w-full.h-full.grid.grid-cols-1.place-items-center.place-content-center.bg-byzantine
											.font-normal.leading-snug.text-center.py-1(class="text-[10.5px] text-white/90") {@html cell}%


						//- any other row
						+else
							+each('row as cell, cellIndex')

								//- if it is the fist cell in the row
								+if('cellIndex == 0')
									.w-full.h-full
										.font-normal.text-11.py-1.leading-snug.text-right.text-russianViolet.pr-2.whitespace-nowrap {@html cell}

									//- if it is the second cell in the row
									+elseif('cellIndex == 1')
										.w-full.h-full
											.w-full.h-full.font-normal.leading-snug.text-center.border-l-0.border-t-0.py-1(class="text-[10.5px] border-white bg-[#36234E] text-white/90") {@html cell} -

									//- if it is the 3rd cell or 5th in the row
									+elseif('cellIndex == 2 || cellIndex == 4')
										.w-full.h-full(class="pl-[5px]")
											.w-full.h-full.border-l-0.border-t-0.py-1(class="text-[10.5px] border-white bg-[#5F1A5D] text-white/90") {@html cell}%

									//- if it is the last cell in the row
									+elseif('cellIndex == row.length - 1')
										.w-full.h-full
											.w-full.h-full.border-x-0.border-t-0.py-1(class="text-[10.5px] border-white bg-[#5F1A5D] text-white/90") {@html cell}%

										//- any other cell in the row
										+else
											.w-full.h-full.overflow-hidden
												.w-full.h-full.border-l-0.border-t-0.py-1(class="text-[10.5px] border-white bg-[#5F1A5D] text-white/90") {@html cell}%




		.flex-column.absolute.inset-0.h-full
			div(
				class="h-[50%]"
			) &nbsp;
			div(
				class="h-[50%] bg-[#830D78] opacity-[1]"
			)
				// Header
				.px-12.pt-8
					.flex.items-center.justify-between(
						class="border-white/60"
					)
						.uppercase.tracking-wider.text-white.leading-none(
							class="text-[26px]"
						) Performance
						//.italic.tracking-widest.text-white Global Insurance Company
				.px-6.pt-4
					ColumnsTwo
						.border-t-0.pt-4(class="border-white/60" slot="left")
							p.mb-2.text-13.tracking-normal The pre-deployment baseline showed a 39.48% call answer rate prior to initiating call branding services. The ability to deliver this unified, pre-deployment call answer rate report is unique to SecureLogix and critical to sound project payback / ROI measurement.


							p.mb-2.text-13.tracking-normal After branding services were turned on, the SecureLogix services team immediately began to see and document a dramatic increase in the insurance company’s outbound call answer rates. As seen in the table above, average call answer rates increased to 57% by the end of the second month of branding services, representing a 44.5% overall increase in call answer rates.

							//- p.mb-2.text-12 An internal analysis showed the call answer rate increases resulted in 60,049 more customer interactions per month compared to their pre-branding numbers. The company conservatively placed an economic value of $285,233 on the 60,000 additional customer transactions, resulting in a 268% monthly ROI.

						div.text-12.opacity-100.mix-blend-normal(slot="right")
							.grid.grid-cols-2.gap-6.mix-blend-normal(class="-translate-y-6")
								.w-full
									div.w-full.text-center.pb-2.uppercase.text-11.opacity-80.tracking-wide.italic before
									IPhoneFrame(
										brandedLogo!="{false}"
										brandedHeading="1-800-555-1212"
										brandedSubheading="New York, NY"
										wallpaperBackgroundClasses="bg-gradient-to-br bg-midnight from-[#233343] to-richBlack"
										wallpaperImageSource=""
										caseColor!="#273B4B"
									)
									.grid.grid-cols-2.place-items.start.place-content-center.mt-2.gap-2
										.text-18.font-normal.text-right.w-full.h-full
											.inline-block(class="pr-[2.5px]").drop-shadow-lg 39.5
											.inline-block %
										.text-10.italic.text-left.leading-none.pt-1.opacity-90
											div answer
											div rate
								.w-full
									div.w-full.text-center.pb-2.uppercase.text-11.opacity-80.tracking-wide.italic after
									IPhoneFrame(
										brandedHeading="Acme Insurance"
										brandedSubheading="Your Policy"
										caseColor!="#D21EBA"
										screenContentShadow!="{false}"
									)
									.grid.grid-cols-2.place-items.start.place-content-center.mt-2.gap-2
										.text-18.font-normal.text-right.w-full.h-full.drop-shadow-lg
											.inline-block(class="pr-[2.5px]") 57
											.inline-block %
										.text-10.italic.text-left.leading-none.pt-1.opacity-90
											div answer
											div rate


							// Quote
							//-.text-md.italic SecureLogix uniquely offers options to subscribe to call branding or spoofing protection independently or as a unified, bundled service.

		Footer(
			cobranded!="{ edition }",
			primaryColor!="#fff"
		)

		.absolute.bottom-0.right-0.p-8.pr-12
			PageNumber(
				{pageCount},
				{page}
			)
</template>
