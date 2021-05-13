<style lang="scss">
</style>

<script lang="ts" context="module">
	export async function load({ page, fetch }) {
		return {
			props: {
				users: await fetch('/users.json').then((res) => res.json()),
			},
		};
	}
</script>

<script lang="ts">
	// Sevelte Imports
	// import { goto } from '$app/navigation';

	// Start: Local Imports
	// Utils
	import { Logger, LoggerUtils } from '$utils/logger';

	// Components
	import { Card } from '$ui/components/card';
	import HeadTags from '$components/head-tags/HeadTags.svelte';

	// Models
	import type { UserModel } from '$models/classes/user.model';
	import type { IMetaTagProperties } from '$lib/models';
	// End: Local Imports

	// Start: Exported properties
	export let users: UserModel[] = [];
	// End: Exported properties

	// Start: Local component properties

	/**
	 * @type {IMetaTagProperties}
	 */
	const metaData: Partial<IMetaTagProperties> = {
		title: 'Users | Sveltekit',
		description:
			'Sveltekit starter project created with sveltekit, typescript, tailwindcss, postcss, husky, and storybook. The project has the structure set up for the scaleable project. (sveltekit, typescript, tailwindcss, postcss, husky, Storybook).',
		url: '/users',
		keywords: ['sveltekit', 'sveltekit starter', 'sveltekit starter users'],
		searchUrl: '/users',
	};

	const logger: Logger = LoggerUtils.getInstance('Users');
	// End: Local component properties

	// Start: Local functions
	// const selectedUser = (user: UserModel): void => {
	// 	goPlaces(`/users/${user.id}`);
	// };

	// const goPlaces = (url: string): void => {
	// 	goto(`${url}`).catch((e) => logger.error(e));
	// };
	// End: Local functions
</script>

<!-- Start: Header Tag -->
<HeadTags metaData="{metaData}" />
<!-- End: Header Tag -->

<!-- Start: Users List Section -->
<section class="text-gray-600 body-font">
	<div class="container px-5 py-24 mx-auto">
		<div class="flex flex-col text-center w-full mb-10">
			<p class="lg:w-2/3 mx-auto leading-relaxed text-base"
				>This page is setup in a way where you can programmatically route to sub routes. Click on each user card
				to go to there details view.</p
			>
		</div>
		<div class="flex flex-col text-center w-full mb-20">
			<!-- Start: Users list -->
			<span class="users-list">
				{#each users as user}
					<div class="user-card">
						<!-- Start: Users details card -->
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

								<div class="font-medium">
									<a sveltekit:prefetch class=" hover:text-gray-900" href="{`/users/${user.id}`}">
										{user.name}
									</a>
								</div>
							</span>
						</Card>
						<!-- End: Users details card -->
					</div>
				{/each}
			</span>
			<!-- End: Users list -->
		</div>
	</div>
</section>
<!-- End: Users List Section -->
