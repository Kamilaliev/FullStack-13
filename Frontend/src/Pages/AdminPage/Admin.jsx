import React, { useEffect, useState } from 'react'
 import { useFormik } from 'formik';
 import axios from "axios"
 import * as Yup from "yup";
 import Table from 'react-bootstrap/Table'; 

function Admin() {
    let [plants,setPlants]= useState([])
    
    async function getAllPlants() {
        let res = await axios.get("http://localhost:3000/plants")
        setPlants(res.data);
        
    }
    useEffect(()=>{
        getAllPlants()
    },[])
    const formik = useFormik({
     initialValues: {
       title: '',
       image: '',
       price: '',
     },
     validationSchema: Yup.object({
            title: Yup.string().min(5).max(60).required(),
            image: Yup.string().url().required(),
            price: Yup.number().min(1).max(1000).required()
     }),
     onSubmit: async(values,action) => {
       let res = await axios.post("http://localhost:3000/plants",values)
       setPlants([...plants,values])
       action.resetForm()
     },
   });
  async function handleDelete(id){
      let filtered = plants.filter(x=>x._id !== id)
      await axios.delete(`http://localhost:3000/plants/${id}`)
        setPlants(filtered)
   }
  return (
    <div className='container'>
    <form onSubmit={formik.handleSubmit}>
       <label htmlFor="title">Title</label>
       <input
         id="title"
         name="title"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.title}
       />
       {formik.touched.title && formik.errors.title ? <div>{formik.errors.title}</div> : null}
       <label htmlFor="image">Image</label>
       <input
         id="image"
         name="image"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.image}
       />
       {formik.touched.image && formik.errors.image ? <div>{formik.errors.image}</div> : null}
       <label htmlFor="price">Price</label>
       <input
         id="price"
         name="price"
         type="number"
         onChange={formik.handleChange}
         value={formik.values.price}
       />
       {formik.touched.price && formik.errors.price ? <div>{formik.errors.price}</div> : null}
       <button type="submit" className=' btn btn-primary'>Submit</button>
     </form>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Image</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
            plants.map((plant)=>{
                return<tr key={plant._id}>
          <td>{plant.title}</td>
          <td><img src={plant.image} alt="" /></td>
          <td>{plant.price}</td>
          <td><button className='btn btn-danger' onClick={()=>handleDelete(plant._id)}>Delete</button></td>
        </tr>
            })
        }

        
      </tbody>
    </Table>
     </div>
  )
}

export default Admin
