import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="px-2 pt-2">
        <div className="rounded-[2rem] inset-ring inset-ring-black/5  bg-[linear-gradient(145deg,var(--tw-gradient-stops))] from-[#FFF1BE] from-[28%] via-[#EE87CB] via-[70%] to-[#B060FF] px-24 pt-16 pb-48">
          <nav className="relative flex justify-between">
            {/* All the stupid grid lines */}
            <div
              aria-hidden="true"
              className="absolute inset-y-0 -inset-x-[calc(var(--spacing-24)+var(--spacing-2))]"
            >
              <div className="absolute inset-x-0 -inset-y-px border-y border-black/5"></div>
              <div className="absolute inset-x-0 -inset-y-[-9px] border-y border-black/5"></div>
            </div>
            <div className="relative flex gap-6">
              <div className="relative py-3 flex items-center">
                <svg
                  className="absolute -top-[8px] -left-[8px] size-[15px] fill-black/10"
                  viewBox="0 0 15 15"
                >
                  <path
                    d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"
                    fill="black"
                    fill-opacity="0.1"
                  />
                </svg>

                <svg
                  className="absolute -bottom-[8px] -left-[8px] size-[15px] fill-black/10"
                  viewBox="0 0 15 15"
                >
                  <path
                    d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"
                    fill="black"
                    fill-opacity="0.1"
                  />
                </svg>

                <a href="#">
                  <Logo className="h9" />
                </a>
              </div>
              <div className="relative py-3  flex items-center">
                <svg
                  className="absolute -top-[8px] -left-[8px] size-[15px] fill-black/10"
                  viewBox="0 0 15 15"
                >
                  <path
                    d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"
                    fill="black"
                    fill-opacity="0.1"
                  />
                </svg>

                <svg
                  className="absolute -bottom-[8px] -left-[8px] size-[15px] fill-black/10"
                  viewBox="0 0 15 15"
                >
                  <path
                    d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"
                    fill="black"
                    fill-opacity="0.1"
                  />
                </svg>
                <a
                  href="#"
                  className="flex gap-1 items-center rounded-full bg-fuchsia-950/35 text-sm/6 font-medium text-white px-3 py-0.5"
                >
                  BarelyHR raises $100M Seriess A from Tailwind Ventures
                  <svg
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="size-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="relative flex">
              <div className="relative py-3 flex items-center px-4">
                <svg
                  className="absolute -top-[8px] -left-[8px] size-[15px] fill-black/10"
                  viewBox="0 0 15 15"
                >
                  <path
                    d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"
                    fill="black"
                    fill-opacity="0.1"
                  />
                </svg>

                <svg
                  className="absolute -bottom-[8px] -left-[8px] size-[15px] fill-black/10"
                  viewBox="0 0 15 15"
                >
                  <path
                    d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"
                    fill="black"
                    fill-opacity="0.1"
                  />
                </svg>

                <a href="#" className="text-base font-medium text-gray-950">
                  Features
                </a>
              </div>

              <div className="relative py-3 flex items-center px-4">
                <svg
                  className="absolute -top-[8px] -left-[8px] size-[15px] fill-black/10"
                  viewBox="0 0 15 15"
                >
                  <path
                    d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"
                    fill="black"
                    fill-opacity="0.1"
                  />
                </svg>

                <svg
                  className="absolute -bottom-[8px] -left-[8px] size-[15px] fill-black/10"
                  viewBox="0 0 15 15"
                >
                  <path
                    d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"
                    fill="black"
                    fill-opacity="0.1"
                  />
                </svg>

                <a href="#" className="text-base font-medium text-gray-950">
                  Pricing
                </a>
              </div>

              <div className="relative py-3 flex items-center px-4">
                <svg
                  className="absolute -top-[8px] -left-[8px] size-[15px] fill-black/10"
                  viewBox="0 0 15 15"
                >
                  <path
                    d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"
                    fill="black"
                    fill-opacity="0.1"
                  />
                </svg>

                <svg
                  className="absolute -bottom-[8px] -left-[8px] size-[15px] fill-black/10"
                  viewBox="0 0 15 15"
                >
                  <path
                    d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"
                    fill="black"
                    fill-opacity="0.1"
                  />
                </svg>

                <svg
                  className="absolute -top-[8px] -right-[8px] size-[15px] fill-black/10"
                  viewBox="0 0 15 15"
                >
                  <path
                    d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"
                    fill="black"
                    fill-opacity="0.1"
                  />
                </svg>

                <svg
                  className="absolute -bottom-[8px] -right-[8px] size-[15px] fill-black/10"
                  viewBox="0 0 15 15"
                >
                  <path
                    d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"
                    fill="black"
                    fill-opacity="0.1"
                  />
                </svg>

                <a href="#" className="text-base font-medium text-gray-950">
                  Login
                </a>
              </div>
            </div>
          </nav>
          <div className="mt-40">
            <h1 className=" tracking-tighter text-9xl font-medium text-gray-950">
              Hi<span className=" tracking-tight">r</span>e Sma
              <span className=" tracking-wide">r</span>ter.
            </h1>
            <p className="mt-6 max-w-lg text-xl/8 font-medium text-gray-950/75">
              BarelyHR helps small and large companies find the right person for
              the right job.
            </p>
            <div className="mt-12 flex gap-6">
              <a
                href="#"
                className="py-3 px-4 rounded-full shadow-md bg-gray-950 text-base/4 font-medium text-white"
              >
                Get started
              </a>
              <a
                href="#"
                className="inset-shadow-[0_0_2px_1px_#ffffffff] ring ring-[#D15052]/15 py-3 px-4 rounded-full shadow-md bg-white/15 text-base/4 font-medium text-gray-950"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Logo({ className = "" }: { className: string }) {
  return (
    <svg
      width={123}
      height={34}
      viewBox="0 0 123 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx={8.85449} cy={30.1042} r={1.0625} fill="#222" />
      <circle cx={25.8545} cy={30.1042} r={1.0625} fill="#222" />
      <circle cx={32.9375} cy={16.6458} r={1.0625} fill="#222" />
      <circle cx={25.1455} cy={3.89575} r={1.0625} fill="#222" />
      <circle cx={8.85449} cy={3.89575} r={1.0625} fill="#222" />
      <circle cx={1.0625} cy={16.6458} r={1.0625} fill="#222" />
      <circle cx={3.1875} cy={24.4375} r={1.0625} fill="#222" />
      <circle cx={17.3545} cy={32.9375} r={1.0625} fill="#222" />
      <circle cx={30.8125} cy={24.4375} r={1.0625} fill="#222" />
      <circle cx={30.8125} cy={9.5625} r={1.0625} fill="#222" />
      <circle cx={17.3545} cy={1.0625} r={1.0625} fill="#222" />
      <circle cx={3.1875} cy={9.5625} r={1.0625} fill="#222" />
      <circle cx={17.0023} cy={16.9993} r={2.83333} fill="#222" />
      <circle cx={26.2109} cy={16.9995} r={2.125} fill="#222" />
      <circle cx={12.752} cy={24.791} r={2.125} fill="#222" />
      <circle cx={21.252} cy={24.791} r={2.125} fill="#222" />
      <circle cx={21.252} cy={9.20776} r={2.125} fill="#222" />
      <circle cx={12.752} cy={9.20776} r={2.125} fill="#222" />
      <circle cx={7.79395} cy={16.9995} r={2.125} fill="#222" />
      <path
        d="M111.355 10.82h6.066c1.26 0 2.304.287 3.114.863.792.576 1.206 1.476 1.206 2.7 0 .774-.198 1.44-.558 1.98-.378.54-.9.936-1.566 1.17.306.072.576.18.81.324.216.144.396.306.522.468.126.18.234.396.324.648.072.27.126.504.162.702.036.198.054.45.09.774 0 .09.018.252.036.486.018.252.036.414.036.486 0 .072.018.216.036.396.018.198.036.342.054.414 0 .072.018.198.054.342.036.144.054.27.09.342.018.072.054.162.09.27.036.108.072.18.126.252.036.072.09.144.162.198h-2.412a.628.628 0 01-.108-.162c-.036-.072-.054-.144-.072-.216a.48.48 0 01-.054-.216 3.548 3.548 0 01-.054-.27c-.018-.108-.018-.216-.018-.288l-.036-.324-.036-.324c0-.072-.018-.198-.018-.378-.018-.18-.018-.306-.018-.378-.072-1.044-.288-1.746-.666-2.142-.378-.396-1.098-.594-2.142-.594h-2.988v5.292h-2.232V10.82zm2.232 1.835v4.014h2.97c.432 0 .792-.018 1.098-.072a3.57 3.57 0 00.9-.252c.306-.126.54-.342.702-.63.162-.288.252-.648.252-1.098 0-.396-.072-.738-.216-1.008a1.477 1.477 0 00-.63-.612 3.429 3.429 0 00-.828-.27 7.714 7.714 0 00-.99-.072h-3.258zM108.716 10.82v12.815h-2.25v-5.76h-5.868v5.76h-2.25V10.82h2.25v5.094h5.868V10.82h2.25zM96.969 14.347l-3.438 9.108c-.036.09-.108.27-.198.54-.108.27-.162.45-.198.54-.036.108-.108.27-.216.504-.108.252-.18.414-.234.504l-.27.432c-.126.198-.234.342-.342.414-.108.09-.234.198-.378.324a1.494 1.494 0 01-.45.27 3.903 3.903 0 01-.54.144 3.569 3.569 0 01-.63.054c-.396 0-.864-.036-1.422-.108v-1.728c.432.09.792.126 1.08.126.144 0 .27-.018.396-.054a.85.85 0 00.324-.216c.09-.108.18-.198.252-.288.072-.09.126-.216.198-.378.072-.162.126-.288.162-.378.036-.09.072-.234.144-.432.054-.18.09-.306.108-.36l-3.564-9.018h2.25l2.484 6.84 2.34-6.84h2.142zM86.544 10.82v12.815H84.51V10.82h2.034zM82.752 20.737c-.234 1.008-.738 1.8-1.494 2.358-.756.576-1.674.846-2.718.846-1.404 0-2.52-.45-3.348-1.35-.828-.9-1.224-2.07-1.224-3.492 0-1.44.414-2.646 1.26-3.6.846-.936 1.926-1.422 3.24-1.422 1.35 0 2.43.468 3.222 1.404.792.936 1.188 2.196 1.188 3.798v.216H76.02c.018.936.252 1.674.702 2.178.432.504 1.062.756 1.854.756.558 0 1.008-.126 1.368-.396.36-.27.63-.702.846-1.296h1.962zm-1.926-2.61c-.072-.774-.306-1.386-.738-1.836-.432-.45-.972-.684-1.638-.684-.684 0-1.224.216-1.638.648-.414.432-.666 1.062-.756 1.872h4.77zM73.68 14.167v1.962a9.485 9.485 0 00-.72-.054c-1.8 0-2.682 1.17-2.682 3.474v4.086h-2.034v-9.288h1.926v1.854c.648-1.368 1.692-2.07 3.114-2.07l.396.036zM58.331 17.21c.216-2.089 1.566-3.15 4.069-3.15 1.151 0 2.087.233 2.771.683.684.468 1.044 1.17 1.044 2.124v4.716c0 .27.019.45.09.54.072.108.198.144.396.144.145 0 .289 0 .469-.036v1.44a5.17 5.17 0 01-1.332.198c-.882 0-1.386-.36-1.512-1.116-.792.756-1.872 1.116-3.258 1.116-.972 0-1.728-.234-2.286-.738-.576-.504-.846-1.17-.846-2.034 0-.252.017-.504.09-.738.053-.216.125-.414.197-.594.072-.162.199-.324.379-.468.18-.144.324-.252.431-.36.108-.09.306-.18.559-.27.252-.072.45-.144.575-.18.127-.036.343-.09.666-.144.306-.036.505-.072.613-.09.108-.018.324-.054.648-.09.72-.09 1.224-.162 1.493-.234.252-.072.432-.162.54-.306.073-.09.127-.306.127-.666 0-.936-.649-1.404-1.909-1.404-.684 0-1.17.126-1.475.378-.325.252-.523.684-.594 1.278H58.33zm5.904 1.763c-.162.09-.341.162-.54.234a2.888 2.888 0 01-.504.126c-.126.018-.324.036-.594.072-.27.036-.45.072-.522.072-.252.036-.45.072-.594.108-.144.036-.324.072-.54.144-.216.072-.378.162-.486.27a1.21 1.21 0 00-.288.414 1.33 1.33 0 00-.126.612c0 .45.145.792.433 1.026.288.252.702.36 1.242.36.9 0 1.602-.234 2.105-.738.27-.27.415-.81.415-1.602v-1.098zM46 10.82h5.85c1.332 0 2.358.305 3.078.881.72.576 1.08 1.368 1.08 2.34 0 .612-.18 1.17-.504 1.656a2.916 2.916 0 01-1.332 1.044c.738.18 1.332.54 1.764 1.08.432.54.648 1.224.648 2.034 0 1.134-.378 2.052-1.134 2.736-.756.702-1.728 1.044-2.916 1.044H46V10.82zm2.196 1.817v3.528h3.06c.864 0 1.494-.126 1.908-.396.396-.27.612-.72.612-1.368 0-.72-.216-1.188-.648-1.422-.432-.216-1.026-.342-1.8-.342h-3.132zm0 5.148V21.8h3.366c.864 0 1.53-.144 2.034-.432.486-.288.738-.81.738-1.566 0-.414-.09-.756-.234-1.044a1.375 1.375 0 00-.648-.63 3.986 3.986 0 00-.864-.27 8.965 8.965 0 00-1.062-.072h-3.33z"
        fill="#222"
      />
    </svg>
  );
}
