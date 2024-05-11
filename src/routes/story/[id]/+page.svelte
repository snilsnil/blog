<script>
    export let data;

    let title = '';
    let text = '';
    // content를 props로 받아와서 사용
    import { onMount } from 'svelte';

    onMount(() => {
        // content가 정의되어 있는 경우에만 값을 설정
        if (data) {
            
            // @ts-ignore
            title = data.content.title;
            // @ts-ignore
            text = data.content.text;
        }
    });
</script>

<div class="main">
    <div class="contant_box">
        <h1 class="title">{title}</h1>
        <hr />
        <div class="contant_text_container">
            <pre class="contant_text">{@html text}</pre>
        </div>
    </div>
</div>

<style>
    .main {
        margin: auto auto;
        margin-top: 100px;
    }

    .contant_box {
        margin: auto auto 50px;
        width: 70%;
    }

    .title{
        font-size: 35px;
        padding-top: 40px;
        margin-bottom: 30px;
        
    }

    .contant_text_container {
        overflow: auto; /* 내용이 넘칠 경우 스크롤 표시 */
    }

    .contant_text {
        font-size: 20px;
        font-family: 'malgun';
        white-space: pre-wrap; /* 줄 바꿈 처리 */
        line-height: 35px;
    }
</style>

