<style lang="postcss" type="text/postcss">
	.users-list {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		align-items: center;
		gap: 10px;
	}

	.user-card {
		flex: 0 1 30%;
	}
</style>

<script lang="ts">
	import { onMount } from 'svelte';

	// Models
	import type { UserModel } from '$models/classes/user.model';
	import { userData } from '$data/data';

	// Components
	import { Card } from '$ui/components/card';

	// External Imports
	import { goto } from '$app/navigation';

	// Utils
	import { Logger, LoggerUtils } from '$utils/logger';

	// Services
	import { JSONHttpUtil } from '$core/services/https';

	const logger: Logger = LoggerUtils.getInstance('Users');

	const users: UserModel[] = [...userData];

	const selectedUser = (user: UserModel): void => {
		goPlaces('users', `${user.id}`);
	};

	const goPlaces = (url: string, params: string): void => {
		goto(`${url}/${params}`);
	};

	onMount(async () => {
		const data = await JSONHttpUtil.get<any>(
			'https://jsonplaceholder.typicode.com/photos?_limit=20',
		);
		logger.debug(data);
	});
</script>

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
