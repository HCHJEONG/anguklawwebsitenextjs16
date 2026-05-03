import SideNav from './sidenav';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Anguk Law Offices is a leading Korean law firm for foreign investors.',
  metadataBase: new URL('https://anguklaw.com/articles'),
  openGraph: {
    title: 'Anguk Law Offices',
    description: 'Welcome to Anguk Law Offices',
    url: 'https://anguklaw.com',
    siteName: 'Anguk Law Offices',
    images: [
      {
        url: '/assets/img/myofficelobby.jpg', // public 폴더 기준 이미지 경로
        width: 800,
        height: 400,
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  }
};
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex md:h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}