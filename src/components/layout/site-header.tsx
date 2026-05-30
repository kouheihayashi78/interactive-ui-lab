import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/ui", label: "UI List" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-background/86 backdrop-blur">
      <div className="mx-auto flex min-h-16 w-full max-w-6xl items-center justify-between gap-4 px-4">
        <Link className="font-semibold tracking-tight" href="/">
          Interactive UI Lab
        </Link>
        <nav className="flex items-center gap-1 text-sm text-muted">
          {navItems.map((item) => (
            <Link
              className="rounded-md px-3 py-2 transition hover:bg-surface hover:text-foreground"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
