<style lang="postcss">
	button {
		font-family: inherit;
		font-size: inherit;
		/* Tailwind's creator recommends against @apply.
		This is all just proof that it works in your Svelte style blocks. */
		@apply py-4 px-8;
		@apply text-red-500;
		@apply bg-red-500 bg-opacity-10;
		@apply rounded-full;
		@apply border-opacity-100;
		@apply outline-none;
		@apply w-48;
		height: 60px;
		font-variant-numeric: tabular-nums;
	}

	button:hover {
		border: 3px solid #ff3e00;
	}

	button:active {
		@apply bg-red-500 bg-opacity-20;
	}
</style>

<script lang="ts">
	let count = 0;

	const increment = (): void => {
		count += 1;
	};
</script>

<button on:click="{increment}">
	Clicks: {count}
</button>
