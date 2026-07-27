import { useState } from "react"


function Hero() {
  const [count,setCount]=useState<number>(0)
  const handlerCount=():void=>{
    setCount(count+1);
    console.log("count",count)
  }

  return (
<>
   <section className="relative flex items-center justify-center min-h-[80vh] overflow-hidden">
  {/* Background Image */}
  <img
    src="https://plus.unsplash.com/premium_photo-1737182592549-0c83f93e2903?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwY2FyfGVufDB8fDB8fHww"
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover opacity-50"
  />

  {/* Optional Dark Overlay */}
  <div className="absolute inset-0 bg-black/10"></div>

  {/* Content */}
  <div className="relative z-10 text-center px-6">
    <h2 className="text-5xl font-bold text-black mb-4">
      Welcome to My Website
    </h2>

    <p className="text-lg text-white mb-8">
      Build modern and responsive websites easily with Tailwind CSS.
    </p>

    <button
      onClick={handlerCount}
      className="bg-gray-900 text-white px-6 py-3 rounded-lg  transition"
    >
      {count} Click
    </button>
  </div>
</section>
</>
  )
}

export default Hero