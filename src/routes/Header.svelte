<div class="header">
	<div>
			<input class="menu" type="image" on:click={fadein} src="{base}/menu.png" alt="메뉴">
			<a href="{base}" >
					<input class="home" type="image" src="{base}/icon.png" alt="홈페이지">
			</a>
	</div>

	<div class="nav">
			<input class="github_snilsnil" type="image" on:click={()=>{
			window.location.href="https://github.com/snilsnil";
			}} src="{base}/github.png" alt="깃허브">

			<input class="search_text" type="text"  bind:value={text} on:input={updateText} placeholder="search" >
                        <!-- on:keypress={keyPress} -->
	</div>
</div>
<div  class="{fade} category">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<p class="close" on:click={fadeout}>닫기</p>
	<div>
		<a href="{base}">메인</a><br>
	</div>
	<div>
		<a href="{base}/story">스토리</a><br>
	</div>
	<div>
		<a href="{base}/test">테스트</a><br>
	</div>
        <div>
		<a href="{base}/justChat">잡담</a><br>
	</div>
</div>


<script>
// @ts-nocheck

        // let rootpath='/testblog/'
        import { base } from '$app/paths';
        // @ts-ignore
        import { textForm } from './store.js';
        import { browser } from '$app/environment';

        /**
         * @type {string}
         */
        let fade;
        let text
        let fadeState=false

        
        /**
         * @param {{ target: { value: string; }; }} event
         */
        function updateText(event) {
                textForm.set(event.target.value)
        }

        const fadein=()=>{
                fade='fadein';
                fadeState=true
        }

        const fadeout=()=>{
                fade='fadeout'
                fadeState=false
        }

        textForm.subscribe(value => {
                if (value=="") text=""
	});

        if(browser){
                let body=document.body
                
                body.addEventListener("keyup", (e) => {
                        if(e.key=='Escape'&&fadeState==true){
                                fadeout()
                        }
                        else if(e.key=='Escape'&&fadeState==false){
                                fadein()
                        }
                });
        }
</script>

<style>

.close{
        cursor: pointer;
        border: 1px solid black;
        border-radius: 1em;
        width: 220px;
        margin-top: 20px;
        margin-bottom: 20px;
        margin-left: 40px;
        text-align: center;
font-size: 30px;
}

a{
        width: 100%;
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
  left: -301px;
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
	  left: -301px;
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