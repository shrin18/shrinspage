import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Publications', href: '#publications' },
    { label: 'Blog', href: '#blog' },
    { label: 'Photography', href: '#photography' },
    { label: 'Reading', href: '#books' },
    { label: 'Music', href: '#music' }, // Add the Music link here
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Profile Picture */}
            <img 
              src="https://raw.githubusercontent.com/shrin18/Cpractise/master/profilepic.jpg" 
              alt="Shrinish Donde"
              className="w-10 h-10 rounded-full mr-2" 
            />
            <a href="#" className="text-xl font-semibold text-slate-800">
              "Research is formalized curiosity"
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-600 hover:text-slate-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
