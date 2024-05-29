import axios from "axios";
import { useEffect, useState } from "react";
import useURL from "../../Hooks/useURL/useURL";
import SpecificRoom from "./SpecificRoom";
import { FaAngleDown } from "react-icons/fa6";
import ScrollToTop from "../../Shared/ScrollToTop/ScrollToTop";
import { Helmet } from "react-helmet-async";

const RoomsPage = () => {
    const [rooms, setRooms] = useState([]);
    const url = useURL();

    useEffect(() =>{
        axios.get(`${url}/rooms`)
         .then(res => {
            setRooms(res.data);
        })
    },[url]);

    // sorted rooms by price
    const handleRoomsShortByPrice = () =>{
        setRooms([]);
        axios.get(`${url}/prices`)
         .then(res => {
            setRooms(res.data);
        })
    }

    return (
        <div className="mt-10 min-h-[43vh]">
            <Helmet>
                <title>Rove Shelter | All Rooms Page </title>
            </Helmet>
            {/* sorted rooms by price */}
            <div className="mb-5 flex justify-center">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-sm btn-outline w-52 m-1 flex justify-center items-center">
                        <span className="text-xl font-bold">Sort By</span>
                        <span className="text-xl font-bold"><FaAngleDown /></span>
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li className="btn btn-outline btn-sm" onClick={handleRoomsShortByPrice}>Price</li>
                    </ul>
                </div>
            </div>
            {/* all rooms */}
            <div className="mb-10">
                <h1 className="text-5xl md:text-6xl font-bold text-center">Book Your Room</h1>
            </div>
            <div className="text-center grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    rooms.map(room => <SpecificRoom key={room._id} room = {room}/>)
                }
            </div>

            <ScrollToTop />
        </div>
    );
};

export default RoomsPage;