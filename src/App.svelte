<script>
  // @ts-ignore
  import {Router,Route} from 'svelte-routing';
  import Header from './header.svelte';
  import Home from './routes/main.svelte';
  import Story from './routes/story.svelte';

  export let url='';

  const rootpath="/blog/";
  // import Btn from './btnExample.svelte';

  const post = {
          title: "네이버",
          content: "<a href='https://Headerer.com'>네이버</a>"
  }

</script>
<Header rootpath={rootpath} />
<Router url="{url}">
  <Route path='{rootpath}'>
    <Home />
  </Route>
  <Route path='{rootpath}story'>
    <Story />
  </Route>
</Router>
  <!-- <h1>Hi! I'm {name}</h1> -->
  
  <!-- <p>{@html post.content}</p>
  <Btn /> -->