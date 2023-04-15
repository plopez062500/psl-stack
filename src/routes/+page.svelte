<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import LuciaLogo from '$lib/components/LuciaLogo.svelte';
	import PrismaLogo from '$lib/components/PrismaLogo.svelte';
	import SvelteKitLogo from '$lib/components/SvelteKitLogo.svelte';
	import TsLogo from '$lib/components/TSLogo.svelte';
	import TailwindLogo from '$lib/components/TailwindLogo.svelte';
	import type { PageData } from './$types';
</script>

<div class="p-10 text-center">
	<h1 class="text-6xl font-bold">Welcome to psl-stack</h1>

	<div class="w-full max-w-5xl grid sm:grid-cols-2 md:grid-cols-3  mx-auto">
		<Card href="https://kit.svelte.dev/">
			<SvelteKitLogo />
		</Card>
		<Card href="https://www.typescriptlang.org/">
			<TsLogo />
		</Card>
		<Card href="https://tailwindcss.com/">
			<TailwindLogo />
		</Card>
		<Card href="https://www.prisma.io/">
			<PrismaLogo />
		</Card>
		<Card href="https://lucia-auth.com/">
			<LuciaLogo />
		</Card>
	</div>

	<p class="mt-20 text-lg">Docs coming soon...</p>
</div>
