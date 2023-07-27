import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-6xl py-24 sm:px-6 sm:py-16 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-20 lg:text-left">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-1xl">
                VR Experience Marketplace
                <br />
                Discover Limitless Realities
              </h2>
              <p
                className="mt-6 text-lg leading-6 text-gray-300"
                style={{ textAlign: "justify" }}
              >
                Embark on thrilling VR adventures and discover a world of
                limitless possibilities. Explore a vast collection of immersive
                games, from action-packed battles to mind-bending puzzles.
                Unleash your imagination and redefine gaming reality with our
                diverse range of VR experiences. Start your adventure now and be
                amazed!
              </p>
              <div className="mt-9 mb-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <Link
                  to="user/login"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get started now
                </Link>
              </div>
            </div>
            <div className="relative ml-auto h-auto lg:mt-24">
              <img
                className="flex justify-center items-center mx-auto w-80 h-auto max-w-none rounded-full bg-white/5 ring-1 ring-white/10 mb-16"
                src="https://media.giphy.com/media/26FPAn6hPp6Fqx7qw/giphy.gif?cid=ecf05e47stqsxn9fpeu0khsbpoh8ufeca66dyf166pstyqzx&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                alt="App screenshot"
                width={640}
                height={480}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
