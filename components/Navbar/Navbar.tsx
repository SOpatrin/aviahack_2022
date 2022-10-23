import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { paths } from '../../config';
import Finances from '../Icons/Finances';
import Logistic from '../Icons/Logistic';
import Upload from '../Icons/Upload';
import Select from '../Select/Select';

type NavItemProps = {
  children: React.ReactNode;
  active?: boolean;
  href: string;
  icon?: React.ReactNode;
};

const NavItem: React.FC<NavItemProps> = ({ children, active, href, icon }) => {
  return (
    <Link href={href}>
      <a
        className={`flex rounded-lg py-3 px-6 font-medium transition-colors ${
          active
            ? 'bg-red-600 text-white'
            : 'text-slate-500 hover:text-gray-700'
        }`}
      >
        <div className="mr-4">{icon}</div>
        <div>{children}</div>
      </a>
    </Link>
  );
};

const Navbar: React.FC = () => {
  const router = useRouter();

  const [storeId, setStoreId] = useState('1');

  const handleStoreSelect = (value: string) => {
    setStoreId(value);
    router.push({
      pathname: router.pathname,
      query: {
        storeId: value,
      },
    });
  };

  const getStoreRoute = (path: string) => {
    return `/${storeId}${path}`;
  };

  return (
    <nav className="min-w[264px] flex w-80 shrink-0 flex-col self-stretch border border-zinc-300 bg-white py-6 px-4 shadow-sm">
      <div className="mb-2">
        <Select defaultValue="1" onChange={handleStoreSelect}>
          <option value="1">Склад 1</option>
          <option value="2">Склад 2</option>
          <option value="3">Склад 3</option>
        </Select>
      </div>
      <NavItem
        active={router.asPath === getStoreRoute(paths.logistic)}
        href={getStoreRoute(paths.logistic)}
        icon={<Logistic />}
      >
        Логистика
      </NavItem>
      <NavItem
        active={router.asPath === getStoreRoute(paths.finances)}
        href={getStoreRoute(paths.finances)}
        icon={<Finances />}
      >
        Финансы
      </NavItem>
      <NavItem
        active={router.asPath === getStoreRoute(paths.upload)}
        href={getStoreRoute(paths.upload)}
        icon={<Upload />}
      >
        Подгрузка данных
      </NavItem>
    </nav>
  );
};

export default Navbar;
