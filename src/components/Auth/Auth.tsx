import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

const Auth = ({ children }: PropsWithChildren) => {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/" />
    }

    return children;
}

export default Auth