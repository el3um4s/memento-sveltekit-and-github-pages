<script lang="ts">
	import { formatDate } from '$lib/utils';

	import * as config from '$lib/config';
	import { dev } from '$app/environment';
	export let data;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<!-- Title -->
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p>Published at {formatDate(data.meta.date)}</p>
	</hgroup>

	<!-- Tags -->
	<div class="tags">
		{#each data.meta.categories as category}
			<span class="surface-4">&num;{category}</span>
		{/each}
	</div>

	<div class="cover-image">
		{#if data.meta.cover}
			{#if dev}
				{#await import(/* @vite-ignore */ `/src/posts/${data.url}/${data.meta.cover}`) then { default: src }}
					<img {src} alt="" loading="lazy" />
				{/await}
			{:else}
				<img
					src="{config.repository}/raw/main/src/posts/{data.url}/{data.meta.cover}"
					alt=""
					loading="lazy"
				/>
			{/if}
		{/if}
	</div>

	<!-- Post -->
	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>
