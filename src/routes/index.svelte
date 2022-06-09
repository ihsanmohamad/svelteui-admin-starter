<script lang="ts">
	import { Title, createStyles, Group, Button, SimpleGrid, Space } from '@svelteuidev/core';
	import { Printer, Download } from 'lucide-svelte';
	import StatsCard from '$lib/stats/StatsCard.svelte';
	import BarChart from '$lib/charts/BarChart.svelte'

	const useStyles = createStyles((theme) => ({
		root: {
			margin: 0,
		},
		title: {
			fontWeight: 500,
			lineHeight: '$md',
			fontSize: '$xl'
		},
		section: {
			mt: '$lgPX'
		}
	}))

	$: ({classes, getStyles} = useStyles())
	interface statusType {
		title: string,
		value: string | number,
		diff: number
	}

	const statusData: statusType[] = [
		{title: 'Revenue', value:'$13,456', diff:34},
		{title: 'New Customers', value:543, diff:68},
		{title: 'Profit', value:'$4,183', diff:-13}
	]
</script>
<div class={getStyles()}>
	<SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
		<Title order={4} class={classes.title} >Dashboard</Title>
        <Group position='right' >
			<Button size={'sm'} variant="outline" override={{}}><Printer size={16} slot="leftIcon" />Print</Button>
			<Button size={'sm'} variant="filled"><Download size={16} slot="leftIcon" />Download Report</Button>
		</Group>
	</SimpleGrid>
	<SimpleGrid cols={3} spacing="lg" override={{ mt: '$xlPX' }} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
			{#each statusData as status (status)}
				<StatsCard {...status}/>
			{/each}
	</SimpleGrid>
	<Space h="md" />
	<BarChart />
</div>

