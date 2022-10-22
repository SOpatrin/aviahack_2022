import { useState } from 'react';
import Button from '../Button/Button';
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
    <div className="flex w-full flex-col rounded-xl border border-zinc-300 bg-white p-6">
      <h2 className="text-4xl">
        <strong>{title}</strong>
      </h2>
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
        <Button
          active={scale === 'daily'}
          onClick={() => handleScaleChange('daily')}
        >
          По дням
        </Button>
        <Button
          active={scale === 'monthly'}
          onClick={() => handleScaleChange('monthly')}
        >
          По месяцам
        </Button>
        <Button
          active={scale === 'yearly'}
          onClick={() => handleScaleChange('yearly')}
        >
          По годам
        </Button>
      </div>
    </div>
  );
};

export default CardChart;
