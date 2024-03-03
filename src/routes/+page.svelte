<script lang="ts">
	import { slide } from 'svelte/transition';
	import * as config from '$lib/config';

	import PostPreview from '$lib/components/custom/post-preview.svelte';
	import type { Post } from '$lib/types';

	// export let data;
	let { data } = $props();

	let totalPosts: Post[] = data.posts;
	// let currentPage = $derived(parseInt(data.page ?? '0'));
	let currentPage = $state(0);
	let totalPages = Math.ceil(totalPosts.length / config.pagination);
	let start = $derived(currentPage * config.pagination);
	let end = $derived(
		currentPage === totalPages - 1 ? totalPosts.length - 1 : start + config.pagination - 1
	);

	let posts = $derived(totalPosts.slice(start, end + 1));

	let nextPage = $derived(currentPage === totalPages - 1 ? -1 : currentPage + 1);
	let previousPage = $derived(currentPage === 0 ? -1 : currentPage - 1);
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<!-- Posts -->
<section class="list-posts">
	<ul class="list">
		{#each posts as post (post.slug)}
			<li class="post" transition:slide>
				<PostPreview {post}></PostPreview>
			</li>
		{/each}
	</ul>
</section>

<!-- Pagination -->
<section class=" flex justify-between items-center px-4 py-3">
	<div class="hidden sm:block">
		Showing <span class="font-semibold">{start + 1}</span> to
		<span class="font-semibold">{end + 1}</span> results
	</div>
	<div class="flex gap-2">
		{#if previousPage >= 0}
			<button on:click={() => currentPage--}>Previous</button>
		{/if}
		{#if nextPage >= 0}
			<button on:click={() => currentPage++}>Next</button>
		{/if}
	</div>
</section>
