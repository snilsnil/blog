<script>
  // @ts-ignore
  import {Router,Route} from 'svelte-routing';
  import Header from './header.svelte';
  import Home from './routes/main.svelte';
  import Story from './routes/story.svelte';
  import Test from './routes/test.svelte';
  import Contant from './routes/contant.svelte'

  export let url='';

  const rootpath="/blog/";

</script>
<Router url="{url}">
  <Header rootpath={rootpath} />
  <Route path='{rootpath}' component={Home} rootpath={rootpath}/>
  <Route path='{rootpath}story' component={Story} rootpath={rootpath} />
  <Route path='{rootpath}test' component={Test} rootpath={rootpath}/>
  <Route path='{rootpath}:type/:id' component={Contant} rootpath={rootpath}/>
</Router>
  <!-- <h1>Hi! I'm {name}</h1> -->
  
  <!-- <p>{@html post.content}</p>
  <Btn /> -->