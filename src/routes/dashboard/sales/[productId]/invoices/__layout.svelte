<script lang="ts">
	import { page } from '$app/stores';

	type Invoice = {
		id: number;
		customer: string;
		billingAddress: string;
		shippingAddress: string;
		year: number;
		city: string;
		total: number;
		status: string;
	};
	const invoices: Invoice[] = [
		{
			id: 11111,
			customer: 'John Doe',
			billingAddress: '123 Main St',
			shippingAddress: '123 Main St',
			city: 'New York',
			total: 100,
			status: 'Paid',
			year: 2019,
		},
		{
			id: 22222,
			customer: 'Jhon cena',
			billingAddress: '123 Main St',
			shippingAddress: '123 Main St',
			city: 'San Francisco',
			total: 200,
			status: 'Overdue',
			year: 2018,
		},
		{
			id: 33333,
			customer: 'Micheal Scott',
			billingAddress: '123 Main St',
			shippingAddress: '123 Main St',
			city: 'Los Angeles',
			total: 300,
			status: 'Due Today',
			year: 2017,
		},
		{
			id: 44444,
			customer: 'Jane Doe',
			billingAddress: '123 Main St',
			shippingAddress: '123 Main St',
			city: 'New York',
			total: 400,
			status: 'Paid',
			year: 2016,
		},
		{
			id: 55555,
			customer: 'John Doe',
			billingAddress: '123 Main St',
			shippingAddress: '123 Main St',
			city: 'Las Vegas',
			total: 500,
			status: 'Paid',
			year: 2015,
		},
		{
			id: 66666,
			customer: 'Jane Doe',
			billingAddress: '123 Main St',
			shippingAddress: '123 Main St',
			city: 'New Jersey',
			total: 600,
			status: 'Paid',
			year: 2014,
		},
		{
			id: 77777,
			customer: 'John Doe',
			billingAddress: '123 Main St',
			shippingAddress: '123 Main St',
			total: 700,
			city: 'New York',
			status: 'Paid',
			year: 2013,
		},
		{
			id: 88888,
			customer: 'Jane Doe',
			billingAddress: '123 Main St',
			shippingAddress: '123 Main St',
			total: 800,
			city: 'Chicago',
			status: 'Paid',
			year: 2012,
		},
	];

	let invoiceId!: number;

	const toggleInvoice = (invoice: Invoice): void => {
		invoiceId = invoice.id;
	};
</script>

<div class="w-full flex flex-col">
	<div class="w-full flex flex-col md:flex-row justify-center items-center gap-2">
		<div class="flex flex-col justify-center items-start md:items-start w-full md:w-28">
			<div>
				<span class="uppercase text-sm"> Overdue </span>
			</div>
			<div>
				<p class="text-sm font-medium"> $10, 800 </p>
			</div>
		</div>
		<div
			class="w-full flex flex-col justify-center items-start md:items-center md:w-[calc(100%-14rem)]"
		>
			<div class="relative py-2 w-full justify-center items-center">
				<div class="overflow-hidden h-2 text-xs flex rounded bg-green-300">
					<div
						class="w-[35%] shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-300"
					></div>
				</div>
			</div>
		</div>
		<div class="flex flex-col justify-center items-start md:items-end w-full md:w-28">
			<div>
				<span class="uppercase text-sm"> Due soon </span>
			</div>
			<div>
				<p class="text-sm font-medium"> $10, 800 </p>
			</div>
		</div>
	</div>
	<div class="w-full flex flex-col py-4">
		<div class="w-full py-4">
			<h4 class="uppercase text-sm"> Invoice List </h4>
		</div>
		<div
			class="w-full rounded-lg shadow-md border-[1px] border-solid border-gray-100 flex flex-col md:flex-row divide-x-0 divide-y md:divide-x md:divide-y-0"
		>
			<div class="flex flex-col w-full md:w-1/2 max-h-[30rem] overflow-x-auto">
				{#each invoices as invoice, index (invoice.id)}
					<a
						sveltekit:prefetch
						href="{`/dashboard/sales/${$page.params.productId}/invoices/${invoice.id}`}"
						class="w-full flex flex-row justify-between p-5 hover:bg-gray-100 {$page
							.params.invoice === `${invoice.id}`
							? 'bg-gray-100'
							: ''} transition-all duration-200 ease-in-out"
						on:click="{() => toggleInvoice(invoice)}"
					>
						<div class="flex flex-col items-start">
							<h5 class="font-semibold"> {invoice.city} </h5>
							<p class="text-xs text-gray-400"> {invoice.year} </p>
						</div>
						<div class="flex flex-col items-end">
							<h5 class="font-semibold"> ${invoice.total} </h5>
							<p class="text-xs text-red-500"> {invoice.status} </p>
						</div>
					</a>
				{/each}
			</div>
			<div class="flex flex-col w-full md:w-1/2">
				<slot />
			</div>
		</div>
	</div>
</div>
