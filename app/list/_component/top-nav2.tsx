"use client";
import { Button } from "@/components/ui/button";
import { REGIONS } from "@/constants";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export const Topnav2 = () => {
  const filter = useSearchParams().get("region");

  return (
    <section className="fixed sm:hidden top-16 left-0 py-2 px-5 w-full bg-primary-foreground border-b">
      <nav className="w-full flex gap-1 flex-wrap items-center justify-center">
        {REGIONS.map((item) => (
          <Button
            key={item.id}
            variant={"link"}
            className="aria-selected:underline"
            asChild
          >
            <Link
              href={item.url}
              aria-selected={
                filter == item.region || (!filter && item.region == "all")
              }
            >
              {item.title}
            </Link>
          </Button>
        ))}
      </nav>
    </section>
  );
};
