// import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import AngukLogo from '@/app/ui/anguk-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen overflow-auto flex-col p-6">
      {/* <div className={styles.shape} /> */}
      <div className="flex justify-between h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AngukLogo />
        {/* <Image
          // src="/hero-desktop.png"
          src="/assets/img/haetae.jpg"
          width={270}
          height={200}
          className="rounded-xl hidden md:block"
          alt="Kyungbok Palace frontgate Kwanghwamun"
        />
        <Image
          // src="/hero-mobile.png"
          src="/assets/img/haetae.jpg"
          width={85}
          height={55}
          className="rounded-xl block md:hidden"
          alt="Kyungbok Palace frontgate Kwanghwamun"
        /> */}
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-10">
          {/* <div
            className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black"
          /> */}
          {/* <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}> */}
          <h1
            className={`${lusitana.className} text-lg text-gray-800 md:text-2xl md:leading-normal`}
          > 
            <strong>Welcome to Anguk Law Offices.</strong> <br/><br/>
            Anguk Law Offices has been a leading Korean 
            law firm for foreign investors for more than two decades.{' '}
            {/* <a href="https://penvot.com/" className="text-blue-500">
              Penvot.com
            </a>
             is our proud library. */}
          </h1>
          <Link
            href="/services"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Services</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
          <Link
            href="/members"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Members</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
          <Link
            href="/contact/address"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Contact</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-10 md:py-12">
          {/* Add Hero Images Here */}      
          <Image
            // src="/hero-desktop.png"
            src="/assets/img/kyungbokgungview.jpg"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Kyungbok Palace frontgate Kwanghwamun"
          />
          <Image
            // src="/hero-mobile.png"
            src="/assets/img/kyungbokgungview.jpg"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Kyungbok Palace frontgate Kwanghwamun"
          />
        </div>
      </div>
    </main>
  );
}
