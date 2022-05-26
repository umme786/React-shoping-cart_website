import React from "react"

const NavBar = () => {
  return (

    <body class="bg-[#f4e8ee] text-gray-100 px-8 py-12">
    
      <div
        class="max-w-screen-xl my-10 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
        <div class="flex flex-col justify-between">
          <div>
            <h2 class="text-4xl lg:text-5xl font-bold leading-tight my-4">Lets talk about everything!</h2>

            <div class="font-medium text-lg text-gray-700 mt-8">
              Hate forms? Send us an <span class="underline">email</span> instead.
            </div>
            <div class="text-gray-700 mt-8">
              Click on the link <span class="underline"> </span> instead.
            </div>
            <button class="my-10 inline-block bg-[#cfabbc] hover:bg-[#5f7c91] text-white font-bold font-heading py-4 px-20 rounded-md uppercase transition duration-200"> <a href="umme@ineuron.ai"> </a> Click me </button>
          </div>
     
        </div>
        <div class="">
          <div>
            <span class="uppercase text-sm text-gray-600 font-bold">Full Name</span>
            <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" placeholder="" />
          </div>
          <div class="mt-8">
            <span class="uppercase text-sm text-gray-600 font-bold">Email</span>
            <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" />
          </div>
          <div class="mt-8">
            <span class="uppercase text-sm text-gray-600 font-bold">Message</span>
            <textarea
              class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div class="mt-8">
            <button
              class="uppercase text-sm font-bold tracking-wide bg-[#6D8DA4] hover:bg-[#5f7c91] text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </body>
  );
}

export default NavBar;
