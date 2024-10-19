import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";
import { useAuth } from '../store/auth';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, LogoutUser } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle menu close on navigation
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // You can add any additional logic if needed when `isLoggedIn` changes
  }, [isLoggedIn]);

  return (
    <nav className="bg-gray-800 text-white fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-4xl font-bold">
              <Link to="/">SafeSpace</Link>
            </h1>
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-lg font-medium">
                Home
              </Link>
              <Link to="/helpline" className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-lg font-medium">
                Helpline
              </Link>
              <Link to="/contact-us" className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-lg font-medium">
                Contact us
              </Link>
              <Link to="/chatbot" className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-lg font-medium">
                Chatbot
              </Link>
              {isLoggedIn ? (
                <Link to="/login" onClick={LogoutUser} className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-lg font-medium">
                  Logout
                </Link>
              ) : (
                <>
                  <Link to="/register" className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-lg font-medium">
                    Register
                  </Link>
                  <Link to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-lg font-medium">
                    Login
                  </Link>
                </>
              )}
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                {isOpen ? (
                  <RxCrossCircled className="block h-8 w-8" aria-hidden="true" />
                ) : (
                  <IoMenu className="block h-8 w-8" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 max-h-64 overflow-y-auto">
          <div className="px-2 pt-2 pb-3 sm:pb-20 space-y-1 sm:px-3">
            <Link to="/" onClick={handleLinkClick} className="block text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-xl font-medium">
              Home
            </Link>
            <Link to="/resources" onClick={handleLinkClick} className="block text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-xl font-medium">
              Resources
            </Link>
            <Link to="/helpline" onClick={handleLinkClick} className="block text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-xl font-medium">
              Helpline
            </Link>
            <Link to="/contact-us" onClick={handleLinkClick} className="block text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-xl font-medium">
              Contact us
            </Link>
            <Link to="/chatbot" onClick={handleLinkClick} className="block text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-xl font-medium">
              Chatbot
            </Link>
            {isLoggedIn ? (
              <Link to="/login" onClick={() => { LogoutUser(); handleLinkClick(); }} className="block text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-xl font-medium">
                Logout
              </Link>
            ) : (
              <>
                <Link to="/register" onClick={handleLinkClick} className="block text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-xl font-medium">
                  Register
                </Link>
                <Link to="/login" onClick={handleLinkClick} className="block text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-xl font-medium">
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
