import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Addstudent from './Addstudent';

const Home = () => {

    const [data, setData] = useState([])


    useEffect(()=>{

        fetchData()
    },[data])

    const fetchData = ()=>{
        
        axios.get("http://localhost:8000/studentdata").then((response)=>{

        setData((response.data).reverse())
        })


    }

    const deleteData = (id)=>{
        console.log(id)
        if(window.confirm("Do You want't to Delete this Student?")){
        axios.delete(`http://localhost:8000/studentdata/${id}`).then((response)=>{

        console.log(response)
        })

    }


    }


    return (
        <>

        <Addstudent/>

<h3 className="text-center p-3 text-secondary mt-5">View Student Data</h3>

<table class="table my-5 text-center">
  <thead>
    <tr>
      <th scope="col">Sr. NO.</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Age</th>
      <th scope="col">Branch</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>

{data.map((item, index)=>{ return(

    <tr key={index}>
      <th scope="row">{index + 1}</th>
      <td>{item.firstname}</td>
      <td>{item.lastname}</td>
      <td>{item.age}</td>
      <td>{item.branch}</td>
      <td>
      <NavLink to={`/viewstudent/${item._id}`}><button className="btn btn-primary">View</button></NavLink>
      <NavLink to={`/editstudent/${item._id}`}><button className="btn btn-primary mx-3" >Edit</button></NavLink>
      <button className="btn btn-primary" onClick={()=>deleteData(item._id)}>Delete</button></td>
    </tr> ) })

}


    
    
  </tbody>
</table>
            
        </>
    )
}

export default Home
