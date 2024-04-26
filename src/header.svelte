<div class="header">
        <div>
                <input class="menu" type="image" on:click={fadein} src="{rootpath}menu.png" alt="메뉴">
                <a href="{rootpath}" >
                        <input class="home" type="image" src="{rootpath}icon.png" alt="홈페이지">
                </a>  
        </div>

        <div class="nav">
                <input class="github_snilsnil" type="image" on:click={()=>{
                window.location.href="https://github.com/snilsnil";
                }} src="{rootpath}github.png" alt="깃허브">

                <input class="search_text" type="text" bind:value={text} placeholder="search" on:keypress={keyPress}>

                <input class="search_btn" type="image" on:click={()=>{
                console.log(text);
                }} src="{rootpath}search.png" alt="검색">
        </div>
</div>
<div  class="{fade} category">   
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                <p class="close" on:click={fadeout}>닫기</p>
                <div>
                        <a href="{rootpath}">
                                메인
                        </a><br>
                </div>
                <div>
                        <a href="{rootpath}story" use:link>
                                스토리
                        </a><br>
                </div>
                <div>
                        <a href="{rootpath}test" use:link>
                                테스트
                        </a><br>
                </div>
</div>


<script>
        import {link} from 'svelte-routing';

        export let rootpath;
        let text;
        let fade;

        const fadein=()=>{
                fade='fadein';
                const category=document.getElementsByClassName('category');
        }

        const fadeout=()=>{
                fade='fadeout'
                const category=document.getElementsByClassName('category');
        }

        const keyPress=(e)=>{
                if(e.key=='Enter'){     
                console.log(text);
        }
}

</script>

<style>

.close{
        border: 1px solid black;
        border-radius: 1em;
        width: 220px;
        margin-top: 20px;
        margin-bottom: 20px;
        margin-left: 40px;
        text-align: center;
        font-size: 30px;
}

.category div{
        margin-top: 20px;
        margin-bottom: 20px;
        margin-left: 40px;
        display: block;
        border: 1px solid black;
        border-radius: 1em;
        width: 220px;
        font-size: 30px;
}

.category{
  border-right: 1px solid black;
  text-align: center;
  margin-left: 0px;
  width:300px;
  position: fixed;
  left: -300px;
  top: 0;
  height:100%;
  background-color: white;
}

.fadein{
  animation-name: move;
  animation-duration:0.5s;
  animation-direction:normal;
  animation-fill-mode: forwards;
}

.fadeout{
  animation-name: remove;
  animation-duration:0.5s;
  animation-direction:reverse;
  animation-fill-mode: forwards;
  }

  @keyframes move {
  0% {}
  100% {
        left: 0px;
  }
  }

  @keyframes remove {
  100% {
        left: 0px;
  }
  0% {
        left: -300px;
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
  height: 30px;
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
  background-color: white;
  border-bottom: 1px solid black;
  padding-top:10px;
  margin-left:0px;
  margin-right:0px;
  padding-bottom: 10px;
  position:fixed;
  width: 100%;
  top:0px;
  display: flex;
  justify-content: space-between;
  }

</style>