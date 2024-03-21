import BrickSection from "@/components/BrickSection";
import TitleTag from "@/components/TitleTag";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-0">
        <filter id="outlineColored">
          <feMorphology
            in="SourceAlpha"
            result="Dilated"
            operator="dilate"
            radius="8"
          />
          <feFlood floodColor="#624673" result="OutlineColor" />
          <feComposite
            in="OutlineColor"
            in2="Dilated"
            operator="in"
            result="Outline"
          />
          <feMerge>
            <feMergeNode in="Outline" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </svg>

      <main className="flex min-h-screen flex-col items-center px-4">
        {/* Hero */}
        <BrickSection>
          <h1 className="mt-4 font-display text-black text-6xl md:text-8xl text-center leading-tight">
            Hi, I’m{" "}
            <span
              className="text-white mix-blend-multiply"
              style={{
                filter: "url(#outlineColored)",
              }}
            >
              Ecenur Uyguner
            </span>
            <br></br>I{" "}
            <span className="text-white hover:bg-accent-green hover:text-brand-secondary [-webkit-text-stroke:2.75px#624673] hover:[-webkit-text-stroke:0]">
              design
            </span>
            ,{" "}
            <span className="text-white hover:bg-accent-beige hover:text-brand-secondary [-webkit-text-stroke:2.75px#624673] hover:[-webkit-text-stroke:0]">
              act
            </span>{" "}
            &{" "}
            <span className="text-white hover:bg-accent-dark hover:text-accent-orange [-webkit-text-stroke:2.75px#624673] hover:[-webkit-text-stroke:0]">
              craft
            </span>
          </h1>

          <Image
            src="/ecenur-saturn.png"
            alt="Ecenur on a flying carpet inside planet saturn illustration with multiple stars around that has the labels 'problem solver', 'ambitious', 'strategic thinker', 'detail-oriented', 'creative'"
            height={396.06}
            width={552}
            className="mx-auto py-12 mt-6"
            quality={98}
            priority
          />

          <a
            href="https://www.linkedin.com/in/ecenursi/"
            target="#blank"
            className="mt-6 mb-3 flex mx-auto font-sans items-center space-x-2 font-medium justify-center w-fit hover:underline text-sm md:text-lg"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 4H6C4.895 4 4 4.895 4 6V24C4 25.105 4.895 26 6 26H24C25.105 26 26 25.105 26 24V6C26 4.895 25.105 4 24 4ZM10.954 22H8.004V12.508H10.954V22ZM9.449 11.151C8.498 11.151 7.729 10.38 7.729 9.431C7.729 8.482 8.499 7.712 9.449 7.712C10.397 7.712 11.168 8.483 11.168 9.431C11.168 10.38 10.397 11.151 9.449 11.151ZM22.004 22H19.056V17.384C19.056 16.283 19.036 14.867 17.523 14.867C15.988 14.867 15.752 16.066 15.752 17.304V22H12.804V12.508H15.634V13.805H15.674C16.068 13.059 17.03 12.272 18.465 12.272C21.452 12.272 22.004 14.238 22.004 16.794V22Z"
                fill="black"
              />
            </svg>
            <span className="text-wrap">
              https://www.linkedin.com/in/ecenursi/
            </span>
          </a>
        </BrickSection>

        <hr className="py-8"></hr>

        {/* About me */}
        <BrickSection>
          <TitleTag>About me</TitleTag>

          <div className="flex flex-col md:flex-row items-center mb-8">
            <div className="flex flex-col md:w-[55%] mt-8 ml-6 space-y-6">
              <div className="bg-accent-green p-6 rounded-2xl text-xl">
                <p>
                  I'm a passionate UX student with a love for{" "}
                  <span className="font-bold text-brand-secondary">
                    creative thinking
                  </span>{" "}
                  and a drive to think{" "}
                  <span className="font-bold text-brand-secondary">
                    beyond the ordinary
                  </span>
                  . Driven by{" "}
                  <span className="font-bold text-brand-secondary">
                    curiosity
                  </span>
                  ,{" "}
                  <span className="font-bold text-brand-secondary">
                    creativity
                  </span>
                  ,{" "}
                  <span className="font-bold text-brand-secondary">
                    attention to detail
                  </span>
                  , and{" "}
                  <span className="font-bold text-brand-secondary">
                    empathy
                  </span>
                  , I thrive on crafting{" "}
                  <span className="font-bold text-brand-secondary">
                    user experiences
                  </span>{" "}
                  that deeply resonate with individuals. I'm constantly seeking
                  opportunities to{" "}
                  <span className="font-bold text-brand-secondary">learn</span>{" "}
                  and{" "}
                  <span className="font-bold text-brand-secondary">grow</span>,{" "}
                  <span className="font-bold text-brand-secondary">
                    pushing
                  </span>{" "}
                  <span className="font-bold text-brand-secondary">
                    boundaries
                  </span>{" "}
                  in the field of design.
                </p>
              </div>

              <div className="bg-accent-beige p-6 rounded-2xl text-xl">
                <p>
                  Beyond my studies, I have diverse interests that keep me
                  engaged. With a background in{" "}
                  <span className="font-bold text-brand-secondary">acting</span>
                  , I excel at storytelling and evoking emotions. I also find
                  inspiration in{" "}
                  <span className="font-bold text-brand-secondary">nature</span>
                  ,{" "}
                  <span className="font-bold text-brand-secondary">
                    museums
                  </span>
                  , and the art of{" "}
                  <span className="font-bold text-brand-secondary">
                    thoughtful gifting
                  </span>
                  . These experiences not only help me unwind but also serve as
                  inspiration for my design work. I strive to integrate my
                  unique perspectives and passions into both my personal and
                  professional life, drawing from the realms of{" "}
                  <span className="font-bold text-brand-secondary">art</span>{" "}
                  and{" "}
                  <span className="font-bold text-brand-secondary">
                    culture
                  </span>
                  .
                </p>
              </div>
            </div>

            <Image
              src="/ecenur-on-floor.png"
              alt="Ecenur on floor"
              height={473.5}
              width={384}
              className="mx-auto mt-8 object-contain max-w-[45%] px-2"
              quality={98}
            />
          </div>
        </BrickSection>

        <hr className="py-8"></hr>

        {/* Experience */}
        <BrickSection>
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
                  I am currently studying and learning a lot. <br></br>I will
                  fill this space with amazing work experiences!
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

        <hr className="py-8"></hr>

        {/* Projects */}
        <BrickSection>
          <TitleTag>Projects</TitleTag>

          <Image
            src="/ecenur-flying.png"
            alt="Ecenur flying"
            height={120.4}
            width={256}
            className="object-contain"
            quality={98}
          />

          {/* First project – Tires Service */}
          <div className="max-w-5xl mx-auto">
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

              <div className="flex flex-col mt-4 md:mt-0 justify-center border-accent-green bg-white border-4 rounded-2xl aspect-[4/3] p-4 max-w-[68.75%] md:max-w-[50%]">
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

          {/* Second project – Preschool Teachers */}
        </BrickSection>

        <hr className="py-8"></hr>

        {/* Skills */}
        <BrickSection>
          <TitleTag>Skills</TitleTag>
        </BrickSection>

        <hr className="py-8"></hr>

        {/* Testimonials */}
        <BrickSection>
          <TitleTag>Testimonials</TitleTag>
        </BrickSection>
      </main>
    </>
  );
}
