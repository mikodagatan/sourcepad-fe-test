interface ContainerLayoutProps {
  className?: string;
  children: React.ReactNode;
}

const ContainerLayout = ({ className, children }: ContainerLayoutProps) => {
  return (
    <div
      className={`flex items-center justify-center w-screen h-screen p-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default ContainerLayout;
