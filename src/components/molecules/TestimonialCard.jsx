import Image from "next/image";

export default function TestimonialCard({
  className,
  kebabCasePersonName,
  professionTitle,
  testimonialBody,
}) {
  const formattedName =
    kebabCasePersonName
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ") + ".";

  return (
    <div
      // eslint-disable-next-line tailwindcss/no-custom-classname
      className={`keen-slider__slide min-w-72 rounded-2xl border p-6 lg:min-w-[1132.36px] ${className}`}
    >
      <div className="flex flex-col-reverse items-center md:flex-row md:items-stretch">
        <Image
          src={`/testimonials/${kebabCasePersonName}.jpg`}
          alt={`photo of ${kebabCasePersonName}`}
          height={320}
          width={320}
          className="object-contain lg:min-w-80"
          quality={98}
        />
        <div className="flex w-full flex-col">
          <div className="flex w-full flex-row bg-neutral-black/10">
            <h3 className="rounded-tr-2xl bg-accent-dark px-4 py-2 font-display text-3xl text-accent-orange ">
              {formattedName}
            </h3>
            <h4 className="flex items-center px-4 py-2 text-lg">
              {professionTitle}
            </h4>
          </div>
          <p className="py-3 text-lg md:p-6">{testimonialBody}</p>
        </div>
      </div>
    </div>
  );
}
