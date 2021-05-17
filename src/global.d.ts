/// <reference types="@sveltejs/kit" />
/// <reference types="svelte" />
/// <reference types="vite/client" />

/// <reference types="@storybook/addon-svelte-csf" />

declare module '@storybook/addon-svelte-csf';

interface ImportMetaEnv {
	VITE_BASE_URL: string;
	VITE_CHUCK_NORRIS_API_URL: string;
	VITE_CHUCK_NORRIS_API_LANG: string;
	VITE_GITHUB_API_URL: string;
}
