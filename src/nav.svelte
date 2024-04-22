<div class="header">
    <div>
        <input class="menu" type="image" on:click={fadein} src="menu.png" alt="메뉴">
        <input class="home" type="image" on:click={()=>{window.history.pushState("","",rootpath);}}
        src="icon.png" alt="홈페이지">
    </div>

    <div class="nav">
            <input class="github_snilsnil" type="image" on:click={()=>{
                window.location.href="https://github.com/snilsnil";
            }} src="github.png" alt="깃허브">

            <input class="search_text" type="text" bind:value={text} placeholder="search" on:keypress={keyPress}>

            <input class="search_btn" type="image" on:click={()=>{
                console.log(text);
            }} src="search.png" alt="검색">


    </div>
</div>

<div  class="{fade} category">
    <div class="category_top">
        <input class="close" type="image" on:click={fadeout} src="close.png" alt="닫기">
    </div>
</div>


<script>
    let text;
    let fade;
    const rootpath="/blog/";

    const fadein=()=>{
        fade='fadein';
        const category=document.getElementsByClassName('category')[0];
        // @ts-ignore
        category.style.display='block';
    }

    const fadeout=()=>{
        fade='fadeout'
            const category=document.getElementsByClassName('category')[0];
            // @ts-ignore
            category.style.display='block';
        }

const keyPress=(e)=>{
    if(e.key=='Enter'){
                console.log(text);
            }
}

</script>

<style>

.category_top{
    margin-left: 0px;
    width: 100%;
}

.close{
    float: right;
    border: 0em;
    width: 48px;
    height: 48px;
}

.category{
    border-right: 1px solid black;
    margin-left: 0px;
    width:0px;
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    height:100%;
    background-color: white;
}

.fadein{
    animation-name: move;
    animation-duration:1s;
    animation-direction:normal;
    animation-fill-mode: forwards;
}

.fadeout{
        animation-name: remove;
        animation-duration:1s;
        animation-direction:reverse;
        animation-fill-mode: forwards;
    }

    @keyframes move {
        0% {
            width:0px
        }
        100% {
            width: 300px;
        }
    }

    @keyframes remove {
        100% {
            width:300px
        }
        0% {
            width: 0px;
        }
    }

    .menu{
        border:0em;
        width: 48px;
        height: 48px;
    }

    .home{
        border:0em;
        width: 50px;
        height: 50px;
    }

    .github_snilsnil{
        border:0em;
        margin-right:20px;
        width: 50px;
        height: 50px;
    }

    .search_btn{
        border:0em;
        width: 40px;
        height: 40px;
        vertical-align: 10%;
    }

    .search_text{
        border-radius: 1em;
        border-color: black;
        text-align: center;
        vertical-align: 115%;
    }

    .nav{
        margin-right: 10px;
        display: inline-block;
    }

    div{
        margin-left: 10px;
        display: inline-block;
    }

    .header{
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
    }

</style>