import React from "react"

const NavBar = () => {
    return (

  <div class="gradient">
    <div class="container mx-auto px-6 pt-10 w-[80%]">
      <h2 class="text-gray-800 mb-8 my-8 font-bold font-heading py-4 px-20 rounded-md uppercase transition duration-200 text-center text-6xl">
        Features
      </h2>
      <div class="flex items-center flex-wrap">
        <div class="w-full md:w-1/2">
          <h4 class="text-3xl text-gray-800 font-bold mb-3">Exercise Metric</h4>
          <p class="text-gray-600 mb-8">Our Smart Health Monitoring Wristwatch is able to capture you vitals while you exercise. You can create different category of exercises and can track your vitals on the go Our Smart Health Monitoring Wristwatch is able to capture you vitals while you exercise. You can create different category of exercises and can track your vitals on the go.</p>
        </div>
        <div class="w-full md:w-1/2">
          <img src="../images/laptop.png" alt="Monitoring" className="w-[70%] float-right"/>
        </div>
      </div>

      <div class="flex items-center flex-wrap">
        <div class="w-full md:w-1/2">
          <img src="../images/document.png" alt="Reporting" className="w-[80%] float-left"/>
        </div>
        <div class="w-full md:w-1/2 pl-10">
          <h4 class="text-3xl text-gray-800 font-bold mb-3">Reporting</h4>
          <p class="text-gray-600 mb-8">Our Smart Health Monitoring Wristwatch is able to capture you vitals while you exercise. You can create different category of exercises and can track your vitals on the go Our Smart Health Monitoring Wristwatch can generate a comprehensive report on your vitals depending on your settings either daily, weekly, monthly, quarterly or yearly.</p>
        </div>
      </div>

    </div>
  </div>
        );
    }
    
    export default NavBar;