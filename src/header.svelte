<div class="header">
        <div>
                <input class="menu" type="image" on:click={fadein} src="menu.png" alt="메뉴">
                <a href="{rootpath}" use:link>
                        <input class="home" type="image" src="icon.png" alt="홈페이지">
                </a>  
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
                <a href="{rootpath}" use:link>
                        <input class="category_home" type="image" src="icon.png" alt="홈페이지">
                </a>  
                <a href="{rootpath}story" use:link>
                        스토리
                </a> 
                
        </div>
</div>


<script>
        import {link} from 'svelte-routing';

        export let rootpath;
        let text;
        let fade;

        const fadein=()=>{
                fade='fadein';
                const category=document.getElementsByClassName('category')[0];
        }

        const fadeout=()=>{
                fade='fadeout'
                const category=document.getElementsByClassName('category')[0];
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
  margin:5px;
  float: right;
  border: 0em;
  width: 48px;
  height: 48px;
}

.category{
  border-right: 1px solid black;
  margin-left: 0px;
  width:300px;
  display: block;
  position: absolute;
  left: -300px;
  top: 0;
  height:100%;
  background-color: white;
}

  .category_home{
  margin:5px;
  border: 0em;
  width: 48px;
  height: 48px;
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
  border-bottom: 1px solid black;
  margin-top: 10px;
  margin-left:0px;
  margin-right:0px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  }

</style>