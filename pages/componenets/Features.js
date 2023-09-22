import Link from "next/link";
import React from "react";

const Features = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                Hoodies
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                Street art subway tile salvia four dollar toast bitters selfies
                quinoa yuccie synth meditation iPhone intelligentsia prism tofu.
                Viral gochujang bitters dreamcatcher.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="ecommerce"
                  className=" w-full h-[44vh] block"
                  src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRNAKYXuJxO5W1MC4_pg5DoBXyvOQykKNlFdVxJ6gD8onhKqiRZgvYqitwqppjrILLXhNrUtFC6Zxw_kFDBs_9EpV8VwkH_5j6F_IbqLRM7QS6VZZX7mHKtu2O2c-EJSw&usqp=CAc"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Mugs
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Swag shoivdigoitch literally meditation subway tile tumblr
                cold-pressed. Gastropub street art beard dreamcatcher neutra,
                ethical XOXO lumbersexual.
              </p>
              <Link href="/cups">
                <p className="text-indigo-500 inline-flex items-center mt-3">
                  Explore
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </p>
              </Link>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="ecommerce"
                  className=" w-full h-[44vh] block"
                  src="https://ektarfa.online/cdn/shop/products/4_746851c0-f48f-4bcd-9c10-44e85687ce19_1024x1024@2x.jpg?v=1638719116"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Hoodies
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Swag shoivdigoitch literally meditation subway tile tumblr
                cold-pressed. Gastropub street art beard dreamcatcher neutra,
                ethical XOXO lumbersexual.
              </p>
              <Link href="/hoddies">
                <p className="text-indigo-500 inline-flex items-center mt-3">
                  Explore
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </p>
              </Link>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-62 overflow-hidden">
                <img
                  alt="ecommerce"
                  className=" w-full h-[44vh] block"
                  src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQozqV2z80tljoJ1FWzykkLBQgKZ4trFzWOpMKt7BuvU-yiGDoK7J0T-Cndq_AZTr09qPzfvoC0P9Nm3WtCzF08eCQl-9nkh6YVJJWZOClhCgkuN05ZO3XmEqM3lnoY&usqp=CAc"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                T-shirts
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Swag shoivdigoitch literally meditation subway tile tumblr
                cold-pressed. Gastropub street art beard dreamcatcher neutra,
                ethical XOXO lumbersexual.
              </p>
              <Link href="/t-shirt">
                <p className="text-indigo-500 inline-flex items-center mt-3">
                  Explore
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
