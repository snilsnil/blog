<script>
  import Header from './header.svelte';
  import Main from './main.svelte';

  const rootpath="/blog/";
  // import Btn from './btnExample.svelte';

  const post = {
          title: "네이버",
          content: "<a href='https://Headerer.com'>네이버</a>"
  }

</script>


  <!-- <h1>Hi! I'm {name}</h1> -->
  <Header rootpath={rootpath} />
  <Main rootpath={rootpath} />
  <!-- <p>{@html post.content}</p>
  <Btn /> -->