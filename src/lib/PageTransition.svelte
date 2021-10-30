<script>
	import { blur } from 'svelte/transition';
	export let refresh = '';
</script>

{#key refresh}
	<section class="main-center" in:blur>
		<div>
			<slot />
		</div>
	</section>
{/key}
