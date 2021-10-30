<div class="box">box</div>

<style>
	.box {
		width: 200px;
		height: 100px;
		border-width: 4px;
		border-style: dashed;
		border-color: var(--text-color);
	}

	.box:hover {
		@apply bg-gradient-to-r;
		@apply from-green-400;
		@apply to-blue-500;
	}
</style>
