"use client";
import { useState } from "react";
import BrickSection from "../atoms/BrickSection";
import TitleTag from "../atoms/TitleTag";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react.es";

import Image from "next/image";

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      origin: "center",
      perView: 1.33,
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
    <BrickSection>
      <TitleTag>Testimonials</TitleTag>

      <>
        <div className="relative mt-8">
          <div
            ref={sliderRef}
            className="keen-slider cursor-grab active:cursor-grabbing"
          >
            {/* Mikael K. */}
            <div className="keen-slider__slide border rounded-2xl bg-brand-tertiary p-6">
              <div className="flex flex-row">
                <Image
                  src="/testimonials/mikael-k.jpg"
                  alt="photo of mikael k."
                  height={320}
                  width={320}
                  className="object-contain"
                  quality={98}
                />
                <div className="flex flex-col w-full">
                  <div className="flex flex-row bg-neutral-black/10 w-full">
                    <h3 className="bg-accent-dark rounded-tr-2xl px-4 py-2 font-display text-accent-orange text-3xl ">
                      Mikael K.
                    </h3>
                    <h4 className=" px-4 py-2 text-base flex items-center">
                      CTO & Full-Stack Developer
                    </h4>
                  </div>
                  <p className="p-6 text-lg">
                    Ecenur works hard and is always focused, which enhances her
                    own work. She is meticulous and has a positive attitude,
                    making her a valuable part of the team.
                    <br />
                    <br />
                    Ecenur jobbar hårt och är alltid fokuserad, vilket lyfter
                    hennes egna arbete. Hon är noggrann och har en positiv
                    inställning, vilket gör henne till en värdefull del av
                    teamet.
                  </p>
                </div>
              </div>
            </div>

            {/* Deniz K. */}
            <div className="keen-slider__slide border rounded-2xl bg-brand-secondary p-6">
              <div className="flex flex-row">
                <Image
                  src="/testimonials/deniz-k.jpg"
                  alt="photo of Deniz K."
                  height={320}
                  width={320}
                  className="object-contain"
                  quality={98}
                />
                <div className="flex flex-col w-full">
                  <div className="flex flex-row bg-neutral-black/10 w-full">
                    <h3 className="bg-accent-dark rounded-tr-2xl px-4 py-2 font-display text-accent-orange text-3xl ">
                      Deniz K.
                    </h3>
                    <h4 className=" px-4 py-2 text-base flex items-center">
                      Art Teacher
                    </h4>
                  </div>
                  <p className="p-6 text-lg">
                    Ecenur is one of the most hardworking and dedicated
                    individuals I know. Her passion for taking ownership of her
                    work and her selfless dedication set her apart. She always
                    demonstrates readiness to support and do whatever it takes.
                    Working with her is a guarantee that every project will
                    succeed.
                  </p>
                </div>
              </div>
            </div>

            {/* Okan S. */}
            <div className="keen-slider__slide border rounded-2xl bg-accent-orange p-6">
              <div className="flex flex-row">
                <Image
                  src="/testimonials/okan-s.jpg"
                  alt="photo of Okan S."
                  height={320}
                  width={320}
                  className="object-contain"
                  quality={98}
                />
                <div className="flex flex-col w-full">
                  <div className="flex flex-row bg-neutral-black/10 w-full">
                    <h3 className="bg-accent-dark rounded-tr-2xl px-4 py-2 font-display text-accent-orange text-3xl ">
                      Okan S.
                    </h3>
                    <h4 className=" px-4 py-2 text-base flex items-center">
                      Full-Stack Developer
                    </h4>
                  </div>
                  <p className="p-6 text-lg">
                    In a world where design meets user needs,
                    <br />
                    A guiding light, our path she leads.
                    <br />
                    With a keen eye for detail, sharp & refined,
                    <br />
                    She crafts experiences that truly bind
                  </p>
                </div>
              </div>
            </div>

            {/* Asli B. */}
            <div className="keen-slider__slide border rounded-2xl bg-accent-beige p-6">
              <div className="flex flex-row">
                <Image
                  src="/testimonials/asli-b.jpg"
                  alt="photo of Asli B."
                  height={320}
                  width={320}
                  className="object-contain"
                  quality={98}
                />
                <div className="flex flex-col w-full">
                  <div className="flex flex-row bg-neutral-black/10 w-full">
                    <h3 className="bg-accent-dark rounded-tr-2xl px-4 py-2 font-display text-accent-orange text-3xl ">
                      Asli B.
                    </h3>
                    <h4 className=" px-4 py-2 text-base flex items-center">
                      Nurse
                    </h4>
                  </div>
                  <p className="p-6 text-lg">
                    Where is Ecenur? She’s standing outside the box! Zero
                    percent boring, hundred percent creative! Her energy is so
                    contagious and addictive. You might want to laugh and dance
                    all the time when you’re with her. But you’re warned, you
                    might develop withdrawal symptoms when she’s not around.
                  </p>
                </div>
              </div>
            </div>
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
          <div className="flex mt-2 justify-center  mb-4">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={`border-0 w-4 h-4 mt-2 rounded-full mx-2 cursor-pointer ${
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

function Arrow(props) {
  return (
    <div
      className={`w-12 h-12 flex items-center justify-center rounded-full absolute top-1/2 cursor-pointer bg-white border ${
        props.left ? "left-2" : "left-auto right-2"
      }`}
    >
      <svg
        onClick={props.onClick}
        className={`w-7 h-7 ${props.disabled ? "opacity-25" : ""} ${
          props.left ? "-ml-1" : "-mr-1"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    </div>
  );
}
