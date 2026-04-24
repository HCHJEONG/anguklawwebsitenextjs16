import SideNav from './sidenav';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Anguk Law Offices is a leading Korean law firm for foreign investors.',
  metadataBase: new URL('https://anguklaw.com'),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}