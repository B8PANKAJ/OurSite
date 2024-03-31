import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="max-w-screen-xl mt-4 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16   xl:px-32 py-16 mx-auto bg-white text-gray-900 rounded-lg">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Let's talk about everything!
            </h2>
            <div className="text-black mt-8 w-[450px]">
              Have some big idea or brand to develop and need help? Then reach
              out we'd love to hear about your project and provide help
            </div>
          </div>
          <div>
            <h2 className="text-4xl lg:text-xl font-semibold leading-tight">
              Email
            </h2>
            <div className="text-black mt-3">beebs@gmail.com</div>
          </div>
          <div>
            <h2 className="text-4xl lg:text-xl font-semibold leading-tight">
              Socials
            </h2>
            <div className="flex flex-col gap-4 mt-2">
              <a href="/facebook">Instagram</a>
              <a href="/facebook">Twitter</a>
              <a href="/facebook">Facebook</a>
            </div>
          </div>
        </div>
        <div className="">
          <div>
            <span className="uppercase text-sm text-black font-normal">
              Name
            </span>
            <input
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder=""
            />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-black font-normal">
              Email
            </span>
            <input
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
            />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-black font-normal">
              What service are you interested in
            </span>
            <select
              id="countries"
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            >
              <option selected className="p-3">
                Select project type
              </option>
              <option value="">Web Desgin</option>
              <option value="">Web Development</option>
              <option value="">Video Editing</option>
              <option value="">Seo</option>
              <option value="">Digital Marketing</option>
            </select>
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-black font-normal">
              Budget
            </span>
            <select
              id="countries"
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            >
              <option selected>Select project budget</option>
              <option value="">$100</option>
              <option value="">$200</option>
              <option value="">$300</option>
              <option value="">$400</option>
            </select>
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-black font-normal">
              Message
            </span>
            <textarea className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div className="mt-8">
            <button className="uppercase text-sm font-bold transition-all ease-in-out tracking-wide bg-orange-500 text-white p-3 rounded-lg w-full focus:outline-none focus:shadow-outline hover:bg-orange-600">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
