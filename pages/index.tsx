import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import colors from 'tailwindcss/colors';
import CardChart from '../components/ChartCard/ChartCard';
import { useSeries } from '../components/StorageChart/series.query';
import { ScaleValues } from '../components/StorageChart/StorageChart';

const Home: NextPage = () => {
  const [keepingScale, setKeepingScale] = useState<ScaleValues>('daily');
  const [receivingScale, setReceivingScale] = useState<ScaleValues>('daily');

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/1/logistic');
    }, 500);
  }, [router]);

  const keepingData = useSeries(keepingScale).data?.filter(
    ({ id }) => id === 'keeping'
  );
  const receivingData = useSeries(receivingScale).data?.filter(
    ({ id }) => id === 'receiving'
  );

  return (
    <>
      <div className="w-full">
        <CardChart
          title="Хранение"
          data={keepingData}
          onScaleChange={setKeepingScale}
        />
      </div>
      <div className="mt-10 w-full">
        <CardChart
          title="Обработка"
          data={receivingData}
          color={colors.orange[600]}
          onScaleChange={setReceivingScale}
        />
      </div>
    </>
  );
};

export default Home;
