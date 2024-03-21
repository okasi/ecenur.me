import BrickSection from "../atoms/BrickSection";
import TitleTag from "../atoms/TitleTag";
import Image from "next/image";

export default function ProjectsSection() {
  return (
    <BrickSection>
          <TitleTag>Projects</TitleTag>

          <Image
            src="/ecenur-flying.png"
            alt="Ecenur flying"
            height={120.4}
            width={256}
            className="object-contain absolute -ml-32 mt-96 md:mt-8 animate-hover-in-air"
            quality={98}
          />

          <div className="max-w-5xl mx-auto my-8">

          {/* First project – Tires Service */}
            <div className="flex flex-col-reverse items-center md:items-stretch md:space-x-4 md:flex-row justify-between">
              <div className="flex flex-col mt-4 md:mt-0 justify-center border-accent-green bg-white border-4 rounded-2xl aspect-[4/3] p-4 max-w-[68.75%] md:max-w-[50%]">
                <Image
                  src="/road-runners-logo.jpg"
                  alt="road runners logo"
                  height={242.6}
                  width={448}
                  className="object-contain rounded-2xl"
                  quality={98}
                />
              </div>

              <div className="bg-accent-green rounded-2xl p-6 md:max-w-[50%]">
                <h3 className="text-2xl font-bold">Changing Tires Service</h3>

                <ul className="inline-flex flex-row text-base mt-2">
                  <li className="py-0.5 px-2 rounded-full border border-neutral-grey text-neutral-grey mt-2">
                    Requirement and Project Management
                  </li>
                  <li className="py-0.5 px-2 rounded-full border border-neutral-grey text-neutral-grey ml-2 mt-2">
                    UX-Design
                  </li>
                </ul>
                <ul className="inline-flex flex-row text-base">
                  <li className="py-0.5 px-2 rounded-full border border-neutral-grey text-neutral-grey mt-2">
                    UX-Research
                  </li>
                  <li className="py-0.5 px-2 rounded-full border border-neutral-grey text-neutral-grey ml-2 mt-2">
                    UI-Design
                  </li>
                </ul>

                <p className="mt-4 text-lg">
                  Creating a new brand and service where people can book time
                  slots at their nearest workshop to change their tires.
                  Designing website, logo, slogan and moreover.
                </p>
              </div>
            </div>

            <hr className="my-12"></hr>

            {/* Second project – Preschool Teachers */}
            <div className="flex flex-col items-center md:items-stretch md:space-x-4 md:flex-row justify-between">
              <div className="bg-accent-beige rounded-2xl p-6 md:max-w-[50%]">
                <h3 className="text-2xl font-bold">
                  Stress Among Preschool Teachers
                </h3>

                <ul className="inline-flex flex-row text-base mt-2">
                  <li className="py-0.5 px-2 rounded-full border border-neutral-grey text-neutral-grey mt-2">
                    UX-Research
                  </li>
                  <li className="py-0.5 px-2 rounded-full border border-neutral-grey text-neutral-grey ml-2 mt-2">
                    Project Management
                  </li>
                  <li className="py-0.5 px-2 rounded-full border border-neutral-grey text-neutral-grey ml-2 mt-2">
                    UI-Design
                  </li>
                </ul>

                <p className="mt-4 text-lg">
                  The main topic was "How can we increase people's well-being?"
                  and we decided to focus our research on "What are the main
                  causes of stress among preschool teachers?"
                </p>
              </div>

              <div className="flex relative flex-col mt-4 md:mt-0 justify-center border-accent-beige bg-white border-4 rounded-2xl md:aspect-[4/3] p-4 max-w-[68.75%] md:max-w-[50%]">
                <Image
                  src="/preschool.jpg"
                  alt="preschool"
                  height={320}
                  width={320}
                  className="object-contain rounded-full"
                  quality={98}
                />
              </div>
            </div>
          </div>
        </BrickSection>
  )
}