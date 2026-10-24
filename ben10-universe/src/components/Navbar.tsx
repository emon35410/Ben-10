'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Shield, 
  Search, 
  Menu, 
  X, 
  Layers, 
  Cpu, 
  Scale, 
  Database,
  Zap
} from 'lucide-react';
import OmnitrixLoader from '@/components/OmnitrixLoader';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showHeroTimeModal, setShowHeroTimeModal] = useState(false);

  const navLinks = [
    { name: 'Characters', href: '/characters', icon: Search },
    { name: 'Aliens', href: '/aliens', icon: Cpu },
    { name: 'Villains', href: '/villains', icon: Shield },
    { name: 'Compare', href: '/compare', icon: Scale },
    { name: 'Admin Pipeline', href: '/admin', icon: Database },
  ];

  const seriesShortcuts = [
    { name: '2005 Original', href: '/series/ben-10-2005' },
    { name: 'Alien Force', href: '/series/ben-10-alien-force' },
    { name: 'Ultimate Alien', href: '/series/ben-10-ultimate-alien' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-[#1C271F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Omnitrix Icon */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full bg-[#101512] border-2 border-[#A3FF12] flex items-center justify-center transition-transform group-hover:scale-105 omnitrix-glow-sm">
              {/* Omnitrix Hourglass Silhouette */}
              <div className="w-5 h-5 flex items-center justify-center">
                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#A3FF12] mb-0.5"></div>
                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-[#A3FF12] mt-0.5 -ml-3"></div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black tracking-wider text-base sm:text-lg text-[#E9EFE9] group-hover:text-[#A3FF12] transition-colors">
                  BEN 10
                </span>
                <span className="text-xs uppercase font-mono tracking-widest text-[#A3FF12] bg-[#1A211C] px-1.5 py-0.5 rounded border border-[#1C271F]">
                  UNIVERSE
                </span>
              </div>
              <p className="text-[10px] text-[#AAB5AD] hidden sm:block tracking-wide">
                CANON ARCHIVE (2005 - 2012)
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-all ${
                    isActive 
                      ? 'text-[#0B0F0C] bg-[#A3FF12] font-semibold omnitrix-glow-sm' 
                      : 'text-[#E9EFE9] hover:text-[#A3FF12] hover:bg-[#1A211C]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}

            {/* Series Dropdown / Quick Links */}
            <div className="relative group ml-2 pl-2 border-l border-[#1C271F]">
              <button className="flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-mono text-[#AAB5AD] hover:text-[#A3FF12] hover:bg-[#1A211C] transition-colors">
                <Layers className="w-3.5 h-3.5" />
                <span>3 Series</span>
              </button>
              <div className="absolute right-0 mt-1 w-48 rounded-lg glass-panel-elevated p-1 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {seriesShortcuts.map((s) => (
                  <Link
                    key={s.name}
                    href={s.href}
                    className="block px-3 py-2 text-xs text-[#E9EFE9] hover:text-[#A3FF12] hover:bg-[#101512] rounded transition-colors font-medium"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Right Status Indicator & Hero Time Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setShowHeroTimeModal(true)}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold text-[#0B0F0C] bg-[#A3FF12] hover:bg-[#b5ff36] shadow-[0_0_12px_rgba(163,255,18,0.4)] transition-all cursor-pointer hover:scale-105"
            >
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>HERO TIME</span>
            </button>

            <span className="flex items-center gap-1.5 text-xs font-mono text-[#AAB5AD] bg-[#101512] px-2.5 py-1 rounded-full border border-[#1C271F]">
              <span className="w-2 h-2 rounded-full bg-[#A3FF12] animate-pulse"></span>
              Prime Canon Only
            </span>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setShowHeroTimeModal(true)}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold text-[#0B0F0C] bg-[#A3FF12] shadow-[0_0_8px_rgba(163,255,18,0.4)]"
            >
              <Zap className="w-3 h-3 fill-current" />
              <span>HERO</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#AAB5AD] hover:text-[#A3FF12] hover:bg-[#1A211C] focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel-elevated border-b border-[#1C271F] px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium ${
                pathname.startsWith(item.href)
                  ? 'bg-[#A3FF12] text-[#0B0F0C] font-semibold'
                  : 'text-[#E9EFE9] hover:bg-[#101512]'
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.name}
            </Link>
          ))}

          <div className="pt-3 border-t border-[#1C271F]">
            <p className="px-3 text-xs uppercase font-mono text-[#AAB5AD] mb-1">Canonical Series</p>
            {seriesShortcuts.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-1.5 text-xs text-[#E9EFE9] hover:text-[#A3FF12]"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Fullscreen Transformation Modal */}
      {showHeroTimeModal && (
        <OmnitrixLoader
          fullScreen={true}
          message="Manual transformation sequence initiated from Ben 10 Prime Archives..."
          interactive={true}
          onClose={() => setShowHeroTimeModal(false)}
        />
      )}
    </header>
  );
}
