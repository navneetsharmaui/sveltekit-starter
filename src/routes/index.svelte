<style lang="postcss" type="text/postcss">
</style>

<script lang="ts">
	import { JSONHttpUtil } from '$lib/core';
	import Title from '$components/title/Title.svelte';

	// import Counter from '$lib/Counter.svelte';

	import { Logger, LoggerUtils } from '$lib/utils';
	import { onMount } from 'svelte';

	const logger: Logger = LoggerUtils.getInstance('Index');

	onMount(async () => {
		const data = await JSONHttpUtil.get<any>('https://jsonplaceholder.typicode.com/photos?_limit=20');
		// logger.debug(data);
	});
</script>

<Title title="Home" />

<section class="text-gray-600 body-font">
	<div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
		<div
			class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
		>
			<h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Sveltekit Starter Template </h1>
			<p class="mb-8 leading-relaxed"
				>The application is setup with the lastest stack of most promising tools for the Web development.</p
			>
			<p class="mb-8 leading-relaxed">Tailwindcss | Postcss | Modular Styles | Global Styles</p>
			<p class="mb-8 leading-relaxed">Typescript | Husky | Storybook</p>
			<p class="mb-8 leading-relaxed">PWA | SSR | Scalable project structure</p>
		</div>
		<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
			<img
				class="object-cover object-center rounded"
				alt="hero"
				src="https://dummyimage.com/720x600"
				width="720"
				height="600"
			/>
		</div>
	</div>
</section>
