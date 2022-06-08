<script lang="ts">
	import { Title, createStyles, Group, Button } from '@svelteuidev/core';
	import { Printer, Download } from 'lucide-svelte'

	const useStyles = createStyles((theme) => ({
		root: {
			padding: '$mdPX',
			margin: 0,
		},
		title: {
			fontWeight: 500,
			lineHeight: '$md'
		}
	}))

	$: ({classes, getStyles} = useStyles())
</script>
<div class={getStyles()}>

	<Group grow children={2} spacing='xl' position='apart'>
		<Title order={4} class={classes.title} >Dashboard</Title>
        <Group align='end' position='right'>
			<Button size={'sm'} variant="outline" override={{}}><Printer size={16} slot="leftIcon" />Print</Button>
			<Button size={'sm'} variant="filled"><Download size={16} slot="leftIcon" />Download Report</Button>
		</Group>
    </Group>
</div>

