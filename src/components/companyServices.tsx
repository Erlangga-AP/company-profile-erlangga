import Link from "next/link";
import Image from "next/image";
import { getAllCompanyServices } from "@/utils/get-contentful-data";

export default async function CompanyServices() {
  const services = await getAllCompanyServices();

  return (
    <section className="px-4 md:px-24 pt-24 bg-[#f2f0ef]">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-[50px] mb-10 font-semibold">
            What We Do?
          </h1>
          {services?.map((item) => (
            <ul key={item.slug as string} className="list-disc pl-5 mt-2">
              <li className="mt-2">
                <h4 className="text-base md:text-lg font-semibold">
                  {item.title as string}
                </h4>
                <p className="text-sm md:text-base font-normal mt-1">
                  {item.description as string}
                </p>
              </li>
            </ul>
          ))}
          <Link href="/service">
            <button className="bg-black text-white mt-4 ml-4 px-4 py-2 rounded-md font-semibold transition-transform transform hover:scale-110">
              View Detail
            </button>
          </Link>
        </div>
        <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px] md:mt-[70px] mb-[150px]">
          <Image
            src="/services.avif"
            alt="Service Image"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
