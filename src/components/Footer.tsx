import SectionContainer from "@/utils/SectionContainer";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

export default function Component() {
  return (
    <SectionContainer>
      <footer className="bg-white py-20 mt-20 ">
        <div className=" container mx-auto items-center px-4 pb-3">
          <hr className="border-b border-gray-300" />
        </div>
        <div className="flex justify-start items-start pb-20 pl-3">
          <img src="/TWlogo.png" alt="logo" width={150} height={150} />
        </div>
        <div className="container mx-auto grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:grid-cols-3 md:gap-12">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#8F8F8F]">Categories</h4>
            <ul className="grid gap-2 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link href="#" className="text-gray-900 " prefetch={false}>
                  Bedroom Kit
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-900 " prefetch={false}>
                  Sculpture Vase
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-900" prefetch={false}>
                  Furniture
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-900" prefetch={false}>
                  Glassware
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#8F8F8F]">Links</h4>
            <ul className="grid gap-2 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link href="#" className="text-gray-900">
                  Terms and condition
                </Link>
              </li>

              <li>
                <Link href="#" className="text-gray-900 ">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-900 ">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#8F8F8F]">Follow Us</h4>
            <div className="flex items-center space-x-4">
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                <TwitterIcon className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                <FacebookIcon className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                <InstagramIcon className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </SectionContainer>
  );
}
