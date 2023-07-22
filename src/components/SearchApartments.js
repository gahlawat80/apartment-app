import React, { useState } from 'react'
import './styles/searchApartments.css'


const SearchApartments = ({filterApartments}) => {
  const [beds,setBeds] = useState('')
  const [baths,setBaths] = useState('')
  const [price,setPrice] = useState('')

  const filterApartment = ()=>{
    filterApartments(beds,baths,price)
  }
  return (
    <section className='searchApt'>
      <select onChange={(e)=>setBeds(e.target.value)}>
        <option value="bedsCount">How many beds?...</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <select onChange={(e)=>setBaths(e.target.value)}>
        <option value="bathCount">How many baths?...</option>
        <option value="1">1</option>
        <option value="1.5">1.5</option>
        <option value="2">2</option>
        <option value="2.5">2.5</option>
        <option value="3">3</option>
      </select>
      <select onChange={(e)=>setPrice(e.target.value)}>
        <option value="maxRent">Max Rent amount?...</option>
        <option value="1000">1000</option>
        <option value="1500">1500</option>
        <option value="2000">2000</option>
        <option value="2500">2500</option>
        <option value="3000">3000</option>
      </select>
      <button className='apartments_search' onClick={filterApartment}>Search</button>
    </section>  
  )
}

export default SearchApartments
