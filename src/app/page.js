import BrickSection from "@/components/BrickSection";
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
          <feFlood flood-color="#624673" result="OutlineColor" />
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
            <span className="text-transparent hover:bg-accent-green hover:text-brand-secondary [-webkit-text-stroke:2.75px#624673] hover:[-webkit-text-stroke:0]">
              design
            </span>
            ,{" "}
            <span className="text-transparent hover:bg-accent-beige hover:text-brand-secondary [-webkit-text-stroke:2.75px#624673] hover:[-webkit-text-stroke:0]">
              act
            </span>{" "}
            &{" "}
            <span className="text-transparent hover:bg-accent-dark hover:text-accent-orange [-webkit-text-stroke:2.75px#624673] hover:[-webkit-text-stroke:0]">
              craft
            </span>
          </h1>

          <Image
            src="/ece-saturn.png"
            alt="Ecenur on a flying carpet inside planet saturn illustration with multiple stars around that has the labels 'problem solver', 'ambitious', 'strategic thinker', 'detail-oriented', 'creative'"
            height={593.955}
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
          <h2 className="bg-accent-dark w-fit py-2 px-8 mt-8 -ml-4 rounded-r-2xl text-white font-display text-3xl">
            About me
          </h2>

          <div className="flex flex-row items-center mb-8">
            <div className="flex flex-col md:w-[55%] mt-8 ml-6 space-y-6">
              <div className="bg-accent-green p-6 rounded-2xl text-xl">
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
                <span className="font-bold text-brand-secondary">empathy</span>,
                I thrive on crafting{" "}
                <span className="font-bold text-brand-secondary">
                  user experiences
                </span>{" "}
                that deeply resonate with individuals. I'm constantly seeking
                opportunities to{" "}
                <span className="font-bold text-brand-secondary">learn</span>{" "}
                and <span className="font-bold text-brand-secondary">grow</span>
                ,{" "}
                <span className="font-bold text-brand-secondary">pushing</span>{" "}
                <span className="font-bold text-brand-secondary">
                  boundaries
                </span>{" "}
                in the field of design.
              </div>

              <div className="bg-accent-beige p-6 rounded-2xl text-xl">
                Beyond my studies, I have diverse interests that keep me
                engaged. With a background in{" "}
                <span className="font-bold text-brand-secondary">acting</span>,
                I excel at storytelling and evoking emotions. I also find
                inspiration in{" "}
                <span className="font-bold text-brand-secondary">nature</span>,{" "}
                <span className="font-bold text-brand-secondary">museums</span>,
                and the art of{" "}
                <span className="font-bold text-brand-secondary">
                  thoughtful gifting
                </span>
                . These experiences not only help me unwind but also serve as
                inspiration for my design work. I strive to integrate my unique
                perspectives and passions into both my personal and professional
                life, drawing from the realms of{" "}
                <span className="font-bold text-brand-secondary">art</span> and{" "}
                <span className="font-bold text-brand-secondary">culture</span>.
              </div>
            </div>

            <Image
              src="/ece-onfloor.png"
              alt="Ecenur on floor"
              height={569.5}
              width={384}
              className="mx-auto mt-8 object-contain max-w-[45%]"
              quality={98}
            />
          </div>
        </BrickSection>
      </main>
    </>
  );
}
