<script context="module">
	export const load = async ({ page }) => {
		const isIndex = page.path === '/blog/' || page.path === '/blog';
		return {
			props: {
				isIndex,
				key: page.path
			}
		};
	};
</script>

<script>
	import { base } from '$app/paths';
	import PageTransition from '$lib/PageTransition.svelte';
	export let isIndex;
	export let key;
</script>

<svelte:head>
	<link href={`${base}/prism.css`} rel="stylesheet" />
</svelte:head>

<PageTransition refresh={key}>
	<slot />
</PageTransition>
