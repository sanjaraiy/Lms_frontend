import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { createNewCourse } from '../../Redux/Slices/CourseSlice';
import HomeLayouts from '../../Layouts/HomeLayouts';
import { AiOutlineArrowLeft } from 'react-icons/ai';
 
function CreateCourse() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {userInput, setUserInput} = useState({
       title: "",
       category: "",
       createdBy: "",
       description: "",
       thumbnail: null,
       previewImage: "",
  });
   

function handleImapgeUpload(e){
    e.preventDefault();
    const uploadedImage = e.target.files[0];
    if(uploadedImage){
        const fileReader = new fileReader();
        fileReader.readAsDataURL(uploadedImage);
        fileReader.addEventListener("load", function(){
            setUserInput({
                ...userInput,
                previewImage: this.result,
                thumbnail: uploadedImage  
            })
        })
    }
  }

function handleUserInput(e){
    const {name, value} = e.target.value;
    setUserInput({
        ...userInput,
        [name]: value
    })
}

async function onFormSubmit(e){
    e.preventDefault();

    if(!userInput.title || !userInput.description || !userInput.category || !userInput.thumbnail || !userInput.createdBy){
      toast.error("All fields are mandatory");
      return;  
    }
    
    const response = await dispatch(createNewCourse(userInput));

    if(response?.payload?.success){
        setUserInput({
            title: "",
            category: "",
            createdBy: "",
            description: "",
            thumbnail: null,
            previewImage: "",
        })
      navigate("/courses");
    }

}



  return (
    <HomeLayouts>
        <div className='flex items-center justify-center h-[100vh]'>
            <form 
                action=""
                onSubmit={onFormSubmit}
                className='flex flex-col justify-center gap-5 rounded-lg p-4 text-white w-[700px] my-10 shadow-[0_0_10px_black] relative'
            
            >
              <Link className="absolute top-8 text-2xl link text-accent cursor-pointer">
                 <AiOutlineArrowLeft></AiOutlineArrowLeft>
              </Link>
                <h1 className='text-center text-2xl font-bold'>
                    Create New Course
                </h1>
                <main className='grid grid-cols-2 gap-x-10'>
                    <div className='gap-y-6'>
                        <div>
                            <label htmlFor="image_uploads" className='cursor-pointer'>
                                {
                                    userInput.previewImage ? (
                                        <img 
                                           className='w-full h-44 m-auto border'
                                           src={userInput.previewImage}
                                        ></img>
                                    ) : (
                                        <div className='w-full h-44 m-auto flex items-center justify-center  border'>
                                            <h1 className='font-bold text-lg'>Upload your course thumbnail</h1>
                                        </div>
                                    )
                                }
                            </label>
                            <input 
                               type="file"
                               className='hidden'
                               id='image_uploads'
                               accept='.jpg, .jpeg, .png'
                               name='image_uploads'
                               onChange={handleImapgeUpload}
                             />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="title" className='text-lg font-semibold'>
                                Course title
                            </label>
                            <input 
                               type="text" 
                               required
                               name='title'
                               id='title'
                               placeholder='Enter course title'
                               className='bg-transparent px-2 py-1 border'
                               value={userInput.title}
                               onChange={handleUserInput}

                               />
                        </div>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="createdBy" className='text-lg font-semibold'>
                                Course Instructor
                            </label>
                            <input  
                               type="text" 
                                required
                                name='createdBy'
                                id='createdBy'
                                placeholder='Enter course instructor'
                                className='bg-transparent px-2 py-1 border'
                                value={userInput.title}
                                onChange={handleUserInput}
                               />
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="category" className='text-lg font-semibold'>
                                Course category
                            </label>
                            <input  
                               type="text" 
                                required
                                name='category'
                                id='category'
                                placeholder='Enter course instructor'
                                className='bg-transparent px-2 py-1 border'
                                value={userInput.category}
                                onChange={handleUserInput}
                               />
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="description" className='text-lg font-semibold'>
                                Course description
                            </label>
                            <textarea  
                               type="text" 
                                required
                                name='description'
                                id='description'
                                placeholder='Enter course description'
                                className='bg-transparent px-2 py-1 h-24 overflow-y-scroll resize-none border'
                                value={userInput.description}
                                onChange={handleUserInput}
                               />
                        </div>
                    </div>

                </main>

                <button type='submit' className='w-full py-2 rounded-sm font-semibold text-lg bg-yellow-600 hover:bg-yellow-400 transition-all ease-in-out duration-300'>Create Course</button>
            </form>
        </div>
    </HomeLayouts>
  )
}

export default CreateCourse