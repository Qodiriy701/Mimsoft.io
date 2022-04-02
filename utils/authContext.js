import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = (props) => {

    const BASE_IMG = "https://mimsoft.uz/images/";
    const BASE_URL = "https://mimsoft.uz/api/v1/";

    const myValue = { BASE_IMG, BASE_URL }

    return (
        <AuthContext.Provider value={myValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;