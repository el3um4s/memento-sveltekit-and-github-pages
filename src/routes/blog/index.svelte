<script context="module">
    const allPosts = import.meta.glob("./**/*.md");

    let body = [];
    for (let path in allPosts) {
        body.push(
            allPosts[path]().then( ({metadata}) => {
            return { path, metadata}
            })
        );  
    }

    export async function load() {
		const posts = await Promise.all(body);
        return {
            props: {posts}
        }
	}
</script>

<script>
    import { base } from '$app/paths';
import { toggle_class } from 'svelte/internal';

    export let posts;
</script>

<h1>My Blog</h1>

<ul>
    {#each  posts as {path, metadata: {title, tags}} }
        <li>
            <a href={`${base}/blog/${path.replace(".md","")}`}>{title}</a>

                {#each tags as tag}
                    <span class="tag">{tag}</span>
                {/each}
        </li>
    {/each}
</ul>


<style>

    a {
        color: #2a2a2a;
    }
    li {
        margin-bottom: 16px;
    }
    .tag {
        text-decoration: none;
        text-transform: lowercase;
        font-size: 0.8rem;
        background-color: #2a2a2a;
        color: #f0f0f0;
        padding: 4px;
        border-radius: 8px;
        margin: 0px 4px 0px 0px;
    }

    .tag:hover {
        background-color: #f0f0f0;
        color: #2a2a2a;
        cursor: pointer;
    }
</style>