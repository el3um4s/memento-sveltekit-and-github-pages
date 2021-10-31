<script context="module">
	import 'prismjs';
	// import 'prismjs/themes/prism.css';

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
	import PageTransition from '$lib/PageTransition.svelte';
	export let isIndex;
	export let key;

	import 'prism-themes/themes/prism-dracula.css';
</script>

<PageTransition refresh={key}>
	<slot />
</PageTransition>
