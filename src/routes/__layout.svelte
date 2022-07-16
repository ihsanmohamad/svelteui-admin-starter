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
				minHeight: 'calc(100vh - 60px)'
			},
			'@md': { pl: 300, pt: 60 },
			pt: 60
		}}
		use={[[lockscroll, scrollLocked]]}
	>
		<Navbar
			slot="navbar"
			fixed
			hidden={!opened}
			width={{ base: 300 }}
			override={{ p: '$mdPX' }}
			position={{ top: 60, left: 0 }}
		>
			<NavContent toggleOpen={toggleOpened} />
		</Navbar>
		<Header slot="header" height={60} override={{ p: '$mdPX', pt: 12 }} fixed>
			<HeadContent {isDark} {opened} toggle={toggleTheme} toggleOpen={() => {opened = !opened}} />
		</Header>
		{#if opened}
			<Overlay opacity={0.6} color="#000" zIndex={5}/>
		{/if}
		<Container fluid override={{ mt: '$0', padding: 0, '@md': { padding: 16 } }}>
			<slot />
		</Container>
	</AppShell>
</SvelteUIProvider>
