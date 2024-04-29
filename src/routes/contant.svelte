<script>
    export let rootpath;
    export let id;
    export let type;
    let title;
    let text;
    let contant;
    
    const loading=async function(){
        let json=await (await fetch(`${rootpath}test.json`)).json();
        for(let i=0; i<json.contant.length;i++){
            if(id==json.contant[i].id && type==json.contant[i].type){
                title=json.contant[i].title
                text=json.contant[i].text
            }
        }
        return contant={title, text};
    }
</script>

<div class="main">
    {#await loading()}
    <!-- 
        여기는 파일이 불러올때 띄울 메세지를 적는다
    -->
    {:then cont}
    <div class="contant_box">
        <h1>{cont.title}</h1>
        <pre class="contant_text">{@html cont.text}</pre>
    </div>
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
        text-align: center;
    }
    .contant_text{
        font-family: 'malgun';
    }
</style>