/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-misused-promises */
/// <reference lib="webworker" />

import { build, files, timestamp } from '$service-worker';

const cacheName = `DISCOVER-TWITTER-SPACE-${timestamp}`;
const worker = (self as unknown) as ServiceWorkerGlobalScope;

const filesToCache = build.concat(files);
const cacheFilesWitTimeStamp = filesToCache.map((file) => `${file}?${timestamp}`);
const staticAssests = new Set(filesToCache);

const cache = async () => {
	const cachedItems = await caches.open(cacheName);
	await cachedItems.addAll(cacheFilesWitTimeStamp);
};

const clear = async () => {
	const cachedItems = await caches.open(cacheName);
	await cachedItems.delete(cacheName);
};

worker.addEventListener('install', async (event: ExtendableEvent) => {
	event.waitUntil(cache());
	await worker.skipWaiting();
});

worker.addEventListener('activate', async (event: ExtendableEvent) => {
	event.waitUntil(clear());
	await worker.clients.claim();
});
/**
 * Fetch the asset from the cache or the network and store it in the cache.
 * Fall back to the cache if the application is offline.
 */
const fetchAndCache = async (event: FetchEvent) => {
	const cachedItems = await caches.open(`offline${cacheName}`);
	try {
		const response = await fetch(event.request);
		await cachedItems.put(event.request, response.clone());
		return response;
	} catch (error) {
		const cachedResponse = await cachedItems.match(event.request);
		if (cachedResponse) {
			return cachedResponse;
		}
		throw error;
	}
};

worker.addEventListener('fetch', (event) => {
	if (event.request.method === 'GET' || event.request.headers.has('range')) return;

	const url = new URL(event.request.url);
	const isHttp = url.protocol.startsWith('http');
	const isDevServerRequest =
		url.hostname === worker.location.hostname && url.port === worker.location.port;
	const isStaticAsset = url.host === worker.location.host && staticAssests.has(url.pathname);
	const skipBecauseUncached = event.request.cache === 'only-if-cached' && !isStaticAsset;
	if (isHttp && !isDevServerRequest && !isStaticAsset && !skipBecauseUncached) {
		event.respondWith(
			(async () => {
				const cachedAsset = await caches.match(event.request);
				return cachedAsset || fetchAndCache(event);
			})(),
		);
	}
});
