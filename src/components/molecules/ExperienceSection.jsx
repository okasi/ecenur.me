import BrickSection from "../atoms/BrickSection";
import TitleTag from "../atoms/TitleTag";
import Image from "next/image";

export default function ExperienceSection() {
  return (
    <BrickSection id="experience-section">
      <TitleTag>Experience</TitleTag>

      <div className="flex flex-col-reverse md:flex-row mb-16">
        <div className="flex flex-col md:w-[55%] mt-8 ml-6 space-y-1.5">
          <div className="bg-accent-green p-6 rounded-2xl text-xl">
            <h3 className="-ml-6 px-4 py-2 w-fit -mt-6 font-display text-2xl border-b border-r rounded-l-none rounded-t-none rounded-r-2xl rounded-b-2xl border-neutral-black/50">
              Education
            </h3>
            <p className="font-bold mt-4">
              <span className="font-bold text-brand-secondary">
                UX-Design and Business Analytics
              </span>{" "}
              | Chas Academy | <br></br> Higher Vocational Education (HVE)
            </p>
            <p className="text-base">August 2023 - Present</p>
          </div>

          <svg
            className="self-center"
            width="67"
            height="136"
            viewBox="0 0 67 136"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.4476 3C13.6559 22.5241 19.7378 39.2898 45.2256 50.4409C53.8056 54.1947 68.1245 55.7137 62.8719 45.1697C57.9926 35.3752 36.2798 30.1375 22.38 33.9421C1.52121 39.6515 0.49002 56.3338 5.52155 69.2065C13.3059 89.1219 23.6453 108.609 39.2385 126.347C42.4148 129.96 49.2137 103.916 45.2256 112.589C42.4107 118.71 42.3896 124.286 42.3896 130.616C42.3896 135.174 40.1051 132.259 36.7176 129.615C31.2122 125.317 22.3225 121.092 14.0296 119.705"
              stroke="#606060"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>

          <div className="bg-accent-beige p-6 rounded-2xl text-xl">
            <p>
              I am currently studying and learning a lot. <br></br>I will fill
              this space with amazing work experiences!
            </p>
          </div>
        </div>

        <a
          href="https://www.linkedin.com/in/ecenursi/"
          target="#blank"
          className="max-w-[45%] ml-auto mr-4 -mt-16 h-fit"
        >
          <Image
            src="/ecenur-open-to-internship.png"
            alt="A sign that says 'Open to internship'"
            height={247.4325}
            width={286.875}
            className="object-contain"
            quality={98}
          />
        </a>
      </div>
    </BrickSection>
  );
}
