import TestimonialSection from "@/components/testimonial";

export default function Service() {
  return (
    <section className="pt-16 min-h-screen bg-[#f2f0ef]">
      <div className="bg-[#f2f0ef] h-full w-full flex justify-center items-center">
        <h1 className="px-6 md:px-24 pt-12 text-4xl font-bold text-gray-800 ">
          Our Services
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        <h2 className="text-2xl font-semibold text-center mb-8">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
            <p className="text-gray-700">
              Every interface tells a story. A few stories are told beautifully.
              We elevate your vision through exceptional UI/UX design that is
              user-centric and visually stunning. Addressing your audience’s
              pain points and preferences—ensuring satisfaction at every click.
            </p>
            <h4 className="font-semibold mt-4">Pricing: From $1000</h4>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-2">
              Back End Website Development
            </h3>
            <p className="text-gray-700">
              We can create robust back-end systems to power your applications.
              Need a custom API? Database management? We’ve got you covered! Our
              experienced developers are here to ensure your data flows smoothly
              and securely. Reliable, scalable, and tailored to your needs.
            </p>
            <h4 className="font-semibold mt-4">Pricing: From $1500</h4>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-2">
              Front End Website Development
            </h3>
            <p className="text-gray-700">
              Building engaging front-end experiences is our forte. Responsive
              websites? Interactive web applications? We crafted them all.
              Delivering performance and aesthetics flawlessly. Fast, efficient,
              and user-friendly—every time.
            </p>
            <h4 className="font-semibold mt-4">Pricing: From $1200</h4>
          </div>
        </div>
      </div>
      <TestimonialSection />
    </section>
  );
}
