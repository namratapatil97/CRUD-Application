import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import Filterbar from "./Filterbar";

const Home = () => {
    window.scrollTo(0, 0);
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/user")
            .then(async (res) => {
                const rawData = await res.data;

                console.log(rawData);
                setUserData(rawData);
            }).catch(err => console.log(err));
    }, []);

    // // DeleteUser
    // const deleteUser = (_id) => {
    //     axios.delete(`http://localhost:5000/user/${_id}`);
    //     alert("delete successfully");
    //     window.location.reload();
    // }

    console.log(userData);
    //  console.log(create);

    // // SearchBar
    const searchHolder = "search full data";

    const filterData = (value) => {
        const lowerCaseValue = value.toLowerCase().trim();
        if (!lowerCaseValue) {
            setUserData(userData);
            window.location.reload();
        }
        else {
            const filteredData = userData.filter((item) => {
                return (
                    Object.keys(item).some((key) => {
                        return (
                            item[key].toString().toLowerCase().includes(lowerCaseValue)
                        )
                    })
                )
            })
            setUserData(filteredData);
        }
    }

    const handleChange = (value) => {
        filterData(value);
    }


    return (
        <>
            <div className='container'>

                <Filterbar handleChange={handleChange} searchHolder={searchHolder} />


                <NavLink to="/adduser">
                    <button type="button" className="btn btn-outline-info my-4 ms-5">Add New User</button>
                </NavLink>

                <NavLink to="/login">
                    <button type="button" className="btn btn-outline-info ms-5">Login</button>
                </NavLink>

                <div className='row'>

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Sr.No</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Mob No</th>
                                <th scope="col">Email Id</th>
                                <th scope="col">Edit User</th>
                                <th scope="col">Delete User</th>
                            </tr>

                        </thead>

                        <tbody>
                            {
                                userData.map((row, index) => {
                                    return (
                                        <tr srNo={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{row.firstName}</td>
                                            <td>{row.lastName}</td>
                                            <td>{row.mobNumber}</td>
                                            <td>{row.email}</td>
                                            <td>
                                                <NavLink exact to={`/edit/${row._id}`}>
                                                    <button type="button" className="btn btn-success btn-sm">Edit User</button>
                                                </NavLink>
                                            </td>
                                            <td><NavLink exact to={`/delete/${row._id}`}>
                                                <button type="button" className="btn btn-danger btn-sm">Delete User</button>
                                            </NavLink>
                                            </td>
                                        </tr>

                                    );
                                })
                            }
                        </tbody>

                    </table>

                    {/* <div className="pink">
                        <p>Start</p>
                    </div>
                    <div className="orange">
                        <p>End</p>
                        <button className="btn btn-success" onClick={() => navigate("/demo")}>Demo</button>
                    </div> */}
                </div>
                <select>
                    {
                        userData.map((row) => {
                            return (
                                <option>{row.firstName}</option>
                            )
                        })
                    }
                </select>

                <input type="text" list="option" />
                <datalist id="option">
                    {
                        userData.map((row) => {
                            return (
                                <option>{row.firstName}</option>
                            )
                        })
                    }
                </datalist>


            </div>


        </>
    );
}
export default Home;
