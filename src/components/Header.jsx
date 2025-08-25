import { useState, useEffect } from 'preact/hooks';
import { useLocation } from 'preact-iso';
import { FontAwesomeIcon } from '@aduh95/preact-fontawesome';
import { faUsers, faGraduationCap, faFileAlt, faNewspaper, faBars } from '@fortawesome/free-solid-svg-icons';

export function Header() {
  const { url } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (url === '/') {
        setAtTop(window.scrollY === 0);
      } else {
        setAtTop(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [url]);

  const navLinks = [
    { name: 'Početna', href: '/' },
    { name: 'O nama', href: '/o-nama', dropdown: [
      { name: 'Istorijat škole', href: '/o-nama', icon: faUsers },
      { name: 'Obrazovni programi koje nudimo', href: '/smjerovi', icon: faGraduationCap },
      { name: 'Obrazovanje odraslih', href: '/smjerovi', icon: faGraduationCap },
      { name: 'Saradnja', href: '#', icon: faUsers },
      { name: 'Prezentacija škole', href: '#', icon: faFileAlt },
      { name: 'Novi školski flajer – preuzmi', href: '#', icon: faFileAlt },
      { name: 'Školski flajer – preuzmi', href: '#', icon: faFileAlt },
    ]},
    { name: 'Smjerovi', href: '/smjerovi' },
    { name: 'Vijesti', href: '/vijesti', dropdown: [
      { name: 'Obavještenja', href: '/vijesti', icon: faNewspaper },
      { name: 'Događaji', href: '/vijesti', icon: faNewspaper },
      { name: 'Ekskurzije', href: '/vijesti', icon: faNewspaper },
    ]},
    { name: 'Galerija', href: '/galerija', dropdown: [
      { name: 'Galerija slika', href: '/galerija', icon: faFileAlt },
    ]},
    { name: 'Dokumenti', href: '/dokumenta', dropdown: [
      { name: 'Konkurs za upis u I razred', href: '/dokumenta', icon: faFileAlt },
      { name: 'Zakoni, pravilnici i dokumenta', href: '/dokumenta', icon: faFileAlt },
      { name: 'Plan integriteta', href: '/dokumenta', icon: faFileAlt },
    ]},
    { name: 'Takmičenja', href: '/takmicenja', dropdown: [
      { name: 'Školska takmičenja', href: '/takmicenja', icon: faGraduationCap },
      { name: 'Državna takmičenja', href: '/takmicenja', icon: faGraduationCap },
      { name: 'Međunarodna takmičenja', href: '/takmicenja', icon: faGraduationCap },
      { name: 'Sportska takmičenja', href: '/takmicenja', icon: faGraduationCap },
    ]},
    { name: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <nav class={`fixed w-full z-50 transition-colors duration-300 ${atTop ? 'bg-transparent text-white' : 'bg-white/95 text-gray-800 backdrop-blur-sm shadow-sm'}`}>
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" class="flex items-center space-x-6">
          <div>
            <img src="/logo.avif" alt="Logo" class="w-12 h-12 object-contain block" />
          </div>
          <div>
            <h1 class={`text-xl font-bold ${atTop ? 'text-white' : 'text-secondary'}`}>Elektro Škola</h1>
            <p class={`text-sm ${atTop ? 'text-white' : 'text-secondary'}`}>JU Srednja Stručna Škola Nikšić</p>
          </div>
        </a>
        <div class="hidden md:flex ml-6 space-x-6">
          {navLinks.map(link => (
            <div class="relative group">
              <a href={link.href} class={`flex items-center space-x-1 ${url === link.href ? (atTop ? 'text-white font-semibold' : 'text-secondary font-semibold') : (atTop ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-secondary')}`}>
                <span>{link.name}</span>
              </a>
              {link.dropdown && (
                <div class="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
                  {link.dropdown.map(item => (
                    <a href={item.href} class="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-blue-50">
                      {item.icon && <FontAwesomeIcon icon={item.icon} class="w-4 h-4" />}
                      <span>{item.name}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <button class={`md:hidden ${atTop ? 'text-white' : 'text-gray-800'}`} onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={faBars} class="w-8 h-8" />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden w-full bg-white shadow-lg flex flex-col p-4 space-y-2">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`${url === link.href ? 'text-secondary font-semibold' : 'text-gray-800 hover:text-secondary'}`}
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
