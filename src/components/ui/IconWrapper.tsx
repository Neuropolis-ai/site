import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IconWrapperProps {
  icon: LucideIcon;
  size?: number;
  className?: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ icon: Icon, size = 24, className = '' }) => {
  return (
    <div className={className}>
      <Icon size={size} />
    </div>
  );
};

export default IconWrapper; 