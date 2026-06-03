import Logo from "@/components/login/Logo";
import Hero from "@/components/login/Hero";
import Quote from "@/components/login/Quote";
import LoginCard from "@/components/login/LoginCard";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-[#FAFAF8]">
      <div className="max-w-2xl text-center">
        <Logo />
        <Hero />
        <Quote />
        <LoginCard />
      </div>
    </main>
  );
}