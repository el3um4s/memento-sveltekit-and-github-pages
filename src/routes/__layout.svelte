<script context="module">
	export const load = async ({ url }) => {
		return {
			props: {
				key: url.pathname
			}
		};
	};
</script>

<script lang="ts">
	import '../app.css';

	import PageTransition from '$lib/PageTransition.svelte';
	import Nav from '$lib/components/Nav.svelte';
	export let key: string;
</script>

<Nav />
<main>
	<PageTransition refresh={key}>
		<slot />
	</PageTransition>
</main>
