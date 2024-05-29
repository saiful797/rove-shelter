import PropTypes from 'prop-types';
import { MdCancel, MdOutlineRateReview } from 'react-icons/md';
import useURL from '../../../Hooks/useURL/useURL';
import Swal from "sweetalert2";
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { GrDocumentUpdate } from 'react-icons/gr';

const MyBookingsPageRows = ({booking, indx}) => {
    const url = useURL();

    const {_id, room_id, price, image, offers, date} = booking;

    const handleBookingCancel =(id) => {
        const cancelDetails = {date: "", availability: true, user_email:""};

        Swal.fire({
            title: "Are you sure?",
            text: "You want to cancel this booking!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!"
          }).then(result => {
            if(result.isConfirmed){
                fetch(`${url}/rooms/${id}`,{
                    method: 'PUT',
                    headers:{
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(cancelDetails),
                })
                  .then(res => res.json())
                  .then(data => {
                    if(data.modifiedCount > 0){
                        toast.success('Booking Cancel Successfully!');
                        location.reload();
                    }
                  })
            }
          })
    }
    return (
        <tr>
            <th className="border-2 text-lg">
                <h1>{indx+1}</h1>
            </th>
            <td className="border-2 text-lg">
                <div className="flex justify-center items-center gap-3">
                    <div className="avatar">
                        <div className="rounded-xl w-24 h-24">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td className="border-2 text-lg">
                {room_id}
            </td>
            <td className="border-2 text-lg">
               {date}
            </td>
            <td className="border-2 text-lg">
               ${price-1000}
            </td>
            <td className="border-2 text-lg">
                {offers}
            </td>
            <th className="border-2 text-lg">
                <div className='flex justify-center items-center gap-3'>
                    {/* Reviews Button */}
                    <Link to={`/addReviews/${_id}`} className="btn btn-sm btn-outline btn-success tooltip text-xl flex justify-center items-center" data-tip='Add Review'><MdOutlineRateReview /></Link>
                    {/* Update Button*/}
                    <Link to={`/UpdatePage/${_id}`} className="btn btn-sm btn-outline btn-warning tooltip text-xl flex justify-center items-center" data-tip='Update Date'><GrDocumentUpdate /></Link>
                    {/* Cancel Button*/}
                    <button onClick={()=>handleBookingCancel(_id)} className="btn btn-sm btn-outline btn-error tooltip text-xl" data-tip='Cancel Booking'><MdCancel /></button>
                </div>
            </th>
        </tr>
    );
};

MyBookingsPageRows.propTypes={
    booking: PropTypes.object,
    indx: PropTypes.number,
}
export default MyBookingsPageRows;