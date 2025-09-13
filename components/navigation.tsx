'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/context/AuthContext'

export function Navigation() {
  const pathname = usePathname()
  const { user } = useAuth()

  const isActive = (path: string) => {
    return pathname === path || pathname?.startsWith(`${path}/`)
  }

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
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/polls') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Polls
            </Link>
            {user && (
              <Link
                href="/polls/create"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive('/polls/create')
                    ? 'text-primary'
                    : 'text-muted-foreground'
                }`}
              >
                Create Poll
              </Link>
            )}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {user ? (
            <Link href="/auth/profile" className="inline-block">
              <Button variant="ghost" size="sm" className="w-full">
                Profile
              </Button>
            </Link>
          ) : (
            <>
              <Link href="/auth/login" className="inline-block">
                <Button variant="outline" size="sm" className="w-full">
                  Login
                </Button>
              </Link>
              <Link href="/auth/register" className="inline-block">
                <Button size="sm" className="w-full">
                  Register
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}