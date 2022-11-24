<!-- Start: Settinge page layout section -->
<div class="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
	<h1 class="font-bold text-3xl md:text-5xl tracking-tight mb-4 dark:text-white"> Settings </h1>
	<div class="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
		<p class="text-justify">
			The page with nested Layouts. Click on the below link to load the nested layouts.
		</p>
		<p class="text-justify">
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni rem consectetur,
			temporibus aliquam totam ullam. Voluptatibus vel reprehenderit officiis. Quibusdam odio,
			error quaerat soluta amet suscipit a veritatis ipsum sint! Lorem ipsum dolor sit amet
			consectetur, adipisicing elit. Autem, omnis blanditiis eius velit ab quisquam pariatur
			esse hic facere expedita tenetur quas ut illo cumque nobis laboriosam illum ad magnam?
		</p>
	</div>
	<div class="flex flex-col text-center w-full mb-20">
		<div class="submenu">
			<a sveltekit:prefetch href="/settings/profile" class="dark:text-gray-300">Profile</a>
			|
			<a sveltekit:prefetch href="/settings/notifications" class="dark:text-gray-300"
				>Notifications</a
			>
		</div>
		<!-- Start: Default slot for the layout section -->
		<slot />
		<!-- End: Default slot for the layout section -->
	</div>
</div>
<!-- End: Settings page layout section -->
