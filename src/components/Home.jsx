// import { Link } from "react-router-dom";

// //   const stats = [
// //     { name: 'Offices worldwide', value: '12' },
// //     { name: 'Full-time colleagues', value: '300+' },
// //     { name: 'Hours per week', value: '40' },
// //     { name: 'Paid time off', value: 'Unlimited' },
// //   ]

//   export default function Home() {
//     return (
//       <div className="relative isolate overflow-hidden py-24 sm:py-32">
//         {/* <img
//           src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
//           alt=""
//           className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
//         />
//         <div
//           className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
//           aria-hidden="true"
//         >
//           <div
//             className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
//             style={{
//               clipPath:
//                 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//             }}
//           />
//         </div> */}
//         {/* <div
//           className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
//           aria-hidden="true"
//         >
//           <div
//             className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
//             style={{
//               clipPath:
//                 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//             }}
//           />
//         </div> */}
//         <div className="mx-auto max-w-7xl px-6 lg:px-8">
//           <div className="mx-auto max-w-7xl lg:mx-0">
//             <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">VR Experience Marketplace</h2>
//             <p className="mt-6 text-lg leading-8 text-black" style={{ textAlign: 'justify' }}>
//              <br/>Immerse yourself in the extraordinary world of virtual reality where you can embark on thrilling adventures and unforgettable journeys. Discover an extensive collection of cutting-edge VR games that will transport you to new dimensions, from action-packed battles to mind-bending puzzles. Whether you're a seasoned gamer or new to the VR realm, our platform offers a diverse range of experiences for all ages and interests. Get ready to unleash your imagination and redefine your gaming reality with our unparalleled selection of VR game experiences. Start your adventure now and prepare to be amazed!
//             </p>
//           </div>
//           <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
//             <div>

//                 <Link  to="/items" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 max-w-sm">Go to Shop
//                 </Link>

//             </div>

//             <div>
//               <img src="https://media.giphy.com/media/26FPAn6hPp6Fqx7qw/giphy.gif?cid=ecf05e47stqsxn9fpeu0khsbpoh8ufeca66dyf166pstyqzx&ep=v1_gifs_search&rid=giphy.gif&ct=g" />
//             </div>
//               {/* <div className="flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 max-w-md">
//     <Link to="/items">Go to Shop</Link>
// </div>
//       */}

//             {/* <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
//               {stats.map((stat) => (
//                 <div key={stat.name} className="flex flex-col-reverse">
//                   <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
//                   <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
//                 </div>
//               ))}
//             </dl> */}
//           </div>
//         </div>
//       </div>
//     )
//   }
import { Link } from "react-router-dom";

export default function Example() {
  // return (
  //   <div className="relative isolate overflow-hidden py-8 sm:py-8">
  //     <div className="mx-auto max-w-7xl px-6 lg:px-8">
  //       <div className="mx-auto max-w-7xl lg:mx-0">
  //         <h2 className="text-2xl font-bold tracking-tight text-black sm:text-4xl">VR Experience Marketplace</h2>
  //         <div className="flex mt-8"> {/* Add margin-top to move the content down */}
  //           <div className="w-1/2 pl-4"> {/* Move the paragraph to the left */}
  //             <p className="text-lg leading-8 text-black" style={{ textAlign: 'justify' }}>
  //               <br/>Immerse yourself in the extraordinary world of virtual reality where you can embark on thrilling adventures and unforgettable journeys. Discover an extensive collection of cutting-edge VR games that will transport you to new dimensions, from action-packed battles to mind-bending puzzles. Whether you're a seasoned gamer or new to the VR realm, our platform offers a diverse range of experiences for all ages and interests. Get ready to unleash your imagination and redefine your gaming reality with our unparalleled selection of VR game experiences. Start your adventure now and prepare to be amazed!
  //             </p>
  //             <br/>
  //             <div className="mt-4">
  //               <Link to="/items" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 max-w-sm">Sign in to start shopping</Link>
  //             </div>
  //           </div>
  //           <div className="w-1/2 flex justify-center items-center"> {/* Move the image to the right */}
  //             <img
  //               src="https://media.giphy.com/media/26FPAn6hPp6Fqx7qw/giphy.gif?cid=ecf05e47stqsxn9fpeu0khsbpoh8ufeca66dyf166pstyqzx&ep=v1_gifs_search&rid=giphy.gif&ct=g"
  //               alt="VR Experience"
  //               style={{ width: '60%', height: 'auto' }}
  //             />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

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
              <p className="mt-6 text-lg leading-6 text-gray-300" style={{ textAlign: 'justify' }}>
                Embark on thrilling VR adventures and discover a world of
                limitless possibilities. Explore a vast collection of immersive
                games, from action-packed battles to mind-bending puzzles.
                Unleash your imagination and redefine gaming reality with our
                diverse range of VR experiences. Start your adventure now and be
                amazed!
              </p>
              <div className="mt-9 mb-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <Link to="user/login"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Let's get started
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
