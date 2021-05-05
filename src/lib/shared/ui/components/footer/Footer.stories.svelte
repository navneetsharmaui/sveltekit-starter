<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Footer from './Footer.svelte';
</script>

<Meta title="UI/Footer" component="{Footer}" />

<Template let:args>
	<Footer {...args} />
</Template>

<Story
	name="WithCopyright"
	args="{{
		footerText: 'Copyright 2021',
	}}"
/>

<Story name="WithoutCopyright" args="{{}}" />
