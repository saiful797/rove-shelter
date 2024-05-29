import PropTypes from 'prop-types';

const SpecificReview = ({review}) => {
    const {rating, comment, user_name, time, date, user_image} = review;
    return (
        <div 
            className="card w-96 bg-zinc-200 shadow-xl mx-auto"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
        >
            <div className="card-body">
                <div className='mx-auto'>
                    <img className='w-24 h-24 rounded-full' src={user_image} alt="" />
                </div>
                <h2 className="card-title">Name: {user_name}</h2>
                <div className='flex justify-between'>
                    <h4><span className='text-xl font-medium'>Date</span>: {date}</h4>
                    <h4><span className='text-xl font-medium'>Time</span>: {time}</h4>
                </div>
                <p className='text-justify'><span className='text-xl font-medium'>Comment</span>: {comment}</p>
                {/* Rating */}
                {
                    rating > 0?<div>
                        {
                            rating > 1 ? <div>
                                {
                                    rating > 2? <div>

                                        {
                                            rating > 3? <div>
                                                {
                                                    rating > 4? <div className="rating rating-lg flex items-center gap-2">
                                                        <div>
                                                            <p>Rating:</p>
                                                        </div>
                                                        <div>
                                                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400"/>
                                                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400"/>
                                                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked/>
                                                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked/>
                                                        </div>
                                                    </div>
                                                    :
                                                    <div className="rating rating-lg flex items-center gap-2">
                                                        <div>
                                                            <p>Rating:</p>
                                                        </div>
                                                        <div>
                                                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400"/>
                                                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400"/>
                                                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400"/>
                                                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked/>
                                                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-white"/>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                            :
                                            <div className="rating rating-lg flex items-center gap-2">
                                                <div>
                                                    <p>Rating:</p>
                                                </div>
                                                <div>
                                                    <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400"/>
                                                    <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400"/>
                                                    <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked/>
                                                    <input type="radio" name="rating-8" className="mask mask-star-2 bg-white" />
                                                    <input type="radio" name="rating-8" className="mask mask-star-2 bg-white"/>
                                                </div>
                                            </div>

                                        }

                                    </div>
                                    :
                                    <div className="rating rating-lg flex items-center gap-2">
                                        <div>
                                            <p>Rating:</p>
                                        </div>
                                        <div>
                                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400"/>
                                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked/>
                                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-white" />
                                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-white" />
                                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-white"/>
                                        </div>
                                    </div>
                                }
                            </div>
                            :
                            <div className="rating rating-lg flex items-center gap-2">
                                <div>
                                    <p>Rating:</p>
                                </div>
                                <div>
                                    <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked/>
                                    <input type="radio" name="rating-8" className="mask mask-star-2 bg-white" />
                                    <input type="radio" name="rating-8" className="mask mask-star-2 bg-white" />
                                    <input type="radio" name="rating-8" className="mask mask-star-2 bg-white" />
                                    <input type="radio" name="rating-8" className="mask mask-star-2 bg-white"/>
                                </div>
                            </div>
                        }
                    </div>
                    :
                    <div className="rating rating-lg flex items-center gap-2">
                        <div>
                            <p>Rating:</p>
                        </div>
                        <div>
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-white"/>
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-white"/>
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-white"/>
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-white"/>
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-white"/>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

SpecificReview.propTypes ={
    review: PropTypes.object.isRequired,
}
export default SpecificReview;