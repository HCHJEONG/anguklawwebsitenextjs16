import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/', icon: HomeIcon },
  {
    name: 'Incorporation',
    href: '/services/incorporation',
    icon: UserGroupIcon,
  },
  { name: 'Liquidation', 
    href: '/services/liquidation', 
    icon: DocumentDuplicateIcon 
  },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (<div key={link.name} className='flex-col md:flex-row'>
          <a
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <div className="group relative flex justify-center">
              <LinkIcon className="w-6" />
              <span className="absolute bottom-full mb-2 w-max scale-0 rounded bg-gray-800 p-2 text-xs text-white transition-all group-hover:scale-100 md:hidden">
                {`${link.name}`}
              </span>
            </div>
            
            <p className="hidden md:block">{link.name}</p>
          </a><p className="text-xs text-center w-full block md:hidden">{link.name}</p></div>
        );
      })}
    </>
  );
}
