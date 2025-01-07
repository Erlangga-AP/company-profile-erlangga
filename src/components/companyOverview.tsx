import Link from "next/link";
import Image from "next/image";
import { getAllCompanyOverview } from "@/utils/get-contentful-data";

export default async function CompanyOverview() {
  const overview = await getAllCompanyOverview();

  return (
    <section className="bg-[#f2f0ef] px-6 md:pl-[100px] pt-10">
      {/* Heading */}
      <div className="font-bold text-[30px] md:text-[50px] pt-6 pb-6 text-center md:text-left">
        <div>About-</div>
        <div>Company.</div>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
        {/* Gambar */}
        <div className="relative h-[200px] w-full md:h-[400px] md:w-[600px] rounded-2xl overflow-hidden">
          <Image
            src="/about-company.png"
            alt="About Company"
            fill
            className="object-cover"
          />
        </div>

        {/* Deskripsi */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/about">
            <button className="bg-black text-white mt-4 mb-6 px-6 py-3 rounded-md font-semibold transition-transform transform hover:scale-110">
              About the Company
            </button>
          </Link>

          {overview?.map((item) => (
            <ul
              key={item.slug as string}
              className="list-disc pl-5 mt-2 w-full"
            >
              <li className="mt-2">
                <span className="text-base md:text-sm font-semibold">
                  {item.title as string}
                </span>
                <p className="text-sm md:text-xs font-normal mt-1">
                  {item.description as string}
                </p>
              </li>
            </ul>
          ))}

          <div className="mt-4 text-center md:text-left">
            <span className="text-sm">
              Us Company is dedicated to excellence and positively impacting our
              clients through every project.
            </span>
            <Link href="/about">
              <span className="mt-4 text-sm pl-1 font-semibold cursor-pointer">
                See more...
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
