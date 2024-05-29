import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import PropTypes from 'prop-types';
import axios from "axios";
import useAuth from "../../../Hooks/useAuth/useAuth";
import useURL from "../../../Hooks/useURL/useURL";

const CheckoutForm = ({ amount }) => {
    const [ errorMessage, setErrorMessage ] = useState( '' );
    const [ clientSecret, setClientSecret ] = useState( '' );
    const [ transactionId, setTransactionId ] = useState( '' );

    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();

    const totalPrice = amount;
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

    useEffect(() => {
        if(totalPrice > 0){
            axios.post('/create-payment-intent', { price: totalPrice})
            .then( res => {
                // console.log( res.data.clientSecret );
                setClientSecret( res.data.clientSecret );
            })
        }
    }, [totalPrice]);

    const handleSubmit = async( e )=> {
        e.preventDefault();
        toast.success('Payment Successful!');
        
        if( !stripe || !elements) {
            return ;
        }

        const card = elements.getElement(CardElement);

        if(card === null){
            return ;
        }

        const {error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if( error ){
            // console.log('payment error: ', error);
            setErrorMessage(error.message);
        }

        else {
            console.log('Payment Method: ', paymentMethod);
            setErrorMessage( '' );
        }

        //confirmed payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',
                }
            }
        })

        if(confirmError){
            console.log('Confirmed error:', confirmError.message);
        }

        else{
            console.log(' Payment Intent: ', paymentIntent);
            if(paymentIntent.status === 'succeeded'){
                // console.log('transaction id: ', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                //now save the payment in the database
                const payment ={
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(), //utc date convert. use moment js to
                    bookingsIds: allMyBookings.map(item => item._id),
                    status: 'pending'
                }

                const res = await axios.post('/payments', payment);

                console.log('payment saved', res.data);
                
            }
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement 
                options={{
                    style: {
                      base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                          color: '#aab7c4',
                        },
                      },
                      invalid: {
                        color: '#9e2146',
                      },
                    },
                }}
            />
            <button className="btn btn-outline bg-[#d1a054] mt-10" type="submit" >
                Pay ${amount}
            </button>
            <p className="text-red-600"> {errorMessage} </p>
            { transactionId && <p className="text-green-600 mt-5">Your Transaction ID: {transactionId}</p>}
        </form>
    );
};
CheckoutForm.propTypes = {
    amount: PropTypes.number,
}
export default CheckoutForm;