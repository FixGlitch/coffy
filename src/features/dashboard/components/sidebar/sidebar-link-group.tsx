"use client";

import { useState, ComponentType, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

interface SidebarLinkGroupProps {
  groupName: string;
  links: { name: string; href: string }[];
  activeCondition: (pathname: string) => boolean;
  Icon: ComponentType<{ className?: string }>;
  SubIcons: { [key: string]: JSX.Element };
}

const SidebarLinkGroup = ({
  groupName,
  links,
  activeCondition,
  Icon,
  SubIcons,
}: SidebarLinkGroupProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const isActive = activeCondition(pathname);

  useEffect(() => {
    if (isActive) {
      setOpen(true);
    }
  }, [isActive]);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <li>
      <div
        className={`cursor-pointer group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-black dark:text-white font-allerta duration-300 ease-in-out 
          hover:bg-coffee-200 dark:hover:bg-coffee-200 hover:dark:text-black hover:text-black ${
          isActive && "bg-black dark:bg-gray-800 text-white dark:text-white"
        }`}
        onClick={(e) => {
          e.preventDefault();
          handleClick();
        }}
      >
        <Icon className="h-5 w-5" />
        <span>{groupName}</span>
        <ChevronDown
          className={`h-5 w-5 absolute right-4 top-1/2 -translate-y-1/2 ${
            open && "rotate-180"
          }`}
        />
      </div>
      <div className={`transform overflow-hidden ${!open && "hidden"}`}>
        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
          {links.map(({ name, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium font-allerta duration-300 ease-in-out ${
                  pathname === href ? "text-gray-400" : "text-gray-900"
                } hover:text-gray-600 dark:text-white dark:hover:text-gray-400`}
              >
                {SubIcons[href]}
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default SidebarLinkGroup;
