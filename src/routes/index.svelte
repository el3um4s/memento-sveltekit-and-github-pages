<!-- https://www.ryanfiller.com/blog/building-a-better-svelte-data-flow -->
<!-- // https://vitejs.dev/guide/features.html#glob-import -->

<script context="module">
    const allPosts = import.meta.globEager(`../news/**/*.md`);
    let body = [];
    for (let path in allPosts) {
        const post = allPosts[path];
        const metadata = post.metadata;
        const namePage = path.split('/');
        const slugPage = namePage[namePage.length-2].slice(11);
        const p = {
            path, metadata, slugPage
        }
        body.push(p); 
    }

    console.log(body);
    export const load = async () => {
        return { props: {posts: body} }
    }
</script>

<script lang="ts">
    import { base } from '$app/paths';
    export let posts;
    
    function linkSlug(s:string | undefined, p: string): string {
        let result = "";
        if ( !s) {
            result = p
        } else {
            result = s;
        }
        return result;
    }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p><a sveltekit:prefetch href="about">ABOUT</a></p>
<p>Read my <a sveltekit:prefetch href="blog">blog</a></p>
<p>Version: 0.0.1</p>



<h1>News</h1>

<ul>
    {#each posts as {slugPage, metadata: {title, slug}} }
        <li>
            <a href={`${base}/${linkSlug(slug, slugPage)}`} sveltekit:prefetch >{title}</a>
        </li>
    {/each}
</ul>

<style>    a {
        color: #2a2a2a;
    }
    li {
        margin-bottom: 16px;
    }
</style>