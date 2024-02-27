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
<section>
	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				{#if post.cover}
					<a href={post.slug} class="cover">
						{#if dev}
							{#await import(/* @vite-ignore */ `/src/posts/${post.slug}${post.cover}`) then { default: src }}
								<img {src} alt="" loading="lazy" />
							{/await}
						{:else}
							<img
								src="{config.repository}/raw/main/src/posts/{post.slug}{post.cover}"
								alt=""
								loading="lazy"
							/>
						{/if}
					</a>
				{/if}
				<h3><a href={post.slug} class="title">{post.title}</a></h3>
				<p class="date">{formatDate(post.date)}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>
