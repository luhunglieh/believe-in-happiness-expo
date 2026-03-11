import { Link, useLocation } from 'react-router-dom';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: '首頁', path: '/' },
  { name: '情緒教育展', path: '/emotion' },
  { name: '幸福園遊會', path: '/fair' },
  { name: '反毒街舞賽', path: '/dance' },
  { name: '贊助單位', path: '/sponsors' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-happiness-bg/80 backdrop-blur-md border-b border-happiness-accent/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-happiness-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
            H
          </div>
          <span className="serif font-bold text-xl tracking-tight">相信幸福博覽會</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-happiness-accent",
                location.pathname === link.path ? "text-happiness-accent underline underline-offset-8" : "text-happiness-ink/60"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-happiness-bg border-b border-happiness-accent/10 px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-lg font-medium",
                location.pathname === link.path ? "text-happiness-accent" : "text-happiness-ink/60"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
