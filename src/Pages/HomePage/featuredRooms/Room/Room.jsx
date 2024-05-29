import PropTypes from 'prop-types';
import './Room.css'
import BookingRoomModal from '../../../BookingRoomModal/BookingRoomModal';
import useAuth from '../../../../Hooks/useAuth/useAuth';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Room = ({room}) => {
    useEffect(() =>{
        AOS.init();
    }, [])

    const {user} = useAuth();
    const {_id, image, room_id, room_size, availability, price, description} = room;
    return (
        <div className="card w-[350px] h-[650px] bg-blue-950 mx-auto">
            <figure><img className='h-72 w-full rounded-b-[60px] border-b-4 border-orange-500' src={image} alt="room image"/></figure>
            <div className="card-body text-white relative" data-aos="fade-up" data-aos-duration="1000">
                {/* <p className='text-white'>{description}</p> */}
                <h1 className='text-xl font-extralight'>Room ID: <span className='text-xl font-medium'>{room_id}</span></h1>
                <h2 className='text-xl font-extralight'>Room Size: <span className='text-2xl font-medium'>{room_size}</span></h2>
                {
                    availability === true? <h3 className="text-xl font-extralight">Room Availability
                    : <span className="text-2xl font-bold text-green-600">Available</span></h3>
                    :
                    <h3 className="text-xl font-extralight">Room Availability: <span className="text-2xl font-bold text-red-600">Unavailable</span></h3>
                }
                <h2  className="text-xl font-extralight">Price(Per Night): <span className='text-2xl font-medium'>${price-1000}</span></h2>
                <h3 className='truncate-3-lines text-justify'><span className="text-2xl font-bold text-stone-400">Description: </span>  {description}</h3>
            
                <div className="card-actions justify-end absolute      bottom-2 w-4/5">
                    {
                        user?<div className='w-full'>
                            <button className="btn btn-ghost rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 border-none w-full hover:from-black hover:to-black text-xl font-medium" onClick={()=>document.getElementById('my_modal_4').showModal()}>Book Now</button>
                            <dialog id="my_modal_4" className="modal">
                                <div className="modal-box w-11/12 max-w-5xl bg-gradient-to-r from-[#584D3C] to-[#9F956C] ">
                                    
                                    <BookingRoomModal id={_id}/>

                                    <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button, it will close the modal */}
                                        <Link to='/myBookings' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                                    </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                        :
                        <Link to='/signIn' className="btn btn-ghost rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 border-none w-full hover:from-black hover:to-black text-xl font-medium">
                           Book Now
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
};

Room.propTypes ={
    room: PropTypes.object,
    id: PropTypes.string,
}
export default Room;