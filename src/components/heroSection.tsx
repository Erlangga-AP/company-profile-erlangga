import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-white pt-[200px] pb-[100px]">
      <div className="flex flex-col md:flex-row gap-10 px-6 md:px-24">
        {/* Gambar */}
        <div className="relative h-[300px] md:h-[450px] w-full rounded-r-2xl overflow-hidden">
          <Image src="/hero-image.png" alt="" fill className="object-cover" />
        </div>

        {/* Konten */}
        <div className="font-Inter flex flex-col justify-center">
          <div className="font-bold text-[30px] md:text-[50px] pt-5 md:pt-10">
            <h1>Table Of-</h1>
            <h1>Contents.</h1>
          </div>

          <span className="pt-5 md:pt-10 text-[14px] md:text-[16px] text-gray-600">
            Web Solutions Crafted with Us.
          </span>

          <p className="pt-5 pr-0 md:pr-10 text-[14px] md:text-[16px] text-gray-700">
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
