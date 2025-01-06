import HeroSection from "@/components/heroSection";
import CompanyOverview from "@/components/companyOverview";
import CompanyServices from "@/components/companyServices";
import OurCustomer from "@/components/ourCustomer";
import Testimonial from "@/components/testimonial";

export default function Home() {
  return (
    <section>
      <HeroSection />
      <CompanyOverview />
      <CompanyServices />
      <OurCustomer />
      <Testimonial />
    </section>
  );
}
