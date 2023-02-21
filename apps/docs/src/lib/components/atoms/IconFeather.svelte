<!--
@component
Here's some documentation for this component.
-->
<script lang="ts">
	// props
	export let icon = "star";

	interface Icon {
		paths: string[];
		polygons?: string[];
	}
	const iconData = {
		alert: {
			paths: [
				"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z",
			],
			lines: [
				{ x1: "12", y1: "9", x2: "12", y2: "13" },
				{ x1: "12", y1: "17", x2: "12.01", y2: "17" },
			],
		},
		clipboard: {
			paths: [
				"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
			],
			rects: [
				{
					x: "8",
					y: "2",
					width: "8",
					height: "4",
					rx: "1",
					ry: "1",
				},
			],
		},
		database: {
			paths: [
				"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3",
				"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5",
			],
			ellipses: [
				{
					ry: "3",
					rx: "9",
					cy: "5",
					cx: "12",
				},
			],
		},
		star: {
			polygons: [
				"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
			],
		},
		heart: {
			paths: [
				"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
			],
		},
		globe: {
			circles: [{ r: "10", cx: "12", cy: "12" }],
			lines: [{ x1: "12", y1: "2", x2: "12", y2: "22" }],
			paths: [
				"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
			],
		},
		thermometer: {
			paths: ["M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"],
		},
		user: {
			paths: ["M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"],
			circles: [{ r: "4", cy: "7", cx: "12" }],
		},
		wind: {
			paths: [
				"M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2",
			],
		},
		zap: {
			polygons: ["13 2 3 14 12 14 11 22 21 10 12 10 13 2"],
		},
	};
</script>

<template lang="pug">
	svg(
		class="feather",
		fill="none",
		height="24",
		stroke="currentColor",
		stroke-linecap="round",
		stroke-linejoin="round",
		stroke-width="2",
		viewBox="0 0 24 24",
		width="24",
		xmlns="http://www.w3.org/2000/svg")
		+if('iconData[icon].polygons')
			+each('iconData[icon].polygons as polygon')
				polygon(points!="{ polygon }")
		+if('iconData[icon].circles')
			+each('iconData[icon].circles as circle')
				circle(
					cx!="{ circle.cx }",
					cy!="{ circle.cy }",
					r!="{ circle.r }")
		+if('iconData[icon].lines')
			+each('iconData[icon].lines as line')
				line(
					x1!="{ line.x1 }",
					x2!="{ line.x2 }",
					y1!="{ line.y1 }",
					y2!="{ line.y2 }")
		+if('iconData[icon].paths')
			+each('iconData[icon].paths as path')
				path(d!="{ path }")
		+if('iconData[icon].rects')
			+each('iconData[icon].rects as rect')
				rect(
					height!="{ rect.height }",
					rx!="{ rect.rx }",
					ry!="{ rect.ry }",
					width!="{ rect.width }",
					x!="{ rect.x }",
					y!="{ rect.y }")
		+if('iconData[icon].ellipses')
			+each('iconData[icon].ellipses as ellipse')
				ellipse(
					cx!="{ ellipse.cx }",
					cy!="{ ellipse.cy }",
					rx!="{ ellipse.rx }",
					ry!="{ ellipse.ry }")
</template>
