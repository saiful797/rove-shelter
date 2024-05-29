import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useURL from "../../Hooks/useURL/useURL";
import toast, { Toaster } from "react-hot-toast";
import ScrollToTop from "../../Shared/ScrollToTop/ScrollToTop";
import BookingRoomModal from "../BookingRoomModal/BookingRoomModal";
import useAuth from "../../Hooks/useAuth/useAuth";
import { Helmet } from "react-helmet-async";
import SpecificReview from "../HomePage/UserReviews/SpecificReview";

const RoomDetailsPage = () => {
    const {user} = useAuth();
    const data = useParams();
    const id = data.id;
    const url = useURL();
    const [specificRoom, setSpecificRoom] = useState({});

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get(`${url}/reviews`)
        .then(res => {
            setReviews(res.data);
        })
    },[url]);

    const allReviews = reviews.filter(review => review.specificRoom_id === id)

    useEffect(() => {
        axios.get(`${url}/specificRoom/${data.id}`)
         .then(res => {
            setSpecificRoom(res.data);
         })

    },[url, data.id]);

    const {_id, room_id, description, price, image, offers, availability, room_size, user_email } = specificRoom;

    const handleUnavailableRoom = () => {
        if(user.email === user_email){
            toast.error('You already booked this room!');
            return;
        }
        toast.error('Room Unavailable');
        return;
    }
    
    return (
        <div className="mt-10">
            <Helmet>
                <title>Rove Shelter | Specific Room Details </title>
            </Helmet>     
            <h1 className="text-center text-5xl font-extrabold "><span className="text-5xl font-extralight">Room ID: </span><span className="text-yellow-600">{room_id}</span></h1>
            <div className="mt-10  grid lg:grid-cols-2 shadow-lg shadow-black rounded-lg">
                <div className="w-full">
                    <img className="h-full rounded-l-lg" src={image} alt="Room Image..." />
                </div>

                <div className="relative">
                    <div className="p-5 space-y-3">
                        <h1 className="text-xl font-extralight">Average Cost(per Night): <span className="text-2xl font-bold">${price-1000}</span></h1>

                        <h2 className="text-xl font-extralight">Room Size: <span className="text-2xl font-bold">{room_size}</span></h2>
                        {
                            availability === true? <h3 className="text-xl font-extralight">Room Availability
                            : <span className="text-2xl font-bold text-green-600">Available</span></h3>
                            :
                            <h3 className="text-xl font-extralight">Room Availability: <span className="text-2xl font-bold text-red-600">Unavailable</span></h3>
                        }
                        <h3 className="text-xl font-extralight flex">
                            Special Offer(s): <span className="ml-2 text-2xl font-bold">#{offers}</span>
                        </h3>
                        <p className="text-justify">
                            <span className="text-2xl font-bold text-stone-600">Description: </span> {description}
                        </p> 
                    </div>
                    <div className="w-full absolute bottom-0 left-0">
                        {
                            availability === true? // <button className="w-full rounded-none border-black btn-outline btn bg-black text-2xl font-medium text-white rounded-br-lg"> Book Now </button>
                            <div>
                                <button className="w-full rounded-none border-black btn-outline btn bg-black text-2xl font-medium text-white rounded-br-lg" onClick={()=>document.getElementById('my_modal_4').showModal()}>Book Now</button>
                                <dialog id="my_modal_4" className="modal text-black">
                                    <div className="modal-box w-11/12 max-w-5xl bg-gradient-to-r from-[#584D3C] to-[#9F956C] ">
                                        
                                        <BookingRoomModal id={_id}/>

                                        <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button, it will close the modal */}
                                            <Link to="/myBookings" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                                        </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                            :
                            <button onClick={handleUnavailableRoom} className="w-full rounded-none border-black btn-outline btn bg-black text-2xl font-medium text-white rounded-br-lg"> Book Now </button>
                        } 
                    </div>   
                </div>
            </div>

            <p className="mt-10 text-6xl font-bold text-center">User Reviews</p> 
            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3"> 
                {
                    allReviews.map(review => <SpecificReview key={review._id} review = {review} />)
                }
            </div>
            <Toaster />
            <ScrollToTop />
        </div>
    );
};


export default RoomDetailsPage;