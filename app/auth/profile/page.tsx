'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function ProfilePage() {
  // This is a placeholder for actual user data
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    joinedDate: new Date().toLocaleDateString(),
  };

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Your Profile</CardTitle>
          <CardDescription>
            View and manage your account details
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1">
            <p className="text-sm font-medium">Name</p>
            <p className="text-lg">{user.name}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium">Email</p>
            <p className="text-lg">{user.email}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium">Member Since</p>
            <p className="text-lg">{user.joinedDate}</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">Edit Profile</Button>
        </CardFooter>
      </Card>
    </div>
  );
}