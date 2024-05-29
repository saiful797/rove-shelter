import { Cursor, useTypewriter } from 'react-simple-typewriter';

const ReactTypeWriter = () => {
    const [text] = useTypewriter({
        words: ["Unlock Your Dream Stay, One Click Away!",
        "Where Every Stay is a Story: Book Yours Today.",
        "Check in to Convenience, Check out with Memories.",
        "From Reservation to Relaxation: Seamless Stays Await.",
        "Discover Your Next Adventure, Book Your Perfect Bed.",
        "Book Smart, Stay Happy: Your Hotel Hub Awaits.",
        "Where Wanderlust Meets Comfort: Reserve Your Experience.",
        "Your Journey Starts Here: Reserve, Relax, Repeat.",
        "Elevate Your Stay, Elevate Your Experience.",
        "Navigate the World of Hospitality, One Booking at a Time."],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 40
    });
    return (
        <div className="flex justify-center items-center">
            <div className="text-sm md:text-xl font-medium font-Robot md:font-bold">
                <h3 className="text-red-600 mb-2">
                    {text}
                    <span className='md:text-2xl font-Madimi md:font-bold'>
                        <Cursor cursorStyle='|' cursorColor='red'/>
                    </span>
                </h3>
            </div>
        </div>
    );
};

export default ReactTypeWriter;