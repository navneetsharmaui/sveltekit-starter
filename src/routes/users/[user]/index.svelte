<style lang="postcss">
</style>

<script lang="ts" context="module">
	export async function load({ page, fetch }) {
		return {
			props: {
				user: await fetch(`/users/${page.params.user}.json`).then((res) => res.json()),
			},
		};
	}
</script>

<script lang="ts">
	// Models
	import type { UserModel } from '$models/classes/user.model';
	// Components
	import { Card } from '$ui/components/card';
	// Utils
	import Title from '$components/title/Title.svelte';

	export let user: UserModel;
</script>

<Title title="{user.name}" />

<section class="text-gray-600 body-font">
	<div class="container px-5 py-24 mx-auto">
		<div class="flex flex-col text-center w-full mb-20">
			<p class="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
		</div>
		<div class="flex flex-col text-center w-full mb-20">
			<div class="lg:w-1/4 mx-auto">
				<Card>
					<span slot="card-content">
						<div
							class="w-16 h-16 sm:mb-4 mb-4 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 flex-shrink-0"
						>
							<svg
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								class="w-10 h-10"
								viewBox="0 0 24 24"
							>
								<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
								<circle cx="12" cy="7" r="4"></circle>
							</svg>
						</div>
						<div class="font-medium">{user.name}</div>
						<div class="font-normal">{user.job}</div>
						<a class="text-red-500 cursor-pointer inline-flex items-center" href="/users"
							>Go back
							<svg
								class="w-4 h-4 ml-2"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="M5 12h14"></path>
								<path d="M12 5l7 7-7 7"></path>
							</svg>
						</a>
					</span>
				</Card>
			</div>
		</div>
	</div>
</section>
