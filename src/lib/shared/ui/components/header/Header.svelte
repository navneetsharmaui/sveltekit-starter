<style lang="postcss">
</style>

<script lang="ts">
	export let title = '';
</script>

<header class="text-gray-600 body-font">
	<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
		<a sveltekit:prefetch class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/">
			<span class="ml-3 text-xl">{title}</span>
		</a>
		<nav
			class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center"
		>
			<a sveltekit:prefetch class="mr-5 hover:text-gray-900" href="/">Home</a>
			<a sveltekit:prefetch class="mr-5 hover:text-gray-900" href="/about">About</a>
			<a sveltekit:prefetch class="mr-5 hover:text-gray-900" href="/settings">Settings</a>
			<a sveltekit:prefetch class="mr-5 hover:text-gray-900" href="/users">Users</a>
		</nav>
	</div>
</header>
