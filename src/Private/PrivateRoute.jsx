import PropTypes from 'prop-types';
import useAuth from '../Hooks/useAuth/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import { RingLoader } from 'react-spinners';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();

    // console.log(location);

    if(loading){
        return <RingLoader className='mx-auto' color="black" size={200} />
    }
    if(user?.email){
        return children;
    }
    return <Navigate to='/signIn' state={ location.pathname || '/'} replace />  
};

PrivateRoute.propTypes ={
    children: PropTypes.node,
}
export default PrivateRoute;