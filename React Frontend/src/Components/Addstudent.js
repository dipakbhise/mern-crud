import axios from 'axios'
import React, { useState } from 'react'

const Addstudent = () => {

    const [state, setstate] = useState({
        firstname: "",
        lastname: "",
        age: "",
        branch: ""
    })

    const handler = (e) => {
        setstate({ ...state, [e.target.name]: e.target.value })
    }

    const submitevent = (e) => {
        e.preventDefault();

        if (state.branch === "") {
            alert("select your Branch")

        } else {

            axios.post("http://localhost:8000/studentdata", state).then((response) => {

                console.log(response)

                setstate({
                    firstname: "",
                    lastname: "",
                    age: "",
                    branch: ""
                })
                alert("Data Added Successfully")
            }).catch((error) => {
                console.log(error)
            })

        }
    }


    return (
        <>

            <h3 className="text-center p-3 text-secondary">Add Student Data</h3>

            <form onSubmit={(e) => submitevent(e)}>

                <div class="d-flex justify-content-center">

                    <div className="mx-5">

                        <div class="mb-3">

                            <label for="fname" class="form-label" >First Name</label>

                            <input type="text" class="form-control" id="fname" name="firstname" value={state.firstname} onChange={(e) => handler(e)} />

                        </div>

                        <div class="mb-3">

                            <label for="age" class="form-label">Age</label>
                            <input type="number" class="form-control" id="age" name="age" value={state.age} onChange={(e) => handler(e)} />

                        </div>

                    </div>

                    <div>


                        <div class="mb-3">

                            <label for="lname" class="form-label">Last Name</label>

                            <input type="text" class="form-control" id="lname" name="lastname" value={state.lastname} onChange={(e) => handler(e)} />

                        </div>

                        <div class="mb-3">


                            <label for="branch" class="form-label">Branch</label>

                            <select class="form-select" name="branch" id="branch" value={state.branch} onChange={(e) => handler(e)}>
                                <option value="">Select Your Branch</option>
                                <option value="Food">Food</option>
                                <option value="Civil">Civil</option>
                                <option value="Computer">Computer</option>
                            </select>

                        </div>

                    </div>

                </div>

                <div class="d-flex justify-content-center">

                <button type="submit" class="btn btn-primary">ADD STUDENT</button>
                
                </div>

            </form>

        </>
    )
}

export default Addstudent
