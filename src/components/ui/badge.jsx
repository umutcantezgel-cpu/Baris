import React from 'react';

const Badge = ({ children, className = '', variant = 'default' }) => {
  const baseStyles = 'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors';

  const variants = {
    default: 'bg-secondary/10 text-secondary border border-secondary/20',
    secondary: 'bg-primary/10 text-primary border border-primary/20',
    outline: 'border border-gray-300 text-gray-600',
    destructive: 'bg-red-100 text-red-700 border border-red-200',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export { Badge };
