import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

const MyAppoinments = () => {

    const contexValue = useContext(authContext);
    console.log(contexValue)

    return (
        <div>
            my appoinmemnts
        </div>
    );
};

export default MyAppoinments;