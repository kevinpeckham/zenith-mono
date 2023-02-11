<!--
@component
svg phone icon
-->
<script lang="ts">
	// icon standard props
	export let ariaHidden = true;
	export let classes = "";
	export let dataIcon = "phone";
	export let role = "";
	export let styles = "";
	export let title = "phone icon";
</script>

<template lang="pug">
svg(
	aria-hidden!="{ariaHidden}"
	class!="w-full h-auto fill-current overflow-visible fill-current {classes}"
	data-icon!="{dataIcon}"
	height="113"
	viewBox="0 0 117 113"
	role!="{role}"
	style!="{styles}"
	width="117"
	xmlns="http://www.w3.org/2000/svg"
	)
	+if('title && !ariaHidden')
		title {title}
	path(
		d="M115.467 89.876L85.888 67.76c-1.878-1.412-3.756-.941-5.165.471l-2.348 2.353-7.512 7.529c-2.348 2.353-6.104 2.353-8.921 0l-27.701-24.94c-1.409-.941-1.878-2.823-1.878-4.706s.47-3.294 1.878-4.706l6.573-6.588 1.409-1.412c1.409-1.412 1.409-3.764.47-5.176L22.504 1.412C22.035.941 21.096 0 19.687 0c-.939 0-2.348 0-3.287.941L4.663 10.352C-.032 14.117-.971 20.234.907 25.881c15.494 41.409 48.829 72.466 91.084 86.582 4.695 1.412 10.329 0 13.616-3.764l8.921-10.823c.47-.471.939-1.412 1.409-1.882.939-.941.939-1.882.939-3.294.47-1.412-.47-2.353-1.409-2.823z"
		)
</template>
