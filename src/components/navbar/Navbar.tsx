"use client";
import { AlignLeft, Globe, Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SideNav from "./SideNav";

const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 70);
    };
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav
        className={`${
          isScrolled && "bg-opacity-[0.5] drop-shadow-sm bg-[#ffffffcc]"
        } border-gray-300 w-full backdrop-blur-lg  ${
          isHomePage ? "md:sticky lg:sticky top-0 z-50" : ""
        } `}
      >
        <div className="grid justify-between h-16 grid-cols-3 lg:grid-cols-5 container mx-auto items-center px-4">
          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <span
              className="cursor-pointer inline-block"
              onClick={toggleMobileMenu}
            >
              <AlignLeft size={16} />
            </span>
          </div>

          {/* Links */}
          <div className="col-span-1 hidden lg:col-span-2 relative mx-auto w-full lg:block">
            <ul className="flex mx-auto gap-3 gap-x-5 items-center justify-start">
              {/* Mobile Menu Icon (Hidden on larger screens) */}
              <div className="hidden lg:block">
                <span
                  className="cursor-pointer mt-1 inline-block"
                  onClick={toggleMobileMenu}
                >
                  <AlignLeft size={16} />
                </span>
              </div>
              {/* Home Link */}
              <li className="flex duration-200 p-2 items-center gap-1">
                <Link href="/">
                  <p className="cursor-pointer font-thin text-black  text-[12px] hover-underline">
                    Home
                  </p>
                </Link>
              </li>

              {/* Categories Dropdown */}
              <div
                className="relative group py-3"
                onMouseEnter={() => setIsCategoriesOpen(true)}
                onMouseLeave={() => setIsCategoriesOpen(false)}
              >
                <li className="flex duration-200 px-2 items-center gap-1">
                  <p className="cursor-pointer font-thin text-black  text-[12px] hover-underline">
                    Categories
                  </p>
                  <span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 320 512"
                      height="16"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
                    </svg>
                  </span>
                </li>
                {isCategoriesOpen && (
                  <div className="bg-[#f6f6f6] text-[#000] border-gray-300 p-4 border rounded-md z-50 absolute top-10 duration-300 left-0 w-[240px]">
                    <li className="pb-2 border-b border-gray-300">
                      <Link className="text-[14px]" href="">
                        Sculpture Vase
                      </Link>
                    </li>
                    <li className="pb-2 border-b border-gray-300">
                      <Link className="text-[14px]" href="">
                        Bedroom Kit
                      </Link>
                    </li>
                    <li className="pb-2 border-b border-gray-300">
                      <Link className="text-[14px]" href="">
                        Furniture
                      </Link>
                    </li>
                    <li className="pb-2 border-gray-300">
                      <Link className="text-[14px]" href="">
                        Glassware
                      </Link>
                    </li>
                  </div>
                )}
              </div>

              {/* Pages Dropdown */}
              <div
                className="relative group py-3"
                onMouseEnter={() => setIsPagesOpen(true)}
                onMouseLeave={() => setIsPagesOpen(false)}
              >
                <li className="flex duration-200 px-2 items-center gap-1">
                  <p className="cursor-pointer font-thin text-black text-[12px] hover-underline">
                    Pages
                  </p>
                  <span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 320 512"
                      height="16"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
                    </svg>
                  </span>
                </li>
                {isPagesOpen && (
                  <div className="bg-[#f6f6f6] text-[#000] border-gray-300 p-4 rounded-md border z-50 absolute top-10 left-0 w-[240px]">
                    <li className="pb-2 border-b after:bg-[#000] border-gray-300">
                      <Link
                        className="duration-200 text-[14px] after:bg-[#000] hover-underline"
                        href="/terms-and-condition"
                      >
                        Terms and condition
                      </Link>
                    </li>
                    <li className="py-2 border-b border-gray-300">
                      <Link
                        className="duration-200 text-[14px] after:bg-[#000] hover-underline"
                        href="/refund-policy"
                      >
                        Refund Policy
                      </Link>
                    </li>
                    <li className="pt-2">
                      <Link
                        className="duration-200 text-[14px] after:bg-[#000] hover-underline"
                        href="/privacy-policy"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                  </div>
                )}
              </div>
            </ul>
          </div>

          {/* Logo */}
          <div className="lg:col-span-1 flex items-center justify-center my-auto">
            <Link href="/">
              <Image src="/TWlogo.png" alt="logo" width={100} height={100} />
            </Link>
          </div>

          {/* Right Side Links */}
          <div className="col-span-1 lg:col-span-2 justify-end">
            <ul className="flex mx-auto lg:gap-x-3 ml-auto justify-end items-center">
              {/* Search */}
              <li className="relative flex font-medium p-2 items-center gap-1">
                <button
                  type="submit"
                  className="cursor-pointer outline-none flex items-center"
                >
                  <Search size={18} />
                </button>
                <p className="cursor-pointer font-extrabold text-neutral-950 text-[12px] hover-underline">
                  <span className="hidden lg:block">Search</span>
                </p>
              </li>

              {/* Cart */}
              <li className="flex font-medium p-2 items-center gap-2">
                <div className="cursor-pointer outline-none flex items-center relative">
                  <Link href="/cart">
                    <ShoppingBag size={21} />
                  </Link>
                  <div className="absolute top-[-12px] left-[-10px] w-6 h-6 bg-neutral-400 flex justify-center items-center text-white ">
                    {0}
                  </div>
                </div>
                <p className="cursor-pointer font-extrabold text-neutral-950 text-[12px] hover-underline">
                  <span className="hidden lg:block">Cart</span>
                </p>
              </li>

              {/* Language Selection */}
              <li className="flex font-medium p-2 items-center gap-1">
                <button
                  type="submit"
                  className="cursor-pointer outline-none flex items-center gap-x-1"
                >
                  <Globe size={18} className="text-neutral-500" />
                </button>
                <p className=" cursor-pointer font-extrabold text-neutral-500 text-[12px] hover-underline ">
                  <span className="hidden lg:block">EN</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className=" container mx-auto items-center px-4">
          <hr className="border-b border-gray-300" />
        </div>
      </nav>

      {/* SideNav Component */}
      <SideNav isOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
    </>
  );
};

export default Navbar;
