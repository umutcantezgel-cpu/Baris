import React from 'react';

const Select = React.forwardRef(({
  children,
  value,
  onValueChange,
  ...props
}, ref) => {
  return (
    <select
      value={value}
      onChange={(e) => onValueChange && onValueChange(e.target.value)}
      ref={ref}
      className="flex h-12 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 touch-target"
      {...props}
    >
      {children}
    </select>
  );
});

Select.displayName = 'Select';

const SelectTrigger = React.forwardRef(({ children, ...props }, ref) => {
  return <div ref={ref} {...props}>{children}</div>;
});

SelectTrigger.displayName = 'SelectTrigger';

const SelectValue = ({ placeholder, children }) => {
  return <span>{children || placeholder}</span>;
};

const SelectContent = ({ children }) => {
  return <>{children}</>;
};

const SelectItem = ({ value, children }) => {
  return <option value={value}>{children}</option>;
};

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem };
