import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();
  router.push('/1/logistic');

  return <></>;
};

export default Home;
