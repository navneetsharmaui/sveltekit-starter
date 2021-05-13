<style lang="scss" type="text/scss">
</style>

<script lang="ts" context="module">
	/**
	 * The load function whihc automatically gets executed with page and fetch parameters provided when the route
	 * is loaded. The load function here is asynchronous as the we are fetching the data from the external file.
	 *
	 * @param page
	 * @param fetch
	 *
	 * return props Type{{user: UserModel}}
	 */
	export async function load({ page, fetch }) {
		return {
			props: {
				user: await fetch(`/users/${page.params.user}.json`).then((res) => res.json()),
			},
		};
	}
</script>

<script lang="ts">
	// Start: Local Imports
	// Components
	import { Card } from '$ui/components/card';
	import HeadTags from '$components/head-tags/HeadTags.svelte';

	// Models
	import type { UserModel } from '$models/classes/user.model';
	import type { IMetaTagProperties } from '$models/interfaces/imeta-tag-properties.interface';
	// End: Local Imports

	// Start: Exported Properties
	export let user: UserModel;
	// End: Exported Properties

	// Start: Local component properties

	/**
	 * @type {IMetaTagProperties}
	 */
	let metaData: Partial<IMetaTagProperties> = {
		title: `${user.name} | Sveltekit`,
		description:
			'Sveltekit starter project created with sveltekit, typescript, tailwindcss, postcss, husky, and storybook. The project has the structure set up for the scaleable project. (sveltekit, typescript, tailwindcss, postcss, husky, Storybook).',
		url: `/${user.id}`,
		keywords: ['sveltekit', 'sveltekit starter', 'sveltekit starter users'],
		searchUrl: `/${user.id}`,
	};

	// Start: Reactive properties
	$: {
		if (user && user.id) {
			metaData = {
				title: `${user.name} | Sveltekit`,
				url: `/users/${user.id}`,
				keywords: ['sveltekit', 'sveltekit-starter', 'sveltekit-starter-users', `sveltekit ${user.id}`],
				searchUrl: `/users/${user.id}`,
			};
		}
	}
	// End: Reactive properties

	// End: Local component properties
</script>

<!-- Start: Header Tag -->
<HeadTags metaData="{metaData}" />
<!-- End: Header Tag -->

<!-- Start: User Section -->
<section class="text-gray-600 body-font">
	<div class="container px-5 py-24 mx-auto">
		<div class="flex flex-col text-center w-full mb-20">
			<p class="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
		</div>
		<div class="flex flex-col text-center w-full mb-20">
			<div class="lg:w-1/4 mx-auto">
				<!-- Start: User Card -->
				<Card>
					<!-- Start: Projected Slot with user details -->
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
					<!-- End: Projected Slot with user details -->
				</Card>
				<!-- End: User Card -->
			</div>
		</div>
	</div>
</section>
<!-- End: User Section -->
