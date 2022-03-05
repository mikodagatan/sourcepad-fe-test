interface FormContainerProps {
  className?: string;
  children: React.ReactNode;
}

const FormContainer = ({ className, children }: FormContainerProps) => {
  return (
    <div
      className={`rounded-md h-fit w-fit bg-white shadow-lg sm:max-w-[400px] max-w-full ${className}`}
    >
      {children}
    </div>
  );
};

export default FormContainer;
