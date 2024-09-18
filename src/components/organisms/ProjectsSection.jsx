import Image from "next/image";
import BrickSection from "../atoms/BrickSection";
import TitleTag from "../atoms/TitleTag";

export default function ProjectsSection() {
  return (
    <BrickSection id="projects-section">
      <TitleTag>Projects</TitleTag>

      <Image
        src="/ecenur-flying.png"
        alt="Ecenur flying"
        height={120.4}
        width={256}
        className="animate-hover-in-air absolute -ml-32 mt-96 object-contain md:mt-8"
        quality={98}
      />

      <div className="mx-auto my-8 max-w-5xl">
        {/* First project – Tires Service */}
        <div className="flex flex-col-reverse items-center justify-between md:flex-row md:items-stretch md:space-x-4">
          <div className="mt-4 flex aspect-[4/3] w-full flex-col justify-center rounded-2xl border-2 border-accent-green-dark bg-white p-4 md:mt-0 md:w-1/2">
            <Image
              src="/road-runners-logo.jpg"
              alt="road runners logo"
              height={242.6}
              width={448}
              className="rounded-2xl object-contain"
              quality={98}
            />
          </div>

          <div className="flex w-full flex-col rounded-2xl border-2 border-accent-green-dark bg-[#E7ECDB] md:w-1/2">
            <h3 className="rounded-t-2xl border-b-2 border-accent-green-dark bg-accent-green-light py-2  text-center text-2xl font-bold">
              Changing Tires Service
            </h3>

            <div className="h-full px-6">
              <p className="mt-4 text-xl">
                Creating a new brand and service where people can book time
                slots at their nearest workshop to change their tires. Designing
                website, logo, slogan and moreover.
              </p>

              <ul className="mt-2 inline-flex flex-row flex-wrap text-base">
                <li className="mt-2 whitespace-normal rounded-full border border-neutral-grey bg-neutral-base/10 px-2 py-0.5 text-neutral-grey">
                  Requirement and Project Management
                </li>
                <li className="ml-2 mt-2 whitespace-nowrap rounded-full border border-neutral-grey bg-neutral-base/10 px-2 py-0.5 text-neutral-grey">
                  UX-Design
                </li>
              </ul>
              <ul className="mb-2 inline-flex flex-row text-base">
                <li className="mt-2 whitespace-nowrap rounded-full border border-neutral-grey bg-neutral-base/10 px-2 py-0.5 text-neutral-grey">
                  UX-Research
                </li>
                <li className="ml-2 mt-2 whitespace-nowrap rounded-full border border-neutral-grey bg-neutral-base/10 px-2 py-0.5 text-neutral-grey">
                  UI-Design
                </li>
              </ul>
            </div>
            <a
              href="https://www.figma.com/design/x3Wwts3iA3dvr3PiiLOnRv"
              target="_blank"
              className="bottom-0 mx-6 my-3 self-end rounded-2xl border-2 border-solid bg-neutral-grey/20 p-2.5 text-xl font-medium"
            >
              <span className="border-b-2 border-solid">Check in Figma ›</span>
            </a>
          </div>
        </div>

        <hr className="my-12"></hr>

        {/* Second project */}
        <div className="flex flex-col items-center justify-between md:flex-row md:items-stretch md:space-x-4">
          <div className="flex w-full flex-col rounded-2xl border-2 border-accent-beige-dark bg-[#F2E9E2] md:w-1/2">
            <h3 className="rounded-t-2xl border-b-2 border-accent-beige-dark bg-accent-beige-light py-2 text-center text-2xl font-bold">
              Moderna Museet
            </h3>

            <div className="flex h-full flex-col px-6">
              <p className="mt-4 text-xl">
                In this case study, we improved the ticket purchasing experience
                for Moderna Museet&apos;s website through interface analysis,
                design changes, and conversion rate optimization.
              </p>

              <ul className="my-2 inline-flex flex-row flex-wrap text-base">
                <li className="mt-2 whitespace-nowrap rounded-full border border-neutral-grey bg-neutral-base/10 px-2 py-0.5 text-neutral-grey">
                  UX-Research
                </li>
                <li className="ml-2 mt-2 whitespace-nowrap rounded-full border border-neutral-grey bg-neutral-base/10 px-2 py-0.5 text-neutral-grey">
                  Project Management
                </li>
                <li className="ml-2 mt-2 whitespace-nowrap rounded-full border border-neutral-grey bg-neutral-base/10 px-2 py-0.5 text-neutral-grey">
                  UI-Design
                </li>
              </ul>
            </div>

            <a
              href="https://www.figma.com/design/0DOkIzCLkz22hExxPLIMjZ"
              target="_blank"
              className="bottom-0 mx-6 my-3 self-end rounded-2xl border-2 border-solid bg-neutral-grey/20 p-2.5 text-xl font-medium"
            >
              <span className="border-b-2 border-solid">Check in Figma ›</span>
            </a>
          </div>

          <div className="relative mt-4 flex aspect-[4/3] w-full flex-col items-center justify-center rounded-2xl border-2 border-accent-beige-dark bg-white p-4 md:mt-0 md:w-1/2">
            <Image
              src="/moderna-museet.jpg"
              alt="moderna museet"
              height={320}
              width={320}
              className="rounded-full object-contain"
              quality={98}
            />
          </div>
        </div>
      </div>
    </BrickSection>
  );
}
