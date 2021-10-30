# About

<script>
    import { base } from '$app/paths';
    import Box from "$lib/Box.svelte";
    let count = 10;
</script>

{count} click

<button on:click={() => count+=1}> Click to Increment: {count} </button>

<Box />

<p><a sveltekit:prefetch href="{`${base}/`}">Home</a></p>

<style lang="postcss">
    button {
        @apply border rounded-md p-2 m-2;
        border-color: var(--text-color);
        color: var(--text-color);
        background-color: var(--background-color)
    }

    button:hover {
        color: var(--background-color);
        background-color: var(--text-color);
    }
</style>
