import { 
  Navbar, 
  Hero, 
  Features, 
  Testimonials, 
  Pricing, 
  CallToAction, 
  Footer 
} from '@/components/landing';

export default function Home() {
  return (
    <div className="min-h-screen bg-background-main text-text-primary">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
