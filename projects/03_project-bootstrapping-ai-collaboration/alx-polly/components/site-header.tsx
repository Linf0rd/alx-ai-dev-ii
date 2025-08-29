import Link from "next/link";
import { Button } from "./ui/button";
import { Avatar } from "./ui/avatar";

export default function SiteHeader() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link href="/" className="font-semibold">ALX Polly</Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-700">
          <Link className="hover:underline" href="/polls">My Polls</Link>
          <Link className="hover:underline" href="/polls/new">Create Poll</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/polls/new">
            <Button>Create Poll</Button>
          </Link>
          <Avatar>U</Avatar>
        </div>
      </div>
    </header>
  );
}


