<script>
    export let rootpath;
    const loading=async function(){
        return await (await fetch(`${rootpath}test2.json`)).json();
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
            <h1>{title}</h1>
            <div class="contant">
                <img src="" alt="사진">
                {text}
            </div>
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
</style>