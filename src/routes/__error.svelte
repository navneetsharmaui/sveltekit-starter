<style lang="scss">
	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}
	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<script lang="ts" context="module">
	export function load({ error, status }) {
		return {
			props: {
				title: `${status}: ${error.message}`,
				status,
				error,
			},
		};
	}
</script>

<script lang="ts">
	import { dev } from '$app/env';
	import Title from '$components/title/Title.svelte';

	export let status: string;
	export let error: Error;
</script>

<Title title="{status} | Sveltekit" />
<div class="md:container md:mx-auto">
	<div class="flex flex-col justify-center items-center">
		<h1>
			{status}
		</h1>
		<p>
			{error.name}
		</p>
		{#if dev && error.stack}
			<pre> {error.message} </pre>
		{/if}
	</div>
</div>
