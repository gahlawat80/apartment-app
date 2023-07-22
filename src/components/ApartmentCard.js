import React from 'react'

const ApartmentCard = ({img,beds,baths,minPrice,maxPrice}) => { 
  return (
    <div className="apartmentCard">
        <img src={img} alt="aparment image" />
        <div className="aptCardInfo">
            <div className="aptInfo_bedBath">
                <span>{beds} Beds</span>,
                <span>{baths} Baths</span>
            </div>
            <div className="aptInfo_price">
                <span>${minPrice}</span>
                -
                <span>${maxPrice}</span>
            </div>
        </div>
        <div className="checkAvailablity">
            <a href="#">(410) 111-0000</a>
            <button>Check Availability</button>
        </div>
      </div>
  )
}

export default ApartmentCard
