import { c as create_ssr_component, i as is_promise, n as noop, f as each, e as escape } from "../../../chunks/ssr.js";
import { b as base } from "../../../chunks/paths.js";
const css = {
  code: ".main.svelte-12hu38f{margin:auto auto;margin-top:100px}.contant_box.svelte-12hu38f{margin:auto auto 50px;width:70%;height:300px;border:1px solid black;border-radius:1em;text-align:center}.imag.svelte-12hu38f{float:left;margin-right:20px;width:25%;height:100%;display:inline}.title.svelte-12hu38f{text-align:center;display:block;font-size:2em;margin-block-start:1.5em;margin-block-end:0em;margin-inline-start:0px;margin-inline-end:0px;font-weight:bold;unicode-bidi:isolate}.text.svelte-12hu38f{font-size:16px;overflow:hidden;text-overflow:ellipsis;white-space:normal;text-align:left;word-wrap:break-word;display:-webkit-box;-webkit-line-clamp:6;-webkit-box-orient:vertical}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n    import { base } from '$app/paths';\\n    const loading=async function(){\\n        let json = await (await fetch('https://snilsnil.github.io/blog_json/test.json')).json();\\n        json.contant.sort((\\n            /** @type {{ count: number; }} */ a, /** @type {{ count: number; }} */ b) =>b.count - a.count);\\n        return json\\n    }\\n\\n<\/script>\\n\\n<div class=\\"main\\">\\n    {#await loading()}\\n    <!--\\n        여기는 파일이 불러올때 띄울 메세지를 적는다\\n    -->\\n    {:then cont}\\n        {#each cont.contant as {id,title, text, type}}\\n            {#if (type==\\"story\\")}\\n                <div class=\\"contant_box\\">\\n                    <img class=\\"imag\\" src=\\"{base}/icon.png\\" alt=\\"사진\\">\\n                    <a href=\\"{base}/{type}/{id}\\" class=\\"title\\">{title}</a><br>\\n                    <p class=\\"text\\">{text}</p>\\n                </div>\\n            {/if}\\n        {/each}\\n    {/await}\\n\\n</div>\\n\\n<style>\\n\\n.main{\\n        margin: auto auto;\\n        margin-top: 100px;\\n    }\\n\\n    .contant_box{\\n        margin: auto auto 50px;                                                   \\nwidth:70%;\\nheight:300px;\\nborder: 1px solid black;\\nborder-radius: 1em;\\ntext-align: center;\\n}\\n\\n.imag{\\nfloat: left;\\nmargin-right: 20px;\\nwidth:25%;\\nheight: 100%;\\ndisplay: inline;\\n}\\n\\n.title{\\ntext-align: center;\\ndisplay: block;\\nfont-size: 2em;\\nmargin-block-start: 1.5em;\\nmargin-block-end: 0em;\\nmargin-inline-start: 0px;\\nmargin-inline-end: 0px;\\nfont-weight: bold;\\nunicode-bidi: isolate;\\n}\\n\\n.text{\\nfont-size: 16px;\\noverflow: hidden;\\ntext-overflow: ellipsis;\\nwhite-space: normal;\\ntext-align: left;\\nword-wrap: break-word;\\ndisplay: -webkit-box;\\n-webkit-line-clamp: 6;\\n-webkit-box-orient: vertical;\\n}\\n</style>"],"names":[],"mappings":"AAgCA,oBAAK,CACG,MAAM,CAAE,IAAI,CAAC,IAAI,CACjB,UAAU,CAAE,KAChB,CAEA,2BAAY,CACR,MAAM,CAAE,IAAI,CAAC,IAAI,CAAC,IAAI,CAC9B,MAAM,GAAG,CACT,OAAO,KAAK,CACZ,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CACvB,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,MACZ,CAEA,oBAAK,CACL,KAAK,CAAE,IAAI,CACX,YAAY,CAAE,IAAI,CAClB,MAAM,GAAG,CACT,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,MACT,CAEA,qBAAM,CACN,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,KAAK,CACd,SAAS,CAAE,GAAG,CACd,kBAAkB,CAAE,KAAK,CACzB,gBAAgB,CAAE,GAAG,CACrB,mBAAmB,CAAE,GAAG,CACxB,iBAAiB,CAAE,GAAG,CACtB,WAAW,CAAE,IAAI,CACjB,YAAY,CAAE,OACd,CAEA,oBAAK,CACL,SAAS,CAAE,IAAI,CACf,QAAQ,CAAE,MAAM,CAChB,aAAa,CAAE,QAAQ,CACvB,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,UAAU,CACrB,OAAO,CAAE,WAAW,CACpB,kBAAkB,CAAE,CAAC,CACrB,kBAAkB,CAAE,QACpB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const loading = async function() {
    let json = await (await fetch("https://snilsnil.github.io/blog_json/test.json")).json();
    json.contant.sort((a, b) => b.count - a.count);
    return json;
  };
  $$result.css.add(css);
  return `<div class="main svelte-12hu38f">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `  `;
    }
    return function(cont) {
      return ` ${each(cont.contant, ({ id, title, text, type }) => {
        return `${type == "story" ? `<div class="contant_box svelte-12hu38f"><img class="imag svelte-12hu38f" src="${escape(base, true) + "/icon.png"}" alt="사진"> <a href="${escape(base, true) + "/" + escape(type, true) + "/" + escape(id, true)}" class="title svelte-12hu38f">${escape(title)}</a><br> <p class="text svelte-12hu38f">${escape(text)}</p> </div>` : ``}`;
      })} `;
    }(__value);
  }(loading())} </div>`;
});
export {
  Page as default
};
