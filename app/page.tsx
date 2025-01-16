import Image from 'next/image';
import Footer from './components/Footer';
import { Header } from './components/Header';

export default function Home() {
  return (
    <>
      <Header />
      {/* Content */}
      {/* Hero */}
      <div className="mb-20 px-5 md:px-0">
        <div className="h-[250px] md:h-[600px] w-full rounded-md relative ">
          <Image
            src="/images/hero.jpg"
            alt="Hero image"
            fill
            sizes="(max-width: 768px) 100vw, 100vh"
            className="object-cover -z-10"
          />
          <div className="absolute space-y-3 -bottom-8 left-10 bg-white dark:bg-[#242535] p-6 rounded-lg shadow-lg max-w-[80%] md:max-w-[40%]">
            <p>Technology</p>
            <h2 className="font-bold text-lg md:text-2xl">
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </h2>
            <p className="text-sm md:text-base">
              Lary Fransisco | September 4, 2025
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
