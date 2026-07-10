"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NAV_LINKS } from "@/lib/constants";
import ThemeToggle from "@/components/ui/ThemeToggle";

// trailingSlash: true — "/hakkimizda/" ve "/hakkimizda" aynı sayfadır
const normalize = (path: string) => path.replace(/\/+$/, "") || "/";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const current = normalize(pathname);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-surface-high bg-surface/95 backdrop-blur">
      <nav
        aria-label="Ana navigasyon"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8"
      >
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt=""
            aria-hidden
            width={124}
            height={120}
            className="h-10 w-auto"
            priority
          />
          <span className="whitespace-nowrap font-display text-xl font-semibold text-primary-light md:text-2xl">
            Alfa Onarım &amp; İnşaat
          </span>
        </Link>

        <ul className="hidden md:flex md:items-stretch md:gap-10">
          {NAV_LINKS.map((link) => {
            const active = current === normalize(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative flex h-16 items-center text-xs uppercase tracking-widest transition-colors duration-300 ease-out-strong ${
                    active
                      ? "text-content"
                      : "text-content-muted hover:text-content"
                  }`}
                >
                  {active && (
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-0.5 bg-primary-light"
                    />
                  )}
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="-mr-2 flex items-center">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Menüyü aç"
            className="flex h-10 w-10 items-center justify-center text-content transition-transform duration-150 ease-out-strong active:scale-[0.97] md:hidden"
          >
            <Bars2Icon className="h-6 w-6" aria-hidden />
          </button>
        </div>
      </nav>

      <Dialog
        open={open}
        onClose={setOpen}
        aria-label="Mobil menü"
        className="relative z-50 md:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-surface/80 transition-opacity duration-200 ease-out-strong data-[closed]:opacity-0"
        />
        <DialogPanel
          transition
          className="fixed inset-y-0 right-0 flex w-4/5 max-w-xs flex-col border-l border-surface-high bg-surface-mid transition-transform duration-[260ms] ease-drawer data-[closed]:translate-x-full data-[closed]:duration-200"
        >
          <div className="flex h-16 items-center justify-end px-6">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Menüyü kapat"
              className="-mr-2 flex h-10 w-10 items-center justify-center text-content transition-transform duration-150 ease-out-strong active:scale-[0.97]"
            >
              <XMarkIcon className="h-6 w-6" aria-hidden />
            </button>
          </div>
          <ul className="flex flex-col gap-2 px-6 pt-6">
            {NAV_LINKS.map((link) => {
              const active = current === normalize(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`flex border-l-2 py-3 pl-4 text-sm uppercase tracking-widest transition-colors duration-300 ease-out-strong ${
                      active
                        ? "border-primary-light text-content"
                        : "border-transparent text-content-muted hover:text-content"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
