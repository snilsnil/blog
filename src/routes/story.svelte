<script>
    const box={
        contant:[
            {
                title:" 스토리입니다",
                text: "스토리 중입니다."
            },
            {
                title:" 스토리입니다2",
                text: "스토리 중입니다."
            },
            {
                title:" 스토리입니다3",
                text: "스토리 중입니다."
            },

        ]
    }
</script>

<div class="main">

    {#each box.contant as  {title, text}, i}
        <div class="contant_box">
            <h1>{title}</h1>
            <div class="contant">
                <img src="" alt="사진">
                {text}
            </div>
        </div>

    {/each}
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