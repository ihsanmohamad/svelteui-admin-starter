<script lang="ts">
	import { createStyles, Container, Title, Text, Button } from '@svelteuidev/core';

	const useStyles = createStyles(() => ({
		root: {
			backgroundColor: '#11284b',
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			backgroundImage:
				'linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80)',
			paddingTop: '60px',
			paddingBottom: '60px'
		},

		inner: {
			flexDirection: 'column',
			justifyContent: 'space-between',
			'@md': {
				display: 'flex'
			}
		},

		image: {
			display: 'none',
			'@md': {
				display: 'block'
			}
		},

		content: {
			marginRight: 0,
			paddingBottom: '40px',
			paddingTop: '40px',
			'@md': {
				marginRight: '60px'
			}
		},

		title: {
			maxWidth: '100%',
			fontSize: 34,
			lineHeight: 1.15,
			color: 'white',
			fontFamily: ', $standard',
			fontWeight: 900,
			'@md': {
				maxWidth: 500,
				lineHeight: 1.05,
				fontSize: 48
			}
		},

		description: {
			maxWidth: '100%',
			color: 'white',
			opacity: 0.75,
			'@md': {
				maxWidth: 500
			}
		},

		control: {
			width: '100%',
			paddingLeft: 50,
			paddingRight: 50,
			fontFamily: '$standard',
			fontSize: 22,
			'@md': {
				width: 'auto'
			}
		}
	}));

	$: ({ classes, getStyles } = useStyles());
</script>

<Title order={2}>This is analytics page</Title>

<div class={getStyles()}>
	<Container size="lg">
		<div class={classes.inner}>
			<div class={classes.content}>
				<Title class={classes.title}>
					A collection of
					<Text component="span" inherit color="pink">fully responsive</Text>{' '}
					Pre-made components
				</Title>

				<Text class={classes.description} override={{ mt: 30 }}>
					Pre-made responsive components designed and built by SvelteUI maintainers and the
					community. These components can help you build your next website even faster.
				</Text>

				<Button class={classes.control} color="pink" size="xl" override={{ mt: 40 }}>
					Get started
				</Button>
			</div>
		</div>
	</Container>
</div>
