import React from 'react';
import { Palmtree } from 'lucide-react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'medium', className = '' }) => {
  const sizeClasses = {
    small: 'text-2xl',
    medium: 'text-3xl',
    large: 'text-4xl'
  };

  return (
    <div className={`flex items-center gap-2 text-white ${className}`}>
      <div className="bg-white/20 p-2 rounded-full">
        <Palmtree className={`${sizeClasses[size]} text-white`} />
      </div>
      <span className={`font-bold ${sizeClasses[size]}`}>DKSH</span>
    </div>
  );
};

export default Logo;