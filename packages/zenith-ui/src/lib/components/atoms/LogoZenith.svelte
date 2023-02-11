<script lang="ts">
	const sets = [
		{
			fallback: true,
			images: [
				{
					height: "33",
					width: "160",
					mimeType: "image/svg+xml",
					url: "/images/logo-zenith.svg",
				},
				{
					height: "33",
					width: "160",
					mimeType: "image/png",
					url: "/images/logo-zenith.png",
				},
			],
		},
	];

	const alt = "Zenith Energy logo";
	const loading = "eager";
</script>

<template lang="pug">
	picture
		source(
			srcset!="{ sets[0].images[0].url }",
			type!="{ sets[0].images[0].mimeType }")
		source(
			srcset!="{ sets[0].images[1].url }",
			type!="{ sets[0].images[1].mimeType }")
		img(
			alt!="{ alt }",
			class="h-8",
			loading!="{ loading }",
			src!="{ sets[0].images[1].url }")
</template>
