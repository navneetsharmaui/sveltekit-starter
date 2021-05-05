<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

	import Button from './Button.svelte';

	let count = 0;

	function handleClick() {
		count += 1;
	}
</script>

<Meta title="UI/Button" component="{Button}" />

<Template let:args>
	<Button {...args} on:click="{handleClick}">
		You clicked: {count}
	</Button>
</Template>

<Story name="Rounded" args="{{ rounded: true }}" />

<Story name="Square" source args="{{ rounded: false }}" />

<Story name="Button No Args">
	<Button>Label</Button>
</Story>
