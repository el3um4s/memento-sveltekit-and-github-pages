<script lang="ts">
	import { browser } from '$app/environment';
	import * as config from '$lib/config';

	import About from '$lib/icons/about.svelte';
	import Contact from '$lib/icons/contact.svelte';
	import RSS from '$lib/icons/rss.svelte';
	import Logo from '$lib/icons/logo.svelte';
	import Dark from '$lib/icons/dark.svelte';
	import Light from '$lib/icons/light.svelte';

	let theme = browser
		? window.localStorage.getItem('theme') ?? window.localStorage.setItem('theme', 'light')
		: 'light';

	if (browser) {
		if (theme == 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
</script>

<header>
	<nav>
		<!-- Title -->
		<a href={config.url} class="title">
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
				<a href="{config.url}/about">
					<About />
					<span>About</span>
				</a>
			</li>
			<li>
				<a href="{config.url}/contact">
					<Contact />
					<span>Contact</span>
				</a>
			</li>
			<li>
				<a href="{config.url}/rss.xml" target="_blank">
					<RSS />
					<span>RSS</span>
				</a>
			</li>

			<li>
				{#if theme == 'dark'}
					<button
						on:click={() => {
							theme = 'light';
							window.localStorage.setItem('theme', 'light');
							document.documentElement.classList.remove('dark');
						}}
					>
						<Dark />
					</button>
				{:else}
					<button
						on:click={() => {
							theme = 'dark';
							window.localStorage.setItem('theme', 'dark');
							document.documentElement.classList.add('dark');
						}}
					>
						<Light />
					</button>
				{/if}
			</li>
		</ul>
	</nav>
</header>

<style lang="postcss">
</style>
