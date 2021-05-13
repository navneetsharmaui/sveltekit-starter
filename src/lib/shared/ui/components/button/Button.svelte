<style lang="scss" type="text/scss">
	.rounded {
		border-radius: 35px;
	}

	.button {
		border: 3px solid;
		padding: 10px 20px;
		background-color: white;
		outline: none;
	}
</style>

<script lang="ts">
	import { createEventDispatcher, afterUpdate } from 'svelte';

	export let text = '';
	export let rounded = true;

	const dispatch = createEventDispatcher();

	const onClick = (event) => {
		console.log(event);
		rounded = !rounded;

		dispatch('click', event);
	};

	afterUpdate(() => {
		dispatch('afterUpdate');
	});
</script>

<button class="button" class:rounded on:click="{(e) => onClick(e)}">
	<strong> {rounded ? 'Rounded' : 'Square'} </strong>
	<br />
	{text}
	<br />
	<slot />
</button>
