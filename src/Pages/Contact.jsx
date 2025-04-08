import toast from "react-hot-toast";
import HomeLayouts from "../layouts/HomeLayouts";
import { isEmail } from "../helpers/regexMatcher";
import axiosInstance from "../helpers/axiosInstance";

function Contact(){
    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        message: "",

    });

function handleInputChange(e){
    const {name, value} = e.target;
    console.log(name, value);
    setUserInput({
        ...userInput,
        [name] : value
    })
}

async function onFormSubmit (e){
    e.preventDefault();
    if(!userInput.email || !userInput.name || !userInput.message){
        toast.error("All fields are mandatory")
        return;
    }
   
   if(!isEmail(userInput.email)){
       toast.error("Invalid email");
       return;
   }
   
   if(!isEmail(userInput.email)){
    toast.error("Invalid email");
    return;
   }

   try {
     const res = axiosInstance.post("/contact", userInput);
     toast.promise(res, {
        loading: "Submitting your message...",
        success: "Form submitted successfully",
        error: "Failed to submit the form"
     })

     const contactResponse = await res;
     
     if(contactResponse?.data?.success){
        setUserInput({
            name: "",
            email:"",
            message:"",
        })
     }

   } catch (error) {
       toast.error("operation failed...");
   }



}

   return (
       <HomeLayouts>
         <div className="flex items-center justify-center h-[100vh]">
         <form 
             noValidate
             onSubmit={onFormSubmit}
             action="" 
             className="flex flex-col items-center justify-center gap-2 p-5 rounded-md text-white  shadow-[0_0_10px_black] w-[22rem]">
                <h1 className="text-3xl font-semibold">
                    Contact Form
                </h1>

                <div className="flex flex-col w-full gap-1">
                     <label htmlFor="name" className="text-xl" font-semibold>
                        Name
                     </label>
                     <input 
                        className="bg-transparent border px-2 py-1 rounded-sm"
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="Enter your name"
                        onChange={handleInputChange}
                        value={userInput.name}
                        />
                </div>
                <div className="flex flex-col w-full gap-1">
                     <label htmlFor="email" className="text-xl" font-semibold>
                        Email
                     </label>
                     <input 
                        className="bg-transparent border px-2 py-1 rounded-sm"
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Enter your email"
                        onChange={handleInputChange}
                        value={userInput.email}
                     />
                </div>
                <div className="flex flex-col w-full gap-1">
                     <label htmlFor="message" className="text-xl" font-semibold>
                        Message
                     </label>
                     <textarea 
                        className="bg-transparent border px-2 resize-none h-40 py-1 rounded-sm"
                        name="message" 
                        id="message" 
                        placeholder="Enter your Message"
                        onChange={handleInputChange}
                        value={userInput.message}
                     />
                </div>
                <button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg  cursor-pointer">Submit</button>
           </form>
         </div>
       </HomeLayouts>
   )
}


export default Contact;
