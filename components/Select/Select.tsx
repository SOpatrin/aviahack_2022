type SelectProps = {
  children: React.ReactNode;
};

const Select: React.FC<SelectProps> = ({ children }) => {
  return (
    <select className="block w-full rounded-xl border-none bg-gray-100 p-3 font-medium text-slate-500 focus:border-blue-500 focus:ring-blue-500">
      {children}
    </select>
  );
};

export default Select;
