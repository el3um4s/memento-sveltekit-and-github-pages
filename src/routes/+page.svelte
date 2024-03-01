<script lang="ts">
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';

	import { dev } from '$app/environment';
	// import { repository } from '$root/package.json';

	export let data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<!-- Posts -->
<section class="mt-8">
	<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each data.posts as post}
			<li
				class="post bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
			>
				<div class="p-4">
					<span
						class="inline-block bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 rounded-full px-3 py-1 text-sm font-semibold mb-2 uppercase"
						>kicker</span
					>
					<!-- {#if post.kicker}
						<span
							class="inline-block bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 rounded-full px-3 py-1 text-sm font-semibold mb-2"
							>{post.kicker}</span
						>
					{/if} -->
				</div>
				{#if post.cover}
					<a href={post.slug} class="block overflow-hidden">
						{#if dev}
							{#await import(/* @vite-ignore */ `/src/posts/${post.slug}${post.cover}`) then { default: src }}
								<img {src} alt={post.title} class="w-full h-48 object-cover" loading="lazy" />
							{/await}
						{:else}
							<img
								src="{config.repository}/raw/main/src/posts/{post.slug}{post.cover}"
								alt={post.title}
								class="w-full h-48 object-cover"
								loading="lazy"
							/>
						{/if}
					</a>
				{/if}
				<div class="p-4">
					<h3 class="font-semibold text-xl dark:text-white mb-2">
						<a href={post.slug} class="hover:underline">{post.title}</a>
					</h3>
					<p class="text-gray-500 dark:text-gray-400 text-sm mb-4">{formatDate(post.date)}</p>
					<div class="flex flex-wrap gap-2 mb-4">
						{#each post.categories as tag}
							<span
								class="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full px-3 py-1 text-xs font-medium"
								>#{tag}</span
							>
						{/each}
					</div>
					<p class="text-gray-600 dark:text-gray-200">{post.description}</p>
				</div>
			</li>
		{/each}
	</ul>
</section>
