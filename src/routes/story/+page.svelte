<script>
    import { base } from '$app/paths';
    export let data;

</script>

<div class="main">
    {#each data.json.contant as { id, type, title, text }}
        {#if type=='story'}
            <div class="contant_box">
                <img class="image" src="{base}/icon.png" alt="사진">
                <a href="{base}/story/{id}" class="title">{title}</a><br>
                <p class="text">{text}</p>
            </div>
        {/if}
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

    .image {
        float: left;
        margin-right: 20px;
        width: 250px;
        height: 100%;
        display: inline;
    }

    .title {
        display: block;
        font-size: 2em;
        margin-block-start: 40px;
        margin-block-end: 0em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
        unicode-bidi: isolate;
        text-decoration: none; /* 링크의 밑줄 제거 */
    }

    .text {
        font-size: 20px;
        margin-top: 5px;
        padding-right: 30px;
        padding-left: 30px;
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