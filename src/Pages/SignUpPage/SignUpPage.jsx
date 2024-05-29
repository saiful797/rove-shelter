import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";
import toast, { Toaster } from "react-hot-toast";
import ScrollToTop from "../../Shared/ScrollToTop/ScrollToTop";
import { Helmet } from "react-helmet-async";

const SignUpPage = () => {

    const {signUpUser, updateUserProfile} =  useAuth();
    
    // Navigation Process
    const navigate = useNavigate()

    const [showPassword, setShowPassword]=useState(false);
    const {register ,reset , handleSubmit} = useForm();

    const onSubmit = (data) =>{
        // console.log(data);
        const {name, email, password, imageURL } = data;

        if(password.length < 6){
            toast.error('Password should be 6 characters or long!!', {
                style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
                },
            })

            return;
        }

        else if(!/[A-Z]/.test(password)){
            toast.error('Password should have one small and capital letter!!', {
                style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
                },
            })
            
            return;
        }

        else if(!/[a-z]/.test(password)){
            toast.error('Password should have one small and capital letter!!', {
                style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
                },
            })

            return;
        }

        signUpUser(email, password).then(() => {

            toast.success('User Create Successfully!');
            
            updateUserProfile(name, imageURL).then(() => {
                navigate(location?.state || '/');
            })
        })
        reset();
    }
  
    return (
        <div className="min-h-screen mt-3">
            <Helmet>
                <title>Rove Shelter | Sign Up</title>
            </Helmet>

            <div className="hero-content flex-col lg:flex-row-reverse shadow-sm shadow-black md:w-3/4 mx-auto rounded-2xl">
                <div className="grid place-content-center text-white p-5 lg:h-[620px] bg-blue-900 lg:rounded-l-[300px] lg:border-l-[12px] lg:border-l-orange-600">
                    <h1 className="text-3xl md:text-5xl text-center mt-5 font-bold mb-10">Welcome!</h1>
                    <p className="text-center">Access exclusive deals and manage bookings hassle-free. Your perfect stay starts here!</p>
                </div>
                <div className="p-5 w-full shadow-black max-w-lg rounded-lg bg-base-100 ">
                    <h1 className="text-2xl md:text-4xl mt-5 font-bold text-center">Create an Account</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="text-lg font-medium">Name</span>
                            </label>
                            <input type="text" placeholder="Enter your name..." name="name" className="input input-bordered" {...register("name")} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-lg font-medium">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email..." name="email" className="input input-bordered" {...register("email")} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-lg font-medium">Photo URL</span>
                            </label>
                            <input type="url" placeholder="Enter your photo url..." name="imageURL" {...register("imageURL")} className="input input-bordered"/>
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="text-lg font-medium">Password</span>
                            </label>
                            <input type={showPassword? "text":"password"} placeholder="Password..." name="password" className="input input-bordered" {...register("password")} required />
                            <span className="top-[60px] right-5  absolute" onClick={()=>setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </span>
                        </div>
                        <div className="form-control mt-4">
                            <button  className="btn btn-outline font-bold text-xl">Register</button>
                        </div>
                        <div className="flex justify-center gap-5">
                            <h1>Have an account?</h1>
                            <Link to="/signIn"><p className="text-orange-500 font-bold hover:text-black link link-hover"> Sign In </p></Link>
                        </div>
                    </form>
                </div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <ScrollToTop />
        </div>
    );
};

export default SignUpPage;