'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  {
    displayName: 'Blog',
    href: '/blog',
  },
];

export function Header() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="flex justify-between items-center py-9 px-5 md:px-0">
      <Link href="/">
        <div className="text-2xl">
          Mdx<span className="font-bold">Blog</span>
        </div>
      </Link>
      <div className="flex space-x-10">
        <nav className="space-x-10">
          {navLinks.map(({ displayName, href }, index) => (
            <Link key={index} href={href}>
              {displayName}
            </Link>
          ))}
        </nav>
        <button onClick={toggleTheme} className="focus:outline-none">
          <Image
            src={theme === 'light' ? '/light-toggle.svg' : '/dark-toggle.svg'}
            alt="toggle theme"
            width={48}
            height={28}
          />
        </button>
      </div>
    </header>
  );
}