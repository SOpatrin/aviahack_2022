import { ChangeEvent, useState } from 'react';

type SelectProps = {
  children: React.ReactNode;
  defaultValue: string;
  onChange?: (value: string) => void;
};

const Select: React.FC<SelectProps> = ({
  children,
  onChange,
  defaultValue,
}) => {
  const [value, setValue] = useState<string>(defaultValue);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
    onChange?.(event.target.value);
  };

  return (
    <select
      onChange={handleChange}
      value={value}
      className="block w-full rounded-xl border-none bg-gray-100 p-3 font-medium text-slate-500 focus:border-blue-500 focus:ring-blue-500"
    >
      {children}
    </select>
  );
};

export default Select;
