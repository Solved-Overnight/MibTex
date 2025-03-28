import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shirt, Phone, Mail, Menu, X, ChevronDown, Search, ShoppingBag, Info } from 'lucide-react'; // Added Info icon

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50"> {/* Added shadow and sticky */}
      {/* Top Bar */}
      <div className="bg-gray-100 text-gray-700 py-2 border-b border-gray-200"> {/* Adjusted colors */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-1 text-indigo-600" /> {/* Added color */}
                <span>+880 1710237055</span>
              </div>
              <div className="hidden sm:flex items-center">
                <Mail className="h-4 w-4 mr-1 text-indigo-600" /> {/* Added color */}
                <span>mibtex.info@gmail.com</span> {/* Updated email */}
              </div>
            </div>
            {/* Removed Track Order/Store Locator for focus */}
            <div className="flex items-center space-x-4">
               <Link to="/contact" className="hover:text-indigo-600 transition-colors">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <Shirt className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-xl font-bold text-gray-800">Made In Bangladesh</span> {/* Updated Name */}
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-indigo-600 font-medium">Home</Link>

              {/* Consider adding an About Us link later */}
              {/* <Link to="/about" className="text-gray-700 hover:text-indigo-600 font-medium">Our Story</Link> */}

              {/* Categories Dropdown */}
              <div className="relative">
                <button
                  className="flex items-center text-gray-700 hover:text-indigo-600 font-medium"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Added onClick for touch devices
                >
                  Products
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {isDropdownOpen && (
                  <div
                    className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-md ring-1 ring-black ring-opacity-5 py-1 z-50" // Adjusted styling
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <Link to="/catalogue?category=men" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-indigo-600">Men's Apparel</Link>
                    <Link to="/catalogue?category=women" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-indigo-600">Women's Apparel</Link>
                    <Link to="/catalogue?category=kids" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-indigo-600">Kids' Apparel</Link>
                    <div className="border-t border-gray-100 my-1"></div>
                    <Link to="/catalogue" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-indigo-600 font-medium">View All</Link>
                  </div>
                )}
              </div>

              <Link to="/catalogue" className="text-gray-700 hover:text-indigo-600 font-medium">Catalogue</Link>
              <Link to="/contact" className="text-gray-700 hover:text-indigo-600 font-medium">Contact</Link>
            </nav>

            {/* Right side Actions - Simplified for B2B */}
            <div className="flex items-center space-x-4">
              {/* <button className="text-gray-700 hover:text-indigo-600">
                <Search className="h-6 w-6" />
              </button> */}
              {/* Cart might not be needed for B2B focus */}
              {/* <button className="text-gray-700 hover:text-indigo-600 relative">
                <ShoppingBag className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </button> */}

              <Link to="/contact" className="hidden md:inline-flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors">
                Get In Touch
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-gray-700 hover:text-indigo-600"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 absolute w-full z-40 shadow-lg"> {/* Added positioning and shadow */}
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
            >
              Home
            </Link>
             {/* <Link
              to="/about" // Link to About page if created
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
            >
              Our Story
            </Link> */}
            <Link
              to="/catalogue"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
            >
              Catalogue
            </Link>
             <Link
              to="/catalogue?category=men"
               onClick={() => setIsMobileMenuOpen(false)}
              className="block pl-6 pr-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50"
            >
              Men's Apparel
            </Link>
             <Link
              to="/catalogue?category=women"
               onClick={() => setIsMobileMenuOpen(false)}
              className="block pl-6 pr-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50"
            >
              Women's Apparel
            </Link>
             <Link
              to="/catalogue?category=kids"
               onClick={() => setIsMobileMenuOpen(false)}
              className="block pl-6 pr-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50"
            >
              Kids' Apparel
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
            >
              Contact
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
             <div className="px-5">
               <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                 Get In Touch
               </Link>
             </div>
            <div className="mt-3 px-2 space-y-1">
               <div className="flex items-center px-3 py-2">
                 <Phone className="h-5 w-5 text-gray-500 mr-2" />
                 <span className="text-base font-medium text-gray-600">+880 1710237055</span>
               </div>
               <div className="flex items-center px-3 py-2">
                 <Mail className="h-5 w-5 text-gray-500 mr-2" />
                 <span className="text-base font-medium text-gray-600">mibtex.info.com</span>
               </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
