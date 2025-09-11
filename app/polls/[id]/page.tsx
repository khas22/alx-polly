'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

// This is a placeholder for actual data fetching
const getPollData = (id: string) => {
  // Mock data for a single poll
  return {
    id,
    title: 'Favorite Programming Language',
    description: 'What is your favorite programming language?',
    options: [
      { id: '1', text: 'JavaScript', votes: 15 },
      { id: '2', text: 'Python', votes: 12 },
      { id: '3', text: 'Java', votes: 8 },
      { id: '4', text: 'C#', votes: 5 },
      { id: '5', text: 'Go', votes: 2 },
    ],
    totalVotes: 42,
    createdAt: '2023-05-15',
    createdBy: 'John Doe',
  };
};

export default function PollDetailPage({ params }: { params: { id: string } }) {
  const poll = getPollData(params.id);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = () => {
    if (selectedOption) {
      // This is a placeholder for the actual voting logic
      console.log(`Voted for option ${selectedOption} in poll ${params.id}`);
      setHasVoted(true);
    }
  };

  // Calculate percentage for each option
  const getPercentage = (votes: number) => {
    return poll.totalVotes > 0 ? Math.round((votes / poll.totalVotes) * 100) : 0;
  };

  return (
    <div className="container mx-auto py-10">
      <Link href="/polls" className="text-primary hover:underline mb-6 inline-block">
        ← Back to all polls
      </Link>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">{poll.title}</CardTitle>
          <CardDescription>{poll.description}</CardDescription>
          <p className="text-sm text-muted-foreground mt-2">
            Created by {poll.createdBy} on {poll.createdAt}
          </p>
        </CardHeader>

        <CardContent className="space-y-4">
          {poll.options.map((option) => (
            <div key={option.id} className="space-y-2">
              <div className="flex items-center gap-2">
                {!hasVoted ? (
                  <input
                    type="radio"
                    id={option.id}
                    name="poll-option"
                    value={option.id}
                    checked={selectedOption === option.id}
                    onChange={() => setSelectedOption(option.id)}
                    className="h-4 w-4"
                  />
                ) : null}
                <label
                  htmlFor={option.id}
                  className={`flex-grow ${hasVoted ? 'font-medium' : ''}`}
                >
                  {option.text}
                </label>
                {hasVoted && (
                  <span className="text-sm font-medium">
                    {getPercentage(option.votes)}%
                  </span>
                )}
              </div>
              {hasVoted && (
                <div className="w-full bg-secondary rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: `${getPercentage(option.votes)}%` }}
                  ></div>
                </div>
              )}
            </div>
          ))}
        </CardContent>

        <CardFooter className="flex justify-between">
          <p className="text-sm text-muted-foreground">
            {poll.totalVotes} total votes
          </p>
          {!hasVoted && (
            <Button onClick={handleVote} disabled={!selectedOption}>
              Submit Vote
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}