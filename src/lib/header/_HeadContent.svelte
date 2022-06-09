<script lang="ts">
	import Logo from '$lib/_Logo.svelte';
	import { Group, ActionIcon, Text, Burger, Tooltip, Badge } from '@svelteuidev/core';
	import { Moon, Sun } from 'lucide-svelte';
	import { hotkey, useOs } from '@svelteuidev/composables';
	const os = useOs();
	const mod = os === 'macos' ? '⌘' : 'ctrl';
	export let isDark: boolean;
	export let opened: boolean;
	export let toggle: () => void;
	export let toggleOpen: () => void;
</script>

<Group override={{ height: '100%', '@md': { px: 20 } }} position="apart">
	<Burger {opened} on:click={toggleOpen} override={{ d: 'block', '@sm': { d: 'none' } }} />
	<a href="/" style="text-decoration: none;">
		<Group>
			<Logo size={35} />
			<Text color="blue" size="xl" override={{ d: 'none', '@sm': { d: 'block' } }}>
				SvelteUI Admin Starter
			</Text>
		</Group>
	</a>

	<Group>
		<Badge variant="filled">Under Development</Badge>

		<Tooltip label={`${mod} + J`}>
			<ActionIcon
				variant="default"
				on:click={toggle}
				size={30}
				aria-label="Toggle dark or light mode"
				use={[[hotkey, [['mod+J', toggle]]]]}
			>
				{#if !isDark}
					<Moon size={16} />
				{:else}
					<Sun size={16} />
				{/if}
			</ActionIcon>
		</Tooltip>
	</Group>
</Group>
