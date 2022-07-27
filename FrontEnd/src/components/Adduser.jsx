import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Adduser = () => {

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobNumber, setMobNumber] = useState();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const SubmitHandler = (e) => {
        e.preventDefault();
        const Data = {
            firstName,
            lastName,
            mobNumber,
            email,
            password
        }
        console.log(Data);
        axios.post("http://localhost:5000/user", Data);
        alert("Data Add Successfully");
        setFirstName("");
        setLastName("");
        setMobNumber("");
        setEmail("");
        setPassword("");
        navigate("/home");
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <form onSubmit={SubmitHandler} className="row g-2">
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
                            <button type="submit" className="btn btn-outline-info mt-2">Submit</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
}
export default Adduser;