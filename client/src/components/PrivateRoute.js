import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const PrivateRoute = ({ role, component: Component }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user || user.role !== role) {
        return <Navigate to="/" />;
    }

    return <Component />;
};

export default PrivateRoute;