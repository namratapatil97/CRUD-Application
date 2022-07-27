import axios from "axios";
import React from "react";
import {useNavigate, useParams} from 'react-router-dom';

const Delete= () => {

    const navigate = useNavigate();
    const {userID} = useParams();
  
    const deleteHandler = () => {
        axios.delete(`http://localhost:5000/user/${userID}`)
        .then(res => {
            alert(" User Deleted");
            navigate("/home")
        }).catch(err => {
            alert(err);
        })
    }

    return(

        <>
        <div className="container">
        <h1>Are you sure?</h1>
        <button type="button" className="btn btn-danger me-5" onClick={deleteHandler}>Delete</button>
        <button type="button" className="btn btn-danger " onClick={() => navigate("/home")}>Cancel</button>
        </div>
        </>
    );
}

export default Delete ;  