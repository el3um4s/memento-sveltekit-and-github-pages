<script context="module">
    export async function load({ page }) {
        const isIndex = page.path === "/blog/" || page.path === "/blog"
        return {
            props: {isIndex}
        }
    }
</script>

<script>
    export let isIndex;
</script>

<nav>
    {#if !isIndex}
	    <a sveltekit:prefetch href="./">Blog</a>
    {/if}
	<a sveltekit:prefetch href="../about">About</a>
    <a sveltekit:prefetch href="../">Home</a>
</nav>

<slot></slot>

