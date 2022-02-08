<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = ({ page }) => {
		const { params } = page;
		if (!params.productId || Number.isNaN(params.productId) || Number(params.productId) > 5) {
			return {
				status: 404,
				error: `Not product found with id ${params.productId}`,
			};
		}
		return {
			props: {
				productId: params.productId,
			},
			status: 200,
		};
	};
</script>

<script lang="ts">
	import StatsCard from '$ui/components/cards/StatsCard.svelte';
	import { page } from '$app/stores';

	export let productId!: string;
</script>

<div class="w-full flex flex-col px-4 md:px-10 mx-auto">
	<div class="w-full py-4">
		<h1 class="font-semibold text-xl"> Sales of product {productId} </h1>
	</div>
	<div class="w-full flex flex-col lg:flex-row space-x-0 space-y-2 lg:space-x-2 lg:space-y-0">
		<div class="w-full lg:w-6/12">
			<StatsCard
				statSubtitle="SALES"
				statTitle="2,356"
				statArrow="down"
				statPercent="3.48"
				statPercentColor="text-red-500"
				statDescripiron="Since last week"
				statIconName="fas fa-chart-pie"
				statIconColor="bg-red-500"
			/>
		</div>
		<div class="w-full lg:w-6/12">
			<StatsCard
				statSubtitle="SALES"
				statTitle="2,356"
				statArrow="down"
				statPercent="3.48"
				statPercentColor="text-red-500"
				statDescripiron="Since last week"
				statIconName="fas fa-chart-pie"
				statIconColor="bg-red-500"
			/>
		</div>
	</div>
	<div class="w-full">
		<ul
			class="flex flex-row w-full min-w-full overflow-x-auto mb-0 list-none pt-3 pb-4 border-b-[1px] border-solid border-gray-100"
		>
			<li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
				<a
					sveltekit:prefetch
					href="{`/dashboard/sales/${productId}/overview`}"
					class="text-sm transition-all uppercase px-5 py-3 block leading-normal {$page.path.includes(
						'overview',
					)
						? 'font-semibold'
						: 'font-normal'}"
				>
					Overview
				</a>
			</li>
			<li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
				<a
					sveltekit:prefetch
					href="{`/dashboard/sales/${productId}/subscriptions`}"
					class="text-sm transition-all uppercase px-5 py-3 block leading-normal {$page.path.includes(
						'subscriptions',
					)
						? 'font-semibold'
						: 'font-normal'}"
				>
					Subscriptions
				</a>
			</li>
			<li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
				<a
					sveltekit:prefetch
					href="{`/dashboard/sales/${productId}/invoices`}"
					class="text-sm transition-all uppercase px-5 py-3 block leading-normal {$page.path.includes(
						'invoices',
					)
						? 'font-semibold'
						: 'font-normal'}"
				>
					Invoices
				</a>
			</li>
			<li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
				<a
					sveltekit:prefetch
					href="{`/dashboard/sales/${productId}/customers`}"
					class="text-sm transition-all uppercase px-5 py-3 block leading-normal {$page.path.includes(
						'customers',
					)
						? 'font-semibold'
						: 'font-normal'}"
				>
					Customers
				</a>
			</li>
			<li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
				<a
					sveltekit:prefetch
					href="{`/dashboard/sales/${productId}/deposits`}"
					class="text-sm transition-all uppercase px-5 py-3 block leading-normal {$page.path.includes(
						'deposits',
					)
						? 'font-semibold'
						: 'font-normal'}"
				>
					Deposits
				</a>
			</li>
		</ul>
		<div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 py-6">
			<div class="py-5 flex-auto w-full">
				<div class="w-full">
					<slot />
				</div>
			</div>
		</div>
	</div>
</div>
