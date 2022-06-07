<script lang="ts">
	import { createStyles } from '@svelteuidev/core';
	import { Home, BarChart2, Settings } from 'lucide-svelte';
	import { page } from '$app/stores';

	let path: string;
	export let toggleOpen: () => void;

	$: path = $page.url.pathname;

	type Data = {
		link: string;
		label: string;
		icon: Object;
	};

	const data: Data[] = [
		{ link: '/', label: 'Home', icon: Home },
		{ link: '/analytics', label: 'Analytics', icon: BarChart2 },
		{ link: '/settings', label: 'Settings', icon: Settings }
	];

	const useStyles = createStyles((theme) => ({
		root: {
			d: 'flex',
			alignItems: 'center',
			textDecoration: 'none',
			fontSize: theme.fontSizes.sm.value,
			fontWeight: 500,
			padding: '$xsPX',
			borderRadius: theme.radii.sm.value,
			[`${theme.dark} &`]: {
				bc: theme.fn.themeColor('dark', 7),
				color: 'white',
				'&:hover': {
					bc: theme.fn.themeColor('gray', 9),
					color: 'white',
				}
			},
			backgroundColor: 'white',
			'&:hover': {
					bc: theme.fn.themeColor('gray', 0),
					color: theme.fn.themeColor('dark', 9)
				},
				color: theme.fn.themeColor('dark', 9),
			'&.active': {
				[`${theme.dark} &`]: {
					bc: theme.fn.themeColor('blue', 9),
					color: theme.fn.themeColor('blue', 2)
				},
				bc: theme.fn.themeColor('blue', 0),
				color: theme.fn.themeColor('blue', 7)
			}
		},
		linkIcon: {
			marginRight: theme.space.smPX.value
		}
		
	}));

	$: ({ classes, getStyles, cx } = useStyles());

</script>
{#each data as item (item)}
	<a href={item.link} on:click={toggleOpen} class={cx(getStyles(), { active: item.link === path })}>
		<svelte:component this={item.icon} class={classes.linkIcon}/>
		<span>{item.label}</span>
	</a>
{/each}