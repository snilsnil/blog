// @ts-nocheck

import { base } from '$app/paths';

export async function load({ fetch }) {
    const response = await fetch(`${base}/test.json`);
    const json = await response.json();
    json.contant.sort((/** @type {{ count: number; }} */ a, /** @type {{ count: number; }} */ b) => b.count - a.count);
    return { json };
}