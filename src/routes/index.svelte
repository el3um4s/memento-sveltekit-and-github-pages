<script context="module">
    const allPosts = import.meta.globEager(`../lib/news/**/*.md`);
    console.log(allPosts);

    let body = [];
    for (let path in allPosts) {
        console.log(path);
        console.log(allPosts[path]);
        const post = allPosts[path];
        const metadata = post.metadata;
        const namePage = path.split('/');
        const slugPage = namePage[namePage.length-2].slice(11);
        const p = {
            path, metadata, slugPage
        }
        body.push(p);
        // body.push(
        //     allPosts[path]().then( ({metadata}) => {
        //         const namePage = path.split('/');
        //         const slugPage = namePage[namePage.length-2].slice(11);
        //         return { path, metadata, slugPage}
        //     })
        // );  
    }

    console.log(body);
    export const load = async () => {
        return { props: {posts: body} }
    }
    // export async function load() {
	// 	const posts = await Promise.all(body);
    //     return {
    //         props: {posts}
    //     }
	// }
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
            <a href={`${base}/${linkSlug(slug, slugPage)}`}>{title}</a>
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
</style>