import { b as base } from "../../chunks/paths.js";
const prerender = true;
const ssr = true;
async function load({ fetch }) {
  const response = await fetch(`${base}/data.json`);
  const json = await response.json();
  json.contant.sort((a, b) => b.count - a.count);
  return { json };
}
export {
  load,
  prerender,
  ssr
};
