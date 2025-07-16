
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useWallet } from '@solana/wallet-adapter-react';
import { FaCoins as IconMainMenuEarn } from "react-icons/fa";
import { BsTools as IconMainMenuTools, BsJournalBookmarkFill as IconSubQuests } from "react-icons/bs";
import { FiChevronDown, FiDownloadCloud, FiCpu as IconSubSmartSwap, FiSettings as IconSubTokenFactory, FiLogOut } from "react-icons/fi";
import { AiFillFire as IconSubBurnToMint, AiOutlineMessage as IconSubAIChat } from "react-icons/ai";
import { MdWaterDrop as IconSubLiquidity, MdAccountBalance as IconSubBank } from "react-icons/md";
import { GiBarn as IconSubFarms } from "react-icons/gi";
import MyMultiButton from './MyMultiButton';

interface NavLinkItem {
  label: string;
  href: string;
  icon?: React.ElementType;
  target?: string;
  rel?: string;
}

interface DropdownNavItem {
  type: 'dropdown';
  label: string;
  mainIcon: React.ElementType;
  sublinks: NavLinkItem[];
}

type NavItem = { type: 'link'; label: string; href: string } | DropdownNavItem;

const NAV_ITEMS: NavItem[] = [
  { type: 'link', label: 'Swap', href: '/swap' },
  { type: 'link', label: 'Launchpad', href: '/launchpad' },
  {
    type: 'dropdown',
    label: "Earn",
    mainIcon: IconMainMenuEarn,
    sublinks: [
      { label: "Liquidity", href: "/liquidity", icon: IconSubLiquidity },
      { label: "Farms", href: "/farms", icon: IconSubFarms },
      { label: "Bank", href: "/bank", icon: IconSubBank },
    ],
  },
  {
    type: 'dropdown',
    label: "Tools",
    mainIcon: IconMainMenuTools,
    sublinks: [
      { label: "Smart Swap", href: "/smart-swap", icon: IconSubSmartSwap },
      { label: "Token Factory", href: "/tokenfactory", icon: IconSubTokenFactory },
      { label: "Burn to Mint", href: "/b2m", icon: IconSubBurnToMint },
      { label: "Quests", href: "/quests", icon: IconSubQuests },
      { label: "Phoenix AI Chat", href: "/chat", icon: IconSubAIChat },
    ],
  },
];

const DropdownMenuItem: React.FC<{ link: NavLinkItem; onClick?: () => void }> = ({ link, onClick }) => {
  const IconComponent = link.icon;
  const linkClasses = "flex justify-start items-center gap-3 select-none rounded-md p-2.5 text-sm font-medium leading-none no-underline outline-none transition-colors duration-200 ease-out text-phoenix-text-secondary hover:bg-phoenix-border hover:text-phoenix-text-primary";
  
  if (link.target === "_blank") {
    return (
      <a href={link.href} target="_blank" rel={link.rel || "noopener noreferrer"} onClick={onClick} className={linkClasses}>
        {IconComponent && <IconComponent className="h-4 w-4" />} {link.label}
      </a>
    );
  }
  
  return (
    <Link to={link.href} onClick={onClick} className={linkClasses}>
      {IconComponent && <IconComponent className="h-4 w-4" />} {link.label}
    </Link>
  );
};

const NavDropdown: React.FC<{ dropdownItem: DropdownNavItem }> = ({ dropdownItem }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const MainIcon = dropdownItem.mainIcon;

  return (
    <div className="relative group" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="text-sm font-medium flex items-center gap-1 px-3 py-2 rounded-md text-phoenix-text-primary hover:bg-phoenix-border/50 transition-colors duration-200 ease-out">
        {MainIcon && <MainIcon className="h-4 w-4" />}
        <span className="transition-colors group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600">
            {dropdownItem.label}
        </span>
        <FiChevronDown className={`ml-1 h-3 w-3 transition-transform duration-200 ease-out ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div className={`absolute left-0 top-full pt-2 w-[230px] transition-all duration-300 ease-out transform-gpu ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}`}>
        <ul className="rounded-xl border border-phoenix-border bg-phoenix-bg p-1.5 shadow-2xl shadow-black/40">
          {dropdownItem.sublinks.map((sublink) => (
            <li key={sublink.href} className="my-0.5">
              <DropdownMenuItem link={sublink} onClick={() => setIsOpen(false)} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const CustomWalletButton: React.FC = () => {
    const { publicKey, disconnect, wallet } = useWallet();
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => setIsMounted(true), []);
    
    if (!isMounted) {
        return <div className="h-10 w-36 rounded-md bg-phoenix-border animate-pulse"></div>;
    }
    
    if (!publicKey || !wallet) {
        return <MyMultiButton />;
    }

    const base58 = publicKey.toBase58();
    const shortAddress = `${base58.slice(0, 4)}...${base58.slice(-4)}`;

    return (
        <div className="relative group">
            <button className="flex items-center justify-center h-10 px-4 text-sm font-medium bg-phoenix-container-bg border border-phoenix-border rounded-md text-phoenix-text-primary hover:border-phoenix-accent/80 transition-colors">
                <img src={wallet.adapter.icon} alt={`${wallet.adapter.name} icon`} className="w-5 h-5 mr-2 rounded-full" />
                {shortAddress}
            </button>
            <div className="absolute right-0 top-full pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <ul className="rounded-md border border-phoenix-border bg-phoenix-bg p-1 shadow-2xl shadow-black/30">
                    <li>
                        <button onClick={disconnect} className="w-full flex items-center gap-2 p-2 text-sm rounded-md text-phoenix-text-secondary hover:bg-phoenix-border hover:text-red-500">
                            <FiLogOut /> Disconnect
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default function AppBar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-phoenix-border bg-phoenix-container-bg/95 backdrop-blur supports-[backdrop-filter]:bg-phoenix-container-bg/60">
      <div className="flex justify-between items-center h-16 w-full max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex md:justify-start gap-4 lg:gap-6 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/images/logo.png" alt="Phoenix Swap Logo" className="w-10 h-10 rounded-full"/>
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 hidden sm:block">Phoenix Swap</span>
          </Link>
          <ul className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                {item.type === 'link' ? (
                  <Link to={item.href} className="text-sm font-medium flex items-center gap-1 px-3 py-2 rounded-md text-phoenix-text-primary hover:text-phoenix-accent hover:bg-phoenix-border/50 transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <NavDropdown dropdownItem={item} />
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-end items-center gap-3">
          <a href="/phoenix-lightpaper.pdf" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex items-center justify-center gap-2 text-sm font-semibold transition-all outline-none text-black shadow-sm h-9 rounded-md px-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:brightness-110 transform hover:-translate-y-px">
            <FiDownloadCloud className="h-4 w-4" /> Lightpaper
          </a>
          <CustomWalletButton />
        </div>
      </div>
    </nav>
  );
}