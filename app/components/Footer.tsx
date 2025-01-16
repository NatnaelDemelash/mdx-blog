'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-8 px-5 md:px-10 flex justify-between items-center border-t border-gray-400 dark:border-gray-300">
      <Link href="/" className="flex items-center space-x-1">
        <Image src="/logo.png" alt="logo" width={30} height={30} />
        <p className="text-xl font-bold">Blogger</p>
      </Link>

      <div className="flex flex-col md:flex-row  md:space-x-10 text-gray-700 dark:text-gray-400">
        <Link href="/">Terms of Use</Link>
        <Link href="/">Privacy Policy</Link>
        <Link href="/">Cookie policy</Link>
      </div>
    </footer>
  );
}
