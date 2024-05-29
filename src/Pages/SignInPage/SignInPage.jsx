import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";
import toast, { Toaster } from "react-hot-toast";
import ScrollToTop from "../../Shared/ScrollToTop/ScrollToTop";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { TiArrowRightOutline } from "react-icons/ti";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import useURL from "../../Hooks/useURL/useURL";


const SignInPage = () => {
    const url = useURL();
    const {signInUser, googleSignIn,githubSignIn} = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const {register, reset, handleSubmit} = useForm();

    // Navigation Process
    const location = useLocation();
    const navigate = useNavigate();

    // console.log(location);

    const onSubmit = (data) => {
        const {email, password} = data;
        // console.log(data);
        signInUser(email, password).then(result => {
            if(result.user){
                toast.success('User logged In Successfully!');
            }
            // console.log(result.user);
            // navigate(location?.state? location?.state : '/');

            const user ={ email };
           axios.post(`${url}/jwt`, user, {withCredentials: true})
           .then( res => {
             console.log("Response: ", res.data);
             if(res.data.success){
                navigate(location?.state? location?.state : '/');
             }
           })
           .catch(error => {
                console.log(error);
           })
            reset();
        })
        .catch(error => {
            if(error.message){
                toast.error('Invalid Credential!!')
            }
        })
        
    }

    const handleSocialMediaSignIn = (socialMediaProvider) =>{
        socialMediaProvider()
        .then(data =>{
            if(data.user){
                toast.success('You Login Successfully!');
                navigate(location?.state || '/');
            }
        })
    }

    return (
        <div className="min-h-screen mt-5">
            <Helmet>
                <title>Rove Shelter | Sign In </title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse shadow-sm shadow-black md:w-2/3 mx-auto rounded-2xl">
                <div className="grid place-content-center text-white p-5 lg:h-[545px] lg:border-l-[12px] lg:border-l-orange-600 bg-blue-900 lg:rounded-l-[270px]">
                    <h1 className="text-2xl md:text-5xl text-center mt-5 font-extrabold mb-10">Welcome!</h1>
                    <p className="text-center">Access exclusive deals and manage bookings hassle-free. Your perfect stay starts here!</p>
                </div>
                <div className="p-5 w-full shadow-black max-w-sm rounded-lg bg-base-100">
                    <h1 className="text-3xl md:text-5xl mt-5 font-bold text-center">Sign In Now!</h1>
                    <div className="mt-3 p-5 w-full flex justify-center items-center gap-5">
                        <h2 className="flex gap-1 justify-center items-center">With<TiArrowRightOutline />
</h2>
                        <button className="btn btn-outline text-4xl btn-circle" onClick={() => handleSocialMediaSignIn(googleSignIn)}>
                            <FcGoogle />
                        </button>

                        <button className="btn btn-outline text-4xl btn-circle" onClick={() => handleSocialMediaSignIn(githubSignIn)}>
                            <SiGithub />
                        </button>
                    </div>
                    <p className="text-center font-bold text-lg font-Madimi">Or</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-lg font-medium">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email..." name="email" className="input input-bordered" {...register("email")} required />
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

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-base -mt-2">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-2">
                            <button  className="btn btn-outline font-bold text-xl">Sign In</button>
                        </div>
                        <div className="flex justify-center gap-5 mt-2">
                            <h1>Do not have an account?</h1>
                            <Link to="/signUp"><p className="text-orange-500 font-bold hover:text-black link link-hover">Sign Up</p></Link>
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

export default SignInPage;