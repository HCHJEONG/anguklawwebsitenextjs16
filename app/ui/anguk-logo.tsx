import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <p className="text-[20px] block md:hidden">Anguk Law Offices</p>
      <p className="text-[44px] hidden md:block">Anguk Law Offices</p>
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
    </div>
  );
}
