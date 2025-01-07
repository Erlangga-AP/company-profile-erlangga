import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#F8F8F8] px-6 md:px-24 py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <h3 className="text-[#414141] font-semibold text-2xl mb-4">
              Location
            </h3>
            <a
              href="https://maps.app.goo.gl/NNP1HZMAfcTcWdtw5"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-[100px] md:w-[280px] h-[175px] cursor-pointer"
              aria-label="View location on Google Maps"
            >
              <Image
                src="/location.png"
                alt="Map Image"
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </a>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-[#414141] font-semibold text-2xl mb-4">
              Company
            </h3>
            <ul className="mt-4 list-disc text-lg font-medium text-[#414141]">
              <li>
                <Link
                  href="/about"
                  className="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                  aria-label="About Us"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/service"
                  className="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                  aria-label="Our Services"
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  href="/teams"
                  className="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                  aria-label="Meet Our Teams"
                >
                  Teams
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-[#414141] font-semibold text-2xl mb-4">
              Contact Us
            </h3>
            <div className="flex flex-col items-center">
              <div className="flex flex-row gap-2 items-center mt-6 justify-center text-lg">
                <div className="relative w-[20px] h-[20px] p-3">
                  <Image
                    src="/x-logo.svg"
                    alt="Twitter Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <Link
                  href="https://x.com"
                  target="_blank"
                  className="text-sm font-medium hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                  aria-label="Visit our Twitter profile"
                >
                  Us
                </Link>
              </div>

              <div className="flex flex-row gap-2 items-center mt-6 justify-center text-lg">
                <div className="relative w-[20px] h-[20px] p-3">
                  <Image
                    src="/instagram-logo.svg"
                    alt="Instagram Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className="text-sm font-medium hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                  aria-label="Visit our Instagram profile"
                >
                  Us
                </Link>
              </div>

              <div className="flex flex-row gap-2 items-center mt-6 justify-center text-lg">
                <div className="relative w-[20px] h-[20px] p-3">
                  <Image
                    src="/mail-logo.svg"
                    alt="Email Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <a
                  href="mailto:Us@mail.com"
                  className="text-sm font-medium hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                  aria-label="Send us an email"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Us@mail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-[#414141]">
          <p>&copy; 2025 Us All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
