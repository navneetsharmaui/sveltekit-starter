<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import ErrorMessage from './ErrorMessage.svelte';
</script>

<Meta title="UI/ErrorMessage" component="{ErrorMessage}" />

<!--  -->

<Template let:args>
	<ErrorMessage {...args}>
		<span>
			<div> Sveltekit Starter </div>
			<div> SSE </div>
		</span>
	</ErrorMessage>
</Template>

<Story name="Primary" />
