import {
  getTeamBackEnd,
  getTeamFrontEnd,
  getTeamUiUx,
} from "@/utils/get-contentful-data";
import Image from "next/image";

interface TeamMember {
  name: string;
  slug: string;
  title: string;
  expertise: string;
  contact: string;
  description: string;
  teamPhoto: string;
}

interface TeamSectionProps {
  title: string;
  team?: TeamMember[];
}

export default async function TeamPage() {
  const teamFe = await getTeamFrontEnd();
  const teamBe = await getTeamBackEnd();
  const teamUiUx = await getTeamUiUx();

  return (
    <section className="pt-16 min-h-screen bg-[#f2f0ef] pb-24">
      <div className="h-full w-full flex justify-center items-center">
        <h1 className="px-4 md:px-24 pt-12 text-3xl md:text-4xl font-bold text-center">
          Our Teams
        </h1>
      </div>
      <div>
        <TeamSection
          title="Front-End Development Team"
          team={teamFe as TeamMember[]}
        />
        <TeamSection
          title="Back-End Development Team"
          team={teamBe as TeamMember[]}
        />
        <TeamSection
          title="UI/UX Development Team"
          team={teamUiUx as TeamMember[]}
        />
      </div>
    </section>
  );
}

function TeamSection({ title, team }: TeamSectionProps) {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h2 className="mt-12 text-2xl md:text-3xl font-semibold">{title}</h2>
      <div className="flex flex-wrap justify-center gap-5 md:gap-10 mt-5">
        {team?.map((item) => (
          <div
            key={item.slug}
            className="flex flex-col justify-center items-center bg-white p-4 md:p-6 rounded-lg shadow-lg w-full md:w-[300px] lg:w-[350px]"
          >
            <div className="relative w-[80px] h-[80px] md:w-[100px] md:h-[100px] mb-4">
              <Image
                src={item.teamPhoto}
                alt="Team Photo"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-1 text-center">
              <span className="text-xl md:text-2xl font-semibold">
                {item.name}
              </span>
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
