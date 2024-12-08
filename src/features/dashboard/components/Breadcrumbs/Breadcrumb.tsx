"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbHeader,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@/components/ui/breadcrumb";

const BreadcrumbComponent = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <div className="flex sm:flex-row sm:items-center sm:justify-between pb-8">
      <BreadcrumbHeader />
      <Breadcrumb>
        {pathSegments.map((segment, index) => {
          const segmentPath = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;
          const segmentName = segment
            .replace(/-/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase());

          return (
            <BreadcrumbItem key={segmentPath}>
              {isLast ? (
                <span className="font-semibold text-coffee-400 dark:text-coffee-200">
                  {segmentName}
                </span>
              ) : (
                <>
                  <BreadcrumbLink href={segmentPath} className="font-medium">
                    {segmentName}
                  </BreadcrumbLink>
                  <span className="mx-2">/</span>
                </>
              )}
            </BreadcrumbItem>
          );
        })}
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbComponent;
