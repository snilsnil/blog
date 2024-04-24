<script>
  // @ts-ignore
  import {Router,Route} from 'svelte-routing';
  import Header from './header.svelte';
  import Home from './routes/main.svelte';
  import Story from './routes/story.svelte';
  import Test from './routes/test.svelte';

  export let url='';

  const rootpath="/blog/";

</script>
<Header rootpath={rootpath} />
<Router url="{url}">
  <Route path='{rootpath}'>
    <Home  rootpath={rootpath}/>
  </Route>
  <Route path='{rootpath}story'>
    <Story rootpath={rootpath} />
  </Route>
  <Route path='{rootpath}test'>
    <Test rootpath={rootpath} />
  </Route>
</Router>
  <!-- <h1>Hi! I'm {name}</h1> -->
  
  <!-- <p>{@html post.content}</p>
  <Btn /> -->