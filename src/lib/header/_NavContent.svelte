<script lang="ts">
	import { createStyles, ShellSection } from '@svelteuidev/core';
	import { Home, BarChart2, Settings, Github, LogOut } from 'lucide-svelte';
	import { page } from '$app/stores';

	let path: string;
	export let toggleOpen: () => void;

	$: path = $page.url.pathname;

	type Data = {
		link: string;
		label: string;
		icon: Object;
		external?: boolean;
	};

	const data: Data[] = [
		{ link: '/', label: 'Home', icon: Home },
		{ link: '/analytics', label: 'Analytics', icon: BarChart2 },
		{ link: '/settings', label: 'Settings', icon: Settings }
	];

	const footerData: Data[] = [
		{
			link: 'https://github.com/ihsanmohamad/svelteui-admin-starter',
			label: 'Github',
			icon: Github,
			external: true
		},
		{
			link: '',
			label: 'Logout',
			icon: LogOut
		}
	];

	const useStyles = createStyles((theme) => ({
		root: {
			'& .navLink': {
				d: 'flex',
				alignItems: 'center',
				textDecoration: 'none',
				fontSize: theme.fontSizes.sm.value,
				fontWeight: 500,
				padding: '$xsPX',
				borderRadius: theme.radii.sm.value,
				[`${theme.dark} &`]: {
					bc: theme.fn.themeColor('dark', 7),
					color: theme.fn.themeColor('gray', 5),
					'&:hover': {
						bc: theme.fn.themeColor('gray', 9),
						color: 'white'
					}
				},
				backgroundColor: 'white',
				'&:hover': {
					bc: theme.fn.themeColor('gray', 0),
					color: theme.fn.themeColor('dark', 9)
				},
				color: theme.fn.themeColor('dark', 5),
				'&.active': {
					[`${theme.dark} &`]: {
						bc: theme.fn.themeColor('blue', 9),
						color: 'white',
						'& .linkIcon': {
							color: theme.fn.themeColor('blue', 3)
						}
					},
					bc: theme.fn.themeColor('blue', 0),
					color: theme.fn.themeColor('blue', 7)
				}
			},
			'& .linkIcon': {
				marginRight: theme.space.smPX
			},
			'& .footer': {
				pt: '$mdPX',
				mt: '$mdPX',
				borderTop: `1px solid ${theme.fn.themeColor('gray', 2)}`,
				[`${theme.dark} &`]: {
					borderTop: `1px solid ${theme.fn.themeColor('dark', 4)}`
				}
			}
		}
	}));

	$: ({ getStyles, cx } = useStyles());
</script>

<ShellSection grow class={getStyles()}>
	{#each data as item (item)}
		<a href={item.link} on:click={toggleOpen} class={cx('navLink', { active: item.link === path })}>
			<svelte:component this={item.icon} class="linkIcon" />
			<span>{item.label}</span>
		</a>
	{/each}
</ShellSection>
<ShellSection class={getStyles()}>
	<div class="footer">
		{#each footerData as footerItem (footerItem)}
			<a
				href={footerItem.link}
				on:click={toggleOpen}
				class="navLink"
				target={footerItem.external ? '_blank' : null}
			>
				<svelte:component this={footerItem.icon} class="linkIcon" />
				<span>{footerItem.label}</span>
			</a>
		{/each}
	</div>
</ShellSection>
