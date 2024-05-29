import axios from "axios";
import { useEffect, useState } from "react";
import useURL from "../../../Hooks/useURL/useURL";
import SpecificReview from "./SpecificReview";
import Carousel from "react-multi-carousel";

const UserReviews = () => {
    const url = useURL();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get(`${url}/reviews`)
        .then(res => {
            setReviews(res.data);
        })
    },[url]);

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1200 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1200, min: 350 },
          items: 1,
        },
        mobile: {
          breakpoint: { max: 350, min: 0 },
          items: 1,
        }
    };

    return (
     <Carousel responsive={responsive}>
        {
          reviews.map(review => <SpecificReview key={review._id} review = {review} />)
        }
     </Carousel>  
    );
};

export default UserReviews;