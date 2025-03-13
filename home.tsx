import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/components/home/hero";
import Features from "@/components/home/features";
import HowItWorks from "@/components/home/how-it-works";
import UseCases from "@/components/home/use-cases";
import Comparison from "@/components/home/comparison";
import Pricing from "@/components/home/pricing";
import WaitlistForm from "@/components/home/waitlist-form";
import Faq from "@/components/home/faq";
import Contact from "@/components/home/contact";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data: waitlistCount } = useQuery({
    queryKey: ['/api/waitlist/count'],
    refetchOnWindowFocus: false,
  });

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white">
      <Navbar />
      <main>
        <Hero waitlistCount={waitlistCount?.count || 0} />
        <Features />
        <HowItWorks />
        <UseCases />
        <Comparison />
        <Pricing />
        <WaitlistForm />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
