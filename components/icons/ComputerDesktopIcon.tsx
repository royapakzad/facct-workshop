
import React from 'react';

const ComputerDesktopIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
    {...props}
  >
    <path d="M20 3H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h6v2H8v2h8v-2h-2v-2h6c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 16V5h16l.001 11H4z" />
  </svg>
);

export default ComputerDesktopIcon;
