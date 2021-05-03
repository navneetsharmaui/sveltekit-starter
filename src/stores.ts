import { writable } from 'svelte/store';

export const isDev = writable(process.env.NODE_ENV === 'development');
