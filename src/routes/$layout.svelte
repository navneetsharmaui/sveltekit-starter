<script lang="ts">
	import '../app.scss';
	import '../global.scss';

	import { ApplicationTitles } from '$components';
	import type { IApplicationRouteTitle } from '$lib/models';

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
<header class="text-gray-600 body-font">
	<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
		<a rel="prefetch" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				class="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
				viewBox="0 0 24 24"
			>
				<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
			</svg>
			<span class="ml-3 text-xl">Tailblocks</span>
		</a>
		<nav
			class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center"
		>
			<a rel="prefetch" class="mr-5 hover:text-gray-900" href="/">Home</a>
			<a rel="prefetch" class="mr-5 hover:text-gray-900" href="/about">About</a>
			<a rel="prefetch" class="mr-5 hover:text-gray-900" href="/settings">Settings</a>
		</nav>
	</div>
</header>
<slot />
