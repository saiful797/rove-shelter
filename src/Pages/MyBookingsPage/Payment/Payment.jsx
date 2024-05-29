import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm";


const Payment = () => {
    const {price} = useParams();
    const amount = parseFloat(price);
    // console.log(amount);

    //TODO: add published able key
    const stipePromise = loadStripe ( import.meta.env.VITE_Payment_Gateway_Pk )
    return (
        <div className="mt-10">
            <div className="w-1/2 mx-auto">
                <Elements  stripe={ stipePromise }>
                    <CheckoutForm amount = { amount } />
                </Elements>
            </div>

        </div>
    );
};

export default Payment;