
import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaTelegramPlane, FaDiscord, FaMediumM } from 'react-icons/fa';

const SOCIAL_LINKS = [
  { href: "https://twitter.com/phoenix", icon: FaTwitter, label: "Twitter" },
  { href: "https://t.me/phoenix", icon: FaTelegramPlane, label: "Telegram" },
  { href: "https://discord.gg/phoenix", icon: FaDiscord, label: "Discord" },
  { href: "https://medium.com/phoenix", icon: FaMediumM, label: "Medium" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-phoenix-container-bg border-t border-phoenix-border">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/images/logo.png" alt="Phoenix Swap Logo" className="h-8 w-8 rounded-full" />
            <span className="font-semibold text-phoenix-text-primary">Phoenix Swap</span>
          </Link>
          <div className="flex space-x-6">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-phoenix-text-secondary hover:text-phoenix-highlight transition-colors"
                >
                  <Icon className="h-6 w-6" />
                  <span className="sr-only">{social.label}</span>
                </a>
              );
            })}
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-phoenix-text-secondary">
          <p>&copy; {new Date().getFullYear()} Phoenix Swap. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;