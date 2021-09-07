<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Card from './Card.svelte';
</script>

<Meta title="UI/Card" component="{Card}" />

<!--  -->

<Template let:args>
	<Card {...args} on:click="{args.onClick}">
		<span slot="card-content">
			<div> Sveltekit Starter </div>
			<div> SSE </div>
		</span>
	</Card>
</Template>

<Story name="Primary" />
