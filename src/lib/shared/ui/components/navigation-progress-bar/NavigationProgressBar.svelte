<style lang="scss">
	:global(#nprogress) {
		pointer-events: none;
	}

	:global(#nprogress .bar) {
		background-color: rgb(138, 132, 132);

		position: fixed;
		z-index: 2000;
		top: 0;
		left: 0;

		width: 100%;
		height: 4px;
	}

	:global(#nprogress .peg) {
		display: block;
		position: absolute;
		right: 0px;
		width: 100px;
		height: 100%;
		box-shadow: 0 0 10px rgb(138, 132, 132), 0 0 5px rgb(138, 132, 132);
		opacity: 1;

		-webkit-transform: rotate(3deg) translate(0px, -4px);
		-ms-transform: rotate(3deg) translate(0px, -4px);
		transform: rotate(3deg) translate(0px, -4px);
	}

	:global(#nprogress .spinner) {
		display: block;
		position: fixed;
		z-index: 2000;
		top: 15px;
		right: 15px;
	}

	:global(#nprogress .spinner-icon) {
		width: 18px;
		height: 18px;
		box-sizing: border-box;
		border: solid 2px transparent;
		border-top-color: rgb(138, 132, 132);
		border-left-color: rgb(138, 132, 132);
		border-radius: 50%;
		-webkit-animation: nprogress-spinner 400ms linear infinite;
		animation: nprogress-spinner 400ms linear infinite;
	}

	:global(.nprogress-custom-parent) {
		overflow: hidden;
		position: relative;
	}

	:global(.nprogress-custom-parent #nprogress .spinner) {
		position: absolute;
	}

	:global(.nprogress-custom-parent #nprogress .bar) {
		position: absolute;
	}

	@-webkit-keyframes nprogress-spinner {
		0% {
			-webkit-transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
		}
	}

	@keyframes nprogress-spinner {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>

<script lang="ts">
	// Svelte Imports
	import { navigating } from '$app/stores';
	import { browser } from '$app/env';

	// Third party imports
	import NProgress from 'nprogress';

	NProgress.configure({
		showSpinner: false,
	});

	$: if (browser) {
		$navigating ? NProgress.start() : NProgress.done();
	}
</script>
