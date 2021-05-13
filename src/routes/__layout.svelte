<script lang="ts">
	// Start: Local Imports
	// Components
	import Header from '$ui/components/header/Header.svelte';

	// Models
	import type { IHeaderNavLink } from '$models/interfaces/iheader-nav-link.interface';
	// End: Local Imports

	/**
	 * @type {IHeaderNavLink}
	 */
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

<!-- Start: Header Navigation -->
<Header title="Sveltekit Starter" navLinks="{navLinks}" />
<!-- End: Header Navigation -->

<!-- Start: Defaull layout slot -->
<slot />
<!-- End: Defaull layout slot -->
