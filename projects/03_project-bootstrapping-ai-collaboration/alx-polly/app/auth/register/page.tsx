import RegisterForm from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="container mx-auto max-w-md p-6">
      <h1 className="mb-4 text-2xl font-semibold">Create account</h1>
      <RegisterForm />
    </div>
  );
}


