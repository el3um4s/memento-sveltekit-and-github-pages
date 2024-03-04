<script lang="ts">
	// let { data } = $props();
	export let currentPage: number;
	export let nextPage: number;
	export let start: number;
	export let end: number;
	export let url: string;
</script>

<section class="pagination">
	<div class="showing-text">
		Showing <span class="semibold">{start}</span> to
		<span class="semibold">{end}</span> results
	</div>
	<div class="buttons">
		{#if currentPage >= 1}
			<a href="{url}/{currentPage - 1}">Previous</a>
		{/if}

		{#if nextPage >= 1}
			<a href="{url}/{nextPage}">Next</a>
		{/if}
	</div>
</section>

<style>
	.semibold {
		font-weight: 600;
	}
</style>
