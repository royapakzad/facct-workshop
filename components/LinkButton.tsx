
import React from 'react';

interface LinkButtonProps {
  href: string;
  text: string;
  icon?: React.ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, text, icon }) => (
  <a
    href={href}
    target={href.startsWith("#") ? "_self" : "_blank"}
    rel={href.startsWith("#") ? "" : "noopener noreferrer"}
    className="flex items-center justify-center space-x-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-50"
    aria-label={`${text} (opens in ${href.startsWith("#") ? "same tab" : "new tab"})`}
  >
    {icon}
    <span className="text-xl">{text}</span>
  </a>
);

export default LinkButton;
