<script lang="ts">
	import type { IApplicationRouteTitle } from '$lib/models';

	import { onMount } from 'svelte';
	import Title from '../title/Title.svelte';

	export let routePathData: IApplicationRouteTitle[] = [];

	const getRouteTitle = (value: string): string => {
		return routePathData
			.filter((data) => data.path === value)
			.map((data) => data.name)
			.reduce((data) => data);
	};

	let pathName: string = '';
	let title: string = '';

	const getPathFromWindow = (): void => {
		setTimeout(() => {
			pathName = window ? window.location.pathname : '/';
			title = getRouteTitle(pathName);
		}, 300);
	};

	const onUpdate = (): void => {
		getPathFromWindow();
	};

	onMount(() => {
		getPathFromWindow();
	});
</script>

<svelte:window on:click="{() => onUpdate()}" />
<Title title="{title}" />
