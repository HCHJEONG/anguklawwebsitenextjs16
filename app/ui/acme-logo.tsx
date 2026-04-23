import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[28px] block md:hidden">Anguk Law Offices</p>
      <p className="text-[44px] hidden md:block ml-4">Anguk Law Offices</p>
    </div>
  );
}
