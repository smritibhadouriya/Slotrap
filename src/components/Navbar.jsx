import React from 'react';
import { Link } from 'react-router-dom';

 const links = [
      {
        label: 'Crypto Casinos',
        children: [
          { label: 'Casinos Instant Withdrawal', href: '/casinos-instant-withdrawal' },
          { label: 'Telegram Casinos', href: '/telegram-casinos' },
          { label: 'Chicken Road Casino', href: '/chicken-road-casino' },
          { label: 'No Verification Casinos', href: '/no-verification-casinos' },
          { label: 'VPN Casinos', href: '/vpn-casinos' },
          { label: 'Crash Games', href: '/crash-games' },
          { label: 'Ethereum Casinos', href: '/ethereum-casinos' },
          { label: 'USDT Casinos', href: '/usdt-casinos' },
          { label: 'Crypto Sports Betting', href: '/crypto-sports-betting' },
          { label: 'Metamask Casinos', href: '/metamask-casinos' },
          { label: 'Ethereum Sports Betting', href: '/ethereum-sports-betting' },
          { label: 'Litecoin Casinos', href: '/litecoin-casinos' },
          { label: 'Aviator Casinos', href: '/aviator-casinos' },
        ],
      },
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ];

    const DropdownMenu = ({ link, closeMenu }) => (
      <div className="relative group">
        <button className="text-gray-800 hover:text-gray-500 font-medium text-lg transition-colors duration-200 flex items-center">
          {link.label}
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div className="absolute hidden group-hover:block group-focus-within:block bg-gray-100 border border-gray-300 rounded-lg shadow-xl mt-3 w-max max-w-[100vw] transform opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto">
          {link.children.map((subLink) => (
            <Link 
              key={subLink.label}
              to={subLink.href}
              className="block px-5 py-1 text-gray-800 hover:bg-gray-200 hover:text-gray-900 rounded-lg transition-colors duration-200"
              onClick={closeMenu}
            >
              {subLink.label}
            </Link>
          ))}
        </div>
      </div>
    );

    const MobileDropdownMenu = ({ link, closeMenu }) => {
      const [isSubMenuOpen, setIsSubMenuOpen] = React.useState(false);

      return (
        <div className="relative">
          <button
            className="text-gray-200 font-medium text-lg w-full text-left flex items-center"
            onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
          >
            {link.label}
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isSubMenuOpen && (
            <div className="flex flex-col mt-2">
              {link.children.map((subLink) => (
                <Link
                  key={subLink.label}
                  href={subLink.href}
                  className="block px-5 py-1 text-gray-200 hover:bg-gray-500 hover:text-gray-100 rounded-lg transition-colors duration-200"
                  onClick={closeMenu}
                >
                  {subLink.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    };

    const Navbar = () => {
      const [isOpen, setIsOpen] = React.useState(false);
      const menuRef = React.useRef(null);

      React.useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => {
          document.body.style.overflow = '';
        };
      }, [isOpen]);

      React.useEffect(() => {
        const handleKeyDown = (e) => {
          if (e.key === 'Escape') setIsOpen(false);
        };

        const handleClickOutside = (e) => {
          if (menuRef.current && !menuRef.current.contains(e.target)) {
            setIsOpen(false);
          }
        };

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);

      const closeMenu = () => setIsOpen(false);

      return (
        <nav className="bg-gray-200 border-b border-gray-400 p-6 sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/" className="text-gray-800 font-extrabold text-3xl tracking-tight">
                <span>Slotrap</span>
              </Link>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-800 hover:text-gray-500 focus:outline-none transition-colors duration-200"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                  />
                </svg>
              </button>
            </div>
            <div className="hidden md:flex space-x-8">
              {links.map((link) =>
                link.children ? (
                  <DropdownMenu key={link.label} link={link} closeMenu={closeMenu} />
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-gray-800 hover:text-gray-500 font-medium text-lg transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </div>

          {isOpen && (
            <div
              ref={menuRef}
              className="md:hidden fixed inset-0 bg-gray-700 bg-opacity-95 z-50 p-6 transform transition-transform duration-300"
            >
              <button
                onClick={closeMenu}
                className="text-gray-200 hover:text-gray-400 focus:outline-none float-right"
                aria-label="Close menu"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="mt-16 space-y-6">
                {links.map((link) =>
                  link.children ? (
                    <MobileDropdownMenu key={link.label} link={link} closeMenu={closeMenu} />
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block text-gray-200 hover:text-gray-400 font-medium text-lg"
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </div>
            </div>
          )}
        </nav>
      );
    };

export default Navbar;