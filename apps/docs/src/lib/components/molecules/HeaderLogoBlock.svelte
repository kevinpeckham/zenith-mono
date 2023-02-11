<!--
@component
Displays SecureLogix Logo + optional cobrand logo
-->
<script lang="ts">
	// components
	// import { LogoATT } from "slx-ui";
	// import { LogoCallBranding } from "slx-ui";
	// import { LogoSecureLogix } from "slx-ui";
	// import { LogoVerizon } from "slx-ui";

	// props
	export let accentColor: string = "#ea0026;";
	export let cobrandCompany: string = "";
	export let isCobranded: boolean;
	export let logo: string = "zenith";
	export let primaryColor: string = "#233343;";
	export let logoLockup: string = "";
</script>

<template lang="pug">
	.flex.h-full.items-center.pl-8
		// logos
		.flex.h-auto.items-center
			a.block.h-9.text-current(href="https://securelogix.com")
				LogoZenith(
					accentColor!="{ accentColor }",
					height="100%",
					primaryColor!="{ primaryColor }",
					width="auto")

		// lockup
		+if('logoLockup')
			.text-normal.absolute.bottom-0.left-0.mb-2.ml-4.pl-4.font-normal.text-black {  logoLockup  }
</template>
