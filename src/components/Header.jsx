import { Popover } from "@headlessui/react";

export default function Header() {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global">
        <a
          href="/#"
          className="text-sm font-semibold leading-6 text-gray-900 mr-16">
          網絡攻防實習
        </a>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a
            href="/#"
            className="text-sm font-semibold leading-6 text-gray-900">
            About
          </a>
          <a
            href="/#/chat"
            className="text-sm font-semibold leading-6 text-gray-900">
            Chat
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/#"
            className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
