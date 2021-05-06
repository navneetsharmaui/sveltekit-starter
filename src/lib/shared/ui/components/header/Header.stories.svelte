<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Header from './Header.svelte';

	const navLinks = [
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

<Meta title="UI/Header" component="{Header}" />

<Template let:args>
	<Header {...args} />
</Template>

<Story name="With Title and NavLinks" args="{{ title: 'Sveltekit Storybook', navLinks }}" />

<Story name="Without Title" />
