<script lang="ts">
	import { flip } from 'svelte/animate';
	import { quintOut } from 'svelte/easing';
	import { base } from '$app/paths';

	import * as config from '$lib/config';

	import PostPreview from '$lib/components/custom/post-preview.svelte';
	import type { Post } from '$lib/types';

	// export let data;
	let { data } = $props();
	console.log(data);

	let totalPosts: Post[] = data.posts;
	let currentPage = $derived(parseInt(data.page ?? '0'));
	// let currentPage = $derived(parseInt($page.url.searchParams.get('page') ?? '0'));
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
			<li class="post" animate:flip={{ easing: quintOut }}>
				<PostPreview {post}></PostPreview>
			</li>
		{/each}
	</ul>
</section>

<!-- Pagination -->
<div>
	{#if previousPage > 0}
		<a href="{base}/p/{previousPage}">Previous</a>
	{/if}
	{#if previousPage == 0}
		<a href="{base}/">Previous</a>
	{/if}

	{#if nextPage >= 0}
		<a href="{base}/p/{nextPage}">Next</a>
	{/if}
</div>
