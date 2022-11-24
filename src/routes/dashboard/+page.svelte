<script lang="ts">
	// Local Imports

	// Components
	import HeadTags from '$components/head-tags/HeadTags.svelte';
	import PageVisitsTable from '$components/tables/PageVisitsTable.svelte';
	import StatsCard from '$ui/components/cards/StatsCard.svelte';

	// Models
	import type { IMetaTagProperties } from '$models/interfaces/imeta-tag-properties.interface';

	// Exports

	// Start: Local component properties
	const metaData: Partial<IMetaTagProperties> = {
		title: 'Dashboard | Sveltekit Starter',
		description: 'Dashboard page of Sveltekit starter project',
		url: '/dashboard',
		keywords: ['sveltekit', 'sveltekit starter', 'sveltekit starter dashboard'],
		searchUrl: '/dashboard',
	};
</script>

<!-- Start: Header Tag -->
<HeadTags metaData="{metaData}" />
<!-- End: Header Tag -->

<div class="relative pt-10">
	<div class="px-4 md:px-10 mx-auto w-full">
		<div>
			<!-- Card stats -->
			<div class="flex flex-col flex-nowrap lg:flex-row lg:flex-wrap">
				<div class="w-full lg:w-[calc(50%-0.25rem)] m-0 lg:ml-1 lg:mb-1">
					<StatsCard
						statSubtitle="ACCOUNTS"
						statTitle="350,897"
						statArrow="up"
						statPercent="3.48"
						statPercentColor="text-emerald-500"
						statDescripiron="Since last month"
						statIconName="far fa-chart-bar"
						statIconColor="bg-red-500"
					/>
				</div>
				<div class="w-full lg:w-[calc(50%-0.25rem)] m-0 lg:ml-1 lg:mb-1">
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
				<div class="w-full lg:w-[calc(50%-0.25rem)] m-0 lg:ml-1 lg:mb-1">
					<StatsCard
						statSubtitle="EXPENSES"
						statTitle="924"
						statArrow="down"
						statPercent="1.10"
						statPercentColor="text-orange-500"
						statDescripiron="Since yesterday"
						statIconName="fas fa-users"
						statIconColor="bg-pink-500"
					/>
				</div>
				<div class="w-full lg:w-[calc(50%-0.25rem)] m-0 lg:ml-1 lg:mb-1">
					<StatsCard
						statSubtitle="PERFORMANCE"
						statTitle="49,65%"
						statArrow="up"
						statPercent="12"
						statPercentColor="text-emerald-500"
						statDescripiron="Since last month"
						statIconName="fas fa-percent"
						statIconColor="bg-red-500"
					/>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="w-full py-10 px-4">
	<hr />
</div>
<div class="block px-4 md:px-10 mx-auto w-full h-auto">
	<div>
		<div class="flex flex-wrap">
			<div class="w-full mb-12 xl:mb-0">
				<PageVisitsTable />
			</div>
		</div>
	</div>
</div>
