import { b as base } from "../../chunks/paths.js";
async function load({ fetch }) {
  const response = await fetch(`${base}/test.json`);
  const json = await response.json();
  json.contant.sort((a, b) => b.count - a.count);
  return { json };
}
export {
  load
};
