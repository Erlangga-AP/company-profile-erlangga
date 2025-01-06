import Link from "next/link";
import Image from "next/image";
import { getAllCompanyOverview } from "@/utils/get-contentful-data";

export default async function CompanyOverview() {
  const overview = await getAllCompanyOverview();

  return (
    <section className="bg-[#f2f0ef] pl-[100px]">
      <div className="font-bold text-[50px] pt-[60px] pb-[30px]">
        <div>About-</div>
        <div>Company.</div>
      </div>

      <div className="flex gap-10">
        <div className="relative h-[400px] w-[600px] rounded-2xl overflow-hidden">
          <Image
            src="/about-company.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div>
          <Link href="/about">
            <button className="bg-black text-white mt-6 mb-4 px-4 py-2 rounded-md font-semibold transition-transform transform hover:scale-110">
              About the Company
            </button>
          </Link>

          {overview?.map((item) => (
            <ul key={item.slug as string} className="list-disc pl-5 mt-2">
              <li className="mt-2">
                <h4 className="text-base md:text-sm font-semibold">
                  {item.title as string}
                </h4>
                <p className="text-sm md:text-xs font-normal mt-1">
                  {item.description as string}
                </p>
              </li>
            </ul>
          ))}
          <div className="mt-2 mb-[100px]">
            <span className="text-sm">
              Us Company is dedicated to excellence and positively impacting our
              clients through every project.
            </span>
            <Link href="/about">
              <span className="mt-4 text-sm pl-1 font-semibold">
                See more...
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
