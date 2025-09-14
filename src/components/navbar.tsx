"use client";

import { Menu, Shield, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn, SHOPIFY_APP_URL } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const isMenuOpen = searchParams.get("menu") === "true";
  const currentPage = pathname;

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleMenu = () => {
    isMenuOpen
      ? router.push(pathname)
      : router.push(`${pathname}?${createQueryString("menu", "true")}`);
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-purple-600" />
            <span className="text-xl font-bold text-gray-900">NFT Auth</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Button
              variant="ghost"
              className={cn({
                "text-purple-600": currentPage === "/",
              })}
              asChild
            >
              <Link href="/">Home</Link>
            </Button>
            <Button
              variant="ghost"
              className={cn({
                "text-purple-600": currentPage === "/privacy-policy",
              })}
              asChild
            >
              <Link href="/privacy-policy">Privacy Policy</Link>
            </Button>
            <Button
              variant="ghost"
              className={cn({
                "text-purple-600": currentPage === "/terms-of-service",
              })}
              asChild
            >
              <Link href="/terms-of-service">Terms of Service</Link>
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700" asChild>
              <Link href={SHOPIFY_APP_URL} target="_blank">
                Start Free Trial
              </Link>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={handleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <Button variant="ghost" className="justify-start" asChild>
                <Link href="/">Home</Link>
              </Button>
              <Button variant="ghost" className="justify-start" asChild>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </Button>
              <Button variant="ghost" className="justify-start" asChild>
                <Link href="/terms-of-service">Terms of Service</Link>
              </Button>
              <Button
                className="bg-purple-600 hover:bg-purple-700 w-full"
                asChild
              >
                <Link href={SHOPIFY_APP_URL} target="_blank">
                  Start Free Trial
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
