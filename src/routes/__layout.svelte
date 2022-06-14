<script lang="ts">
	import {
		SvelteUIProvider,
		fns,
		AppShell,
		Navbar,
		Header,
		Seo,
		Container
	} from '@svelteuidev/core';
	import HeadContent from '$lib/header/_HeadContent.svelte';
	import NavContent from '$lib/header/_NavContent.svelte';

	let isDark = false;
	let opened = false;

	function toggleTheme() {
		isDark = !isDark;
	}
	function toggleOpened() {
		opened = !opened;
	}
</script>

<SvelteUIProvider withNormalizeCSS withGlobalStyles themeObserver={isDark ? 'dark' : 'light'} ssr>
	<Seo />
	<AppShell
		override={{
			main: {
				bc: isDark ? fns.themeColor('dark', 8) : fns.themeColor('gray', 0),
				minHeight: 'calc(100vh - 60px)'
			},
			'@md': { pl: 300, pt: 60 },
			pt: 60
		}}
	>
		<Navbar slot="navbar" fixed hidden={!opened} width={{ base: 300 }} override={{ p: '$mdPX' }}>
			<NavContent toggleOpen={toggleOpened} />
		</Navbar>
		<Header slot="header" height={60} override={{ p: '$mdPX', pt: 12 }} fixed>
			<HeadContent {isDark} {opened} toggle={toggleTheme} toggleOpen={toggleOpened} />
		</Header>
		<Container fluid override={{ mt: '$0', padding: 0, '@md': { padding: 16 } }}>
			<slot />
		</Container>
	</AppShell>
</SvelteUIProvider>
