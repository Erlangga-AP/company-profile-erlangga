import { getAllTestimonial } from "@/utils/get-contentful-data";
import Image from "next/image";

export default async function Testimonial() {
  const testimonial = await getAllTestimonial();
  console.log(testimonial);

  return (
    <section id="testimonial" className="px-4 md:px-24 py-24 bg-[#f2f0ef]">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-semibold">Testimonial</h1>
        <span className="mt-4 text-lg text-center">
          Nice things customers have said about our company:
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {testimonial?.map((item) => (
            <div
              key={item.slug as string}
              className="flex flex-col justify-center items-center bg-[#F8F8F8] p-8 rounded-lg shadow-lg"
            >
              <div className="relative w-[100px] h-[100px]">
                <Image
                  src={item.clientPhoto}
                  alt="Client Photo"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <span className="text-xl font-semibold mt-4">
                {item.name as string}
              </span>
              <span className="text-sm mt-2">{item.job as string}</span>
              <p className="text-base mt-4">
                &quot;{item.feedback as string}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
