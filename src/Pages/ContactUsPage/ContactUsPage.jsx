import { Helmet } from "react-helmet-async";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaHome, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

const ContactUsPage = () => {
    return (
        <div className="shadow-2xl shadow-slate-600">
            <Helmet>
                <title>Rove Shelter | Contact Us </title>
            </Helmet>
            <div>
                <p className="text-2xl md:text-4xl font-bold text-center pt-10 mb-5">Contact Rove Shelter Hotels</p>
            </div>
            <div className="grid md:grid-cols-2 p-5">
                <div className="grid place-content-center space-y-5 md:text-2xl font-medium">
                    <h1>Address Details</h1>
                    <h2 className="flex items-center gap-2">
                        <FaHome />
                        40 E 7th St, New York, NY 10003, USA
                    </h2>
                    <h3 className="flex items-center gap-2">
                        <FiPhoneCall />
                        +12086034384
                    </h3>
                    <h3 className="flex items-center gap-2">
                        <HiOutlineMail />
                        roveshelter1213@gmail.com
                    </h3>
                    <h2 className="font-extralight">Join With Us Social Media</h2>
                    <div className="flex gap-3">
                        <FaFacebook />
                        <FaXTwitter />
                        <BsInstagram />
                        <FaYoutube />
                        <FaLinkedin />
                    </div>
                </div>
                <div className="bg-zinc-200 rounded-lg mt-10 md:mt-0">
                    <div className="text-center mt-5">
                        <h2 className="text-3xl font-bold mb-5">Contact Us!</h2>
                        <p>We can not solve your problem if you do not tell us about it!</p>
                    </div>
                    <form className="card-body">
                        <div className="grid grid-cols-2 gap-3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name:</span>
                                </label>
                                <input type="text" name='name' placeholder="Enter Your Name..." className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email:</span>
                                </label>
                                <input type="email" name='email' placeholder="Enter Your Email..." className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number:</span>
                            </label>
                            <input type="number" name='phone' placeholder="Enter Your Number..." className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message:</span>
                            </label>
                            <textarea  type="text" name='message' placeholder="Write Any Message or Problem Details..." className="textarea textarea-lg textarea-bordered h-40 w-full"></textarea>
                            
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-accent" type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUsPage;