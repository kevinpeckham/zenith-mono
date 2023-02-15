// Re-export your entry components here

//- Components

//- icon components
export { default as IconAlarmClock } from "./src/lib/components/icons/IconAlarmClock.svelte";
export { default as IconArrowRight } from "./src/lib/components/icons/IconArrowRight.svelte";
export { default as IconChevronDown } from "./src/lib/components/icons/IconChevronDown.svelte";
export { default as IconClose } from "./src/lib/components/icons/IconClose.svelte";
export { default as IconMessage } from "./src/lib/components/icons/IconMessage.svelte";
export { default as IconNorthAmerica } from "./src/lib/components/icons/IconNorthAmerica.svelte";
export { default as IconPhone } from "./src/lib/components/icons/IconPhone.svelte";

// infographic components
export { default as BubbleGraphic } from "./src/lib/components/infographics/BubbleGraphic.svelte";
export { default as PieChart } from "./src/lib/components/infographics/PieChart.svelte";

// layout components
export { default as Main } from "./src/lib/components/layout/Main.svelte";
export { default as PageLayout } from "./src/lib/components/layout/PageLayout.svelte";

// molecule components
export { default as DocumentSummary } from "./src/lib/components/molecules/DocumentSummary.svelte";

// nav components
export { default as HamburgerButton } from "./src/lib/components/nav/HamburgerButton.svelte";
export { default as NavButton } from "./src/lib/components/nav/NavButton.svelte";
export { default as NavMenuDivider } from "./src/lib/components/nav/NavMenuDivider.svelte";
export { default as NavMenuItem } from "./src/lib/components/nav/NavMenuItem.svelte";
export { default as NavFlyoutMenu } from "./src/lib/components/nav/NavFlyoutMenu.svelte";
export { default as NavMainNavbar } from "./src/lib/components/nav/NavMainNavbar.svelte";
export { default as NavPullDownMenu } from "./src/lib/components/nav/NavPullDownMenu.svelte";

// picture components
export { default as PictureCloudinary } from "./src/lib/components/pictures/PictureCloudinary.svelte";
export { default as PictureStack } from "./src/lib/components/pictures/PictureStack.svelte";
export { default as PictureStackFallback } from "./src/lib/components/pictures/PictureStackFallback.svelte";
export { default as PictureStackSource } from "./src/lib/components/pictures/PictureStackSource.svelte";

// Colors
export {
	colors,
	antiFlash,
	cultured,
	gunmetal,
	kellyGreen,
	maize,
	midnight,
	oxford,
	richBlack,
	selectiveYellow,
	yellowGreen,
} from "./src/lib/stores/colorStore";

// image types
export { dummyDocument } from "./src/lib/types/documentTypes";
export {
	Image,
	ImageFallback,
	ImageSource,
	Picture,
	BreakpointImageSet,
} from "./src/lib/types/imageTypes";
export type {
	ImageSet,
	PictureCLD,
} from "./src/lib/types/imageTypes";

 // document types
 export {
	Document,
	DocumentSettings,
 } from "./src/lib/types/documentTypes";


export type { NavDataItem, Flyout } from "./src/lib/types/navTypes";
export type { Link } from "./src/lib/types/linkTypes";



// a11y utils
export {
	inertElements,
	unInertElements,
} from "./src/lib/utils/a11yUtils";

// color utils
export {
	hexToRgb, rgbToNumbersArray } from "./src/lib/utils/colorUtils";

// image utils
export {
	selectImageByType,
	getImageWidth,
	getImageSetSizes,
	getFallBackImageSize,
	getImageSetBySize,
	getFallbackSet,
} from "./src/lib/utils/imageUtils";

// number utils
export {
	countDecimals,
	integerToArray,
	isInteger,
} from "./src/lib/utils/numberUtils";

// string utils
export {
	capitalize,
	percentSymbol,
	processText,
	slugify,
	slugToTitle,
	styleRegMarks,
	styleTrademarks,
	thousandSymbol } from "./src/lib/utils/stringUtils";

// time & date utils
export {
	formatClockTime,
	getCurrentTime,
	getCurrentTimeFormatted,
	getDaysUntilToday,
	getMonthNameFromDate,
	getTwoDigitYear} from "./src/lib/utils/timeUtils";