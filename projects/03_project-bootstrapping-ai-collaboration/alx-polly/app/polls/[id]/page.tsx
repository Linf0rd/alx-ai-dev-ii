import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function PollDetailPage({ params }: { params: { id: string } }) {
  const poll = {
    id: params.id,
    question: "Favorite Programming Language",
    subtitle: "What programming language do you prefer to use?",
    options: ["JavaScript", "Python", "Java", "C#", "Go"],
    createdAt: "10/15/2023",
    author: "John Doe",
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <Link href="/polls" className="text-sm text-gray-600 hover:underline">← Back to Polls</Link>
        <div className="flex items-center gap-2">
          <Button variant="outline">Edit Poll</Button>
          <Button variant="destructive">Delete</Button>
        </div>
      </div>

      <div className="mx-auto max-w-3xl">
        <Card>
          <CardHeader>
            <CardTitle>{poll.question}</CardTitle>
            <CardDescription>{poll.subtitle}</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-3">
              {poll.options.map((label, idx) => (
                <Input key={idx} value={label} readOnly />
              ))}
              <Button type="submit" variant="secondary">Submit Vote</Button>
            </form>

            <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
              <div>Created by {poll.author}</div>
              <div>Created on {poll.createdAt}</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mx-auto max-w-3xl space-y-2">
        <h2 className="text-base font-semibold">Share this poll</h2>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <Button variant="outline" className="w-full">Copy Link</Button>
          <Button variant="outline" className="w-full">Share on Twitter</Button>
        </div>
      </div>
    </div>
  );
}


