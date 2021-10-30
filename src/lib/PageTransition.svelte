<script>
	import { blur } from 'svelte/transition';
	export let refresh = '';
</script>

{#key refresh}
	<div class="main-center" in:blur>
		<slot />
	</div>
{/key}
