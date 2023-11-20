<script lang="ts">
	import Links from '$lib/components/Links.svelte';
import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	import type { PageData } from './$types'
	export let data: PageData;

</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase h2 font-bold"><a href='/'>UIU Health</a></strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<Links {data}/>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
