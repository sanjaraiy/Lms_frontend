
import { BsPersonCircle } from "react-icons/bs";
import HomeLayouts from "../layouts/HomeLayouts"
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { toast } from 'react-hot-toast';
import {login} from '../redux/slices/authSlice';


function Login() {
   const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    })

    function handleUserInput(e) {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        })
    }


    async function loginHandler(event) {
        event.preventDefault();
        if (!loginData.email || !loginData.password) {
            toast.error("Please fill all the details");
            return;
        }

        try {
            // dispatch login action
            const response = await dispatch(login(loginData))
            if (response?.payload?.success) {
                navigate("/");
            }
        } catch (error) {
            console.error("Error login account:", error);
            // Handle error here
        }

        setLoginData({
            email: "",
            password: "",
        });
    }

    return (
        <HomeLayouts>
            <div className="flex overflow-x-auto items-center justify-center h-[100vh]">
                <form noValidate onSubmit={loginHandler} action="" className="my-20 flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]">
                    <h1 className="text-center text-2xl font-bold">Login Page</h1>
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
                            value={loginData.email}
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
                            value={loginData.password}
                        ></input>
                    </div>
                    <button type="submit" className="mt-2 bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-large cursor-pointer">
                        Login
                    </button>
                    <p className="text-center">
                        Don't have an account? <Link to="/signup" className="link text-accent cursor-pointer">Signup</Link>
                    </p>
                </form>
            </div>

        </HomeLayouts>
    )
}

export default Login;
