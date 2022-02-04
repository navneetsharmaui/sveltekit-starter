<script lang="ts">
	type Product = {
		id: number;
		name: string;
		price: number;
		quantity: number;
	};

	const products: Product[] = [
		{
			id: 1,
			name: 'Product 1',
			price: 100,
			quantity: 10,
		},
		{
			id: 2,
			name: 'Product 2',
			price: 200,
			quantity: 20,
		},
		{
			id: 3,
			name: 'Product 3',
			price: 300,
			quantity: 30,
		},
		{
			id: 4,
			name: 'Product 4',
			price: 400,
			quantity: 40,
		},
		{
			id: 5,
			name: 'Product 5',
			price: 500,
			quantity: 50,
		},
	];
</script>

<div class="w-full flex flex-col px-4 md:px-10 mx-auto">
	<div class="w-full py-4">
		<h1 class="font-semibold text-xl"> Products </h1>
	</div>
	<div class="w-full py-4">
		<hr />
	</div>
	<div class="w-full flex flex-col md:flex-row flex-wrap pt-4">
		{#each products as product, index (product.id)}
			<a
				href="{`/dashboard/sales/${product.id}`}"
				class="m-2 w-full lg:w-[calc(50%-1rem)] flex flex-row justify-between border-[1px] border-solid border-gray-100 rounded shadow p-4 hover:bg-gray-100 transition-all duration-200 ease-in-out"
			>
				<div>
					<span class="text-base font-medium">
						{product.name}
					</span>
				</div>
				<div>
					<span class="text-base font-medium">
						${product.price}
					</span>
				</div>
			</a>
		{/each}
	</div>
</div>
