import { Search, ShoppingBag } from "lucide-react";
import Link from "next/link";

const BottomNav = () => {
  return (
    <nav className="block fixed inset-x-0 bottom-0 z-50 shadow bg-white border-t border-gray-300">
      <div className="flex justify-between">
        <div className="w-full focus:text-teal-500 flex items-center flex-col hover:text-teal-500 justify-center text-center pt-2 pb-1">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.03 2.59a1.501 1.501 0 0 1 1.94 0l7.5 6.363a1.5 1.5 0 0 1 .53 1.144V19.5a1.5 1.5 0 0 1-1.5 1.5h-5.75a.75.75 0 0 1-.75-.75V14h-2v6.25a.75.75 0 0 1-.75.75H4.5A1.5 1.5 0 0 1 3 19.5v-9.403c0-.44.194-.859.53-1.144ZM12 3.734l-7.5 6.363V19.5h5v-6.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v6.25h5v-9.403Z"></path>
          </svg>
          <Link href="/">
            {" "}
            <span className="tab tab-home block text-xs">Home</span>
          </Link>
        </div>
        <div className="w-full focus:text-teal-500 flex items-center flex-col hover:text-teal-500 justify-center text-center pt-2 pb-1">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11 4h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6h-4v-4h4v4zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"></path>
          </svg>
          <span className="tab tab-home block text-xs">Categories</span>
        </div>
        <div className="w-full focus:text-teal-500 flex items-center flex-col hover:text-teal-500 justify-center text-center pt-2 pb-1">
          <Search size={24} />
          <span className="tab tab-home block text-xs">Search</span>
        </div>

        <div className="w-full focus:text-teal-500 flex items-center flex-col hover:text-teal-500 justify-center text-center pt-2 pb-1">
          <ShoppingBag size={24} />
          <Link href="/cart">
            <span className="tab tab-home block text-xs">Cart</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
