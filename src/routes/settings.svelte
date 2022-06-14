<script lang="ts">
	import { Card, Image, Group, Text, Badge, Button, SimpleGrid } from '@svelteuidev/core';
</script>

<SimpleGrid
	cols={4}
	breakpoints={[
		{ maxWidth: 'xs', cols: 1 },
		{ maxWidth: 'sm', cols: 2 },
		{ maxWidth: 1450, cols: 2 },
		{ maxWidth: 1700, cols: 3 },
		{ minWidth: 2090, cols: 3 }
	]}
>
	{#each { length: 8 } as _, i}
		<div>
			<Card.Container shadow="md" p="lg">
				<Card.Section first padding="lg">
					<Image
						height={160}
						alt="Portugal"
						src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80"
					/>
				</Card.Section>

				<Group position="apart" override={{ marginBottom: '5px', marginTop: '$smPX' }}>
					<Text weight={500}>Portugal Porto Adventures</Text>
					<Badge color="pink" variant="light">On Sale</Badge>
				</Group>

				<Text size="sm" override={{ lineHeight: 1.5 }}>
					With Portugal Porto Adventures you can explore more of the beautiful portuguese cities, by
					walking on food, meeting the locals and eat excellent food and wine
				</Text>

				<Button variant="light" color="blue" fullSize override={{ marginTop: '14px' }}>
					Book classic tour now
				</Button>
			</Card.Container>
		</div>
	{/each}
</SimpleGrid>
