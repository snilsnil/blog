<script>
// @ts-nocheck

	import Header from './Header.svelte';
</script>
<svelte:head>
	<title>snilsnil'blog</title>
</svelte:head>

<div class="app">
	<Header/>

	<main>
		<slot />
	</main>
</div>
