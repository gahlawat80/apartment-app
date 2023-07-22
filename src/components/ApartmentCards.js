import React from 'react'
import './styles/apartmentCards.css'
import ApartmentCard from './ApartmentCard';



const ApartmentCards = ({apartmentList}) => {
  return (
    <section className='apartmentCards'>
        {apartmentList.map(card=>{
            const {id,img,bed,bath,minPrice,maxPrice} = card;
            return <ApartmentCard key={id} img={img} beds={bed} baths={bath} minPrice={minPrice} maxPrice={maxPrice}/>
        })}
      
    </section>
  )
}

export default ApartmentCards
