<script>
// @ts-nocheck
    import { textForm } from './store.js';
	import Header from './Header.svelte';
    import Search from './search.svelte'

    export let data;
    let dataText;

    textForm.subscribe(value => {
        dataText = value;
	});
</script>
<svelte:head>
	<title>snilsnil'blog</title>
</svelte:head>

<div class="app">
	<Header />

	<main>
		{#if (dataText==""||dataText=='undefined')}
			<slot />		
		{:else}
			<Search data={data} />
		{/if}
	</main>
</div>


