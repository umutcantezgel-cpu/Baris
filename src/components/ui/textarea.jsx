import React from 'react';

const Textarea = React.forwardRef(({
  className = '',
  error = false,
  ...props
}, ref) => {
  const baseStyles = 'flex min-h-[120px] w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base transition-colors placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y';

  const errorStyles = error ? 'border-red-500 focus-visible:ring-red-500' : '';

  return (
    <textarea
      className={`${baseStyles} ${errorStyles} ${className}`}
      ref={ref}
      {...props}
    />
  );
});

Textarea.displayName = 'Textarea';

export { Textarea };
