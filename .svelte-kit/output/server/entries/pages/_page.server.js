async function load({ fetch }) {
  const response = await fetch("https://snilsnil.github.io/blog_json/test.json");
  const json = await response.json();
  json.contant.sort((a, b) => b.count - a.count);
  return { json };
}
export {
  load
};
