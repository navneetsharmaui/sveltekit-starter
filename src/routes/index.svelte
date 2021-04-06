<style lang="scss">
	main {
		@apply text-center;
		@apply p-4;
		@apply mx-auto;
	}

	h1 {
		@apply text-red-600;
		@apply uppercase;
		@apply text-6xl;
		@apply font-thin;
		@apply leading-tight;
		@apply my-16 mx-auto;
		@apply max-w-xs;
	}

	p {
		@apply max-w-xs;
		@apply my-8 mx-auto;
		@apply leading-snug;
	}

	@screen sm {
		h1 {
			@apply max-w-none;
		}

		p {
			@apply max-w-none;
		}
	}
</style>

<script lang="ts" context="module">
	export async function load({ page, fetch, session }) {
		console.log(page);
		console.log(session);
		return {};
	}
</script>

<script lang="ts">
	import { JSONHttpUtil } from '$lib/core';

	import Counter from '$lib/Counter.svelte';

	import { goto } from '$app/navigation';

	import { Logger, LoggerUtils } from '$lib/utils';
	import { onMount } from 'svelte';

	const logger: Logger = LoggerUtils.getInstance('Index');

	onMount(async () => {
		const data = await JSONHttpUtil.get<any>(
			'https://jsonplaceholder.typicode.com/photos?_limit=20',
		);
		logger.debug(data);
	});
</script>

<section class="text-gray-600 body-font">
	<div class="container px-5 py-24 mx-auto flex flex-wrap">
		<div class="flex w-full mb-20 flex-wrap">
			<h1
				class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4"
				>Master Cleanse Reliac Heirloom</h1
			>
			<p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base"
				>Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway
				tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep
				jianbing selfies heirloom.</p
			>
		</div>
		<div class="flex flex-wrap md:-m-2 -m-1">
			<div class="flex flex-wrap w-1/2">
				<div class="md:p-2 p-1 w-1/2">
					<img
						alt="gallery"
						class="w-full object-cover h-full object-center block"
						src="https://dummyimage.com/500x300"
					/>
				</div>
				<div class="md:p-2 p-1 w-1/2">
					<img
						alt="gallery"
						class="w-full object-cover h-full object-center block"
						src="https://dummyimage.com/501x301"
					/>
				</div>
				<div class="md:p-2 p-1 w-full">
					<img
						alt="gallery"
						class="w-full h-full object-cover object-center block"
						src="https://dummyimage.com/600x360"
					/>
				</div>
			</div>
			<div class="flex flex-wrap w-1/2">
				<div class="md:p-2 p-1 w-full">
					<img
						alt="gallery"
						class="w-full h-full object-cover object-center block"
						src="https://dummyimage.com/601x361"
					/>
				</div>
				<div class="md:p-2 p-1 w-1/2">
					<img
						alt="gallery"
						class="w-full object-cover h-full object-center block"
						src="https://dummyimage.com/502x302"
					/>
				</div>
				<div class="md:p-2 p-1 w-1/2">
					<img
						alt="gallery"
						class="w-full object-cover h-full object-center block"
						src="https://dummyimage.com/503x303"
					/>
				</div>
			</div>
		</div>
	</div>
</section>
