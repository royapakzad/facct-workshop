
import React from 'react';

const PresentationChartBarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
    {...props}
  >
    <path d="M4 3h16a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm0 2v12h16V5H4zm2 10h2V9H6v6zm4 0h2V7h-2v8zm4 0h2v-4h-2v4zM2 20h20v2H2v-2z" />
  </svg>
);

export default PresentationChartBarIcon;
