<script lang="ts">
	import Title from '../title/Title.svelte';

	export let title: string;

	export let description =
		'Sveltekit starter project created with sveltekit, typescript, tailwindcss, postcss, husky, and storybook. The project has the structure set up for the scaleable project. (sveltekit, typescript, tailwindcss, postcss, husky, Storybook).';
</script>

<Title title="{title}" />

<meta name="description" content="{description}" />
