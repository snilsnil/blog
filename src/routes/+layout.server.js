// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
export const trailingSlash = 'always';
export const ssr = true;

import { base } from '$app/paths';

export async function load({ fetch }) {
    const response = await fetch(`${base}/test.json`);
    const json = await response.json();
    json.contant.sort((/** @type {{ count: number; }} */ a, /** @type {{ count: number; }} */ b) => b.count - a.count);
    return { json };
}