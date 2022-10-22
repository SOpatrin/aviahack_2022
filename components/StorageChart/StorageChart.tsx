import { linearGradientDef } from '@nivo/core';
import { ResponsiveLine } from '@nivo/line';
import colors from 'tailwindcss/colors';
import { Series } from './series.model';

const StorageChart: React.FC<{ data: Series[] }> = ({ data }) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{
      type: 'time',
      format: '%Y-%m-%d',
      precision: 'day',
    }}
    xFormat="time:%Y-%m-%d"
    yScale={{
      type: 'linear',
      min: 'auto',
      max: 'auto',
      stacked: true,
      reverse: false,
    }}
    yFormat={(value) => `${value}m³`}
    markers={[
      {
        axis: 'x',
        value: new Date(),
        lineStyle: {
          stroke: colors.blue[500],
          strokeWidth: 2,
          strokeDasharray: 6,
        },
        legend: 'Current date',
        textStyle: {
          fill: colors.zinc[400],
          transform: 'translate(20px, -15px)',
        },
        legendPosition: 'top',
      },
    ]}
    enableSlices="x"
    enableArea
    areaOpacity={0.07}
    axisBottom={{
      tickSize: 0,
      tickPadding: 10,
      tickValues: 'every 2 days',
      format: '%b %d',
    }}
    axisLeft={{
      tickSize: 0,
      tickPadding: 10,
      tickRotation: 0,
      legend: 'volume m³',
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
    enableGridX={false}
    lineWidth={3}
    curve="cardinal"
    colors={{ scheme: 'set3' }}
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
    sliceTooltip={({ slice }) => (
      <div className="min-w-[170px] rounded-xl bg-zinc-700 p-4 shadow-lg">
        <div>
          <strong>{slice.points[0].data.xFormatted}</strong>
        </div>
        {slice.points.map(
          ({ data: { yFormatted }, id, serieId, serieColor }) => (
            <div className="flex items-center" key={id}>
              <div
                className="mr-2 h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: serieColor }}
              ></div>
              <div className="flex w-full justify-between">
                <div>{serieId}</div>
                <div className="ml-2">
                  <strong className="text-right">{yFormatted}</strong>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    )}
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
