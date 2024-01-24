import { useNavigate } from "react-router-dom"


function NotFound() {

    const navigate =  useNavigate();
  return (
    <div className=" h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        404
      </h1>  
      <div className="text-white px-2 text-3xl rounded">
        Page not Found...
      </div>
      <button className="mt-3">
        <a className="relative inline-block text-sm font-medium  group active:text-yellow-500 focus:ouline-none focus:ring"></a>
        <span onClick={()=>navigate(-1)} className="relative block px-8 py-3 bg-[#1A2238] border border-current text-[#FF6A3D] text-xl font-semibold rounded">Go Back</span>
      </button>
    </div>
  )
}

export default NotFound