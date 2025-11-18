import React from 'react';

const Input = React.forwardRef(({
  className = '',
  type = 'text',
  error = false,
  ...props
}, ref) => {
  const baseStyles = 'flex h-12 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 touch-target';

  const errorStyles = error ? 'border-red-500 focus-visible:ring-red-500' : '';

  return (
    <input
      type={type}
      className={`${baseStyles} ${errorStyles} ${className}`}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export { Input };
