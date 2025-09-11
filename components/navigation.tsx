'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path || pathname?.startsWith(`${path}/`);
  };

  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-bold">
            Polly
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/polls"
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/polls') ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Polls
            </Link>
            <Link
              href="/polls/create"
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/polls/create') ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Create Poll
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/auth/login">
            <Button variant="ghost" size="sm">
              Login
            </Button>
          </Link>
          <Link href="/auth/register">
            <Button size="sm">
              Register
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}