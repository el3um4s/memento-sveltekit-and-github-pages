<script context="module">
	import 'prismjs';
	export const load = async ({ url }) => {
		const isIndex = url.pathname === '/blog/' || url.pathname === '/blog';
		return {
			props: {
				key: url.pathname
			}
		};
	};
</script>

<script>
	import PageTransition from '$lib/PageTransition.svelte';
	export let key;

	import 'prism-themes/themes/prism-dracula.css';
</script>

<PageTransition refresh={key}>
	<slot />
</PageTransition>
