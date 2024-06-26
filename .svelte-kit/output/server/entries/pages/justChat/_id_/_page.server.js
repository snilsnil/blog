import { b as base } from "../../../../chunks/paths.js";
async function load({ params, fetch }) {
  const response = await fetch(`${base}/data.json`);
  const json = await response.json();
  const content = json.contant.find((item) => item.id == params.id && item.type == "justChat");
  return { content };
}
export {
  load
};
