import React from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import ApartmentInfo from '../components/ApartmentInfo'
import Promo from '../components/Promo'
import Feature from '../components/Feature'
import CommunityInfo from '../components/CommunityInfo'
import Footer from '../components/Footer'

const Home = () => {
    const aptInfoTitle = 'Apartments in Ellicott City, MD';
    const aptInfoSubTitle='Apartments near Baltimore'
  return (
    <div className='home'>
      <Header />
      <Navigation active='home'/>
      <Hero />
      <ApartmentInfo title={aptInfoTitle} subTitle={aptInfoSubTitle}/>
      <Promo />
      <section className="features">
        <Feature url="https://images.pexels.com/photos/205078/pexels-photo-205078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="feature image"
        title='Apartments Features & Amenities'
        text='Coming home has never felt so good. With your My Apartment, you’ll have a fully updated, contemporary living environment with features and amenities you will love.'
        btnText='View Features & Amenities' />
        <Feature url="https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title='My Apartment Floorplans'
        text='Find the style that matches your needs. Choose from one or two-bedroom apartments for rent in Ellicott City and find a floorplan style that will make you feel right at home.'
        btnText='View Available Floor Plans'/>
      </section>
      <CommunityInfo />
      <Footer />
    </div>
  )
}


export default Home
