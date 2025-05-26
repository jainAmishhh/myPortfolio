import React from 'react'

const Home = () => {
  return (
    <>
    <section className="flex flex-col md:flex-row items-center justify-between px-16 py-16 bg-white">
    <div className="md:w-1/2 space-y-6">
      <p className="text-2xl text-gray-600">Hello There!</p>
      <h1 className="text-green-950 text-5xl font-bold leading-tight">I'm <span className="text-yellow-500">Amish Jain</span><br/><span className="text-green-950">Full Stack Web Developer</span></h1>
      <p className="text-gray-600 text-lg">A passionate Web Developer skilled in React, Tailwind CSS, and MongoDB.</p>
      <div className="flex space-x-4">
        <a href="#" className="bg-green-950 border-4 border-yellow-500 text-white px-6 py-2 rounded-full font-bold">View My Portfolio</a>
        <a href="#" className="border-2 border-green-900 px-6 py-2 text-green-950 rounded-full font-bold">My resume</a>
      </div>
    </div>
    <div className="md:w-1/2 mt-10 md:mt-0 relative">
      <div className="absolute -inset-6 rounded-full bg-yellow-500 opacity-30 blur-xl"></div>
      <img src="https://via.placeholder.com/300x300.png?text=Jensen" alt="Amish" className="relative z-10 rounded-full w-72 mx-auto"/>
    </div>
    {/* <div class="flex items-center justify-center min-h-screen bg-white p-4">
  <div class="relative bg-white rounded-xl p-6 shadow-lg max-w-md text-center">
    <div class="absolute -top-8 left-1/2 -translate-x-1/2 w-48 h-48 bg-yellow-400 rounded-full -z-10"></div>

    <img src="/mnt/data/4ea810e3-3cf1-4a99-83e9-d218121b3354.png" alt="Profile" class="rounded-full w-40 h-40 object-cover mx-auto"/>

    <div class="absolute top-2 right-2 w-16 h-16 rounded-full border-4 border-green-600 flex items-center justify-center text-xs text-green-700 font-semibold">
      <span class="rotate-[20deg] leading-tight text-center">
        HIRE<br />ME
      </span>
    </div>

    <h2 class="mt-4 text-xl font-bold text-gray-800">UI/UX Designer</h2>

    <div class="mt-4 flex justify-center gap-4">
      <span class="bg-yellow-400 text-white text-sm font-semibold px-4 py-1 rounded-full">UI/UX Designer</span>
      <span class="bg-green-800 text-white text-sm font-semibold px-4 py-1 rounded-full">Product Designer</span>
    </div>
  </div>
</div> */}

  </section>
{/* 
  <div class="relative bg-[#F9B233] text-black font-bold text-lg py-4">
    <div class="flex justify-center items-center gap-6">
      <span class="flex items-center gap-2">
        <span class="text-2xl">*</span> App Design
      </span>
      <span class="flex items-center gap-2">
        <span class="text-2xl">*</span> Website Design
      </span>
      <span class="flex items-center gap-2">
        <span class="text-2xl">*</span> Dashboard
      </span>
      <span class="flex items-center gap-2">
        <span class="text-2xl">*</span> Wireframe
      </span>
    </div>
    <div class="absolute bottom-0 left-0 w-full h-4 bg-[#2E4A31] origin-bottom -skew-y-3"></div>
  </div> */}

   <div class="bg-yellow-400 text-green-950 px-16 py-4 flex flex-wrap justify-evenly gap-6 font-bold relative">
    <div>HTML5</div>
    <div>CSS</div>
    <div>TailwindCSS</div>
    <div>Javascript</div>
    <div>Node.js</div>
    <div>Express.js</div>
    <div>MongoDb</div>
    <div>React</div>
    <div>Git</div>
    <div>Github</div>
    <div>C++</div>
    <div class="absolute bottom-0 left-0 w-full h-12 bg-green-950 origin-bottom -skew-y-3 -z-10"></div>
    <div class="absolute bottom-0 right-0 w-full h-12 bg-green-950 origin-bottom skew-y-1 -z-10"></div>
  </div>
  

    </>
  )
}

export default Home