import Mts from '../Icons/Mts';
import Navbar from '../Navbar/Navbar';

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
      </header>
      <div className="flex w-full">
        <Navbar />
        <main className="flex w-full flex-col items-center p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
