import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-8 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
        Create and Share Polls <span className="text-primary">Easily</span>
      </h1>
      <p className="max-w-[42rem] text-muted-foreground text-xl mb-8">
        Polly is a simple and powerful polling platform. Create polls, share them with friends, and get instant results.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg" asChild>
          <Link href="/polls">Browse Polls</Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="/polls/create">Create a Poll</Link>
        </Button>
      </div>
    </div>
  );
}
