import React from 'react'
import './styles/apartmentCards.css'
import ApartmentCard from './ApartmentCard';



const ApartmentCards = ({apartmentList}) => {
  return (
    <section className='apartmentCards'>
        {apartmentList.map(card=>{
            const {baths,beds,id,imageUrl,maxRent,minRent} = card;
            return <ApartmentCard key={id} img={imageUrl} beds={beds} baths={baths} minPrice={minRent} maxPrice={maxRent}/>
        })}
      
    </section>
  )
}

export default ApartmentCards
