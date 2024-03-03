<script lang="ts">
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';
	import type { Post } from '$lib/types';

	import { dev } from '$app/environment';
	export let post: Post;
</script>

<!-- <li class="post"> -->
{#if post.cover}
	<a href={post.slug} class="cover">
		{#if dev}
			{#await import(/* @vite-ignore */ `/src/posts/${post.slug}${post.cover}`) then { default: src }}
				<img {src} alt={post.title} loading="lazy" />
			{/await}
		{:else}
			<img
				src="{config.repository}/raw/main/src/posts/{post.slug}{post.cover}"
				alt={post.title}
				loading="lazy"
			/>
		{/if}
	</a>
{/if}
<div class="p-4">
	{#if post.kicker}
		<span class="kicker">{post.kicker}</span>
	{/if}
	<h3 class="title">
		<a href={post.slug}>{post.title}</a>
	</h3>
	<p class="date">{formatDate(post.date)}</p>
	<p class="description">{post.description}</p>
	<div class="tags">
		{#each post.categories as tag}
			<span class="tag">#{tag}</span>
		{/each}
	</div>
</div>
<!-- </li> -->
