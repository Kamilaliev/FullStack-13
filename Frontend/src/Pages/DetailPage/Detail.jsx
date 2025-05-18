import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import "./detail.css"

function Detail() {
    let {id}= useParams()
    let [plants,setPlants]=useState([])

    async function getPlant() {
        let res=  await axios.get(`http://localhost:3000/plants/${id}`)
        setPlants(res.data)
        
    }
    useEffect(()=>{
        getPlant()
    },[])
  return (
   <Card className="bg-dark text-white detail-card container    ">
      <Card.Img src={plants.image} alt="Card image" className='detail-img' />
      <Card.ImgOverlay className='detail-text'>
        
        <Card.Text >
          {plants.title}
        </Card.Text>
        <Card.Text>{plants.price}$</Card.Text>
        <Link to="/"><button className='btn btn-warning'> Back</button></Link>
      </Card.ImgOverlay>
    </Card>
  )
}

export default Detail
