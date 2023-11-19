<script lang="ts">
	import Socials from '$lib/components/Socials.svelte';
import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
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
				<Socials/>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
