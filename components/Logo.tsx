
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 22v-5" />
    <path d="M15.48 14.52c.8-1.2 1.52-2.8 1.52-4.52 0-2.76-2.24-5-5-5S7 7.24 7 10c0 1.72.72 3.32 1.52 4.52" />
    <path d="M7.26 19.34C8.7 17.65 10.26 16 12 16c0 0 0 0 0 0c1.74 0 3.3.65 4.74 2.34" />
  </svg>
);

export default Logo;
