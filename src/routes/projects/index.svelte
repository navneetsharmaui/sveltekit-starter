<script lang="ts">
	// Start: Local Imports
	// Components
	import HeadTags from '$components/head-tags/HeadTags.svelte';
	import ProjectCard from '$components/project-card/ProjectCard.svelte';
	import ExternalLink from '$ui/components/external-link/ExternalLink.svelte';

	// Models
	import type { IMetaTagProperties } from '$models/interfaces/imeta-tag-properties.interface';
	import type { IProjectCard } from '$models/interfaces/iproject-card.interface';
	// End: Local Imports

	// Start: Local component properties
	const metaData: Partial<IMetaTagProperties> = {
		title: 'Project | Sveltekit Starter',
		description: 'Project page of Sveltekit starter project',
		url: '/projects',
		keywords: ['sveltekit', 'sveltekit starter', 'sveltekit starter about'],
		searchUrl: '/projects',
	};

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
</script>

<!-- Start: Header Tag -->
<HeadTags metaData="{metaData}" />
<!-- End: Header Tag -->

<!-- Start: Project page section -->
<div class="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
	<h1 class="font-bold text-3xl md:text-5xl tracking-tight mb-4 dark:text-white"> Project </h1>
	<div class="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
		<p>
			Hey, I'm Sveltekit Blogger. I'm a Software Developer, writer and creator of&nbsp;
			<ExternalLink href="https://github.com/navneetsharmaui/sveltkit-starter"
				>Sveltekit Starter Project</ExternalLink
			>
			&nbsp;and&nbsp;
			<ExternalLink href="https://github.com/navneetsharmaui/sveltekit-blog"
				>Sveltekit Blog Project</ExternalLink
			>
		</p>
	</div>
	{#if projects.length > 0}
		{#each projects as project}
			<ProjectCard project="{project}" />
		{/each}
	{/if}
</div>
<!-- End: Project page section -->
