import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="p-5 text-center mt-10 bg-black text-white">
            <div className="footer max-w-6xl grid  place-content-center md:place-content-between	">
                <aside>
                    <div className="mt-4">    
                        <img className="w-28 h-28 mx-auto rounded-full" src="https://i.ibb.co/pjKHY0j/rS.jpg" alt="" />
                        <h1 className="text-3xl font-Madimi bg-gradient-to-r from-pink-500 to-yellow-500 inline-block text-transparent bg-clip-text mt-3"><span>Rove</span><span>Shelter</span></h1>
                    </div>
                </aside> 
                <nav className="mx-auto">
                    <h6 className="footer footer-title text-xl footer-center">Services</h6> 
                    <a className="link link-hover mx-auto">Travel Packages</a>
                    <a className="link link-hover mx-auto">Travel Blog </a>
                    <a className="link link-hover mx-auto">Activities and Tours</a>
                    <a className="link link-hover mx-auto">Advertisement</a>
                </nav> 
                <nav className="mx-auto">
                    <h6 className="footer footer-title text-xl footer-center">Scan QR Code</h6> 
                    <a className="link link-hover mx-auto">Visit Our Tourism Website</a>
                    <div 
                        className="mx-auto" 
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                    > 
                       <img className="w-32" src="https://i.postimg.cc/X73Cgww8/explore-southeast-asia.png" alt="QR Code Image..." />
                    </div>
                </nav> 
                <nav className="mx-auto">
                    <h6 className="footer footer-title text-xl footer-center">Contact Us</h6> 
                    <a className="link link-hover">exploreasia@gmail.com</a>
                    <a className="link link-hover">Phone: +1-123-456-7890</a>
                    <div className="flex justify-center items-center gap-3 text-2xl">
                        <FaFacebook />
                        <FaXTwitter />
                        <BsInstagram />
                        <FaYoutube />
                        <FaLinkedin />
                    </div>
                </nav> 
            </div>
            <div className="bg-white h-[1px] mt-3"></div>
            <div className="mt-2">
                <p>Copyright © 2024 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;