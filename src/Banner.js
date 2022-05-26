import React from "react"

const Banner = () => {
    return (
        <div class="relative overflow-x-hidden bg-[#faf0f5]">
        <div class="container mx-auto">
          <div class="flex flex-wrap items-center">
              
          <div class="w-full md:w-1/2 lg:w-3/5">
              <img class="w-[90%] object-cover" src="../images/banner.png" alt="banner" />
            </div>

            <div class="w-full md:w-1/2 lg:w-2/5 md:pr-8 mb-20 md:mb-0">
              <div class="pt-20 max-w-md">
                <span class="mb-4 text-2xl">More ideas</span>
                <h2 class="mt-6 mb-16 lg:mb-32 text-5xl font-bold font-heading">Featured styles. Check it now.</h2>
                <a class="inline-block bg-[#6D8DA4] hover:bg-[#5f7c91] text-white font-bold font-heading py-4 px-20 rounded-md uppercase transition duration-200" href="#">More</a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
        );
    }
    
    export default Banner;