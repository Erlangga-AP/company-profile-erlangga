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

export default async function About() {
  const teamFe = await getTeamFrontEnd();
  const teamBe = await getTeamBackEnd();
  const teamUiUx = await getTeamUiUx();

  return (
    <section className="pt-16 min-h-screen bg-[#f2f0ef]">
      <div className=" h-full flex justify-center items-center">
        <h1 className="px-6 py-12 text-4xl font-semibold text-center text-gray-800">
          About Us Company
        </h1>
      </div>

      <div className="px-6 md:px-24 flex flex-col justify-center items-center mt-1">
        <div className="flex flex-col gap-5 w-full max-w-3xl text-center">
          <p className="text-lg text-gray-700">
            Us was founded in 2015 with a vision to revolutionize the digital
            landscape. Starting as a small team of passionate developers and
            designers, we have grown into a full-fledged company specializing in
            front-end development, back-end development, and UI/UX design. Our
            journey began with a few ambitious projects, and over the years, we
            have expanded our expertise and capabilities. In the early days, our
            focus was primarily on front-end development, creating visually
            stunning and highly interactive user interfaces.
          </p>
          <p className="text-lg text-gray-700">
            As the demand for comprehensive digital solutions grew, we expanded
            our services to include back-end development, ensuring robust and
            scalable architectures for our clients. Recognizing the importance
            of user experience, we also established a dedicated UI/UX team to
            craft intuitive and engaging designs. Today, Us is proud to have a
            diverse team of experts who are committed to delivering exceptional
            digital experiences. Our front-end team excels in creating
            responsive and dynamic interfaces, our back-end team ensures
            seamless functionality and performance, and our UI/UX team designs
            user-centric solutions that delight and engage users.
          </p>
          <p className="text-lg text-gray-700">
            With a strong foundation and a forward-thinking approach, Us
            continues to push the boundaries of what is possible in the digital
            realm. We are dedicated to helping businesses succeed by providing
            innovative and effective solutions that meet their unique needs.
          </p>
          <span className="text-red-500 font-semibold">
            &quot; Empowering businesses through innovative digital solutions
            since 2015. &quot;
          </span>
        </div>

        <div className="flex flex-col">
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

        <div className="flex flex-col mt-12 justify-center items-center w-full max-w-3xl text-center mb-20">
          <h1 className="px-6 py-12 text-4xl font-medium text-gray-800">
            Our Culture and Values
          </h1>
          <p className="text-lg text-gray-700">
            Culture is at the core of everything we do at Us. We believe in
            fostering a collaborative and inclusive environment where every team
            member feels valued and empowered. Our culture is built on the
            following principles: We encourage creativity and out-of-the-box
            thinking. Our team is always exploring new technologies and
            methodologies to stay ahead of the curve. Teamwork is essential to
            our success. We believe that the best solutions come from diverse
            perspectives and open communication.
            <br />
            <br />
            We uphold the highest standards of integrity in all our actions.
            Honesty and transparency are key to building trust with our clients
            and each other. Continuous learning and professional development are
            vital. We provide opportunities for our team to grow their skills
            and advance their careers.
            <br />
            <br />
            We understand the importance of maintaining a healthy work-life
            balance. We offer flexible working arrangements to ensure our team
            can thrive both personally and professionally. At Us, we are more
            than just a company; we are a community of passionate individuals
            dedicated to making a positive impact through our work. Join us and
            be a part of something extraordinary.
          </p>
        </div>
      </div>
    </section>
  );
}

function TeamSection({ title, team }: TeamSectionProps) {
  return (
    <div className="flex flex-col justify-center items-center mt-12 w-full">
      <h2 className="mt-12 text-2xl font-semibold">{title}</h2>
      <div className="flex flex-wrap justify-center gap-10 mt-5">
        {team?.length ? (
          team.map((item) => (
            <div
              key={item.slug}
              className="flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-lg w-[300px]"
            >
              <div className="relative w-[100px] h-[100px] mb-4">
                <Image
                  src={item.teamPhoto}
                  alt="Team Photo"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <span className="text-xl font-semibold">{item.name}</span>
              <span className="text-sm text-gray-600">{item.title}</span>
              <p className="text-base text-gray-700">{item.description}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No team members available.</p>
        )}
      </div>
    </div>
  );
}
