<script lang="ts" context="module">
	export const hydrate = false;
	export const prerender = true;
</script>

<script lang="ts">
	import Title from '$components/title/Title.svelte';
</script>

<Title title="About" />

<section class="text-gray-600 body-font">
	<div class="container px-5 py-24 mx-auto">
		<div class="flex flex-col text-center w-full mb-20">
			<h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">About Page</h1>
			<p class="lg:w-2/3 mx-auto leading-relaxed text-base"
				>The template has all the route and sample pages setup for you which you can change and customize
				further. All the pages are by default loaded from the different JS file and is fetched using prefetch
				when use hover over the links, which reduces the load time when user eventually decides to click on the
				link and load the route.</p
			>
		</div>
	</div>
</section>
