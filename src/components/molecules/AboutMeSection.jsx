import BrickSection from "../atoms/BrickSection";
import TitleTag from "../atoms/TitleTag";
import Image from "next/image";


export default function AboutMeSection() {
  return (
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
              that deeply resonate with individuals. I'm constantly seeking
              opportunities to{" "}
              <span className="font-bold text-brand-secondary">learn</span> and{" "}
              <span className="font-bold text-brand-secondary">grow</span>,{" "}
              <span className="font-bold text-brand-secondary">pushing</span>{" "}
              <span className="font-bold text-brand-secondary">boundaries</span>{" "}
              in the field of design.
            </p>
          </div>

          <div className="bg-accent-beige p-6 rounded-2xl text-xl">
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
  );
}
