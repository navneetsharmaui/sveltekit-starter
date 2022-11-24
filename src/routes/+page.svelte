<script lang="ts">
	// Start: External Imports
	// End: External Imports

	// Start: Svelte Imports
	// End: Svelte Imports

	// Start: Local Imports

	// Core services

	// Utils

	// Components
	import HeadTags from '$components/head-tags/HeadTags.svelte';
	import BlogPost from '$components/blog-post/BlogPost.svelte';
	import ProjectCard from '$components/project-card/ProjectCard.svelte';

	// Models
	import type { IMetaTagProperties } from '$models/interfaces/imeta-tag-properties.interface';
	import type { IProjectCard } from '$models/interfaces/iproject-card.interface';
	import type { IBlogPostSummary } from '$models/interfaces/iblog-post-summary.interface';
	import ExternalLink from '$ui/components/external-link/ExternalLink.svelte';
	// End: Local Imports

	// Exports
	// Start: Local component properties
	const metaData: Partial<IMetaTagProperties> = {
		title: `Sveltekit Start | Sveltekit`,
		description:
			'Sveltekit starter project created with sveltekit, typescript, tailwindcss, postcss, husky, and storybook. The project has the structure set up for the scaleable project. (sveltekit, typescript, tailwindcss, postcss, husky, Storybook).',
		keywords: ['sveltekit', 'sveltekit starter', 'sveltekit starter home'],
	};

	const blogs: IBlogPostSummary[] = [
		{
			title: 'Welcome to my site!',
			summary:
				'Fusce ac lorem sit amet metus vestibulum dapibus ut at mauris. Etiam ut pulvinar nibh.',
		},
		{
			title: 'A second article',
			summary:
				'Fusce ac lorem sit amet metus vestibulum dapibus ut at mauris. Etiam ut pulvinar nibh.',
		},
		{
			title: 'Yet another article',
			summary:
				'Fusce ac lorem sit amet metus vestibulum dapibus ut at mauris. Etiam ut pulvinar nibh.',
		},
	];

	const projects: IProjectCard[] = [
		{
			title: 'Sveltekit Starter',
			description:
				'Sveltekit starter project created with sveltekit, typescript, tailwindcss, postcss, husky, and storybook. The project has the structure set up for the scaleable web application.',
			slug: 'https://github.com/navneetsharmaui/sveltekit-starter',
			icon: '',
		},
		{
			title: 'Sveltekit Blog',
			description:
				'Sveltekit Blog starter project created with sveltekit, typescript, tailwindcss, postcss, husky, and storybook. The project has the structure set up for the scaleable web application and blog.',
			slug: 'https://github.com/navneetsharmaui/sveltekit-blog',
			icon: '',
		},
	];
	// End: Local component properties

	// Start: Local component methods

	// End: Local component methods
</script>

<!-- Start: Header Tag -->
<HeadTags metaData="{metaData}" />
<!-- End: Header Tag -->

<!-- Start: Home Page container -->
<div class="flex flex-col justify-center items-start w-full mx-auto">
	<h1 class="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
		Hey, I’m Sveltekit Starter
	</h1>
	<p class="prose text-gray-600 dark:text-gray-400 mb-16">
		I'm a developer and creator. I work as the Software Developer at XYZ. You’ve found my
		personal slice of the internet –&nbsp; while you're here
		<a
			sveltekit:prefetch
			href="/about"
			aria-label="about me"
			class="text-blue-700 hover:text-blue-800 transition">learn more about me.</a
		>
	</p>

	<p class="prose text-gray-600 dark:text-gray-400 mb-16">
		If you want to use the pre setup blog template then you can use
		<ExternalLink
			href="{'https://github.com/navneetsharmaui/sveltekit-blog'}"
			ariaLabel="{'Sveltekit blog'}">Sveltekit Blog Template</ExternalLink
		>
	</p>

	<!-- Start: Popular Blog Section -->
	<h2 class="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
		Most Recent
	</h2>

	{#if blogs.length > 0}
		{#each blogs as blog}
			<BlogPost blog="{blog}" />
		{/each}
	{/if}
	<!-- End: Popular Blog Section -->

	<!-- Start: Top Projects -->
	<h2 class="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
		Top Projects
	</h2>

	{#if projects.length > 0}
		{#each projects as project}
			<ProjectCard project="{project}" />
		{/each}
	{/if}
	<!-- End: Top Projects -->
</div>
<!-- End: Home Page container -->
