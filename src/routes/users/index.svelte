<style lang="postcss">
</style>

<script lang="ts">
	// Models
	import type { UserModel } from '$models/classes/user.model';
	import { userData } from '$data/data';

	// Components
	import { Card } from '$ui/components/card';

	// External Imports
	import { goto } from '$app/navigation';

	// Utils
	import { Logger, LoggerUtils } from '$utils/logger';

	const logger: Logger = LoggerUtils.getInstance('Users');

	const users: UserModel[] = [...userData];

	const selectedUser = (user: UserModel): void => {
		logger.debug(user);
		goPlaces('/about');
	};

	const goPlaces = (url: string): void => {
		goto(`${url}`).catch((e) => logger.error(e));
	};
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
