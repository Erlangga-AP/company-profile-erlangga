import {
  getTeamBackEnd,
  getTeamFrontEnd,
  getTeamUiUx,
} from "@/utils/get-contentful-data";
import Image from "next/image";

export default async function TeamPage() {
  const teamFe = await getTeamFrontEnd();
  const teamBe = await getTeamBackEnd();
  const teamUiUx = await getTeamUiUx();

  return (
    <section className="pt-16 min-h-screen">
      <div className="bg-[#F8F8F8] h-full w-full flex justify-center items-center">
        <h1 className="px-24 py-12 text-4xl font-medium">Our Teams</h1>
      </div>
      <div>
        <TeamSection title="Front-End Development Team" team={teamFe} />
        <TeamSection title="Back-End Development Team" team={teamBe} />
        <TeamSection title="UI/UX Development Team" team={teamUiUx} />
      </div>
    </section>
  );
}

function TeamSection({ title, team }) {
  return (
    <div className="flex flex-col justify-center items-center mt-12 w-full">
      <h2 className="mt-12 text-2xl font-semibold">{title}</h2>
      <div className="flex flex-wrap justify-center gap-10 mt-5">
        {team?.map((item) => (
          <div
            key={item.slug}
            className="flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-lg w-[500px]"
          >
            <div className="relative w-[100px] h-[100px] mb-4">
              <Image
                src={item.teamPhoto}
                alt="Team Photo"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-1 text-center">
              <span className="text-xl font-semibold">{item.name}</span>
              <span className="text-sm text-gray-600">{item.title}</span>
              <span className="text-sm text-gray-600">{item.expertise}</span>
              <span className="text-sm text-blue-400 underline">
                {item.contact}
              </span>
              <p className="text-base text-gray-700 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
