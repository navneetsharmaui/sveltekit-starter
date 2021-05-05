<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Header from './Header.svelte';
</script>

<Meta title="UI/Header" component="{Header}" />

<Template let:args>
	<Header {...args} />
</Template>

<Story name="With Title" args="{{ title: 'Sveltekit Storybook' }}" />

<Story name="Without Title" args="{{}}" />
