import axios from "axios";
import { useEffect, useState } from "react";
import useURL from "../../../Hooks/useURL/useURL";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Room from "./Room/Room";

const FeaturedRooms = () => {
    const [rooms, setRooms] = useState([]);
    const url = useURL();
    useEffect(()=>{
        axios.get(`${url}/rooms`)
         .then(res => {
            // console.log(res.data);
            setRooms(res.data);
         })
    },[url]);
    const availableRooms = rooms.filter(room => room.availability === true);
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
              availableRooms.map(room => <Room key={room._id} room ={room} />)
            }
        </Carousel>  
    );
};

export default FeaturedRooms;