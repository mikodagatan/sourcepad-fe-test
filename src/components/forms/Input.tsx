import * as React from 'react';

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
  label?: string;
  error?: string;
  register: any;
  className?: string;
}

export const inputDefaultClasses =
  'rounded border border-gray-300 focus-visible:border-purple-500 px-4 py-3 outline-none hover:bg-gray-50 text-gray-700';

const Input = ({
  name,
  label,
  error,
  className,
  register,
  ...rest
}: InputProps) => {
  return (
    <div className="flex flex-col space-y-1 mt-3">
      {label && <label className="text-sm font-semibold mb-0">{label}</label>}
      <input
        name={name}
        className={`${inputDefaultClasses} ${className}`}
        ref={register}
        {...rest}
      />
      <div className="text-red-500 text-xs pl-2">{error}</div>
    </div>
  );
};
export default Input;
