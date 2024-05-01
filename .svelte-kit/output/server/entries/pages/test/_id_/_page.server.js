async function load({ params }) {
  const response = await fetch(`https://snilsnil.github.io/blog_json/test.json`);
  const json = await response.json();
  const content = json.contant.find((item) => item.id == params.id && item.type == "test");
  return { content };
}
export {
  load
};
