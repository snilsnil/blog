import { base } from '$app/paths';

export async function load({ params, fetch }) {
    const response = await fetch(`${base}/data.json`);
    const json = await response.json();
    // @ts-ignore
    const content = json.contant.find((/** @type {{ id: any; }} */ item) => item.id == params.id && item.type == "test");
    return { content };
}