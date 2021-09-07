<script lang="ts">
	export let title!: string;

	export let pros!: string[];
</script>

<div class="border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-900 rounded p-6 my-4 w-full">
	<span>{`You might use ${title} if...`}</span>
	<div class="mt-4">
		{#each pros as pro, index (pro)}
			<div class="flex font-medium items-baseline mb-2">
				<div class="h-4 w-4 mr-2">
					<svg class="h-4 w-4 text-green-500" viewBox="0 0 24 24">
						<g
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
							<path d="M22 4L12 14.01l-3-3"></path>
						</g>
					</svg>
				</div>
				<span>{pro}</span>
			</div>
		{/each}
	</div>
</div>
