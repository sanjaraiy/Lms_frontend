
import { BsPersonCircle } from "react-icons/bs";
import HomeLayouts from "../layouts/HomeLayouts"
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { toast } from 'react-hot-toast'
import { isEmail, isValidPassword } from "../helpers/regexMatcher";

function Signup() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [previewImage, setPreviewImage] = useState("");
    const [signupData, setSignupData] = useState({
        fullName: "",
        email: "",
        password: "",
        avatar: "",
    })

    function handleUserInput(e) {
        const { name, value } = e.target;
        setSignupData({
            ...signupData,
            [name]: value
        })
    }

    function getImage(event) {
        event.preventDefault();
        //getting the image
        const uploadedImage = event.target.files[0];

        if (uploadedImage) {
            setSignupData({
                ...signupData,
                avatar: uploadedImage
            });

            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener("load", () => {
                // console.log(fileReader.result);
                setPreviewImage(fileReader.result);
            }, false)

        }
    }

    async function createNewAccount(event) {
        event.preventDefault();
        if (!signupData.email || !signupData.password || !signupData.fullName || !signupData.avatar) {
            toast.error("Please fill all the details");
            return;
        }

        //checking name field length
        if (signupData.fullName.length < 5) {
            toast.error("Name should be at least 5 characters long")
            return;
        }
        //checking email validation
        if (!isEmail(signupData.email)) {
            toast.error("Invalid email id")
            return;
        }

        //checking password validation
        if (!isValidPassword(signupData.password)) {
            toast.error("Password should be 6-16 characters long with at least a number and special character")
            return;
        }

        const formData = new FormData();
        formData.append("fullName", signupData.fullName);
        formData.append("email", signupData.email);
        formData.append("password", signupData.password);
        formData.append("avatar", signupData.avatar);

        try {
            // dispatch create account action
            const response = await dispatch(createNewAccount(formData))
            if (response?.payload?.success) {
                navigate("/");
            }
        } catch (error) {
            console.error("Error creating account:", error);
            // Handle error here
        }

        setSignupData({
            fullName: "",
            email: "",
            password: "",
            avatar: ""
        });

        setPreviewImage("");
    }

    return (
        <HomeLayouts>
            <div className="flex overflow-x-auto items-center justify-center h-[100vh]">
                <form noValidate onSubmit={createNewAccount} action="" className="my-20 flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]">
                    <h1 className="text-center text-2xl font-bold">Registration Page</h1>
                    <label htmlFor="image_upload" className="cursor-pointer">
                        {previewImage ? (<img className="w-24 h-24 rounded-full m-auto" src={previewImage} alt="Preview"></img>) : (<BsPersonCircle className="w-24 h-24 rounded-full m-auto"></BsPersonCircle>)}
                    </label>
                    <input
                        onChange={getImage}
                        type="file"
                        className="hidden"
                        id="image_upload"
                        accept=".jpg, .jpeg, .png, .svg"
                        name="image_upload"
                    />
                    <div className="flex flex-col gap-1">
                        <label htmlFor="fullname" className="font-semibold">Name</label>
                        <input
                            type="text"
                            required
                            name="fullName"
                            id="fullname"
                            placeholder="Enter your name.."
                            className="bg-transparent px-2 py-1 border"
                            onChange={handleUserInput}
                            value={signupData.fullName}
                        ></input>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="font-semibold">Email</label>
                        <input
                            type="email"
                            required
                            name="email"
                            id="email"
                            placeholder="Enter your email.."
                            className="bg-transparent px-2 py-1 border"
                            onChange={handleUserInput}
                            value={signupData.email}
                        ></input>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password" className="font-semibold">Password</label>
                        <input
                            type="password"
                            required
                            name="password"
                            id="password"
                            placeholder="Enter your password.."
                            className="bg-transparent px-2 py-1 border"
                            onChange={handleUserInput}
                            value={signupData.password}
                        ></input>
                    </div>
                    <button type="submit" className="mt-2 bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-large cursor-pointer">
                        Create account
                    </button>
                    <p className="text-center">
                        Already have an account? <Link to="/login" className="link text-accent cursor-pointer">Login</Link>
                    </p>
                </form>
            </div>

        </HomeLayouts>
    )
}

export default Signup;
