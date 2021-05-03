<style lang="postcss">
</style>

<script lang="ts" context="module">
	export async function load({ page, fetch }) {
		return {
			props: {
				user: await fetch(`/users/${page.params.user}.json`).then((res) => res.json()),
			},
		};
	}
</script>

<script lang="ts">
	// Models
	import type { UserModel } from '$models/classes/user.model';
	// Components
	import { Card } from '$ui/components/card';
	// Utils
	import HeadTags from '$shared/components/head-tags/HeadTags.svelte';
	import type { IMetaTagProperties } from '$lib/models';

	export let user: UserModel;

	let metaData: Partial<IMetaTagProperties> = {
		title: `${user.name} | Sveltekit`,
		description:
			'Sveltekit starter project created with sveltekit, typescript, tailwindcss, postcss, husky, and storybook. The project has the structure set up for the scaleable project. (sveltekit, typescript, tailwindcss, postcss, husky, Storybook).',
		url: `https://sveltekit-starter.vercelapp.com/users/${user.id}`,
		logoUrl: 'https://sveltekit-starter.vercelapp.com/favicon.ico',
		keywords: ['sveltekit', 'sveltekit starter', 'sveltekit starter users'],
		searchUrl: `https://sveltekit-starter.vercelapp.com/users/${user.id}`,
		sitemapUrl: 'https://sveltekit-starter.vercelapp.com/sitemap.xml',
	};
	$: {
		if (user && user.id) {
			metaData = {
				title: `${user.name} | Sveltekit`,
				url: `https://sveltekit-starter.vercelapp.com/users/${user.id}`,
				logoUrl: 'https://sveltekit-starter.vercelapp.com/favicon.ico',
				keywords: ['sveltekit', 'sveltekit-starter', 'sveltekit-starter-users'],
				searchUrl: `https://sveltekit-starter.vercelapp.com/users/${user.id}`,
				sitemapUrl: 'https://sveltekit-starter.vercelapp.com/sitemap.xml',
			};
		}
	}
</script>

<HeadTags metaData="{metaData}" />

<section class="text-gray-600 body-font">
	<div class="container px-5 py-24 mx-auto">
		<div class="flex flex-col text-center w-full mb-20">
			<p class="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
		</div>
		<div class="flex flex-col text-center w-full mb-20">
			<div class="lg:w-1/4 mx-auto">
				<Card>
					<span slot="card-content">
						<div
							class="w-16 h-16 sm:mb-4 mb-4 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 flex-shrink-0"
						>
							<svg
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								class="w-10 h-10"
								viewBox="0 0 24 24"
							>
								<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
								<circle cx="12" cy="7" r="4"></circle>
							</svg>
						</div>
						<div class="font-medium">{user.name}</div>
						<div class="font-normal">{user.job}</div>
						<a class="text-red-500 cursor-pointer inline-flex items-center" href="/users"
							>Go back
							<svg
								class="w-4 h-4 ml-2"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="M5 12h14"></path>
								<path d="M12 5l7 7-7 7"></path>
							</svg>
						</a>
					</span>
				</Card>
			</div>
		</div>
	</div>
</section>
