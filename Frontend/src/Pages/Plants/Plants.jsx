import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { FaBasketShopping } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import "./plants.css"
import { BasketContext } from '../../Context/BasketContext';
import { Link } from 'react-router-dom';

function Plants() {
    let [plants, setPlants] =useState([])
    let [original,setOriginal] = useState([])
    let {basket, setBasket} = useContext(BasketContext)
    async function getAllPlants() {
        let res = await axios.get("http://localhost:3000/plants")
        setPlants(res.data)
        setOriginal(res.data)
        
    }
    useEffect(()=>{
        getAllPlants()
    },[])

    function handleSeach(searchValue){
        let filtered = original.filter(x=>x.title.toLowerCase().trim().includes(searchValue.toLowerCase().trim()))
        setPlants(filtered)
    }

    function handleSelect(selectValue){
        let filtered;
        switch (selectValue){
            case "low":
                filtered = [...original].sort((a,b)=>a.price - b.price)
                break;
                case "high":
                filtered = [...original].sort((a,b)=>b.price - a.price)
                break;
                case "a-z":
                filtered = [...original].sort((a,b)=>a.title.localeCompare(b.title) )
                break;
                case "z-a":
                filtered = [...original].sort((a,b)=>b.title.localeCompare(a.title) )
                break;
                case "all":
                    filtered = [...original]
                    break;
                    default: filtered= [...original]
                    break
        }
        setPlants(filtered)
    }
    function handleAddBasket(plant){
            let finded= basket.find(x=>x._id === plant._id)
            if(finded){
                alert("Added")
            }
            else{
                    setBasket([...basket,plant])
            }

    }
  return (
   <div className="plants">
    <h3>
        OUR PRODUCTS
    </h3>
    <div className="actions">
        <label htmlFor="search"></label>
        <input type="text" name="search" id="search"  placeholder='Search' onChange={(e)=>handleSeach(e.target.value)}/>
        <div className="sorts">
            <div className="sort">
                <button value = "low" onClick={(e)=>handleSelect(e.target.value)} className='sort-btn'>Low</button>
            </div>
                <div className="sort">
                <button value = "high" onClick={(e)=>handleSelect(e.target.value)} className='sort-btn'>High</button>
            </div>
                <div className="sort">
                <button value = "a-z" onClick={(e)=>handleSelect(e.target.value)} className='sort-btn'>A-Z</button>
            </div>
               <div className="sort">
                <button value = "z-a" onClick={(e)=>handleSelect(e.target.value)} className='sort-btn'>Z-A</button>
            </div>
                <div className="sort">
                <button value = "all" onClick={(e)=>handleSelect(e.target.value)}className='sort-btn'>All</button>
            </div>
        </div>
    </div>
    <div className="products">
            {
                plants.map((plant)=>{
                    return <div className="product" key={plant._id}>
                        <img src={plant.image} alt="" />
                        <h4>{plant.title}</h4>
                        <p>${plant.price}</p>
                        <div className="cart-buttons">
                            <button className='basket-icon' onClick={()=>handleAddBasket(plant)}><FaBasketShopping /></button>
                        <Link to= {`/detail/${plant._id}`}><button className='detail-icon'><FaInfoCircle /></button></Link>
                        </div>
                    </div>
                })
            }
    </div>
   </div>
  )
}

export default Plants
