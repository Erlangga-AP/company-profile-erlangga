import { getAllCompanyCustomer } from "@/utils/get-contentful-data";
import Image from "next/image";

export default async function OurCustomer() {
  const client = await getAllCompanyCustomer();

  return (
    <section className="px-4 md:px-24 pt-10 bg-[#f2f0ef]">
      {/* Heading */}
      <h2 className="text-[36px] md:text-[60px] font-semibold text-center md:text-left">
        Our Clients
      </h2>

      <div className="flex flex-col md:flex-row gap-10 pt-6">
        {/* Section 1 */}
        <div className="flex-1">
          <span className="bg-black text-white text-[16px] md:text-[20px] p-2 rounded-full px-3 mb-6 inline-block">
            Our Pleasure
          </span>

          <p className="mt-1 bg-white p-4 rounded-xl text-center md:text-left">
            We have had the pleasure of working with a diverse range of clients,
            including small businesses, startups, and large corporations across
            various industries. We are proud to have helped these businesses
            achieve success through our technology solutions.
          </p>
        </div>

        {/* Section 2 */}
        <div className="flex-1">
          <span className="bg-black text-white text-[16px] md:text-[20px] p-2 rounded-full px-3 inline-block">
            A Big Company with us
          </span>

          <div className="flex flex-wrap gap-10 mt-11 bg-white p-4 md:mx-[100px] rounded-xl justify-center md:justify-center">
            {client?.map((item) => (
              <div
                key={item.slug as string}
                className="relative h-12 w-12 md:h-16 md:w-16"
              >
                <Image
                  src={item?.clientLogo}
                  alt="Client Logo"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative w-full h-[200px] md:h-[300px] mt-16">
        <Image
          src="/our.svg"
          alt="Service Image"
          fill
          className="object-center object-cover rounded-t-xl"
        />
      </div>
    </section>
  );
}
