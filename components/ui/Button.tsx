import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button = ({ variant = 'primary', children, className = '', ...props }: ButtonProps) => {
  const baseStyle = "px-6 py-3 rounded-lg font-bold transition-all duration-200 transform hover:scale-[1.02] active:scale-95";
  
  const variants = {
    primary: "bg-primary text-textMain hover:bg-orange-500",
    secondary: "bg-transparent border-2 border-primary text-primary hover:bg-primary/10"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
