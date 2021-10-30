<script lang="ts">
	import { base } from '$app/paths';
</script>

<header>
	<ul>
		<li>
			<a sveltekit:prefetch href={`${base}/`}>Home</a>
		</li>
		<li>
			<a sveltekit:prefetch href={`${base}/blog/`}>Blog</a>
		</li>
		<li>
			<a sveltekit:prefetch href={`${base}/about`}>About</a>
		</li>
	</ul>
</header>

<!-- 
<style>
    ul {
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    li {
        margin-right: 10px;
    }
</style> -->
<style lang="postcss">
	header {
		@apply flex w-full  items-stretch justify-center;
		background-color: var(--text-color);
	}
	ul {
		@apply flex space-x-3 align-middle items-stretch;
	}
	li {
		@apply p-1 h-10;
		color: var(--background-color);
		background-color: var(--text-color);
	}

	li:hover {
		color: var(--text-color);
		background-color: var(--background-color);
	}

	a {
		@apply no-underline;
	}
</style>
