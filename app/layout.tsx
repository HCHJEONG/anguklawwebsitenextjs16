import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Anguk Law Offices',
    default: 'Anguk Law Offices',
  },
  description: 'Anguk Law Offices is a leading Korean law firm for foreign investors.',
  metadataBase: new URL('https://anguklaw.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <footer className="flex flex-col sm:flex-row justify-between items-center py-4 px-6 bg-white border-t text-sm text-gray-600">
          <p className='text-left'>© 2026 Anguk Law Offices. TEL: +82-2-3210-3330 Address: Chamber 304, 7, Yulgok-ro 2-gil, Jongno-gu, Seoul, Republic of Korea, 03143 All rights reserved. 
            Business Registration No. 105-05-48527(Representative Attorney at Law Heechan Jeong) E-commerce Registration No. 2024-Seoul Jongno-0248
          </p>          
          {/* <div className="flex gap-4 mt-2 sm:mt-0">
            <a href="#" className="hover:text-black">About</a>
            <a href="#" className="hover:text-black">Privacy</a>
            <a href="#" className="hover:text-black">Contact</a>
          </div> */}
        </footer>
      </body>
    </html>
  );
}
