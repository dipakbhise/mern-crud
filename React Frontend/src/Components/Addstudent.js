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

                



            }).catch((error) => {
                console.log(error)
            })

        }






    }


    return (


        <div>

            <form onSubmit={(e) => submitevent(e)}>
                First Name: <input type="text" name="firstname" value={state.firstname} onChange={(e) => handler(e)} />

                Last Name: <input type="text" name="lastname" value={state.lastname} onChange={(e) => handler(e)} />

                Age: <input type="number" name="age" value={state.age} onChange={(e) => handler(e)} />

                Branch: <select name="branch" value={state.branch} onChange={(e) => handler(e)}>
                    <option value="">Select Your Branch</option>
                    <option value="Food">Food</option>
                    <option value="Civil">Civil</option>
                    <option value="Computer">Computer</option>
                </select>


                <button type="submit">Submit</button>


            </form>

        </div>
    )
}

export default Addstudent
