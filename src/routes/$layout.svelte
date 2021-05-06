<script lang="ts">
	import type { IHeaderNavLink } from '$lib/models/interfaces/iheader-nav-link.interface';

	import Header from '$ui/components/header/Header.svelte';

	const navLinks: IHeaderNavLink[] = [
		{
			path: '/',
			label: 'Home',
		},
		{
			path: '/about',
			label: 'About',
		},
		{
			path: '/settings',
			label: 'Settings',
		},
		{
			path: '/users',
			label: 'Users',
		},
	];
</script>

<Header title="Sveltekit Starter" navLinks="{navLinks}" />
<slot />
