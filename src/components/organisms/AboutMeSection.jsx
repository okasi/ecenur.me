import BrickSection from "../atoms/BrickSection";
import TitleTag from "../atoms/TitleTag";
import Image from "next/image";

export default function AboutMeSection() {
  return (
    <BrickSection id="about-me-section">
      <TitleTag>About me</TitleTag>

      <div className="mb-8 flex flex-col items-center md:flex-row">
        <div className="ml-6 mt-8 flex flex-col space-y-6 md:w-[55%]">
          <div className="rounded-2xl border-b-2 border-l-2 border-accent-green-dark bg-accent-green-light p-8 text-xl">
            <p>
              I&apos;m a passionate UX student with a love for{" "}
              <span className="font-bold text-brand-secondary">
                creative thinking
              </span>{" "}
              and a drive to think{" "}
              <span className="font-bold text-brand-secondary">
                beyond the ordinary
              </span>
              . Driven by{" "}
              <span className="font-bold text-brand-secondary">curiosity</span>,{" "}
              <span className="font-bold text-brand-secondary">creativity</span>
              ,{" "}
              <span className="font-bold text-brand-secondary">
                attention to detail
              </span>
              , and{" "}
              <span className="font-bold text-brand-secondary">empathy</span>, I
              thrive on crafting{" "}
              <span className="font-bold text-brand-secondary">
                user experiences
              </span>{" "}
              that deeply resonate with individuals. I&apos;m constantly seeking
              opportunities to{" "}
              <span className="font-bold text-brand-secondary">learn</span> and{" "}
              <span className="font-bold text-brand-secondary">grow</span>,{" "}
              <span className="font-bold text-brand-secondary">pushing</span>{" "}
              <span className="font-bold text-brand-secondary">boundaries</span>{" "}
              in the field of design.
            </p>
          </div>

          <div className="rounded-2xl border-b-2 border-l-2 border-accent-beige-dark bg-accent-beige-light p-8 text-xl">
            <p>
              Beyond my studies, I have diverse interests that keep me engaged.
              With a background in{" "}
              <span className="font-bold text-brand-secondary">acting</span>, I
              excel at storytelling and evoking emotions. I also find
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
            </p>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-[45%] px-2">
          <Image
            src="/ecenur-on-floor.png"
            alt="Ecenur on floor"
            height={473.5}
            width={384}
            className="w-full rounded-full object-contain shadow-2xl"
            quality={98}
          />
        </div>
      </div>
    </BrickSection>
  );
}
