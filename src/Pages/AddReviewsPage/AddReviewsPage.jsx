import { useNavigate, useParams } from "react-router-dom";
import useURL from "../../Hooks/useURL/useURL";
import useAuth from "../../Hooks/useAuth/useAuth";
import { useForm } from "react-hook-form";
import moment from "moment";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const AddReviewsPage = () => {
    const navigate = useNavigate();
    const url = useURL();
    const {user} = useAuth();
    const data = useParams();
    const id = data.id;
    const {register, reset, handleSubmit} = useForm();

    const [rooms, setRooms] = useState();

    useEffect(() => {
        axios.get(`${url}/specificRoom/${id}`)
        .then(res => {
            setRooms(res.data);
        })
    },[url, id])

    const onSubmit = (data) => {
        if(data.rating < 0 || data.rating > 5 ){
            toast.error('Invalid Rating! Please enter valid rating.')
            return
        }
        const allData = {...data, specificRoom_id: id, user_name: user.displayName, user_image: user.photoURL, time: moment().format('LT'), date: moment().format('LL')};
        // console.log(allData);
        axios.post(`${url}/reviews`, allData)
        .then(res => {
            // console.log(res);
            if(res.data.insertedId){
                toast.success('Your review added successfully!');
                navigate('/myBookings');
            }
        })

        const reviewData = {reviews: rooms.reviews + 1, rating: parseInt(data.rating) + rooms.rating };

        axios.put(`${url}/roomReviews/${id}`, reviewData)
        .then(res => {
            console.log(res.data)
        })

        reset();
    }
    return (
        <div className='border-8 mt-5 p-3 rounded-3xl md:w-2/3 lg:w-1/2 mx-auto'>
                <h1 className='text-center text-3xl font-medium text-orange-500'>Add Review</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Name: <span className="text-2xl font-extralight text-orange-600">{user.displayName}</span></span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Date: <span className="text-2xl font-extralight text-orange-600">{moment().format('LL')}</span></span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Time: <span className="text-2xl font-extralight text-orange-600">{moment().format('LT')}</span></span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Rating:</span>
                        </label>
                        <input type="number" name="rating" placeholder="Enter Rating Between 1 to 5 (Ex. 5)..." className="input input-bordered" {...register("rating")} required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Add Comment:</span>
                        </label>
                        <textarea name='comment' placeholder="Add your comment..." className="textarea textarea-bordered textarea-lg w-full" {...register("comment")} required/>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-outline" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
    );
};

export default AddReviewsPage;