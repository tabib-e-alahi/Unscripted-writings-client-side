
import PropTypes from 'prop-types';

import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
// import Loader from '../SharedComponents/Loader';
import { Skeleton } from '@mui/material';


// import Loader from '../SharedComponents/Loader';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation()


    if(loading){
        return <Skeleton  variant="rectangular" width={410} height={400} />
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>

};

PrivateRoute.propTypes = {
    children: PropTypes.node
};

export default PrivateRoute;