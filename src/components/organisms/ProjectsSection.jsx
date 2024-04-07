import BrickSection from "../atoms/BrickSection";
import TitleTag from "../atoms/TitleTag";
import Image from "next/image";

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
          <div className="mt-4 flex aspect-[4/3] max-w-[68.75%] flex-col justify-center rounded-2xl border-2 border-accent-green-dark bg-white p-4 md:mt-0 md:max-w-[50%]">
            <Image
              src="/road-runners-logo.jpg"
              alt="road runners logo"
              height={242.6}
              width={448}
              className="rounded-2xl object-contain"
              quality={98}
            />
          </div>

          <div className="rounded-2xl border-2 border-accent-green-dark bg-accent-green-light md:max-w-[50%]">
            <h3 className="rounded-t-2xl border-b-2 border-accent-green-dark bg-neutral-grey/10 py-2 text-center text-2xl font-bold">
              Changing Tires Service
            </h3>

            <div className="px-6">
              <p className="mt-4 text-xl">
                Creating a new brand and service where people can book time
                slots at their nearest workshop to change their tires. Designing
                website, logo, slogan and moreover.
              </p>

              <ul className="mt-2 inline-flex flex-row text-base">
                <li className="mt-2 rounded-full border border-neutral-grey bg-neutral-base/10 px-2 py-0.5 text-neutral-grey">
                  Requirement and Project Management
                </li>
                <li className="ml-2 mt-2 rounded-full border border-neutral-grey bg-neutral-base/10 px-2 py-0.5 text-neutral-grey">
                  UX-Design
                </li>
              </ul>
              <ul className="inline-flex flex-row text-base">
                <li className="mt-2 rounded-full border border-neutral-grey bg-neutral-base/10 px-2 py-0.5 text-neutral-grey">
                  UX-Research
                </li>
                <li className="ml-2 mt-2 rounded-full border border-neutral-grey bg-neutral-base/10 px-2 py-0.5 text-neutral-grey">
                  UI-Design
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-12"></hr>

        {/* Second project – Preschool Teachers */}
        <div className="flex flex-col items-center justify-between md:flex-row md:items-stretch md:space-x-4">
          <div className="rounded-2xl border-2 border-accent-beige-dark bg-accent-beige md:max-w-[50%]">
            <h3 className="rounded-t-2xl border-b-2 border-accent-beige-dark bg-neutral-grey/10 py-2 text-center text-2xl font-bold">
              Stress Among Preschool Teachers
            </h3>

            <div className="px-6">
              <p className="mt-4 text-lg">
                The main topic was &quot;How can we increase people&apos;s
                well-being?&quot; and we decided to focus our research on
                &quot;What are the main causes of stress among preschool
                teachers?&quot;
              </p>

              <ul className="mt-2 inline-flex flex-row text-base">
                <li className="mt-2 rounded-full border border-neutral-grey bg-neutral-base/10 px-2 py-0.5 text-neutral-grey">
                  UX-Research
                </li>
                <li className="ml-2 mt-2 rounded-full border border-neutral-grey bg-neutral-base/10 px-2 py-0.5 text-neutral-grey">
                  Project Management
                </li>
                <li className="ml-2 mt-2 rounded-full border border-neutral-grey bg-neutral-base/10 px-2 py-0.5 text-neutral-grey">
                  UI-Design
                </li>
              </ul>
            </div>
          </div>

          <div className="relative mt-4 flex max-w-[68.75%] flex-col justify-center rounded-2xl border-2 border-accent-beige-dark bg-white p-4 md:mt-0 md:aspect-[4/3] md:max-w-[50%]">
            <Image
              src="/preschool.jpg"
              alt="preschool"
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
