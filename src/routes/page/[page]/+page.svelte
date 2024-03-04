<script lang="ts">
	import { slide } from 'svelte/transition';
	import * as config from '$lib/config';

	import PostPreview from '$lib/components/custom/post-preview.svelte';
	import Pagination from '$lib/components/custom/pagination.svelte';

	// export let data;
	let { data } = $props();
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<!-- Posts -->
<section class="list-posts">
	<ul class="list">
		{#each data.posts as post (post.slug)}
			<li class="post" transition:slide>
				<PostPreview {post}></PostPreview>
			</li>
		{/each}
	</ul>
</section>

<!-- Pagination -->
<Pagination
	currentPage={data.currentPage}
	nextPage={data.nextPage}
	start={data.start + 1}
	end={data.end + 1}
	url="{config.url}/page"
></Pagination>
<!-- <section class=" flex justify-between items-center px-4 py-3">
	<div class="hidden sm:block">
		Showing <span class="font-semibold">{data.start + 1}</span> to
		<span class="font-semibold">{data.end + 1}</span> results
	</div>
	<div class="flex gap-2">
		{#if data.previousPage >= 1}
			<a href="{config.url}/page/{data.previousPage}">Previous</a>
		{:else if data.previousPage == 0}
			<a href={config.url}>Previous</a>
		{/if}

		{#if data.nextPage >= 1}
			<a href="{config.url}/page/{data.nextPage}">Next</a>
		{/if}
	</div>
</section> -->
