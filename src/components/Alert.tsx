interface AlertProps {
  status?: string;
  message?: string;
}

const Alert = ({ status = 'success', message }: AlertProps) => {
  // NOTE: used for tailwind JIT
  const statusClasses = {
    success: 'bg-teal-300 text-teal-700 border-teal-500',
    warning: 'bg-yellow-300 text-yellow-700 border-yellow-500',
    danger: 'bg-rose-300 text-rose-700 border-rose-500',
  };
  return (
    <div
      className={`p-4 text-xs rounded w-full border ${statusClasses[status]}`}
    >
      {message}
    </div>
  );
};

export default Alert;
