import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import ScrollToTop from "../../Shared/ScrollToTop/ScrollToTop";
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
    return (
        <div className="max-w-7xl mx-auto flex justify-center items-center mt-10 rounded-xl gap-10">
            <Helmet>
                <title>Rove Shelter | Error Page </title>
            </Helmet>
            <div>
                <Link to="/">
                    <button className="btn bg-black hover:bg-emerald-600 hover:text-black text-white flex"> 
                        <IoIosArrowBack />
                        Back to Home
                    </button>
                </Link>
            </div>
            <div className="w-1/2">
                <img src="https://i.ibb.co/2Z9pSVL/404.png" alt="error image" />
            </div>
            <ScrollToTop />
        </div>
    );
};

export default ErrorPage;