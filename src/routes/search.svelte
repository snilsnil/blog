<script>
    // @ts-nocheck
    
        import { textForm } from './store.js';
        import { base } from '$app/paths';
    
        export let data;
        /**
       * @type {string}
       */
        let dataText;
        let jsonContent=data.json.contant
    
        textForm.subscribe(value => {
            dataText = value;
        });
    
        // @ts-ignore
        function updateText(event) {
                    textForm.set("");
            }
        
    </script>
    
    <div class="main">
        {#each jsonContent as { id, type, title, text }, i}
            {#if title.includes(dataText) || text.includes(dataText)}
                <div class="content_box">
                    <img class="image" src="{base}/icon.png" alt="사진">
                    <a href="{base}/{type}/{id}" on:click={updateText} class="title">{title}</a><br>
                    <p class="text">{text}</p>
                </div>
            {/if}
        {/each}
        {#if jsonContent.filter(({ title, text }) => title.includes(dataText) || text.includes(dataText)).length === 0}
            <h1>찾을 수 없습니다.</h1>
        {/if}
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