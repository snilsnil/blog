<script>
  // @ts-ignore
  import {Router,Route} from 'svelte-routing';
  import Header from './header.svelte';
  import Home from './routes/main.svelte';
  import Story from './routes/story.svelte';
  import Test from './routes/test.svelte';
  import Test_id from './routes/test_id.svelte'

  export let url='';

  const rootpath="/blog/";

</script>
<Header rootpath={rootpath} />
<Router url="{url}">
  <Route path='{rootpath}' component={Home} rootpath={rootpath}/>
  <Route path='{rootpath}story' component={Story} rootpath={rootpath}/>
  <Route path='{rootpath}test' component={Test} rootpath={rootpath}/>
  <Route path='{rootpath}test/:id' component={Test_id} rootpath={rootpath}/>
</Router>
  <!-- <h1>Hi! I'm {name}</h1> -->
  
  <!-- <p>{@html post.content}</p>
  <Btn /> -->