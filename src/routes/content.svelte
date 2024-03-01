<script lang="ts">
	import { fade } from 'svelte/transition';

	export let url: string;
</script>

{#key url}
	<div class="content" in:fade>
		<slot />
	</div>
{/key}

<style>
	.content {
		height: 100%;
	}
</style>
