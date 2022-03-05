interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button = ({
  children = 'This is a button',
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`rounded bg-purple-500 text-white text-center py-2 px-4 hover:bg-purple-700 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
