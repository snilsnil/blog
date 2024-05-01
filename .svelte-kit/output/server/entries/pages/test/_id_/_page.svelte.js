import { c as create_ssr_component, e as escape } from "../../../../chunks/ssr.js";
const css = {
  code: ".main.svelte-guzu6p{margin:auto auto;margin-top:100px}.contant_box.svelte-guzu6p{margin:auto auto 50px;width:70%}.contant_text_container.svelte-guzu6p{overflow:auto}.contant_text.svelte-guzu6p{font-family:'malgun';white-space:pre-wrap}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n    export let data;\\n\\n    let title = '';\\n    let text = '';\\n    // content를 props로 받아와서 사용\\n    import { onMount } from 'svelte';\\n\\n    onMount(() => {\\n        // content가 정의되어 있는 경우에만 값을 설정\\n        if (data) {\\n            \\n            // @ts-ignore\\n            title = data.content.title;\\n            // @ts-ignore\\n            text = data.content.text;\\n        }\\n    });\\n<\/script>\\n\\n<div class=\\"main\\">\\n    <div class=\\"contant_box\\">\\n        <h1 style=\\"text-align: center;\\">{title}</h1>\\n        <div class=\\"contant_text_container\\">\\n            <pre class=\\"contant_text\\">{@html text}</pre>\\n        </div>\\n    </div>\\n</div>\\n\\n<style>\\n    .main {\\n        margin: auto auto;\\n        margin-top: 100px;\\n    }\\n\\n    .contant_box {\\n        margin: auto auto 50px;\\n        width: 70%;\\n    }\\n\\n    .contant_text_container {\\n        overflow: auto; /* 내용이 넘칠 경우 스크롤 표시 */\\n    }\\n\\n    .contant_text {\\n        font-family: 'malgun';\\n        white-space: pre-wrap; /* 줄 바꿈 처리 */\\n    }\\n</style>\\n\\n"],"names":[],"mappings":"AA8BI,mBAAM,CACF,MAAM,CAAE,IAAI,CAAC,IAAI,CACjB,UAAU,CAAE,KAChB,CAEA,0BAAa,CACT,MAAM,CAAE,IAAI,CAAC,IAAI,CAAC,IAAI,CACtB,KAAK,CAAE,GACX,CAEA,qCAAwB,CACpB,QAAQ,CAAE,IACd,CAEA,2BAAc,CACV,WAAW,CAAE,QAAQ,CACrB,WAAW,CAAE,QACjB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let title = "";
  let text = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="main svelte-guzu6p"><div class="contant_box svelte-guzu6p"><h1 style="text-align: center;">${escape(title)}</h1> <div class="contant_text_container svelte-guzu6p"><pre class="contant_text svelte-guzu6p"><!-- HTML_TAG_START -->${text}<!-- HTML_TAG_END --></pre></div></div> </div>`;
});
export {
  Page as default
};
