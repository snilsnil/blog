import { base } from '$app/paths';

export async function load({ params }) {
    const parm = params.slug;
    return { parm };
}