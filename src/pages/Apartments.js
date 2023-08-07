import React, { useState,useEffect, useContext} from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import CommunityInfo from '../components/CommunityInfo'
import Footer from '../components/Footer'
import SearchApartments from '../components/SearchApartments'
import ApartmentCards from '../components/ApartmentCards'
//import {apartmentsData} from '../apartments'
import axios from 'axios';
import { appContext } from '../context/appContext'


const Apartments = () => {
    let [apartmentList,setApartmentList] = useState([]);
    const {state} = useContext(appContext);

    const filterApartments = (beds,baths,price)=>{
        //let apartmentList = apartmentsData;
        if(beds !='bedsCount' && beds !=''){
            //console.log('apartments data: ',apartmentList)
            apartmentList = apartmentList.filter(apt => apt.beds >= parseInt(beds))            
        }
        if(baths !='bathCount' && baths !=''){
            console.log('Inside bath filter',baths)
            apartmentList = apartmentList.filter(apt => apt.baths >= parseFloat(baths))
        }
        if(price !='maxRent' && price!=''){
            console.log('Inside price filter')
            apartmentList = apartmentList.filter(apt => apt.maxRent <= parseInt(price))
        }
        
        setApartmentList(apartmentList);        
    }
    const getApartmentsFromApi = async()=>{
      const response = await axios.get('http://localhost:8000/api/v1/apartments',{
        headers:{
          'Authorization': 'Bearer '+ state.authToken
        }
       })
       if(response.status===200){
          setApartmentList(response.data)
       }
    }
    useEffect(()=>{
       getApartmentsFromApi()
    },[])
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
