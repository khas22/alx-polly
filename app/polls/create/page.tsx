'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function CreatePollPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [options, setOptions] = useState(['', '']);

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const addOption = () => {
    setOptions([...options, '']);
  };

  const removeOption = (index: number) => {
    if (options.length <= 2) return; // Minimum 2 options required
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a placeholder for the actual poll creation logic
    const pollData = {
      title,
      description,
      options: options.filter(option => option.trim() !== ''),
    };
    console.log('Creating poll with data:', pollData);
    // Redirect to polls page after creation (in a real app)
  };

  return (
    <div className="container mx-auto py-10">
      <Link href="/polls" className="text-primary hover:underline mb-6 inline-block">
        ← Back to all polls
      </Link>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Create a New Poll</CardTitle>
          <CardDescription>
            Fill out the form below to create a new poll
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium">
                Poll Title
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder="Enter a question for your poll"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium">
                Description (Optional)
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 border rounded-md min-h-[100px]"
                placeholder="Provide more context about your poll"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium">Poll Options</label>
                <Button type="button" onClick={addOption} variant="outline" size="sm">
                  Add Option
                </Button>
              </div>

              {options.map((option, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                    className="flex-grow p-2 border rounded-md"
                    placeholder={`Option ${index + 1}`}
                    required
                  />
                  {options.length > 2 && (
                    <Button
                      type="button"
                      onClick={() => removeOption(index)}
                      variant="ghost"
                      size="sm"
                      className="text-destructive"
                    >
                      Remove
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </CardContent>

          <CardFooter className="flex justify-between">
            <Button type="button" variant="outline" asChild>
              <Link href="/polls">Cancel</Link>
            </Button>
            <Button type="submit">Create Poll</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}