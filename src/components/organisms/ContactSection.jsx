export default function ContactSection() {
  return (
    <>
      <svg
        className="relative z-10 -mb-16 h-12 w-full text-brand-secondary"
        viewBox="0 0 1024 64"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_807_1925)">
          <path
            d="M0 56C66.6278 56 157.989 33.3333 257.463 33.3333C356.937 33.3333 403.749 49.3333 512 49.3333C620.251 49.3333 642.194 33.3333 768 33.3333C893.806 33.3333 949.394 64 1024 64V0H0V56Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_807_1925">
            <rect width="1024" height="64" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <section
        className="sticky bottom-0 z-0 flex w-full flex-col items-center text-white"
        id="contact-section"
      >
        <h2 className="mt-32 text-center font-display text-6xl text-accent-orange">
          Let&apos;s Contact!
        </h2>

        <div className="mt-6 flex flex-col items-start space-y-4">
          <a
            href="https://www.linkedin.com/in/ecenursi/"
            target="#blank"
            className="flex w-fit items-center justify-center space-x-3 font-sans text-base font-medium hover:underline md:text-2xl"
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_868_4331)">
                <path
                  d="M38.2812 0H11.7188C5.24666 0 0 5.24666 0 11.7188V38.2812C0 44.7533 5.24666 50 11.7188 50H38.2812C44.7533 50 50 44.7533 50 38.2812V11.7188C50 5.24666 44.7533 0 38.2812 0Z"
                  fill="white"
                />
                <path
                  d="M38.2812 0H11.7188C5.24666 0 0 5.24666 0 11.7188V38.2812C0 44.7533 5.24666 50 11.7188 50H38.2812C44.7533 50 50 44.7533 50 38.2812V11.7188C50 5.24666 44.7533 0 38.2812 0Z"
                  fill="#0A66C2"
                />
                <path
                  d="M36.0771 42.5166H41.7939C42.0011 42.5166 42.1998 42.4343 42.3463 42.2878C42.4928 42.1414 42.5751 41.9427 42.5752 41.7355L42.5781 29.657C42.5781 23.3439 41.2178 18.4914 33.8402 18.4914C31.0357 18.3871 28.391 19.8328 26.9639 22.2469C26.9569 22.2586 26.9463 22.2677 26.9336 22.2728C26.921 22.278 26.907 22.2788 26.8938 22.2752C26.8807 22.2717 26.869 22.2639 26.8607 22.2531C26.8523 22.2423 26.8478 22.2291 26.8477 22.2154V19.8555C26.8477 19.6483 26.7653 19.4496 26.6188 19.303C26.4723 19.1565 26.2736 19.0742 26.0664 19.0742H20.6412C20.434 19.0742 20.2353 19.1565 20.0888 19.303C19.9423 19.4496 19.86 19.6483 19.86 19.8555V41.7344C19.86 41.9416 19.9423 42.1403 20.0888 42.2868C20.2353 42.4333 20.434 42.5156 20.6412 42.5156H26.3576C26.5648 42.5156 26.7635 42.4333 26.91 42.2868C27.0566 42.1403 27.1389 41.9416 27.1389 41.7344V30.9193C27.1389 27.8613 27.7189 24.8998 31.5102 24.8998C35.2475 24.8998 35.2959 28.399 35.2959 31.1174V41.7354C35.2959 41.9426 35.3782 42.1413 35.5247 42.2878C35.6712 42.4343 35.8699 42.5166 36.0771 42.5166ZM7.42188 11.6461C7.42188 13.9633 9.32949 15.8699 11.6469 15.8699C13.9637 15.8697 15.8701 13.9619 15.8701 11.6451C15.8697 9.32832 13.9631 7.42188 11.6461 7.42188C9.32852 7.42188 7.42188 9.32891 7.42188 11.6461ZM8.78105 42.5166H14.5051C14.7123 42.5166 14.911 42.4343 15.0575 42.2878C15.204 42.1413 15.2863 41.9426 15.2863 41.7354V19.8555C15.2863 19.6483 15.204 19.4496 15.0575 19.303C14.911 19.1565 14.7123 19.0742 14.5051 19.0742H8.78105C8.57385 19.0742 8.37514 19.1565 8.22863 19.303C8.08211 19.4496 7.9998 19.6483 7.9998 19.8555V41.7354C7.9998 41.9426 8.08211 42.1413 8.22863 42.2878C8.37514 42.4343 8.57385 42.5166 8.78105 42.5166Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_868_4331">
                  <rect width="50" height="50" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <span>Linkedin.com/in/ecenursi/</span>
          </a>

          <a
            href="mailto:ecenur.uyguner@gmail.com"
            target="#blank"
            className="flex w-fit items-center justify-center space-x-3 font-sans text-base font-medium hover:underline md:text-2xl"
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_868_4339)">
                <path
                  d="M38.2812 0H11.7188C5.24666 0 0 5.24666 0 11.7188V38.2812C0 44.7533 5.24666 50 11.7188 50H38.2812C44.7533 50 50 44.7533 50 38.2812V11.7188C50 5.24666 44.7533 0 38.2812 0Z"
                  fill="#F4F2ED"
                />
                <path
                  d="M8.13203 39.6568H14.3465V24.5645L5.46875 17.9062V36.9936C5.46875 38.4672 6.66289 39.6568 8.13203 39.6568Z"
                  fill="#4285F4"
                />
                <path
                  d="M35.6533 39.657H41.868C43.3416 39.657 44.5312 38.4629 44.5312 36.9938V17.9062L35.6533 24.5646"
                  fill="#34A853"
                />
                <path
                  d="M35.6533 13.0226V24.5638L44.5312 17.9056V14.3541C44.5312 11.0605 40.7715 9.18277 38.1393 11.1582"
                  fill="#FBBC04"
                />
                <path
                  d="M14.3467 24.5629V13.0219L25 21.0115L35.6533 13.0215V24.5627L25 32.5529"
                  fill="#EA4335"
                />
                <path
                  d="M5.46875 14.3541V17.9052L14.3465 24.5636V13.0226L11.8607 11.1582C9.22402 9.18277 5.46875 11.0605 5.46875 14.3541Z"
                  fill="#C5221F"
                />
              </g>
              <defs>
                <clipPath id="clip0_868_4339">
                  <rect width="50" height="50" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <span>ecenur.uyguner@gmail.com</span>
          </a>

          <a
            href="https://t.me/ecenursi"
            target="#blank"
            className="flex w-fit items-center justify-center space-x-3 font-sans text-base font-medium hover:underline md:text-2xl"
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_868_4336)">
                <path
                  d="M25 0C18.3711 0 12.0078 2.63555 7.32422 7.32227C2.63579 12.0108 0.00129871 18.3695 0 25C0 31.6277 2.63672 37.991 7.32422 42.6777C12.0078 47.3645 18.3711 50 25 50C31.6289 50 37.9922 47.3645 42.6758 42.6777C47.3633 37.991 50 31.6277 50 25C50 18.3723 47.3633 12.009 42.6758 7.32227C37.9922 2.63555 31.6289 0 25 0Z"
                  fill="url(#paint0_linear_868_4336)"
                />
                <path
                  d="M11.3163 24.7351C18.6053 21.5601 23.4647 19.4667 25.8944 18.4554C32.8397 15.5675 34.2811 15.066 35.2225 15.049C35.4295 15.0457 35.8905 15.0968 36.1913 15.34C36.4413 15.5451 36.5116 15.8224 36.5467 16.0171C36.578 16.2117 36.6209 16.655 36.5858 17.0011C36.2108 20.9543 34.5819 30.5472 33.7538 34.975C33.4061 36.8484 32.7147 37.4765 32.0467 37.5378C30.5936 37.6714 29.492 36.5785 28.0858 35.657C25.8866 34.2144 24.6444 33.3167 22.5077 31.9093C20.0389 30.2828 21.6405 29.3886 23.0467 27.9277C23.4139 27.5453 29.8124 21.7269 29.9334 21.1992C29.9491 21.1332 29.9647 20.8871 29.8163 20.7574C29.6717 20.6273 29.4569 20.6718 29.3006 20.707C29.078 20.757 25.5663 23.0804 18.7538 27.6769C17.7577 28.3621 16.8553 28.696 16.0428 28.6785C15.1522 28.6593 13.4334 28.1738 12.1561 27.7589C10.5936 27.25 9.34751 26.9808 9.45688 26.1164C9.51157 25.6664 10.1327 25.2058 11.3163 24.7351Z"
                  fill="white"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_868_4336"
                  x1="2500"
                  y1="0"
                  x2="2500"
                  y2="5000"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2AABEE" />
                  <stop offset="1" stopColor="#229ED9" />
                </linearGradient>
                <clipPath id="clip0_868_4336">
                  <rect width="50" height="50" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <span>T.me/ecenursi</span>
          </a>

          <a
            href="https://instagram.com/e_uyguner/"
            target="#blank"
            className="flex w-fit items-center justify-center space-x-3 font-sans text-base font-medium hover:underline md:text-2xl"
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_868_4347)">
                <path
                  d="M38.2812 0H11.7188C5.24666 0 0 5.24666 0 11.7188V38.2812C0 44.7533 5.24666 50 11.7188 50H38.2812C44.7533 50 50 44.7533 50 38.2812V11.7188C50 5.24666 44.7533 0 38.2812 0Z"
                  fill="url(#paint0_radial_868_4347)"
                />
                <path
                  d="M38.2812 0H11.7188C5.24666 0 0 5.24666 0 11.7188V38.2812C0 44.7533 5.24666 50 11.7188 50H38.2812C44.7533 50 50 44.7533 50 38.2812V11.7188C50 5.24666 44.7533 0 38.2812 0Z"
                  fill="url(#paint1_radial_868_4347)"
                />
                <path
                  d="M25.0018 5.46875C19.6975 5.46875 19.0316 5.49199 16.9484 5.58672C14.8691 5.68203 13.4498 6.01113 12.208 6.49414C10.9232 6.99297 9.83359 7.66035 8.74805 8.74629C7.66152 9.83203 6.99414 10.9217 6.49375 12.2059C6.00938 13.448 5.67988 14.868 5.58633 16.9463C5.49316 19.0297 5.46875 19.6957 5.46875 25.0002C5.46875 30.3047 5.49219 30.9684 5.58672 33.0516C5.68242 35.1309 6.01152 36.5502 6.49414 37.792C6.99336 39.0768 7.66074 40.1664 8.74668 41.252C9.83203 42.3385 10.9217 43.0074 12.2055 43.5062C13.4482 43.9893 14.8678 44.3184 16.9467 44.4137C19.0301 44.5084 19.6953 44.5316 24.9994 44.5316C30.3043 44.5316 30.968 44.5084 33.0512 44.4137C35.1305 44.3184 36.5514 43.9893 37.7941 43.5062C39.0783 43.0074 40.1664 42.3385 41.2516 41.252C42.3381 40.1664 43.0053 39.0768 43.5059 37.7926C43.9859 36.5502 44.3156 35.1305 44.4133 33.052C44.5068 30.9687 44.5312 30.3047 44.5312 25.0002C44.5312 19.6957 44.5068 19.0301 44.4133 16.9467C44.3156 14.8674 43.9859 13.4482 43.5059 12.2064C43.0053 10.9217 42.3381 9.83203 41.2516 8.74629C40.1652 7.65996 39.0787 6.99258 37.793 6.49434C36.5479 6.01113 35.1277 5.68184 33.0484 5.58672C30.965 5.49199 30.3018 5.46875 24.9957 5.46875H25.0018ZM23.2496 8.98848C23.7697 8.9877 24.35 8.98848 25.0018 8.98848C30.2168 8.98848 30.8348 9.00723 32.8941 9.10078C34.7984 9.18789 35.832 9.50605 36.5205 9.77344C37.432 10.1273 38.0818 10.5506 38.765 11.2344C39.4486 11.918 39.8717 12.5689 40.2266 13.4805C40.4939 14.168 40.8125 15.2016 40.8992 17.1059C40.9928 19.1648 41.0131 19.7832 41.0131 24.9957C41.0131 30.2082 40.9928 30.8268 40.8992 32.8855C40.8121 34.7898 40.4939 35.8234 40.2266 36.5111C39.8727 37.4227 39.4486 38.0717 38.765 38.7549C38.0814 39.4385 37.4324 39.8615 36.5205 40.2156C35.8328 40.4842 34.7984 40.8016 32.8941 40.8887C30.8352 40.9822 30.2168 41.0025 25.0018 41.0025C19.7865 41.0025 19.1684 40.9822 17.1096 40.8887C15.2053 40.8008 14.1717 40.4826 13.4826 40.2152C12.5713 39.8611 11.9201 39.4381 11.2365 38.7545C10.5529 38.0709 10.1299 37.4215 9.775 36.5096C9.50762 35.8219 9.18906 34.7883 9.10234 32.884C9.00879 30.825 8.99004 30.2066 8.99004 24.9908C8.99004 19.7752 9.00879 19.16 9.10234 17.101C9.18945 15.1967 9.50762 14.1631 9.775 13.4746C10.1291 12.5631 10.5529 11.9121 11.2367 11.2285C11.9203 10.5449 12.5713 10.1217 13.4828 9.76699C14.1713 9.49844 15.2053 9.18105 17.1096 9.09355C18.9113 9.01211 19.6096 8.98769 23.2496 8.98359V8.98848ZM35.4275 12.2314C34.1336 12.2314 33.0838 13.2803 33.0838 14.5744C33.0838 15.8684 34.1336 16.9182 35.4275 16.9182C36.7215 16.9182 37.7713 15.8684 37.7713 14.5744C37.7713 13.2805 36.7215 12.2307 35.4275 12.2307V12.2314ZM25.0018 14.9699C19.4627 14.9699 14.9717 19.4609 14.9717 25.0002C14.9717 30.5395 19.4627 35.0283 25.0018 35.0283C30.541 35.0283 35.0305 30.5395 35.0305 25.0002C35.0305 19.4611 30.5406 14.9699 25.0014 14.9699H25.0018ZM25.0018 18.4896C28.5973 18.4896 31.5123 21.4043 31.5123 25.0002C31.5123 28.5957 28.5973 31.5107 25.0018 31.5107C21.4061 31.5107 18.4914 28.5957 18.4914 25.0002C18.4914 21.4043 21.4061 18.4896 25.0018 18.4896Z"
                  fill="white"
                />
              </g>
              <defs>
                <radialGradient
                  id="paint0_radial_868_4347"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(13.2812 53.851) rotate(-90) scale(49.5537 46.0889)"
                >
                  <stop stopColor="#FFDD55" />
                  <stop offset="0.1" stopColor="#FFDD55" />
                  <stop offset="0.5" stopColor="#FF543E" />
                  <stop offset="1" stopColor="#C837AB" />
                </radialGradient>
                <radialGradient
                  id="paint1_radial_868_4347"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(-8.3752 3.60176) rotate(78.681) scale(22.1508 91.3062)"
                >
                  <stop stopColor="#3771C8" />
                  <stop offset="0.128" stopColor="#3771C8" />
                  <stop offset="1" stopColor="#6600FF" stopOpacity="0" />
                </radialGradient>
                <clipPath id="clip0_868_4347">
                  <rect width="50" height="50" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <span>Instagram.com/e_uyguner/</span>
          </a>
        </div>

        <p className="py-12 text-base font-bold">
          © {new Date().getFullYear()} Made with 💞 in Stockholm
        </p>
      </section>
    </>
  );
}