<style lang="scss" type="text/scss">
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
		goPlaces('users', `${user.id}`);
	};

	const goPlaces = (url: string, params: string): void => {
		goto(`${url}/${params}`)
			.then((data) => logger.debug(data))
			.catch((e) => logger.error(e));
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
