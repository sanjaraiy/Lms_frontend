import HomeLayouts from "../Layouts/HomeLayouts"
import aboutMainImage from "../Assets/Images/aboutMainImage.png"
import apj from "../Assets/Images/apj.png"
import billGates from "../Assets/Images/billGates.png"
import einstein from "../Assets/Images/einstein.png"
import steveJobs from "../Assets/Images/steveJobs.png"
import nelsonMandela from "../Assets/Images/nelsonMandela.png"
function AboutUs() {
  return (
    <HomeLayouts>
        <div className="pl-20 pt-20 flex flex-col text-white">
            <div className="flex items-center gap-5 mx-10">
                <section className="w-1/2 space-y-10">
                    <h1 className="text-5xl text-yellow-500 font-semibold">
                        Affordable and quality education
                    </h1>
                    <p className="text-xl text-gray-200">
                        Our goal is to provide the affordable and quality education to the world.
                        We are providing the platform for the aspiring teachers and students to share
                        their skills, creativity and knowledge to each other to empower and contribute 
                        in the growth and willness of mankind.
                    </p>
                </section>
                <div className="w-1/2">
                    <img className="drop-shadow-2xl" id="test1" style={{filter:"drop-shadow(0px 10px 10px rgb(0,0,0)"}} src={aboutMainImage} alt="Main Image"></img>
                </div>
            </div>
             <div className="carousel w-1/2 my-16 mx-auto">
                   <div id="slide1" className="carousel-item relative w-full">
                       <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                            <img src={nelsonMandela} className="w-40 rounded-full border-2 border-gray-400" />
                            <p className="text-xl text-gray-200 text-center">
                            {  "Education is the most powerful tool you can use to change the world."}
                            </p>
                            <h3 className="text-2xl font-semibold">Nelson Mandela</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide5" className="btn btn-circle">❮</a> 
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                   </div> 
                   <div id="slide2" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                            <img src={apj} className="w-40 rounded-full border-2 border-gray-400" />
                            <p className="text-xl text-gray-200 text-center">
                                {  "Dream is not that which you see while sleeping it is something that does not let you sleep."}
                            </p>
                            <h3 className="text-2xl font-semibold">APJ Abdul Kalam</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a> 
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div> 
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                            <img src={einstein} className="w-40 rounded-full border-2 border-gray-400" />
                            <p className="text-xl text-gray-200 text-center">
                                 {  "Imagination is more important than knowledge Albert Einstein"}
                            </p>
                            <h3 className="text-2xl font-semibold">Albert Einstein</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                 <a href="#slide2" className="btn btn-circle">❮</a> 
                                 <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div> 
                    <div id="slide4" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                             <img src={steveJobs} className="w-40 rounded-full border-2 border-gray-400" />
                             <p className="text-xl text-gray-200 text-center">
                                  {  "Be a yardstick of quality. Some people aren't used to an environment where excellence is expected."}
                             </p>
                             <h3 className="text-2xl font-semibold">Steve Jobs</h3>
                             <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                  <a href="#slide3" className="btn btn-circle">❮</a> 
                                  <a href="#slide5" className="btn btn-circle">❯</a>
                             </div>
                         </div>
                    </div>
                    <div id="slide5" className="carousel-item relative w-full">
                         <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                             <img src={billGates} className="w-40 rounded-full border-2 border-gray-400" />
                             <p className="text-xl text-gray-200 text-center">
                                 {  "Don't compare yourself with anyone in this world… if you do so, you are insulting yourself."}
                             </p>
                             <h3 className="text-2xl font-semibold">Bill Gates</h3>
                             <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                 <a href="#slide4" className="btn btn-circle">❮</a> 
                                 <a href="#slide1" className="btn btn-circle">❯</a>
                             </div>
                         </div>
                     </div>
             </div>
        </div>
    </HomeLayouts>
  )
}

export default AboutUs