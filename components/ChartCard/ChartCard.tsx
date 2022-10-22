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
  const [scale, setScale] = useState<ScaleValues>('month');

  const handleScaleChange = (value: ScaleValues) => {
    setScale(value);
    onScaleChange?.(value);
  };

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
          onClick={() => handleScaleChange('month')}
        >
          Month
        </button>
        <button
          className={`ml-2 rounded-xl border border-zinc-400 p-2 hover:bg-zinc-500 active:bg-zinc-600 ${
            scale === '3 months' && 'bg-zinc-700'
          }`}
          onClick={() => handleScaleChange('3 months')}
        >
          3 months
        </button>
        <button
          className={`ml-2 rounded-xl border border-zinc-400 p-2 hover:bg-zinc-500 active:bg-zinc-600 ${
            scale === 'year' && 'bg-zinc-700'
          }`}
          onClick={() => handleScaleChange('year')}
        >
          Year
        </button>
      </div>
    </div>
  );
};

export default CardChart;
