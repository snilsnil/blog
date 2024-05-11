import { c as create_ssr_component, b as each, e as escape } from "../../../chunks/ssr.js";
import { b as base } from "../../../chunks/paths.js";
const css = {
  code: ".main.svelte-bhkj8h{margin:auto auto;margin-top:100px}.contant_box.svelte-bhkj8h{margin:auto auto 50px;width:70%;height:300px;border:1px solid black;border-radius:1em;text-align:center}.image.svelte-bhkj8h{float:left;margin-right:20px;width:250px;height:100%;display:inline}.title.svelte-bhkj8h{display:block;font-size:2em;margin-block-start:40px;margin-block-end:0em;margin-inline-start:0px;margin-inline-end:0px;font-weight:bold;unicode-bidi:isolate;text-decoration:none}.text.svelte-bhkj8h{font-size:20px;margin-top:5px;padding-right:30px;padding-left:30px;overflow:hidden;text-overflow:ellipsis;white-space:normal;text-align:left;word-wrap:break-word;display:-webkit-box;-webkit-line-clamp:6;-webkit-box-orient:vertical}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n    import { base } from '$app/paths';\\n    export let data;\\n\\n<\/script>\\n\\n<div class=\\"main\\">\\n    {#each data.json.contant as { id, type, title, text }}\\n        {#if type=='story'}\\n            <div class=\\"contant_box\\">\\n                <img class=\\"image\\" src=\\"{base}/icon.png\\" alt=\\"사진\\">\\n                <a href=\\"{base}/{type}/{id}\\" class=\\"title\\">{title}</a><br>\\n                <p class=\\"text\\">{text}</p>\\n            </div>\\n        {/if}\\n    {/each}\\n</div>\\n\\n<style>\\n\\n    .main{\\n        margin: auto auto;\\n        margin-top: 100px;\\n    }\\n\\n    .contant_box{\\n        margin: auto auto 50px;                                                   \\n        width:70%;\\n        height:300px;\\n        border: 1px solid black;\\n        border-radius: 1em;\\n        text-align: center;\\n    }\\n\\n    .image {\\n        float: left;\\n        margin-right: 20px;\\n        width: 250px;\\n        height: 100%;\\n        display: inline;\\n    }\\n\\n    .title {\\n        display: block;\\n        font-size: 2em;\\n        margin-block-start: 40px;\\n        margin-block-end: 0em;\\n        margin-inline-start: 0px;\\n        margin-inline-end: 0px;\\n        font-weight: bold;\\n        unicode-bidi: isolate;\\n        text-decoration: none; /* 링크의 밑줄 제거 */\\n    }\\n\\n    .text {\\n        font-size: 20px;\\n        margin-top: 5px;\\n        padding-right: 30px;\\n        padding-left: 30px;\\n        overflow: hidden;\\n        text-overflow: ellipsis;\\n        white-space: normal;\\n        text-align: left;\\n        word-wrap: break-word;\\n        display: -webkit-box;\\n        -webkit-line-clamp: 6;\\n        -webkit-box-orient: vertical;\\n    }\\n</style>"],"names":[],"mappings":"AAoBI,mBAAK,CACD,MAAM,CAAE,IAAI,CAAC,IAAI,CACjB,UAAU,CAAE,KAChB,CAEA,0BAAY,CACR,MAAM,CAAE,IAAI,CAAC,IAAI,CAAC,IAAI,CACtB,MAAM,GAAG,CACT,OAAO,KAAK,CACZ,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CACvB,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,MAChB,CAEA,oBAAO,CACH,KAAK,CAAE,IAAI,CACX,YAAY,CAAE,IAAI,CAClB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,MACb,CAEA,oBAAO,CACH,OAAO,CAAE,KAAK,CACd,SAAS,CAAE,GAAG,CACd,kBAAkB,CAAE,IAAI,CACxB,gBAAgB,CAAE,GAAG,CACrB,mBAAmB,CAAE,GAAG,CACxB,iBAAiB,CAAE,GAAG,CACtB,WAAW,CAAE,IAAI,CACjB,YAAY,CAAE,OAAO,CACrB,eAAe,CAAE,IACrB,CAEA,mBAAM,CACF,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,GAAG,CACf,aAAa,CAAE,IAAI,CACnB,YAAY,CAAE,IAAI,CAClB,QAAQ,CAAE,MAAM,CAChB,aAAa,CAAE,QAAQ,CACvB,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,UAAU,CACrB,OAAO,CAAE,WAAW,CACpB,kBAAkB,CAAE,CAAC,CACrB,kBAAkB,CAAE,QACxB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="main svelte-bhkj8h">${each(data.json.contant, ({ id, type, title, text }) => {
    return `${type == "story" ? `<div class="contant_box svelte-bhkj8h"><img class="image svelte-bhkj8h" src="${escape(base, true) + "/icon.png"}" alt="사진"> <a href="${escape(base, true) + "/" + escape(type, true) + "/" + escape(id, true)}" class="title svelte-bhkj8h">${escape(title)}</a><br> <p class="text svelte-bhkj8h">${escape(text)}</p> </div>` : ``}`;
  })} </div>`;
});
export {
  Page as default
};
