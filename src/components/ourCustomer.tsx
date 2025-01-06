import { getAllCompanyCustomer } from "@/utils/get-contentful-data";
import Image from "next/image";

export default async function OurCustomer() {
  const client = await getAllCompanyCustomer();

  return (
    <section className="px-4 md:px-24 pt-10 bg-[#f2f0ef]">
      <h2 className="text-[60px] font-semibold">Our Clients</h2>

      <div className="flex gap-10 pt-6">
        <div>
          <span className="bg-black text-white text-[20px] p-2 rounded-full px-3 mb-11">
            Our Pleasure
          </span>

          <p className="mt-10 bg-white p-4 mx-16 rounded-xl">
            We have had the pleasure of working with a diverse range of clients,
            including small businesses, startups, and large corporations across
            various industries. We are proud to have helped these businesses
            achieve success through our technology solutions.
          </p>
        </div>

        <div>
          <span className="bg-black text-white text-[20px] p-2 rounded-full px-3">
            A Big Company with us
          </span>

          <div className="flex gap-10 mt-10 bg-white p-4 rounded-xl">
            {client?.map((item) => (
              <div key={item.slug as string} className="relative h-16 w-16">
                <Image
                  src={item?.clientLogo}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative w-full h-[300px] mt-16">
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
