type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-slate-200 px-4 py-10 text-gray-700">
      <main className="flex w-full flex-col items-center justify-center">
        {children}
      </main>
    </div>
  );
};

export default Layout;
