import { Popover } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global">
        <Link
          to="/"
          className="text-sm font-semibold leading-6 text-gray-900 mr-16">
          網絡攻防實習
        </Link>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link
            to="/"
            className="text-sm font-semibold leading-6 text-gray-900">
            Home
          </Link>
          <Link
            to="/about"
            className="text-sm font-semibold leading-6 text-gray-900">
            About
          </Link>
          <Link
            to="/chat"
            className="text-sm font-semibold leading-6 text-gray-900">
            Chat
          </Link>
          <Link
            to="/user"
            className="text-sm font-semibold leading-6 text-gray-900">
            User
          </Link>
          <Link
            to="/add-user"
            className="text-sm font-semibold leading-6 text-gray-900">
            Add User
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/"
            className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
