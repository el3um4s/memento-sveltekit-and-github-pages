<script lang="ts">
	import * as config from '$lib/config';
	import { base } from '$app/paths';
</script>

<nav>
	<!-- Title -->
	<a href="{base}/" class="title">
		<b>{config.title}</b>
		<!-- <img src="./assets/logo.svg" alt="" /> -->
	</a>

	<!-- Navigation -->
	<ul class="links">
		<li>
			<a href="{base}/about">About</a>
		</li>
		<li>
			<a href="{base}/contact">Contact</a>
		</li>
		<li>
			<a href="{base}/rss.xml" target="_blank">RSS</a>
		</li>
	</ul>

	<!-- Theme -->
	<!-- <button>Toggle</button> -->
</nav>

<!-- <style>
	nav {
		padding-block: var(--size-7);
	}

	.links {
		margin-block: var(--size-7);
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	@media (min-width: 768px) {
		nav {
			display: flex;
			justify-content: space-between;
		}

		.links {
			display: flex;
			gap: var(--size-7);
			margin-block: 0;
		}
	}
</style> -->

<style lang="postcss">
</style>
