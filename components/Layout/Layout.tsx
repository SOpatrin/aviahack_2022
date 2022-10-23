import Image from 'next/image';
import Mts from '../Icons/Mts';
import Navbar from '../Navbar/Navbar';
import avatar from '../../public/avatar.jpg';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-200 text-gray-700">
      <header className="flex h-16 items-center bg-white px-6 shadow-sm">
        <div className="text-red-600">
          <Mts />
        </div>
        <div className="ml-auto flex">
          <div className="mr-4">
            <div className="font-bold">Брегман Илья</div>
            <div className="text-xs text-slate-500">МТС логистика</div>
          </div>
          <Image
            layout="fixed"
            width={44}
            height={44}
            src={avatar}
            alt="avatar"
          />
        </div>
      </header>
      <div className="flex min-h-[calc(100vh-64px)] w-full">
        <Navbar />
        <main className="flex w-full flex-col items-center p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
