"use client";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react.es";
import { useState } from "react";
import Arrow from "../atoms/Arrow";
import BrickSection from "../atoms/BrickSection";
import TitleTag from "../atoms/TitleTag";
import TestimonialCard from "../molecules/TestimonialCard";

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      origin: "center",
      perView: 1.2,
      spacing: 24,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <BrickSection id="testimonials-section">
      <TitleTag>Testimonials</TitleTag>

      <>
        <div className="relative -mx-4 mt-8 overflow-x-hidden">
          <div
            ref={sliderRef}
            // eslint-disable-next-line tailwindcss/no-custom-classname
            className="keen-slider flex cursor-grab flex-row !overflow-visible active:cursor-grabbing"
          >
            <TestimonialCard
              className="bg-light-beige"
              kebabCasePersonName="mikael-k"
              professionTitle="CTO & Full-Stack Developer"
              testimonialBody={
                <>
                  Ecenur works hard and is always focused, which enhances her
                  own work. She is meticulous and has a positive attitude,
                  making her a valuable part of the team.
                  <span className="hidden md:inline-block">
                    <br />
                    Ecenur jobbar hårt och är alltid fokuserad, vilket lyfter
                    hennes egna arbete. Hon är noggrann och har en positiv
                    inställning, vilket gör henne till en värdefull del av
                    teamet.
                  </span>
                </>
              }
            />

            <TestimonialCard
              className="bg-light-blue"
              kebabCasePersonName="deniz-k"
              professionTitle="Art Teacher"
              testimonialBody={
                <>
                  Ecenur is one of the most hardworking and dedicated
                  individuals I know. Her passion for taking ownership of her
                  work and her selfless dedication set her apart. She always
                  demonstrates readiness to support and do whatever it takes.
                  Working with her is a guarantee that every project will
                  succeed.
                </>
              }
            />

            <TestimonialCard
              className="bg-[#E7DFEF]"
              kebabCasePersonName="okan-s"
              professionTitle="Full-Stack Developer"
              testimonialBody={
                <>
                  In a world where design meets user needs,
                  <br />
                  A guiding light, our path she leads.
                  <br />
                  With a keen eye for detail, sharp & refined,
                  <br />
                  She crafts experiences that truly bind
                </>
              }
            />

            <TestimonialCard
              className="bg-light-green"
              kebabCasePersonName="asli-b"
              professionTitle="Nurse"
              testimonialBody={
                <>
                  Where is Ecenur? She’s standing outside the box! Zero percent
                  boring, hundred percent creative! Her energy is so contagious
                  and addictive. You might want to laugh and dance all the time
                  when you’re with her. But you’re warned, you might develop
                  withdrawal symptoms when she’s not around.
                </>
              }
            />
          </div>

          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </>
          )}
        </div>

        {/* Dots */}
        {loaded && instanceRef.current && (
          <div className="mb-4 mt-2 flex  justify-center">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={`mx-2 mt-2 size-4 cursor-pointer rounded-full border-0 ${
                    currentSlide === idx
                      ? " bg-neutral-black"
                      : "bg-neutral-grey"
                  }`}
                />
              );
            })}
          </div>
        )}
      </>
    </BrickSection>
  );
}
