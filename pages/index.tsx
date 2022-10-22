import type { NextPage } from 'next';
import Link from 'next/link';
import { useSeries } from '../components/StorageChart/series.query';
import CardChart from '../components/ChartCard/ChartCard';
import colors from 'tailwindcss/colors';
import { ScaleValues } from '../components/StorageChart/StorageChart';
import { useState } from 'react';

const Home: NextPage = () => {
  const [keepingScale, setKeepingScale] = useState<ScaleValues>('daily');
  const [receivingScale, setReceivingScale] = useState<ScaleValues>('daily');

  const keepingData = useSeries(keepingScale).data?.filter(
    ({ id }) => id === 'keeping'
  );
  const receivingData = useSeries(receivingScale).data?.filter(
    ({ id }) => id === 'receiving'
  );

  return (
    <>
      <h1 className="text-6xl font-bold">
        Hello{' '}
        <Link href={'https://app.aviahack.com/team'}>
          <a
            className="border-b-2 border-transparent text-blue-500 transition-colors hover:border-blue-500"
            target="_blank"
          >
            Aviahack!
          </a>
        </Link>
      </h1>

      <p className="mt-3 text-2xl">Chart with data from api ⬇️</p>
      <div className="w-full">
        <CardChart
          title="Keeping"
          data={keepingData}
          onScaleChange={setKeepingScale}
        />
      </div>
      <div className="mt-10 w-full">
        <CardChart
          title="Receiving"
          data={receivingData}
          color={colors.emerald[500]}
          onScaleChange={setReceivingScale}
        />
      </div>
    </>
  );
};

export default Home;
