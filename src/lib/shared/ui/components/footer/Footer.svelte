<style lang="scss" type="text/scss">
	p {
		text-transform: uppercase;
		font-weight: 100;
		font-size: 1rem;
	}
</style>

<script lang="ts">
	export let footerText: string;
</script>

<header>
	<p>{footerText}</p>
</header>
