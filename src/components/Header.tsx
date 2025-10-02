import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
interface HeaderProps {
  activeSection: string;
}
export const Header: React.FC<HeaderProps> = ({
  activeSection
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };
  const navItems = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'about',
    label: 'About Us'
  }, {
    id: 'services',
    label: 'Services'
  }, {
    id: 'why-us',
    label: 'Why Us'
  }, {
    id: 'contact',
    label: 'Contact Us'
  }];
  return <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="Arrow Cabs Logo" className="h-12 md:h-14 w-auto" />
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map(item => <li key={item.id}>
                <button onClick={() => scrollToSection(item.id)} className={`font-medium hover:text-secondary transition-colors ${activeSection === item.id ? 'text-secondary' : 'text-gray-700'}`}>
                  {item.label}
                </button>
              </li>)}
          </ul>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700 hover:text-secondary" onClick={toggleMenu}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-white pb-4 px-4">
          <ul className="flex flex-col space-y-3">
            {navItems.map(item => <li key={item.id}>
                <button onClick={() => scrollToSection(item.id)} className={`block w-full text-left py-2 px-4 font-medium hover:bg-gray-100 rounded ${activeSection === item.id ? 'text-secondary' : 'text-gray-700'}`}>
                  {item.label}
                </button>
              </li>)}
          </ul>
        </div>}
    </header>;
};