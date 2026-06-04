import Logo from "@/components/login/Logo";
import LoginCard from "@/components/login/LoginCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F7F4] flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <Logo />
        <LoginCard />
      </div>
    </main>
  );
}