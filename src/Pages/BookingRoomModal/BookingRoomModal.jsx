import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import useURL from '../../Hooks/useURL/useURL';
import useAuth from '../../Hooks/useAuth/useAuth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const BookingRoomModal = ({id}) => {
    const url = useURL();
    // console.log(id);
    const {user} = useAuth();
    const [bookedRoom, setBookedRoom] = useState({});
    const {register, reset, handleSubmit} = useForm();
    
    useEffect(() => {
        // axios.get(`${url}/specificRoom/${id}`)
        //  .then(res => {
        //     SetBookedRoom(res.data);
        //  })

        fetch(`${url}/specificRoom/${id}`)
        .then(res => res.json())
        .then(data => {
            setBookedRoom(data);
        })

    },[url, id]);

    const onSubmit = (data) => {
        const {date} = data;
        // console.log(date);
        const bookingDetails = {date, user_email: user.email, availability: false}
        // console.log(bookingDetails);

        // console.log(`${url}/rooms/${id}`);
        fetch(`${url}/rooms/${id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingDetails),
        })
          .then(res => res.json())
          .then(data => {
            if(data.modifiedCount > 0){
                toast.success('booking Successful!');
                reset();
            }
          })
        
    }

    const {room_id, description, price, room_size, offers} = bookedRoom;
    return (
        <div className='grid md:grid-cols-2 gap-5'>
            <Helmet>
                <title>Rove Shelter | Booking Room Modal Page </title>
            </Helmet>
            <div className='space-y-3 text-justify text-white'>
                <h1 className='text-3xl font-extralight'>Room ID: <span className='text-xl font-bold '>{room_id}</span></h1>
                <h2 className='text-3xl font-extralight'>Room Size: <span className='text-xl font-bold '>{room_size}</span></h2>
                <h3 className='text-3xl font-extralight'>Price: <span className='text-xl font-bold '>${price-1000}</span></h3>
                <h4 className='text-3xl font-extralight'>Special Offer(s): <span className='text-xl font-bold '>{offers}</span></h4>
                <p className='text-3xl font-thin '>Description: <span className='text-base'>{description}</span></p>
            </div>
            <div className='border-8 mt-5 p-3 rounded-3xl'>
                <h1 className='text-center text-3xl font-medium text-orange-500'>Book Your Room</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='mt-10'>
                    <div className='space-y-3'>
                        <h2 className='text-2xl font-medium'>Your Name: <span className='text-amber-500'>{user.displayName}</span></h2>
                        <p className='text-2xl font-medium'>Email: <span className='text-amber-500'>{user.email}</span></p>
                    </div>
                    <div className="form-control text-black mt-10">
                        <label className="label">
                            <span className="text-xl text-white">Choose Booking Date:</span>
                        </label>
                        <input type="date" name='date' className="input input-bordered bg-zinc-400" {...register("date")} required />
                    </div>
                    <input className='btn btn-outline bg-black text-white hover:bg-black mt-5 w-full' type="submit" value="CONFIRM BOOKING" />
                </form>
            </div>
        </div>
    );
};

BookingRoomModal.propTypes={
    id: PropTypes.string,
}
export default BookingRoomModal;