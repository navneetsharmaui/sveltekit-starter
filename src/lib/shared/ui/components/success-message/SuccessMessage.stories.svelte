<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import SuccessMessage from './SuccessMessage.svelte';
</script>

<Meta title="UI/SuccessMessage" component="{SuccessMessage}" />

<!--  -->

<Template let:args>
	<SuccessMessage {...args}>
		<span>
			<div> Some </div>
		</span>
	</SuccessMessage>
</Template>

<Story name="Primary" />
