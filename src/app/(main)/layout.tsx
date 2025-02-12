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
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-accent text-4xl font-black">Crunchy Blog</h1>
        </div>
        <div className="absolute inset-0 flex items-center justify-end">
          <ThemeToggle />
        </div>
      </header>
      <main className="max-w-2xl mx-auto">
        <PaginationProvider>{children}</PaginationProvider>
      </main>
    </>
  );
}
