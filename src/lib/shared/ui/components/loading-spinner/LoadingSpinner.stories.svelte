<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import LoadingSpinner from './LoadingSpinner.svelte';
</script>

<Meta title="UI/LoadingSpinner" component="{LoadingSpinner}" />

<!--  -->

<Template let:args>
	<LoadingSpinner {...args} />
</Template>

<Story name="Primary" />
