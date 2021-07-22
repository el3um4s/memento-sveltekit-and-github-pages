<script context="module">
    export const load = async({ page }) => {
        const isIndex = page.path === "/blog/" || page.path === "/blog"
        return {
            props: {
                isIndex,
                key: page.path,
            }
        }
    };
</script>

<script>
    import { base } from '$app/paths';
    import PageTransition from "$lib/PageTransition.svelte"
    export let isIndex;
    export let key
</script>

<svelte:head>
    <link href="{`${base}/prism.css`}" rel="stylesheet" />
</svelte:head>

<div>   
    <PageTransition refresh={key}>
       <slot></slot>
    </PageTransition>

    <div class="nav">
        {#if !isIndex}
            <a sveltekit:prefetch href="{`${base}/blog`}">Blog</a>
        {/if}
        <a sveltekit:prefetch href="{`${base}/about`}">About</a>
        <a sveltekit:prefetch href="{`${base}/`}">Home</a>
    </div>
</div>


<style>
    .nav a {
        color: gray;
        font-size: small;
    }

</style>