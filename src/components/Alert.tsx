interface IAlert {
  status: string;
  message?: string;
  isOpen?: boolean;
}

const Alert = ({ status, message, isOpen = true }: IAlert) => {
  // NOTE: classes written like this for Tailwind JIT
  const statusClasses = {
    success: 'bg-emerald-200 text-emerald-600 border-emerald-500',
    warning: 'bg-yellow-200 text-yellow-600 border-yellow-500',
    danger: 'bg-red-200 text-red-600 border-red-500',
  };

  return (
    <>
      {isOpen && (
        <div
          className={`text-xs p-4 rounded border w-full h-fit ${statusClasses[status]}`}
        >
          {message}
        </div>
      )}
    </>
  );
};

export default Alert;
