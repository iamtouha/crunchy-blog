import Link from "next/link";
import { ThemeToggle } from "~/components/theme-toggle";
import { PaginationProvider } from "~/lib/contexts/pagination";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="h-16 bg-primary/20 shadow relative">
        <div className="flex h-full items-center justify-between px-4">
          <div className="w-8"></div>
          <Link href="/">
            <h1 className="text-accent text-4xl font-black">Crunchy Blog</h1>
          </Link>
          <ThemeToggle />
        </div>
      </header>
      <main className="max-w-2xl mx-auto">
        <PaginationProvider>{children}</PaginationProvider>
      </main>
    </>
  );
}
