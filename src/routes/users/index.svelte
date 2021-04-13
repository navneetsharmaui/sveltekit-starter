<style lang="postcss">
</style>

<script lang="ts" context="module">
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
		logger.debug(user);
		goPlaces(`/users/${user.id}`);
	};

	const goPlaces = (url: string): void => {
		goto(`${url}`).catch((e) => logger.error(e));
	};
</script>

<Title title="Users" />

<div>
	<span class="users-list">
		{#each users as user}
			<div class="user-card">
				<Card on:click="{() => selectedUser(user)}">
					<span slot="card-content">
						<div>{user.name}</div>
						<div>{user.job}</div>
					</span>
				</Card>
			</div>
		{/each}
	</span>
</div>
