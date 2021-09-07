<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import ExternalLink from './ExternalLink.svelte';
</script>

<Meta title="UI/ExternalLink" component="{ExternalLink}" />

<!--  -->

<Template let:args>
	<ExternalLink {...args}>
		<span>
			<div> External Link </div>
		</span>
	</ExternalLink>
</Template>

<Story name="Primary" />
