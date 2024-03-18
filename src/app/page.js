import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="max-w-4xl w-fit sm:w-full bg-white mx-8 rounded-xl mt-8 p-4">
        <h1 className="mt-4 font-display text-black text-7xl text-center">
          Hi, I’m{" "}
          <span className="text-white [-webkit-text-stroke:4.5px#624673] text-[86px]">
            Ecenur Uyguner
          </span>
          <br></br>I{" "}
          <span className="text-white hover:bg-accent-green hover:text-brand-secondary [-webkit-text-stroke:2.75px#624673] hover:[-webkit-text-stroke:0] tracking-wide text-[64px]">
            design
          </span>
          ,{" "}
          <span className="text-white hover:bg-accent-beige hover:text-brand-secondary [-webkit-text-stroke:2.75px#624673] hover:[-webkit-text-stroke:0] tracking-wide  text-[64px]">
            act
          </span>{" "}
          &{" "}
          <span className="text-white hover:bg-accent-dark hover:text-accent-orange [-webkit-text-stroke:2.75px#624673] hover:[-webkit-text-stroke:0] tracking-wide text-[64px]">
            craft
          </span>
        </h1>

        <Image
          src="/ece-saturn.png"
          alt="ece saturn"
          height={368}
          width={368}
          className="mx-auto py-12 mt-6"
          priority
        ></Image>

        <a
          href="https://www.linkedin.com/in/ecenursi/"
          target="#blank"
          className="mt-6 mb-3 flex mx-auto font-sans items-center space-x-2 font-medium justify-center w-fit hover:underline text-lg"
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
          <span>https://www.linkedin.com/in/ecenursi/</span>
        </a>
      </section>
    </main>
  );
}
