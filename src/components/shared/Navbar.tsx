import { useState } from 'react';
import { NAVLINKS_STATIC } from '@/static/navlinks.static';
import { Button } from '@/components/shared/Button';
import { Link } from 'react-router-dom';
import { AlignJustify } from 'lucide-react';
import { AlignRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="flex justify-between items-center w-full  ">
        {/* Logo */}
        <Link to="/">
          <img src="/assets/icons/logo.svg" alt="Logo" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden xl:flex items-center gap-8 text-white text-lg">
          {NAVLINKS_STATIC.map(({ title }) => (
            <li
              key={title}
              className="cursor-pointer hover:text-[#ffffff]/50 duration-300"
            >
              {title}
            </li>
          ))}
        </ul>

        {/* Call Button */}
        <Button
          onClick={() => {
            window.location.href = 'tel:1006';
          }}
          size="icon"
          variant="icon"
          className="hidden xl:flex items-center gap-2 text-white text-2xl"
        >
          <img src="/assets/icons/call.svg" alt="Call icon" />
          <span>1006</span>
        </Button>

        {/* Mobile Menu Toggle */}
        <div className="xl:hidden">
          <Button
            variant="icon"
            className="text-white text-3xl"
            onClick={toggleMenu}
            aria-label="Toggle Navigation"
          >
            {isOpen ? <AlignRight /> : <AlignJustify />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-20 bg-black/50 flex justify-center items-start pt-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={toggleMenu}
          >
            <motion.div
              className="bg-[#122F4C] rounded-2xl py-10 px-6 m-6 w-[90%] max-h-screen overflow-y-auto"
              initial={{ y: '-100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="flex flex-col justify-center items-center gap-4 text-white text-lg">
                {NAVLINKS_STATIC.map(({ title }) => (
                  <li
                    key={title}
                    className="cursor-pointer hover:text-[#ffffff]/50 duration-300"
                    onClick={toggleMenu}
                  >
                    {title}
                  </li>
                ))}
                <Button
                  onClick={() => {
                    window.location.href = 'tel:1006';
                  }}
                  size="icon"
                  variant="icon"
                  className="bg-secondary-soft w-auto py-[10px] px-4 rounded-12 border-tintBlue text-tintBlue font-normal"
                >
                  <img src="/assets/icons/call.svg" alt="Call icon" />
                  <span>1006</span>
                </Button>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
