import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components_/Navbar';
import { Footer } from '@/components_/Footer';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
