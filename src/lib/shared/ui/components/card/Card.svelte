<style lang="scss" type="text/scss">
	.svelte-starter-card {
		background: $card-background-color;
		color: $card-text-color;
		transition: $card-transition;
		display: block;
		position: relative;
		padding: 16px;
		border-radius: 4px;
		box-shadow: $card-box-shadow;
	}
</style>

<script lang="ts">
</script>

<div class="svelte-starter-card" on:click>
	<slot name="card-content" />
</div>
