import axios from "axios";
import { useEffect, useState } from "react";
import useURL from "../../Hooks/useURL/useURL";
import useAuth from "../../Hooks/useAuth/useAuth";
import MyBookingsPageRows from "./MyBookingsPageRows/MyBookingsPageRows";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const MyBookingsPage = () => {
    const {user} = useAuth();
    const url = useURL();
    const [myBookings, setMyBookings] = useState([]);

    useEffect(() => {
        axios.get(`${url}/myBookings`, { withCredentials: true })
        .then(res => {
            setMyBookings(res.data);
            // console.log(res.data);
        })
    },[url, user.email]);

    const allMyBookings = myBookings.filter(booking => booking.user_email === user.email);

    const totalPrice = allMyBookings.reduce((total, booking) => total + parseFloat(booking.price-1000),0);

    return (
        <div className="overflow-x-auto mt-10 min-h-[50vh]">
            <Helmet>
                <title>Rove Shelter | My Bookings Page </title>
            </Helmet>
            <div className="flex gap-16 justify-center items-center mb-10 bg-green-100 lg:w-1/2 mx-auto py-8">
                <p><span className="text-2xl font-bold">Total Amount:</span> <span className="text-2xl font-bold text-[#f53232]"> ${totalPrice}</span></p>
                <Link to={`/payment/${totalPrice}`} disabled = {!allMyBookings.length} className="btn btn-sm w-40 bg-[#f27608] hover:bg-black text-white text-lg">Pay Now</Link>
            </div>

            <table className="table">
                {/* head */}
                <thead>
                <tr className="text-center text-lg">
                    <th className="border-2">Serial No.</th>
                    <th className="border-2">Room Image</th>
                    <th className="border-2">Room ID</th>
                    <th className="border-2">Booking Date</th>
                    <th className="border-2">Price(Per Night)</th>
                    <th className="border-2">Special Offer(s)</th>
                    <th className="border-2">Actions</th>
                </tr>
                </thead>
                <tbody className="text-center">
                    {/* row 1 */}
                    {
                        allMyBookings.map((booking, indx) => <MyBookingsPageRows key={booking._id} indx={indx} booking={booking}/>)
                    }
                </tbody>    
            </table>
        </div>
    );
};

export default MyBookingsPage;