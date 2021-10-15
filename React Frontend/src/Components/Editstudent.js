import axios from 'axios';
import React,{useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router'
import { NavLink } from 'react-router-dom';

const Editstudent = () => {


    const [state, setstate] = useState({
        firstname: "",
        lastname: "",
        age: "",
        branch: ""
    })

    const history = useHistory();
    const {id} = useParams();


    useEffect(()=>{

        fetchData()
    },[])

    const fetchData = ()=>{
        
        axios.get(`http://localhost:8000/studentdata/${id}`).then((response)=>{

        setstate(response.data)
        })

    }


    const handler = (e) => {
        setstate({ ...state, [e.target.name]: e.target.value })

        console.log(state)
    }

    const submitevent = (e) => {
        e.preventDefault();

        if (state.branch === "") {
            alert("select your Branch")

        } else {

            axios.put(`http://localhost:8000/studentdata/${id}`, state).then((response) => {

                console.log(response)

                alert("Student Data Updated Successfully")

                history.push("/")
            }).catch((error) => {
                console.log(error)
            })

        }
    }



    return (
        <>

<h3 className="text-center p-3 text-secondary">Update Student Data</h3>
<NavLink exact to="/"><button className="btn btn-primary mx-5">Home Page</button></NavLink>

<form class="d-flex justify-content-center" onSubmit={(e) => submitevent(e)}>

    <div>

        <div class="mb-3">

            <label for="fname" class="form-label" >First Name</label>

            <input type="text" class="form-control" id="fname" name="firstname" value={state.firstname} onChange={(e) => handler(e)} />

        </div>

        <div class="mb-3">

            <label for="lname" class="form-label">Last Name</label>

            <input type="text" class="form-control" id="lname" name="lastname" value={state.lastname} onChange={(e) => handler(e)} />

        </div>

        <div class="mb-3">

            <label for="age" class="form-label">Age</label>
            <input type="number" class="form-control" id="age" name="age" value={state.age} onChange={(e) => handler(e)} />

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


        <button type="submit" class="btn btn-primary">UPDATE STUDENT DATA</button>

    </div>

</form>
            
        </>
    )
}

export default Editstudent
