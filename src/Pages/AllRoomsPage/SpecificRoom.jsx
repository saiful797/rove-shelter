import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SpecificRoom = ({room}) => {
    const {_id, image, price,reviews, rating } = room;
    const ratings = parseFloat(rating / reviews).toFixed(2);
    return (
        <Link to={`/roomDetails/${_id}`} className="tooltip" data-tip="Click for Room Details">
            <div className="card w-80 mx-auto shadow-xl relative bg-black">
                <figure><img src={image} alt="Room image" /></figure>
                <div className="p-3">
                    {
                        reviews === 0 ?<h2 className="text-lg text-left">
                            <span className='text-green-700'>Reviews: <span className='font-extralight text-white'>Be the first!</span></span>
                        </h2>
                        :
                        <h2 className="text-lg text-left">
                            <span className='text-green-700'>Reviews: {reviews}</span>
                        </h2>
                    }
                    <h2 className="text-lg text-left">
                            <span className='text-green-700'>Rating: <span className='font-extralight text-white'>{ratings}</span></span>
                    </h2>
                    <p className='absolute bottom-5 right-3 text-2xl font-bold text-orange-600'><span className='text-base font-extralight'>per night: </span>${price-1000}</p>
                </div>
            </div>
        </Link>
    );
};

SpecificRoom.propTypes={
    room: PropTypes.object,
}
export default SpecificRoom;