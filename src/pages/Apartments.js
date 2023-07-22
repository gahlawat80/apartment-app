import React, { useState } from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import CommunityInfo from '../components/CommunityInfo'
import Footer from '../components/Footer'
import SearchApartments from '../components/SearchApartments'
import ApartmentCards from '../components/ApartmentCards'
import {apartmentsData} from '../apartments'

const Apartments = () => {
    let [apartmentList,setApartmentList] = useState(apartmentsData)

    const filterApartments = (beds,baths,price)=>{
        let apartmentList = apartmentsData;
        if(beds !='bedsCount' && beds !=''){
            //console.log('apartments data: ',apartmentList)
            apartmentList = apartmentList.filter(apt => apt.bed >= parseInt(beds))            
        }
        if(baths !='bathCount' && baths !=''){
            console.log('Inside bath filter',baths)
            apartmentList = apartmentList.filter(apt => apt.bath >= parseFloat(baths))
        }
        if(price !='maxRent' && price!=''){
            console.log('Inside price filter')
            apartmentList = apartmentList.filter(apt => apt.maxPrice <= parseInt(price))
        }
        
        setApartmentList(apartmentList);
        
    }
  return (
    <section className='apartmentsPage'>
      <Header />
      <Navigation active='apartment'/>
      <SearchApartments filterApartments={filterApartments}/>
      <ApartmentCards apartmentList={apartmentList}/>
      <CommunityInfo />
      <Footer />
    </section>
  )
}

export default Apartments
