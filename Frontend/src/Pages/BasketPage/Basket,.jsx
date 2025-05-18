import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BasketContext } from '../../Context/BasketContext';

function Basket() {
    let {basket, setBasket} = useContext(BasketContext)

    function handleDelete(id){
        let filtered = basket.filter(x=>x._id !== id)
        setBasket(filtered)  

    }
  return (
    <>
    <Card style={{ width: '18rem' }} className='container'>
      {
          basket.length > 0 ? basket.map((e)=>{
              return <>
            <Card.Body key={e._id} >
            <Card.Img variant="top" src={e.image}/>
        <Card.Title>{e.image}</Card.Title>
        <Card.Text>
          {e.price}
        </Card.Text>
        <Button variant="danger" onClick={()=>handleDelete(e._id)}>Delete</Button>
      </Card.Body>
            </>
        }):<><h1>BOSDUR!!!</h1></>
      }
    </Card>
    </>
  )
}

export default Basket
