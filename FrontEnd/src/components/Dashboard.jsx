import axios from "axios";
import React from "react";
import {useState ,useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";


const Dashboard = () => {

    const navigate = useNavigate();
    const {userID} = useParams();
    const[userData, setUserData] = useState({});

  
    useEffect(() => {
      axios.get(`http://localhost:5000/user/${userID}`)
      .then(async(res) => {
          const rawData = await res.data[0];

          console.log(rawData);
          setUserData(rawData);
      }).catch(err => console.log(err));
     } , []);

     console.log(userData);

    return(
        <>
        <p>Hello {userData.firstName}</p>
        <button className="btn btn-success" onClick={() => navigate(`/subuser/${userID}`)}>User</button>
        </>
    );
}
export default Dashboard;