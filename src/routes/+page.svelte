<script lang="ts">
	import { slide } from 'svelte/transition';
	import * as config from '$lib/config';

	import PostPreview from '$lib/components/custom/post-preview.svelte';
	import Pagination from '$lib/components/custom/pagination.svelte';
	import type { Post } from '$lib/types';

	// export let data;
	let { data } = $props();

	let totalPosts: Post[] = data.posts;
	let totalPages = Math.ceil(totalPosts.length / config.pagination);
	const posts = totalPosts.slice(0, config.pagination);
	const nextPage = totalPages > 0;
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
<Pagination currentPage={0} nextPage={1} start={1} end={config.pagination} url="{config.url}/page"
></Pagination>
