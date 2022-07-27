import axios from "axios";
import React from "react";
import {useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";


const Login = () => {

    const navigate = useNavigate();
    // const {userID} = useParams();
    const[useremail, setUserEmail] = useState();
    const[userpassword, setUserPassword] = useState("");

    const[userData, setUserData] = useState([]);

  
    useEffect(() => {
      axios.get(`http://localhost:5000/user`)
      .then(async(res) => {
          const rawData = await res.data;

          console.log(rawData);
          setUserData(rawData);
        
      }).catch(err => console.log(err));
     } , []);

     console.log(userData);

     const loginHandler = (e) => {
        e.preventDefault();
        const rawData = userData.filter(async(data) => {
            const matchPass = await bcrypt.compare(userpassword,data.password)
            if(data.email === useremail && matchPass === true){
                return(
                    {data}
                   )
            }
        })
        console.log(rawData);
        const filterData = rawData[0]._id;
        console.log(filterData);
        alert("login successfully")
        navigate(`/home`);
     }

 
    return(
        <>
         <div className='container'> 
          <div className='row'>
                <form onSubmit={loginHandler} className="row g-2">
                        <div className="col-md-6">
                        <label  className="form-label">Email Id</label>
                        <input type="email" className="form-control" name="email" placeholder='Enter email' onChange={e => setUserEmail(e.target.value)} value={useremail}/>
                        </div>

                        <div className="col-md-6">
                        <label  className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" placeholder='Enter password' onChange={e => setUserPassword(e.target.value)} value={userpassword}/>
                        </div>

                        <div className=''> 
                            <button type="submit" className="btn btn-outline-info mt-2">Login</button>
                        </div>
                        
                </form>
                </div>   
         </div>  
        </>
    );
}
export default Login;