# About

<script>
    import Box from "$lib/Box.svelte";
    let count = 10;
</script>

{count} click

<button on:click={() => count+=1}> Increment {count} </button>

<Box />

<p><a sveltekit:prefetch href=".">HOME</a></p>