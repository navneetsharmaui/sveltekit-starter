<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = ({ page }) => {
		const { params } = page;
		if (!params.invoice || Number.isNaN(params.invoice) || Number(params.invoice) > 88888) {
			return {
				status: 404,
				error: 'Not Invoice found with given id',
			};
		}
		return {
			props: {
				invoice: page.params.invoice,
			},
			status: 200,
		};
	};
</script>

<script lang="ts">
	export let invoice: number;
</script>

<div class="w-full flex flex-col p-6">
	<div class="w-full flex flex-col items-center justify-center">
		<div class="w-full">
			<span class="font-semibold"> Stankonia </span>
		</div>
		<div class="w-full">
			<span class="font-semibold text-3xl"> $8000 </span>
		</div>
		<div class="w-full flex flex-row">
			<span class="text-xs text-gray-400"> DUE TODAY </span>
			<span class="text-xs text-gray-400 px-2"> INVOICED 10/31/2020 </span>
		</div>
	</div>
	<div class="w-full flex flex-row text-xs my-2">
		<span> Invoice </span>
		<span class="px-2">
			#{invoice}
		</span>
	</div>
	<div class="w-full flex flex-col items-center justify-center mt-6">
		<div
			class="w-full border-t-[1px] border-solid border-gray-200 py-4 flex flex-row justify-between"
		>
			<div> Pro Plan </div>
			<div> $6000 </div>
		</div>
		<div
			class="w-full border-t-[1px] border-solid border-gray-200 py-4 flex flex-row justify-between"
		>
			<div> Custom </div>
			<div> $2000 </div>
		</div>
		<div
			class="w-full border-b-[1px] border-t-[1px] border-solid border-gray-200 py-4 flex flex-row justify-between font-semibold"
		>
			<div> Net Total </div>
			<div> $8000 </div>
		</div>
	</div>
</div>
