import React from 'react';

interface BgPatternProps {
  className?: string;
  imagePath?: string;
}

const BgPattern: React.FC<BgPatternProps> = ({ 
  className = "", 
  imagePath = "/src/assets/BG.png" 
}) => {
  return (
    <div
      className={`absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat z-0 ${className}`}
      style={{ backgroundImage: `url(${imagePath})` }}
      aria-hidden="true"
    />
  );
};

export default BgPattern;
