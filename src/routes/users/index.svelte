<style lang="postcss">
</style>

<script lang="ts" context="module">
	// export const ssr = false;
	export async function load({ page, fetch }) {
		return {
			props: {
				users: await fetch('/users.json').then((res) => res.json()),
			},
		};
	}
</script>

<script lang="ts">
	// Navigation Imports
	import { goto } from '$app/navigation';
	// Models
	import type { UserModel } from '$models/classes/user.model';
	// Components
	import { Card } from '$ui/components/card';
	// Utils
	import { Logger, LoggerUtils } from '$utils/logger';
	import Title from '$components/title/Title.svelte';

	const logger: Logger = LoggerUtils.getInstance('Users');

	export let users: UserModel[] = [];

	const selectedUser = (user: UserModel): void => {
		goPlaces(`/users/${user.id}`);
	};

	const goPlaces = (url: string): void => {
		goto(`${url}`).catch((e) => logger.error(e));
	};
</script>

<Title title="Users" />

<section class="text-gray-600 body-font">
	<div class="container px-5 py-24 mx-auto">
		<div class="flex flex-col text-center w-full mb-10">
			<p class="lg:w-2/3 mx-auto leading-relaxed text-base"
				>This page is setup in a way where you can programmatically route to sub routes. Click on each user card
				to go to there details view.</p
			>
		</div>
		<div class="flex flex-col text-center w-full mb-20">
			<span class="users-list">
				{#each users as user}
					<div class="user-card">
						<Card on:click="{() => selectedUser(user)}">
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
							</span>
						</Card>
					</div>
				{/each}
			</span>
		</div>
	</div>
</section>
