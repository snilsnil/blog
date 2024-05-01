<script>
// @ts-nocheck

	import Header from './Header.svelte';
</script>
<svelte:head>
	<title>blog</title>
</svelte:head>

<div class="app">
	<Header/>

	<main>
		<slot />
	</main>
</div>
