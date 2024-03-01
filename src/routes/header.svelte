<script lang="ts">
	import * as config from '$lib/config';
	import { base } from '$app/paths';

	import About from '$lib/icons/about.svelte';
	import Contact from '$lib/icons/contact.svelte';
	import RSS from '$lib/icons/rss.svelte';
	import Logo from '$lib/icons/logo.svelte';
</script>

<!-- <header>
	<nav>
		<a href="{base}/" class="title">
			<b>{config.title}</b>
		</a>

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
	</nav>
</header> -->

<header class="bg-white shadow-md sticky top-0 left-0 right-0 z-50">
	<nav class="flex items-center justify-between p-4">
		<!-- Title -->
		<a href="{base}/" class="flex items-center title">
			<!-- <img src="path_to_your_logo.svg" alt="Logo" class="mr-2 w-6 h-6" /> -->
			<Logo />
			<span class="font-bold text-lg hidden sm:block">{config.title}</span>
		</a>

		<!-- Search Box -->
		<div class="hidden md:block">
			<input type="search" placeholder="Search..." class="px-4 py-2 border rounded-lg" />
		</div>

		<!-- Navigation -->
		<ul class="flex items-center space-x-4">
			<li>
				<a href="{base}/about" class="flex items-center">
					<!-- <img src="path_to_about_icon.svg" alt="About" class="w-6 h-6" /> -->
					<About />
					<span class="hidden sm:block ml-2">About</span>
				</a>
			</li>
			<li>
				<a href="{base}/contact" class="flex items-center">
					<!-- <img src="path_to_contact_icon.svg" alt="Contact" class="w-6 h-6" /> -->
					<Contact />
					<span class="hidden sm:block ml-2">Contact</span>
				</a>
			</li>
			<li>
				<a href="{base}/rss.xml" target="_blank" class="flex items-center">
					<!-- <img src="path_to_rss_icon.svg" alt="RSS" class="w-6 h-6" /> -->
					<RSS />
					<span class="hidden sm:block ml-2">RSS</span>
				</a>
			</li>
		</ul>
	</nav>
</header>

<style lang="postcss">
</style>
