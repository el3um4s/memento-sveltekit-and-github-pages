<script context="module">
	const allPosts = import.meta.glob('./**/*.md');

	let body = [];
	for (let path in allPosts) {
		body.push(
			allPosts[path]().then(({ metadata }) => {
				return { path, metadata };
			})
		);
	}

	export async function load() {
		const posts = await Promise.all(body);
		return {
			props: { posts }
		};
	}
</script>

<script>
	import { base } from '$app/paths';
	export let posts;
</script>

<h1>My Blog</h1>

<ul>
	{#each posts as { path, metadata: { title, tags } }}
		<li>
			<a href={`${base}/blog/${path.replace('.md', '')}`} class="link-no-underline">{title}</a>

			{#each tags as tag}
				<a class="tag" href={`${base}/tags/${tag}`}>{tag}</a>
			{/each}
		</li>
	{/each}
</ul>
