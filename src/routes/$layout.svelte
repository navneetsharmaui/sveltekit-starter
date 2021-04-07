<script lang="ts">
	import '../styles/app.postcss';
	import '../styles/global.postcss';

	import { ApplicationTitles } from '$components';
	import type { IApplicationRouteTitle } from '$lib/models';
	import Header from '$ui/components/header/Header.svelte';

	const routeData: IApplicationRouteTitle[] = [
		{
			path: '/',
			name: 'Home | Sveltekit',
		},
		{
			path: '/home',
			name: 'Home | Sveltekit',
		},
		{
			path: '/about',
			name: 'About | Sveltekit',
		},
		{
			path: '/users',
			name: 'Users | Sveltekit',
		},
		{
			path: '/settings',
			name: 'Settings | Sveltekit',
		},
		{
			path: '/settings/profile',
			name: 'Profile | Sveltekit',
		},
		{
			path: '/settings/notifications',
			name: 'Notifications | Sveltekit',
		},
	];
</script>

<ApplicationTitles routePathData="{routeData}" />
<Header title="Sveltekit Starter" />
<slot />
