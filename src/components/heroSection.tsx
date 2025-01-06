import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-white pt-[200px] pb-[100px]">
      <div className="pb-10 flex gap-10">
        <div className="relative h-[450px] w-full rounded-r-2xl overflow-hidden">
          <Image src="/hero-image.png" alt="" fill className="object-cover" />
        </div>

        <div className="font-Inter">
          <div className="font-bold text-[50px] pt-10">
            <h1>Table Of-</h1>
            <h1>Contents.</h1>
          </div>

          <span className="pt-10">Web Solutions Crafted with Us.</span>

          <p className="pt-5 pr-10 ">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ante erat
            torquent euismod ac at, accumsan lobortis donec fusce. Eros gravida
            montes eleifend blandit natoque Nascetur est curabitur maecenas
            habitasse phasellus proin gravida. Elit luctus aliquam amet primis
            quisque integer cras lectus.
          </p>
        </div>
      </div>
    </section>
  );
}
