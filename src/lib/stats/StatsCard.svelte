<script lang="ts">
	import {
		createStyles,
		Group,
		Paper,
		Text,
		ThemeIcon,
		theme
	} from '@svelteuidev/core';
	import { ArrowUpRight, ArrowDownRight } from 'lucide-svelte';

	export let title: string;
	export let value: string | number;
	export let diff: number;

	const useStyles = createStyles((theme) => ({
		root: {},
		label: {
			fontFamily: '$fallback',
			fontWeight: '$bold'
		},
		value: {
			mt: '10px'
		},
		diff: {
			mt: '16px'
		}
	}));

	$: ({ getStyles, classes } = useStyles());
</script>

<div class={getStyles()}>
	<Paper withBorder p="md" radius="md">
		<Group position="apart">
			<div>
				<Text color="dimmed" transform="uppercase" weight={700} size="xs" class={classes.label}>
					{title}
				</Text>
				<Text weight="bold" size="xl" class={classes.value}>
					{value}
				</Text>
			</div>
			<ThemeIcon color="gray" variant="light" size={38} radius="md">
				{#if diff > 0}
					<ArrowUpRight size={20} color={theme.colors['teal600'].value} />
				{:else}
					<ArrowDownRight size={20} color={theme.colors['red600'].value} />
				{/if}
			</ThemeIcon>
		</Group>
		<Text color="dimmed" size="sm" class={classes.diff}>
			<Text root="span" color={diff > 0 ? 'teal' : 'red'} weight="bold">
				{diff}%
			</Text>{' '}
			{diff > 0 ? 'increase' : 'decrease'} compared to last month
		</Text>
	</Paper>
</div>
