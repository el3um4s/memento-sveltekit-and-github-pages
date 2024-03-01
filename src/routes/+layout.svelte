<script lang="ts">
	// import Footer from './footer.svelte';
	import Header from './header.svelte';
	import Content from './content.svelte';

	// import '../app.css';
	import '../css/tailwind.pcss';

	export let data;
</script>

<div class="layout">
	<!-- Header -->
	<Header />

	<main>
		<Content url={data.url}>
			<slot />
		</Content>
	</main>
</div>
