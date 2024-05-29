import { HiOutlineMail } from "react-icons/hi";
import { SlEnvolopeLetter } from "react-icons/sl";

const NewsLetterSubscribe = () => {
    return (
        <div 
            className="mb-5 mt-5"
            data-aos="zoom-in"
        >
            <h1 className="text-9xl flex justify-center font-bold text-amber-500">
                <SlEnvolopeLetter />
            </h1>
            <p className="text-blue-700 font-bold text-xl md:text-4xl text-center mt-2">SUBSCRIBE</p>
            <p className="text-blue-700 md:text-2xl md:font-medium text-center text-blue-960 mb-5">Subscribe to our newsletter: stay updated  and get exclusive offers</p>

            <div className="mb-10 flex gap-2 justify-center items-center">
                <label className="input input-bordered rounded-full flex items-center gap-2">
                    <HiOutlineMail className="text-2xl text-blue-950" />
                    <input type="email" className="grow text-blue-950 " placeholder="Enter Your Email..." />
                </label>
                <button className="btn btn-ghost bg-blue-950 text-white rounded-full font-bold hover:bg-blue-950">
                    Subscribe
                </button>
            </div>
        </div>
    );
};

export default NewsLetterSubscribe;