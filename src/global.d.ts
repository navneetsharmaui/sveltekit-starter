/// <reference types="@sveltejs/kit" />
/// <reference types="svelte" />
/// <reference types="vite/client" />

/// <reference types="@storybook/addon-svelte-csf" />

declare module '@storybook/addon-svelte-csf';

interface ImportMetaEnv {
	VITE_LOCAL_BASE_URL: string;
}
