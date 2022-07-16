<script lang="ts">
	import {
		SvelteUIProvider,
		fns,
		AppShell,
		Navbar,
		Header,
		Container,
		Overlay
	} from '@svelteuidev/core';
	import { lockscroll } from '@svelteuidev/composables';
	import HeadContent from '$lib/header/_HeadContent.svelte';
	import NavContent from '$lib/header/_NavContent.svelte';

	let isDark = false;
	let opened = false;
	let scrollLocked = false;

	function toggleTheme() {
		isDark = !isDark;
	}
	function toggleOpened() {
		opened = false;
	}

	$: scrollLocked = opened
	
</script>

<SvelteUIProvider withNormalizeCSS withGlobalStyles themeObserver={isDark ? 'dark' : 'light'} ssr>
	<AppShell
		override={{
			main: {
				bc: isDark ? fns.themeColor('dark', 8) : fns.themeColor('gray', 0),
			},
		}}
		fixed
		use={[[lockscroll, scrollLocked]]}
	>
		<Navbar
			slot="navbar"
			fixed
			hidden={!opened}
			override={{ p: '$mdPX' }}
			position={{ top: 0, left: 0 }}
			hiddenBreakpoint="sm"
			width={{ sm: 200, lg: 250 }}
		>
			<NavContent toggleOpen={toggleOpened} />
		</Navbar>
		<Header slot="header" height={60} override={{ p: '$mdPX' }} fixed>
			<HeadContent {isDark} {opened} toggle={toggleTheme} toggleOpen={() => {opened = !opened}} />
		</Header>
		{#if opened}
			<Overlay opacity={0.6} color="#000" zIndex={5}/>
		{/if}
		<Container fluid override={{ mt: '$0', padding: 0 }}>
			<slot />
		</Container>
	</AppShell>
</SvelteUIProvider>
