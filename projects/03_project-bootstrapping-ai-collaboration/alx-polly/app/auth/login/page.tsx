import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="container mx-auto max-w-md p-6">
      <h1 className="mb-4 text-2xl font-semibold">Sign in</h1>
      <LoginForm />
    </div>
  );
}


