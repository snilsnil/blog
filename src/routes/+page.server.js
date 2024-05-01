export async function load({ fetch }) {
    const response = await fetch('https://snilsnil.github.io/blog_json/test.json');
    const json = await response.json();
    json.contant.sort((/** @type {{ count: number; }} */ a, /** @type {{ count: number; }} */ b) => b.count - a.count);
    return { json };
}