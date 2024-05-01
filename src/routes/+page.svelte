<script>
    export let data;
    import { base } from '$app/paths';
</script>

<div class="main">

        {#each data.json.contant as { id, type, title, text }}
            <div class="content_box">
                <img class="image" src="{base}/icon.png" alt="사진">
                <a href="{base}/{type}/{id}" class="title">{title}</a><br>
                <p class="text">{text}</p>
            </div>
        {/each}
</div>

<style>
    .main {
        margin: auto;
        margin-top: 100px;
        width: 70%;
    }

    .content_box {
        margin: auto;
        margin-bottom: 50px;
        width: 100%;
        height: 300px;
        border: 1px solid black;
        border-radius: 1em;
        text-align: center;
    }

    .image {
        float: left;
        margin-right: 20px;
        width: 25%;
        height: 100%;
        display: inline;
    }

    .title {
        display: block;
        font-size: 2em;
        margin-block-start: 1.5em;
        margin-block-end: 0em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
        unicode-bidi: isolate;
        text-decoration: none; /* 링크의 밑줄 제거 */
    }

    .text {
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