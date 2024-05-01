<script>
    import { base } from '$app/paths';
    const loading=async function(){
        let json = await (await fetch('https://snilsnil.github.io/blog_json/test.json')).json();
        json.contant.sort((
            /** @type {{ count: number; }} */ a, /** @type {{ count: number; }} */ b) =>b.count - a.count);
        return json
    }

</script>

<div class="main">
    {#await loading()}
    <!--
        여기는 파일이 불러올때 띄울 메세지를 적는다
    -->
    {:then cont}
        {#each cont.contant as {id,title, text, type}}
            {#if (type=="test")}
                <div class="contant_box">
                    <img class="imag" src="{base}/icon.png" alt="사진">
                    <a href="{base}/{type}/{id}" class="title">{title}</a><br>
                    <p class="text">{text}</p>
                </div>
            {/if}
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