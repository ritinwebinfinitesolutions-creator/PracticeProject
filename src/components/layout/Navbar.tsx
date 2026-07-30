import { useState } from "react"
import Loginmodel from "../home/Loginmodel"
function Navbar() {
  const [open,setOpen]=useState(false)
  console.log(open)


  return (
  <nav className="bg-gray-900 text-white shadow-md">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">MyWebsite</h1>
            <ul className="hidden md:flex space-x-6">
              <li><a href="#" className="hover:text-gray-200">Home</a></li>
              <li><a href="#" className="hover:text-gray-200">About</a></li>
              <li><a href="#" className="hover:text-gray-200">Services</a></li>
              <li><a href="#" className="hover:text-gray-200">Contact</a></li>
            </ul>
            <button onClick={()=>setOpen(true)} className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200">
              Login
            </button>
            {open && <Loginmodel onClose={() => setOpen(false)} />}
          </div>
        </nav>
  )
}

export default Navbar