<script>
    export let data;

    let title = '';
    let text = '';
    import { base } from '$app/paths';
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
        <h1>{title}</h1>
        <pre class="contant_text">{@html text}</pre>
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
        height: 300px;
        text-align: center;
    }

    .contant_text {
        font-family: 'malgun';
    }
</style>
