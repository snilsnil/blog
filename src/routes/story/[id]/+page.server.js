export async function load({ params }) {
    const response = await fetch(`https://snilsnil.github.io/blog_json/test.json`);
    const json = await response.json();
    // @ts-ignore
    const content = json.contant.find((/** @type {{ id: any; }} */ item) => item.id == params.id && item.type == "story");
    return { content };
}