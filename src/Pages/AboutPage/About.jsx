import { Helmet } from "react-helmet-async";

const About = () => {
    return (
        <div className="mt-5 rounded-2xl p-3 bg-[url('https://i.postimg.cc/4dDRcD3x/13.1.jpg')] bg-no-repeat bg-cover text-white">
            <Helmet>
                <title>Rove Shelter || About Us</title>
            </Helmet>
            <h1 className="text-5xl font-bold text-center mb-6">About Us</h1>
            <div className="grid lg:grid-cols-2">
                <div className="h-full mb-5 lg:mb-0">
                    <img className="h-full rounded-2xl" src="https://i.postimg.cc/hjkbqr2Y/3.jpg" alt="" />
                </div>
                <div className="ml-0 lg:ml-5 text-xl font-medium flex justify-center items-center">
                    <p className="text-justify">
                        Welcome to RoveShelter, where every journey is a story waiting to unfold. With over two decades of dedicated service, we have curated an unmatched reputation in the realm of hospitality. Our commitment to excellence has earned us the trust of over 100,000 satisfied travelers globally, making us a beacon of reliability and quality. As pioneers in eco-friendly booking initiatives, we are not just about facilitating stays; we are about nurturing experiences that resonate with both our guests and the planet. At RoveShelter, our passion for travel is paralleled only by our dedication to community-driven initiatives, ensuring that every adventure leaves a positive impact. With seamless booking experiences, innovative technology, and a relentless pursuit of sustainability, we are not just a booking platform; we are a partner in your journey. Join us, and let`s redefine the art of hospitality together.
                    </p>
                </div>
            </div>
            <div className="grid lg:grid-cols-2 mt-5">
                <div className="h-full mb-5 lg:mb-0">
                    <img className="h-full rounded-2xl" src="https://i.postimg.cc/L6C5YXp9/10.jpg" alt="" />
                </div>
                <div className="ml-0 lg:ml-5 text-xl font-medium flex justify-center items-center">
                    <p className="text-justify">
                        At RoveShelter, our story is one of relentless pursuit and unwavering dedication to hospitality excellence. With over 20 noteworthy achievements under our belt, we stand as a testament to innovation and customer-centricity in the travel industry. From being rated #1 for customer satisfaction to pioneering eco-friendly initiatives, each milestone reflects our commitment to creating unforgettable experiences for our guests. Our goal is simple yet profound: to redefine the way you travel, one seamless booking at a time. With a diverse team fueled by passion and expertise, we are not just in the business of booking hotels; we are in the business of crafting memories. Join us on this journey, and let`s elevate your travel experiences together.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;