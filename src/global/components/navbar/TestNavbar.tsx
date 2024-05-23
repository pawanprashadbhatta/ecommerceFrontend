import { useState } from 'react';

const TestNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <a href="/" className="text-white font-bold text-xl">Logo</a>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-white hover:text-gray-300">Home</a>
            </li>
            <li>
              <a href="/contact" className="text-white hover:text-gray-300">Contact</a>
            </li>
            <li className="relative">
              <button onClick={toggleDropdown} className="text-white hover:text-gray-300 focus:outline-none">
                Company Profile
              </button>
              {isOpen && (
                <ul className="absolute top-full left-0 bg-gray-700 py-2 mt-1 rounded shadow-lg">
                  <li>
                    <a href="/aboutus" className="block px-4 py-2 text-white hover:bg-gray-600">About Us</a>
                  </li>
                  <li>
                    <a href="/services" className="block px-4 py-2 text-white hover:bg-gray-600">Services</a>
                  </li>
                  <li>
                    <a href="/motovision" className="block px-4 py-2 text-white hover:bg-gray-600">Motovision</a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TestNavbar;
