import { linearGradientDef } from '@nivo/core';
import { ResponsiveLine, Serie } from '@nivo/line';
import colors from 'tailwindcss/colors';

const StorageChart: React.FC<{ data: Serie[] }> = ({ data }) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: 'point' }}
    yScale={{
      type: 'linear',
      min: 'auto',
      max: 'auto',
      stacked: true,
      reverse: false,
    }}
    markers={[
      {
        axis: 'x',
        value: 'boat',
        lineStyle: {
          stroke: colors.blue[500],
          strokeWidth: 2,
          strokeDasharray: 6,
        },
        legend: 'Current date',
        textStyle: {
          fill: colors.zinc[400],
          transform: 'translate(-10px)',
        },
        legendPosition: 'top-left',
      },
    ]}
    enableSlices="x"
    enableArea
    areaOpacity={0.07}
    yFormat=" >-.2f"
    axisBottom={{
      tickSize: 0,
      tickPadding: 10,
      tickRotation: 0,
      legend: 'transportation',
      legendOffset: 40,
      legendPosition: 'middle',
    }}
    axisLeft={{
      tickSize: 0,
      tickPadding: 10,
      tickRotation: 0,
      legend: 'stacked count',
      legendOffset: -48,
      legendPosition: 'middle',
    }}
    pointSize={10}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabelYOffset={-12}
    useMesh={true}
    defs={[
      linearGradientDef('gradientA', [
        { offset: 0, color: 'inherit' },
        { offset: 100, color: 'inherit', opacity: 0 },
      ]),
    ]}
    fill={[{ match: '*', id: 'gradientA' }]}
    legends={[
      {
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: 'left-to-right',
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: 'circle',
        symbolBorderColor: 'rgba(0, 0, 0, .5)',
        effects: [
          {
            on: 'hover',
            style: {
              itemBackground: 'rgba(0, 0, 0, .03)',
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    enableGridX={false}
    lineWidth={3}
    curve="cardinal"
    colors={{ scheme: 'set3' }}
    theme={{
      textColor: colors.zinc[400],
      background: colors.zinc[800],
      tooltip: {
        container: {
          background: colors.zinc[700],
          borderRadius: 8,
        },
      },
      fontSize: 14,
      grid: {
        line: {
          stroke: colors.zinc[700],
          strokeWidth: 2,
        },
      },
      crosshair: {
        line: {
          stroke: colors.rose[100],
          strokeWidth: 2,
        },
      },
    }}
  />
);

export default StorageChart;
