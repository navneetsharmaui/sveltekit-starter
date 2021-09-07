<script lang="ts">
	export let href = '';

	export let ariaLabel = '';
	export let cssClasses = '';
</script>

{#if href}
	{#if ariaLabel}
		<a
			href="{href}"
			class="{cssClasses
				? cssClasses
				: 'text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-500 transition'}"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="{ariaLabel}"
		>
			<slot />
		</a>
	{:else}
		<a
			href="{href}"
			class="{cssClasses
				? cssClasses
				: 'text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-500 transition'}"
			target="_blank"
			rel="noopener noreferrer"
		>
			<slot />
		</a>
	{/if}
{/if}
