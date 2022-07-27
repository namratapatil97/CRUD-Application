import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {

    const navigate = useNavigate();
    const { userID } = useParams();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobNumber, setMobNumber] = useState();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();

    const [userData, setUserData] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:5000/user/${userID}`)
            .then(async (res) => {
                const rawData = await res.data[0];

                setFirstName(rawData.firstName);
                setLastName(rawData.lastName);
                setMobNumber(rawData.mobNumber);
                setEmail(rawData.email)
                setPassword(rawData.password);

                console.log(rawData);
                setUserData(rawData);
            }).catch(err => console.log(err));
    }, []);

    console.log(userData);

    const UpdateHandler = (e) => {
        e.preventDefault();
        const Data = {
            firstName,
            lastName,
            mobNumber,
            email,
            password
        }
        console.log(Data);
        axios.put(`http://localhost:5000/user/${userID}`, Data)
            .then(res => {
                alert("User Updated Successfully");
                navigate("/home");
            }).catch(err => {
                alert(err);
            })

    }


    return (
        <>
            <div className='container'>
                <div className='row'>
                    <form onSubmit={UpdateHandler} className="row g-2">
                        <div className="col-md-6">
                            <label className="form-label">First Name</label>
                            <input type="text" className="form-control" name="fname" placeholder='Enter first name' onChange={e => setFirstName(e.target.value)} value={firstName} required />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Last Name</label>
                            <input type="text" className="form-control" name="lname" placeholder='Enter last name' onChange={e => setLastName(e.target.value)} value={lastName} required />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Mobile No</label>
                            <input type="number" className="form-control" name="mobno" placeholder='Enter number' onChange={e => setMobNumber(e.target.value)} value={mobNumber} />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Email Id</label>
                            <input type="email" className="form-control" name="email" placeholder='Enter email' onChange={e => setEmail(e.target.value)} value={email} />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" placeholder='Enter password' onChange={e => setPassword(e.target.value)} value={password} />
                        </div>



                        <div className=''>
                            <button type="submit" className="btn btn-outline-info mt-2">Update</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
}
export default Edit;