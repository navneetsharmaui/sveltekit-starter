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

<div>
	<span class="users-list">
		<div class="user-card">
			<Card>
				<span slot="card-content">
					<div>{user.name}</div>
					<div>{user.job}</div>
				</span>
			</Card>
		</div>
	</span>
</div>
