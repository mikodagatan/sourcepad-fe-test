interface ButtonProps {
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
      className={`rounded bg-purple-500 text-white text-center py-2 px-4 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
