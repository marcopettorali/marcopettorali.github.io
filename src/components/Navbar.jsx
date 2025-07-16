// src/components/Navbar.jsx
import { Fragment, useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Disclosure, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

const navItems = [
  { name: "Home", to: "/" },
  { name: "Publications", to: "/publications" },
  { name: "Software", to: "/software" },
  { name: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  /* --------------- Dark-mode bootstrap ---------------- */
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(prefersDark);
  }, []);

  /* --------------- Apply / update dark-mode ------------ */
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    const favicon = document.getElementById("favicon");
    if (favicon) {
      favicon.href = dark
        ? "/logos/favicon_dark.png"
        : "/logos/favicon_light.png";
    }
  }, [dark]);

  /* --------------- Close mobile menu on outside click -- */
  useEffect(() => {
    function handleOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        const btn = document.querySelector('[aria-controls]');
        if (btn?.getAttribute("aria-expanded") === "true") btn.click();
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  return (
    <Disclosure
      as="nav"
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-gray-950/80 shadow-sm transition-colors"
    >
      {({ open }) => (
        <>
          {/* ------------ Top bar -------------------------------- */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              {/* Logos UNIPI & DII */}
              <div className="flex items-center gap-3">
                <a href="https://www.unipi.it/" target="_blank" rel="noreferrer">
                  <img
                    src={dark ? "/logos/unipi_dark.png" : "/logos/unipi_light.png"}
                    alt="UNIPI"
                    className="h-12 object-contain"
                  />
                </a>
                <a href="https://www.dii.unipi.it/" target="_blank" rel="noreferrer">
                  <img
                    src={dark ? "/logos/dii_dark.png" : "/logos/dii_light.png"}
                    alt="DII"
                    className="h-7 object-contain"
                  />
                </a>
              </div>

              {/* Desktop nav */}
              <div className="hidden md:flex items-center gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className={`text-sm font-medium transition ${
                      location.pathname === item.to
                        ? "text-vscode underline underline-offset-4"
                        : "text-gray-700 dark:text-gray-300 hover:text-vscode"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                {/* Theme toggle */}
                <button
                  onClick={() => setDark(!dark)}
                  className="text-gray-600 dark:text-gray-300 hover:text-vscode transition"
                  title="Toggle theme"
                >
                  {dark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
                </button>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Disclosure.Button className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-vscode">
                  {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* ------------ Mobile panel --------------------------- */}
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 -translate-y-2"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-2"
          >
            <Disclosure.Panel ref={menuRef} className="md:hidden px-4 pt-2 pb-4 dark:bg-gray-800/70 rounded-b-xl">
              {({ close }) => (
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      onClick={close}                /* chiusura dopo click */
                      className={`block px-3 py-2 rounded-md text-sm font-medium transition ${
                        location.pathname === item.to
                          ? "text-vscode underline underline-offset-4"
                          : "text-gray-700 dark:text-gray-300 hover:text-vscode"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}

                  {/* Toggle dentro il menu */}
                  <button
                    onClick={() => {
                      setDark(!dark);
                      close();
                    }}
                    className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition text-gray-700 dark:text-gray-300 hover:text-vscode"
                    title="Toggle theme"
                  >
                    {dark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
                    
                  </button>
                </div>
              )}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
