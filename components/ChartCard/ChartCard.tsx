import { useState } from 'react';
import { Series } from '../StorageChart/series.model';
import { useSeries } from '../StorageChart/series.query';
import StorageChart, { ScaleValues } from '../StorageChart/StorageChart';

type CardChartProps = {
  title: string;
  data?: Series[];
  color?: string;
};

const CardChart: React.FC<CardChartProps> = ({ title, data, color }) => {
  const [scale, setScale] = useState<ScaleValues>('month');

  return (
    <div className="flex w-full flex-col px-40">
      <h2 className="text-4xl">{title}</h2>
      <div className="h-96 w-full">
        {data && <StorageChart data={data} scale={scale} color={color} />}
      </div>
      <div className="flex p-4">
        <button
          className={`rounded-xl border border-zinc-400 p-2 hover:bg-zinc-500 active:bg-zinc-600 ${
            scale === 'month' && 'bg-zinc-700'
          }`}
          onClick={() => setScale('month')}
        >
          Month
        </button>
        <button
          className={`ml-2 rounded-xl border border-zinc-400 p-2 hover:bg-zinc-500 active:bg-zinc-600 ${
            scale === '3 months' && 'bg-zinc-700'
          }`}
          onClick={() => setScale('3 months')}
        >
          3 months
        </button>
        <button
          className={`ml-2 rounded-xl border border-zinc-400 p-2 hover:bg-zinc-500 active:bg-zinc-600 ${
            scale === 'year' && 'bg-zinc-700'
          }`}
          onClick={() => setScale('year')}
        >
          Year
        </button>
      </div>
    </div>
  );
};

export default CardChart;
