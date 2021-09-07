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
<div class="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
	<h1 class="font-bold text-3xl md:text-5xl tracking-tight mb-4 dark:text-white"> {user.name} </h1>
	<div class="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
		<h2 class="dark:text-white">
			{user.job}
		</h2>
		<p>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae consequatur voluptatem rerum aut reiciendis
			nemo consectetur aliquid sunt, atque obcaecati doloribus autem possimus incidunt. Iusto non vero tenetur
			consequuntur deleniti.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime recusandae omnis quo suscipit excepturi
			praesentium exercitationem quam enim, aut cum similique architecto in tenetur vel dolores atque voluptatum
			amet hic.
		</p>
		<p>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae consequatur voluptatem rerum aut reiciendis
			nemo consectetur aliquid sunt, atque obcaecati doloribus autem possimus incidunt. Iusto non vero tenetur
			consequuntur deleniti.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime recusandae omnis quo suscipit excepturi
			praesentium exercitationem quam enim, aut cum similique architecto in tenetur vel dolores atque voluptatum
			amet hic.
		</p>
		<p>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae consequatur voluptatem rerum aut reiciendis
			nemo consectetur aliquid sunt, atque obcaecati doloribus autem possimus incidunt. Iusto non vero tenetur
			consequuntur deleniti.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime recusandae omnis quo suscipit excepturi
			praesentium exercitationem quam enim, aut cum similique architecto in tenetur vel dolores atque voluptatum
			amet hic.
		</p>
	</div>
</div>

<!-- End: User Section -->
