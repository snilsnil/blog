import { c as create_ssr_component, e as escape } from "../../../../chunks/ssr.js";
const css = {
  code: ".main.svelte-17xz8tp{margin:auto auto;margin-top:100px}.contant_box.svelte-17xz8tp{margin:auto auto 50px;width:70%;height:300px;text-align:center}.contant_text.svelte-17xz8tp{font-family:'malgun'}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n    export let data;\\n\\n    let title = '';\\n    let text = '';\\n    import { base } from '$app/paths';\\n    // content를 props로 받아와서 사용\\n    import { onMount } from 'svelte';\\n\\n    onMount(() => {\\n        // content가 정의되어 있는 경우에만 값을 설정\\n        if (data) {\\n            \\n            // @ts-ignore\\n            title = data.content.title;\\n            // @ts-ignore\\n            text = data.content.text;\\n        }\\n    });\\n<\/script>\\n\\n<div class=\\"main\\">\\n    <div class=\\"contant_box\\">\\n        <h1>{title}</h1>\\n        <pre class=\\"contant_text\\">{@html text}</pre>\\n    </div>\\n</div>\\n\\n<style>\\n    .main {\\n        margin: auto auto;\\n        margin-top: 100px;\\n    }\\n\\n    .contant_box {\\n        margin: auto auto 50px;\\n        width: 70%;\\n        height: 300px;\\n        text-align: center;\\n    }\\n\\n    .contant_text {\\n        font-family: 'malgun';\\n    }\\n</style>\\n"],"names":[],"mappings":"AA6BI,oBAAM,CACF,MAAM,CAAE,IAAI,CAAC,IAAI,CACjB,UAAU,CAAE,KAChB,CAEA,2BAAa,CACT,MAAM,CAAE,IAAI,CAAC,IAAI,CAAC,IAAI,CACtB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,KAAK,CACb,UAAU,CAAE,MAChB,CAEA,4BAAc,CACV,WAAW,CAAE,QACjB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let title = "";
  let text = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="main svelte-17xz8tp"><div class="contant_box svelte-17xz8tp"><h1>${escape(title)}</h1> <pre class="contant_text svelte-17xz8tp"><!-- HTML_TAG_START -->${text}<!-- HTML_TAG_END --></pre></div> </div>`;
});
export {
  Page as default
};
