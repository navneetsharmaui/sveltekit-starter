<!-- Start: Settinge page layout section -->
<section class="text-gray-600 body-font">
	<div class="container px-5 py-24 mx-auto">
		<div class="flex flex-col text-center w-full mb-20">
			<h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Settings</h1>
			<p class="lg:w-2/3 mx-auto leading-relaxed text-base"
				>The page with nested Layouts. Click on the below link to load the nested layouts.</p
			>
		</div>
		<div class="flex flex-col text-center w-full mb-20">
			<div class="submenu">
				<a sveltekit:prefetch href="/settings/profile">Profile</a>
				| <a sveltekit:prefetch href="/settings/notifications">Notifications</a>
			</div>
			<!-- Start: Default slot for the layout section -->
			<slot />
			<!-- End: Default slot for the layout section -->
		</div>
	</div>
</section>
<!-- End: Settings page layout section -->
