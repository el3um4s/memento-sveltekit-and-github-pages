<script lang="ts">
	import * as config from '$lib/config';
	import { base } from '$app/paths';

	import About from '$lib/icons/about.svelte';
	import Contact from '$lib/icons/contact.svelte';
	import RSS from '$lib/icons/rss.svelte';
	import Logo from '$lib/icons/logo.svelte';
</script>

<header>
	<nav>
		<!-- Title -->
		<a href="{base}/" class="title">
			<Logo />
			<span>{config.title}</span>
		</a>

		<!-- Search Box -->
		<div class="search">
			<input type="search" placeholder="Search..." />
		</div>

		<!-- Navigation -->
		<ul>
			<li>
				<a href="{base}/about">
					<About />
					<span>About</span>
				</a>
			</li>
			<li>
				<a href="{base}/contact">
					<Contact />
					<span>Contact</span>
				</a>
			</li>
			<!-- <li>
				<a href="{base}/rss.xml" target="_blank">
					<RSS />
					<span>RSS</span>
				</a>
			</li> -->
		</ul>
	</nav>
</header>

<style lang="postcss">
</style>
