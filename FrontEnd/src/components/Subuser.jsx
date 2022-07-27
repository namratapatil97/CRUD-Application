import React from "react";
import { useNavigate } from "react-router-dom";

const Subuser = () => {

    const navigate = useNavigate();
    return(
        <>
        <div>
            <button onClick={() => navigate("/dashboard")}>Back</button>
        </div>
        </>
    );
}
export default Subuser;