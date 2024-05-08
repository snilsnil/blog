import { b as base } from "../../chunks/paths.js";
const prerender = true;
const trailingSlash = "always";
const ssr = true;
async function load({ fetch }) {
  const response = await fetch(`${base}/test.json`);
  const json = await response.json();
  json.contant.sort((a, b) => b.count - a.count);
  return { json };
}
export {
  load,
  prerender,
  ssr,
  trailingSlash
};
