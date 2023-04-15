<script>
	export let href = '';

	function gotoHref() {
		if (href) window.open(href, '_');
	}
</script>

<div
	class="flex items-center justify-center w-full max-w-xs h-64 px-4  rounded-sm shadow-lg transition-all hover:scale-105 hover:shadow-2xl"
	on:click={gotoHref}
>
	<slot />
</div>
