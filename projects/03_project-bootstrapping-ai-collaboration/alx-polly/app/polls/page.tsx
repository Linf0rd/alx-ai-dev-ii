import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PollsListPage() {
  const samplePolls = [
    { id: "1", question: "Your favorite JS framework?", totalVotes: 42 },
    { id: "2", question: "Tabs or spaces?", totalVotes: 133 },
  ];

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold">My Polls</h1>
        </div>
        <Link href="/polls/new">
          <Button>Create New Poll</Button>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {samplePolls.map((poll) => (
          <Link key={poll.id} href={`/polls/${poll.id}`}>
            <Card className="hover:shadow-sm transition-shadow">
              <CardHeader>
                <CardTitle className="text-base">{poll.question}</CardTitle>
                <CardDescription>What programming language do you prefer to use?</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>5 options</div>
                  <div>{poll.totalVotes} total votes</div>
                  <div className="pt-3 text-xs text-gray-400">Created on 10/15/2023</div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}


