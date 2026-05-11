import { 
  Navbar, 
  Hero, 
  Features, 
  InstituteBenefits, 
  TeacherManagement, 
  StudentAnalytics, 
  Testimonials, 
  Pricing, 
  StudentSuccess, 
  FAQ, 
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
        <InstituteBenefits />
        <TeacherManagement />
        <StudentAnalytics />
        <Testimonials />
        <Pricing />
        <StudentSuccess />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
