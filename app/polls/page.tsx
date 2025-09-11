import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Mock data for polls
const mockPolls = [
  {
    id: '1',
    title: 'Favorite Programming Language',
    description: 'What is your favorite programming language?',
    options: ['JavaScript', 'Python', 'Java', 'C#', 'Go'],
    votes: 42,
    createdAt: '2023-05-15',
  },
  {
    id: '2',
    title: 'Best Frontend Framework',
    description: 'Which frontend framework do you prefer?',
    options: ['React', 'Vue', 'Angular', 'Svelte'],
    votes: 38,
    createdAt: '2023-05-20',
  },
  {
    id: '3',
    title: 'Database Preference',
    description: 'Which database do you use most often?',
    options: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'Redis'],
    votes: 27,
    createdAt: '2023-05-25',
  },
];

export default function PollsPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">All Polls</h1>
        <Link href="/polls/create">
          <Button>Create New Poll</Button>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockPolls.map((poll) => (
          <Link key={poll.id} href={`/polls/${poll.id}`} className="block">
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{poll.title}</CardTitle>
                <CardDescription>{poll.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {poll.options.length} options • {poll.votes} votes
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <p className="text-sm text-muted-foreground">Created {poll.createdAt}</p>
                <Button variant="ghost" size="sm">View Poll</Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}