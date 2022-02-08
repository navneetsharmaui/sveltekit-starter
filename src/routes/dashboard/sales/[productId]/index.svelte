<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = ({ page }) => ({
		status: 302,
		redirect: `/dashboard/sales/${page.params.productId}/overview`,
	});
</script>
