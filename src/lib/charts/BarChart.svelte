<script lang="ts">
    import { Paper, Container, Title, Space } from '@svelteuidev/core'

    import { BarChartSimple } from "@carbon/charts-svelte";
    import type { BarChartOptions, ScaleTypes } from "@carbon/charts/interfaces";

    import "@carbon/styles/css/styles.css";
    import "@carbon/charts/styles.css";

    const options: BarChartOptions ={
      height: "400px",
      axes: {
        left: { mapsTo: "value" },
        bottom: { mapsTo: "group", scaleType: "labels" as ScaleTypes.LABELS},
      },
      toolbar: {enabled: false}, 
    };
</script>

<Paper withBorder p="md" radius="md">
    <Title order={4} override={{ fontSize: '' }}>Total Sales (last 5 months)</Title>
    <Space h="md"/>
    <Container fluid>
    <BarChartSimple
    id='test'
    data={[
      { group: "February", value: 65000 },
      { group: "March", value: 29123 },
      { group: "April", value: 35213 },
      { group: "May", value: 51213 },
      { group: "June", value: 16932 },
    ]}
    {options}
  />
</Container>
</Paper>
