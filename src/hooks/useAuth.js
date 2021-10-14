import { useContext } from "react";
import { AuthContext } from "../pages/AuthProvider/AuthProvider";

const useAuth = () => {
    return useContext(AuthContext)
}

export default useAuth;