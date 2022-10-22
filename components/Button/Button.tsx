type ButtonProps = {
  onClick: () => void;
  active: boolean;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ active, onClick, children }) => {
  return (
    <button
      className={`ml-2 rounded-lg bg-zinc-100 p-3 transition-colors hover:bg-zinc-200 active:bg-zinc-300 ${
        active && 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800'
      } ${!active && 'text-zinc-400 hover:text-zinc-500 active:text-zinc-500'}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
