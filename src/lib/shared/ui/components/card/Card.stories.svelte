<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Card from './Card.svelte';
</script>

<Meta
	title="UI/Card"
	component="{Card}"
	argTypes="{{
		onClick: { action: 'onClick' },
		name: { control: 'text' },
		job: { control: 'text' },
	}}"
/>

<!--  -->

<Template let:args>
	<Card {...args} on:click="{args.onClick}" />
</Template>

<Story
	name="Primary"
	args="{{
		name: 'Navneet',
		job: 'SSE',
	}}"
>
	<span slot="card-content">
		<div> Navneet </div>
		<div> SSE </div>
	</span>
</Story>

<Story name="Secondary" />
