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
        <h1 style="text-align: center;">{title}</h1>
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

    .contant_text_container {
        overflow: auto; /* 내용이 넘칠 경우 스크롤 표시 */
    }

    .contant_text {
        font-family: 'malgun';
        white-space: pre-wrap; /* 줄 바꿈 처리 */
    }
</style>

