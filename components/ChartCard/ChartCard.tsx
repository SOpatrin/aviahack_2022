import { useState } from 'react';
import { Series } from '../StorageChart/series.model';
import StorageChart, { ScaleValues } from '../StorageChart/StorageChart';

type CardChartProps = {
  title: string;
  data?: Series[];
  color?: string;
  onScaleChange?: (value: ScaleValues) => void;
};

const CardChart: React.FC<CardChartProps> = ({
  title,
  data,
  color,
  onScaleChange,
}) => {
  const [scale, setScale] = useState<ScaleValues>('daily');

  const handleScaleChange = (value: ScaleValues) => {
    setScale(value);
    onScaleChange?.(value);
  };

  return (
    <div className="flex w-full flex-col px-40">
      <h2 className="text-4xl">{title}</h2>
      <div className="h-96 w-full">
        {data ? (
          <StorageChart data={data} scale={scale} color={color} />
        ) : (
          <div className="flex h-full items-center justify-center text-lg">
            Loading...
          </div>
        )}
      </div>
      <div className="flex p-4">
        <button
          className={`rounded-xl border border-zinc-400 p-2 hover:bg-zinc-500 active:bg-zinc-600 ${
            scale === 'daily' && 'bg-zinc-700'
          }`}
          onClick={() => handleScaleChange('daily')}
        >
          Daily
        </button>
        <button
          className={`ml-2 rounded-xl border border-zinc-400 p-2 hover:bg-zinc-500 active:bg-zinc-600 ${
            scale === 'monthly' && 'bg-zinc-700'
          }`}
          onClick={() => handleScaleChange('monthly')}
        >
          Monthly
        </button>
        <button
          className={`ml-2 rounded-xl border border-zinc-400 p-2 hover:bg-zinc-500 active:bg-zinc-600 ${
            scale === 'yearly' && 'bg-zinc-700'
          }`}
          onClick={() => handleScaleChange('yearly')}
        >
          Yearly
        </button>
      </div>
    </div>
  );
};

export default CardChart;
