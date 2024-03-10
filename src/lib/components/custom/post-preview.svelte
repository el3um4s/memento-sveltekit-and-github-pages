<script lang="ts">
	import { base } from '$app/paths';
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';
	import type { Post } from '$lib/types';

	import { dev } from '$app/environment';
	export let post: Post;
</script>

<section>
	{#if post.cover}
		<a href="{base}/{post.slug}" class="cover">
			{#if dev}
				{#await import(/* @vite-ignore */ `/src/posts/${post.src}/${post.cover}`) then { default: src }}
					<img {src} alt={post.title} loading="lazy" />
				{/await}
			{:else}
				<img
					src="{config.repository}/raw/main/src/posts/{post.src}/{post.cover}"
					alt={post.title}
					loading="lazy"
				/>
			{/if}
		</a>
	{/if}
	<div class="p-4">
		{#if post.column}
			<a href="{base}/column/{post.column}" class="column">{post.column}</a>
		{/if}
		<h3 class="title">
			<a href="{base}/{post.slug}">{post.title}</a>
		</h3>
		<p class="date">{formatDate(post.date)}</p>
		<p class="description">{post.description}</p>
		<div class="tags">
			{#each post.categories as tag}
				<a href="{base}/category/{tag}" class="tag">#{tag}</a>
			{/each}
		</div>
	</div>
</section>
