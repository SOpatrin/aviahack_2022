import type { NextPage } from 'next';
import { useSeries } from '../components/StorageChart/series.query';
import CardChart from '../components/ChartCard/ChartCard';
import colors from 'tailwindcss/colors';
import { ScaleValues } from '../components/StorageChart/StorageChart';
import { useState } from 'react';

const Finances: NextPage = () => {
  const [keepingScale, setKeepingScale] = useState<ScaleValues>('daily');

  const keepingData = useSeries(keepingScale).data?.filter(
    ({ id }) => id === 'keeping'
  );

  return (
    <>
      <div className="w-full">
        <CardChart
          title="Финансы"
          data={keepingData}
          onScaleChange={setKeepingScale}
          color={colors.red[600]}
        />
      </div>
    </>
  );
};

export default Finances;