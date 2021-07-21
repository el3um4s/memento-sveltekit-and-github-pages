<script context="module">
    export async function load({ page }) {
        const isIndex = page.path === "/blog/" || page.path === "/blog"
        return {
            props: {isIndex}
        }
    }
</script>

<script>
    import { base } from '$app/paths';
    export let isIndex;
</script>

<svelte:head>
    <link href="{`${base}/prism.css`}" rel="stylesheet" />
</svelte:head>

<nav>
    {#if !isIndex}
	    <a sveltekit:prefetch href="{`${base}/blog`}">Blog</a>
    {/if}
	<a sveltekit:prefetch href="{`${base}/about`}">About</a>
    <a sveltekit:prefetch href="{`${base}`}">Home</a>
</nav>

<slot></slot>