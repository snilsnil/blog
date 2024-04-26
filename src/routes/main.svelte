<script>
    export let rootpath;
    let main;
    const loading=async function(){
        let test=await (await fetch(`${rootpath}test.json`)).json();
        let story=await (await fetch(`${rootpath}test2.json`)).json();
        main=mergeObjects(test, story)
        console.log(main);
        return main;
    }

    // 모든 게시글 모으기
    function mergeObjects(obj1, obj2) {
        const mergedObj = {};
        for (const key in obj1) {
            if (Array.isArray(obj1[key])) {
            mergedObj[key] = obj1[key].concat(obj2[key]);
            } else {
            mergedObj[key] = obj1[key];
            }
        }

        for (const key in obj2) {
            if (!mergedObj.hasOwnProperty(key)) {
            mergedObj[key] = obj2[key];
            }
        }

        return mergedObj;
    }
    
</script>

<div class="main">
    {#await loading()}
    <!-- 
        여기는 파일이 불러올때 띄울 메세지를 적는다
    -->
    {:then cont}
        {#each cont.contant as {title, text}}
        <div class="contant_box">
                <img class="imag" src="{rootpath}icon.png" alt="사진">
                <p class="title">{title}</p><br>
                <p class="text">{text}</p>
        </div>
        {/each}
    {/await}
    
</div>

<style>

    .main{
        margin: auto auto;
        margin-top: 100px;
    }

    .contant_box{
        margin: auto auto 50px;
        width:70%;
        height:300px;
        border: 1px solid black;
        border-radius: 1em;
        text-align: center;
    }

    .imag{
        float: left;
        margin-right: 20px;
        width:25%;
        height: 100%;
        display: inline;
    }

    .title{
        text-align: center;
        display: block;
        font-size: 2em;
        margin-block-start: 1.5em;
        margin-block-end: 0em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
        unicode-bidi: isolate;
    }

    .text{
        font-size: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        text-align: left;
        word-wrap: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
    }
</style>